import React, { useState } from 'react';
import './profiledetail.scss';
import { IpfsStorage } from '../../IPFSStorage/ipfs';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { EditProfile } from '../../services/services';
import { useWeb3React } from '@web3-react/core'
import { ToastContainer, toast } from 'react-toastify';
const ProfileDetail = () => {
    const {account} = useWeb3React();
    const [fileUrl, updateFileUrl] = useState(``);
    const [allFormData, setAllFormData] = useState({
        formData: {
            displayName: '', bio: '', twitterUserName: '', instagramUserName: '', facebookUserName: '',
            telegramChannel: '', email: ''
        },
    })
    const handleChange = (event) => {
        const { formData } = allFormData;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        formData[event.target.name] = value;
        setAllFormData({ formData });
    }

    const handleSubmit = async() => {
        formValidation()
        if(account){
            try{
                if(allFormData.formData.displayName ==='' && allFormData.formData.bio ==='' && fileUrl===''){

                    toast.warning("Fill the Required Fileds",{
                        position: "top-right",
                        autoClose: 2000,
                    })
                    return
                }
                    await EditProfile(allFormData.formData, fileUrl,account)
                    toast.success('EditProfile !', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            
            catch(err){
                console.log("err",err)
                toast.error('Profile Not Edit!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }
        else{
            toast.error('Please connect the wallet!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }); 
        }
    }


    async function onChange(e) {
        const file = e.target.files[0]
        IpfsStorage(file).then((res) => {
            updateFileUrl(res)
        });
    }
    const [imageUrlError, setImageUrlError] = useState({});
    const formValidation = () => {
        const imageUrlError = {};
        let isValid = true;
        if (fileUrl === ``) {
            imageUrlError.urlError = "Profile Image is Required";
            isValid = false;
        }
        setImageUrlError(imageUrlError)
        return isValid;
    }
   const Remove=()=>{
    updateFileUrl('');
   }

    return (
        <>
            <section className="create">
                <ToastContainer/>
                <div className="container">
                    {/* <Header /> */}
                    <div className="row  ptb">
                        <div className="col-sm-12">
                            <div className="inner-head">
                                <h2>Edit Profile</h2>
                            </div>
                        </div>
                    </div>
                    <ValidatorForm className="form-contact">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="row ptb20">
                                    <div className="col-sm-12">
                                        <div className="inner-inpt">
                                            {/* <form name="form" > */}
                                            {/* <div className="form-group"> */}
                                            <label For="name">Display Name</label>
                                            <TextValidator
                                                fullWidth
                                                type="text"
                                                name="displayName"
                                                autoComplet="off"
                                                value={allFormData.formData.displayName}
                                                onChange={handleChange}
                                                variant="outlined"
                                                placeholder="Enter Name"
                                                className="input-fields"
                                                validators={['required']}
                                                errorMessages={['Name is required']}
                                            />
                                            {/* </div> */}
                                            <div className="form-group ptb20">
                                                {/* <h5>Bio</h5>
                                                    <textarea className="form-control" name="bio" placeholder="Tell about yourself in a few words" required></textarea>
                                                    <div className="invalid-feedback">
                                                        <div >
                                                        </div>
                                                    </div> */}
                                                <label for="exampleInputdec">Bio</label>
                                                <TextValidator
                                                    fullWidth
                                                    type="text"
                                                    name="bio"
                                                    value={allFormData.formData.bio}
                                                    onChange={handleChange}
                                                    placeholder="Enter Your Bio..."
                                                    className="input-fields"
                                                    variant="outlined"
                                                    validators={['required']}
                                                    errorMessages={['Bio  is required']}
                                                    // id="outlined-multiline-static"
                                                    multiline
                                                    rows={4}


                                                />
                                            </div>
                                            <div className="form-group ptb20">
                                                {/* <h5>Twitter Username</h5>
                                                    <input type="type" className="form-control" name="twitter" placeholder="Enter your twitter username" /> */}

                                                <label for="exampleInputdec">Twitter Username</label>
                                                <TextValidator
                                                    fullWidth
                                                    type="text"
                                                    name="twitterUserName"
                                                    value={allFormData.formData.twitterUserName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your twitter username"
                                                    className="input-fields"
                                                    variant="outlined"
                                                    validators={['required']}
                                                    errorMessages={['Twitter Name is required']}
                                                />
                                            </div>
                                            <div className="form-group ptb20">
                                                {/* <h5>Instagram</h5>
                                                    <input type="type" className="form-control" name="instagram" placeholder="Enter your instagram username" /> */}
                                                <label for="exampleInputdec">Instagram Username</label>
                                                <TextValidator
                                                    fullWidth
                                                    type="text"
                                                    name="instagramUserName"
                                                    value={allFormData.formData.instagramUserName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your instagram username"
                                                    className="input-fields"
                                                    variant="outlined"
                                                    validators={['required']}
                                                    errorMessages={['Instagram Name is required']}
                                                />
                                            </div>
                                            <div className="form-group ptb20">
                                                {/* <h5>Facebook Username</h5>
                                                    <input type="type" className="form-control" name="facebook" placeholder="Enter your facebook username" /> */}
                                                <label for="exampleInputdec">Facebook Username</label>
                                                <TextValidator
                                                    fullWidth
                                                    type="text"
                                                    name="facebookUserName"
                                                    value={allFormData.formData.facebookUserName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your facebook username"
                                                    className="input-fields"
                                                    variant="outlined"
                                                    validators={['required']}
                                                    errorMessages={['Facebook Name is required']}
                                                />
                                            </div>

                                            <div className="form-group ptb20">
                                                {/* <h5>Telegram Channel</h5>
                                                    <input type="type" className="form-control" name="telegram" placeholder="Enter your telegram username" /> */}
                                                <label for="exampleInputdec">Telegram Channel</label>
                                                <TextValidator
                                                    fullWidth
                                                    type="text"
                                                    name="telegramChannel"
                                                    value={allFormData.formData.telegramChannel}
                                                    onChange={handleChange}
                                                    placeholder="Enter your telegram username"
                                                    className="input-fields"
                                                    variant="outlined"
                                                    validators={['required']}
                                                    errorMessages={['Telegram Channel Link is required']}
                                                />
                                            </div>
                                            <div className="form-group ptb20">
                                                {/* <h5>Email Address</h5>
                                                    <input type="email" className="form-control" email name="email" placeholder="enter your Email Address" required /> */}
                                                <label for="exampleInputdec">Email Address</label>
                                                <TextValidator
                                                    fullWidth
                                                    type="text"
                                                    name="email"
                                                    value={allFormData.formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your Email Address"
                                                    className="input-fields"
                                                    variant="outlined"
                                                    validators={['required','isEmail']}
                                                    errorMessages={['E-mail field is required', 'email is not valid']}
                                                />
                                            </div>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <button className="btn-common" type="submit" onClick={handleSubmit}>Save Changes</button>
                                                </li>
                                                <li className="list-inline-item">
                                                    <button className="remove">Cancel</button>
                                                </li>
                                            </ul>
                                            {/* </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-4">
                                <div className="inner-cards ptb20 text-center">
                                    <h5>User Image</h5>

                                    <div className="row" >
                                        <div>
                                            <img src="data:image/png;base64,{{base64textString}}" alt="" className="img-show" />
                                        </div>
                                    </div>
                                    <div >
                                        <img src="{{data.profileImage}}" alt="" className="img-show" />
                                    </div>
                                    <ul className="list-inline ptb20">
                                        <li className="list-inline-item">
                                            <div>
                                                <label for="file" className="custom-file-upload btn-common-2">
                                                    Upload Image <i className="fa fa-cloud-upload"></i>
                                                </label>
                                               {Object.keys(imageUrlError).map((key) => { return <p className="inputErrors">{imageUrlError[key]}</p> })}
                                                <input className="form-control" id="file" type="file" onChange={onChange} />
                                    {fileUrl && (<img src={fileUrl}  width="400px" height="400px" alt=""/>)}
                                            </div>
                                        </li>
                                        <div>
                                            <li className="list-inline-item">
                                                <button className="remove" type="submit" onClick={Remove}>Remove</button>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ValidatorForm>
                </div>
            </section>


        </>
    )
}

export default ProfileDetail;

