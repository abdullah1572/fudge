import React, { useState, useCallback } from 'react';
import Header from '../header/Header';
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

    const handleSubmit = useCallback(async () => {
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
    })


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
            imageUrlError.urlError = "Image is Required";
            isValid = false;
        }
        setImageUrlError(imageUrlError)
        return isValid;
    }
   const Remove=()=>{
    updateFileUrl('');
   }
    console.log("fileurl", fileUrl)
    const owl_option = {

        margin: 40,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        dotsEach: true,
        loop: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,


            },
            400: {
                items: 1,


            },
            600: {
                items: 1,


            },
            700: {
                items: 1,

            },
        },
    };

    return (
        <>

            <section class="create">
                <ToastContainer/>
                <div class="container">
                    {/* <Header /> */}
                    <div class="row  ptb">
                        <div class="col-sm-12">
                            <div class="inner-head">
                                <h2>Edit Profile</h2>
                            </div>
                        </div>
                    </div>
                    <ValidatorForm className="form-contact">
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="row ptb20">
                                    <div class="col-sm-12">
                                        <div class="inner-inpt">
                                            {/* <form name="form" > */}
                                            {/* <div class="form-group"> */}
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
                                                errorMessages={['DisplayName is required']}
                                            />
                                            {/* </div> */}
                                            <div class="form-group ptb20">
                                                {/* <h5>Bio</h5>
                                                    <textarea class="form-control" name="bio" placeholder="Tell about yourself in a few words" required></textarea>
                                                    <div class="invalid-feedback">
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
                                                    errorMessages={['Name field is required']}
                                                    // id="outlined-multiline-static"
                                                    multiline
                                                    rows={4}


                                                />
                                            </div>
                                            <div class="form-group ptb20">
                                                {/* <h5>Twitter Username</h5>
                                                    <input type="type" class="form-control" name="twitter" placeholder="Enter your twitter username" /> */}

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
                                                    errorMessages={['Description field is required']}
                                                />
                                            </div>
                                            <div class="form-group ptb20">
                                                {/* <h5>Instagram</h5>
                                                    <input type="type" class="form-control" name="instagram" placeholder="Enter your instagram username" /> */}
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
                                                    errorMessages={['Instagram field is required']}
                                                />
                                            </div>
                                            <div class="form-group ptb20">
                                                {/* <h5>Facebook Username</h5>
                                                    <input type="type" class="form-control" name="facebook" placeholder="Enter your facebook username" /> */}
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
                                                    errorMessages={['Twitter field is required']}
                                                />
                                            </div>

                                            <div class="form-group ptb20">
                                                {/* <h5>Telegram Channel</h5>
                                                    <input type="type" class="form-control" name="telegram" placeholder="Enter your telegram username" /> */}
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
                                                    errorMessages={['Twitter field is required']}
                                                />
                                            </div>
                                            <div class="form-group ptb20">
                                                {/* <h5>Email Address</h5>
                                                    <input type="email" class="form-control" email name="email" placeholder="enter your Email Address" required /> */}
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
                                                    validators={['required']}
                                                    errorMessages={['Twitter field is required']}
                                                />
                                            </div>
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <button class="btn-common" type="submit" onClick={handleSubmit}>Save Changes</button>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button class="remove">Cancel</button>
                                                </li>
                                            </ul>
                                            {/* </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="col-sm-4">
                                <div class="inner-cards ptb20 text-center">
                                    <h5>User Image</h5>

                                    <div class="row" >
                                        <div>
                                            <img src="data:image/png;base64,{{base64textString}}" alt="" class="img-show" />
                                        </div>
                                    </div>
                                    <div >
                                        <img src="{{data.profileImage}}" alt="" class="img-show" />
                                    </div>
                                    <ul class="list-inline ptb20">
                                        <li class="list-inline-item">
                                            <div>
                                                <label for="file" class="custom-file-upload btn-common-2">
                                                    Upload Image <i class="fa fa-cloud-upload"></i>
                                                </label>
                                               {Object.keys(imageUrlError).map((key) => { return <p className="inputErrors">{imageUrlError[key]}</p> })}
                                                <input class="form-control" id="file" type="file" onChange={onChange} />
                                    {fileUrl && (<img src={fileUrl}  width="400px" height="400px" />)}
                                            </div>
                                        </li>
                                        <div>
                                            <li class="list-inline-item">
                                                <button class="remove" type="submit" onClick={Remove}>Remove</button>
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

{/* <div class="row">
<div class="col-sm-8">
    <div class="row ptb20">
        <div class="col-sm-12">
            <div class="inner-inpt">
                <form name="form" >
                    <div class="form-group">
                        <h5>Display Name</h5>
                        <input type="text" class="form-control" name="displayName" placeholder="Enter Display Name" required />
                        <div class="invalid-feedback">
                            <div >
                            </div>
                        </div>
                    </div>
                    <div class="form-group ptb20">
                        <h5>Bio</h5>
                        <textarea class="form-control" name="bio" placeholder="Tell about yourself in a few words" required></textarea>
                        <div class="invalid-feedback">
                            <div >
                            </div>
                        </div>
                    </div>
                    <div class="form-group ptb20">
                        <h5>Twitter Username</h5>
                        <input type="type" class="form-control" name="twitter" placeholder="Enter your twitter username" />
                    </div>
                    <div class="form-group ptb20">
                        <h5>Instagram</h5>
                        <input type="type" class="form-control" name="instagram" placeholder="Enter your instagram username" />
                    </div>
                    <div class="form-group ptb20">
                        <h5>Facebook Username</h5>
                        <input type="type" class="form-control" name="facebook" placeholder="Enter your facebook username" />
                    </div>

                    <div class="form-group ptb20">
                        <h5>Telegram Channel</h5>
                        <input type="type" class="form-control" name="telegram" placeholder="Enter your telegram username" />
                    </div>
                    <div class="form-group ptb20">
                        <h5>Email Address</h5>
                        <input type="email" class="form-control" email name="email" placeholder="enter your Email Address" required />
                        <div class="invalid-feedback">
                            <div >
                            </div>
                            <div >
                            </div>
                        </div>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <button class="btn-common" type="submit">Save Changes</button>
                        </li>
                        <li class="list-inline-item">
                            <button class="remove">Cancel</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="col-sm-4">
    <div class="inner-cards ptb20 text-center">
        <h5>User Image</h5>

        <div class="row" >
            <div>
                <img src="data:image/png;base64,{{base64textString}}" alt="" class="img-show" />
            </div>
        </div>
        <div >
            <img src="{{data.profileImage}}" alt="" class="img-show" />
        </div>
        <ul class="list-inline ptb20">
            <li class="list-inline-item">
                <div>
                    <label for="file" class="custom-file-upload btn-common-2">
                        Upload Image <i class="fa fa-cloud-upload"></i>
                    </label>
                    <input class="form-control" id="file" type="file" />
                </div>
            </li>
            <div>
                <li class="list-inline-item">
                    <button class="remove">Remove</button>
                </li>
            </div>
        </ul>
    </div>
</div>
</div> */}