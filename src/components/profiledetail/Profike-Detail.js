import React, { useState,useEffect } from 'react';
import './profiledetail.scss';
import { IpfsStorage } from '../../IPFSStorage/ipfs';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { EditProfile } from '../../services/services';
import { useWeb3React } from '@web3-react/core'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios'
import { useHistory } from "react-router-dom";

import { API_URL } from '../../ApiURL';

import Header from '../header/Header';
const ProfileDetail = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let history = useHistory();
    const { walletAddress } = useParams();
    const {account} = useWeb3React();

    let image = ``;
    const GetUserDetail = async () => {
        // setMainLoader(true)
        axios.post(`${API_URL}/user/getUser`, { walletAddress: walletAddress })
            .then((res) => {
                setAllFormData(res.data.data)
                image = updateFileUrl(res.data.data?.ipfsImageUrl)
                // setMainLoader(false)
            }).catch((err) => {
                return false;
            })
    }


    useEffect(() => {
        GetUserDetail()
        history.push(account)
    }, [walletAddress, account])



    // const userData = useSelector(state => state.CollectionReducer.GetUserData);
    const [fileUrl, updateFileUrl] = useState(image);
    const [allFormData, setAllFormData] = useState({
            displayName:'',
            bio:'', 
            twitterUserName:'',
            instagramUserName:'',
            facebookUserName:'',
            telegramChannel:'', 
            email:'',
    })
    // const handleChange = (event) => {
    //     const { formData } = allFormData;
    //     const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    //     formData[event.target.name] = value;
    //     setAllFormData({ formData });
    // }

    
    const handleChange = (event) => {
        allFormData[event.target.name] = event.target.value;
        setAllFormData({ ...allFormData });
    }

    const handleSubmit = async() => {
        formValidation()
        if(account){
            try{
                // if(allFormData.formData.displayName === userData?.displayName  ){
                //     toast.warning("Fill the Required Fileds",{
                //         position: "top-right",
                //         autoClose: 2000,
                //     })
                //     return
                // }
                    await EditProfile(allFormData, fileUrl,account)
                    toast.success('EditProfile !', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        history.push(`/profile/${account}`)
                }
            
            catch(err){
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

    const Cancel=()=>{
        history.push(`/profile/${account}`)
       }
   const Remove=()=>{
    updateFileUrl('');
    GetUserDetail()
   }

    return (
        <>
            <section className="create">
                <ToastContainer/>
                <div className="container">
                    <Header />
                    <div className="row  ptb">
                        <div className="col-sm-12">
                            <div className="inner-head">
                                <h2>Edit Profile</h2>
                            </div>
                        </div>
                    </div>
                    <ValidatorForm className="form-contact">
                        <div className="row">
                            <div className="col-sm-8 order-md-0 order-1">
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
                                                value={allFormData.displayName}
                                                onChange={handleChange}
                                                variant="outlined"
                                                placeholder="Enter Name"
                                                className="input-fields"
                                                // validators={['required']}
                                                // errorMessages={['Name is required']}
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
                                                    value={allFormData.bio}
                                                    onChange={handleChange}
                                                    placeholder="Enter Your Bio..."
                                                    className="input-fields"
                                                    variant="outlined"
                                                    // validators={['required']}
                                                    // errorMessages={['Bio  is required']}
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
                                                    value={allFormData.twitterUserName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your twitter username"
                                                    className="input-fields"
                                                    variant="outlined"
                                                    // validators={['required']}
                                                    // errorMessages={['Twitter Name is required']}
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
                                                    value={allFormData.instagramUserName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your instagram username"
                                                    className="input-fields"
                                                    variant="outlined"
                                                    // validators={['required']}
                                                    // errorMessages={['Instagram Name is required']}
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
                                                    value={allFormData.facebookUserName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your facebook username"
                                                    className="input-fields"
                                                    variant="outlined"
                                                    // validators={['required']}
                                                    // errorMessages={['Facebook Name is required']}
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
                                                    value={allFormData.telegramChannel}
                                                    onChange={handleChange}
                                                    placeholder="Enter your telegram username"
                                                    className="input-fields"
                                                    variant="outlined"
                                                    // validators={['required']}
                                                    // errorMessages={['Telegram Channel Link is required']}
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
                                                    value={allFormData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your Email Address"
                                                    className="input-fields"
                                                    variant="outlined"
                                                    // validators={['required','isEmail']}
                                                    // errorMessages={['E-mail field is required', 'email is not valid']}
                                                />
                                            </div>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <button className="btn-common" type="submit" onClick={handleSubmit}>Save Changes</button>
                                                </li>
                                                <li className="list-inline-item">
                                                    <button className="remove" type="submit" onClick={Cancel}>Cancel</button>
                                                </li>
                                            </ul>
                                            {/* </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-4 order-md-1 order-0">
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
                                                <input className="form-control" id="file" type="file" onChange={onChange} accept="image/*,image/gif"/>
                                                {fileUrl && (<img src={fileUrl}  className="image-edit-pro" alt=""/>)}
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

