import React, { useState, useCallback } from 'react';
import Header from '../header/Header';
import { IpfsStorage } from '../../IPFSStorage/ipfs'
import { useWeb3React } from '@web3-react/core';
import { addToken,addTokenAndPutOnSale } from '../../services/services';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { MintPro } from '../../hooks/Mint';
import {  toast } from 'react-toastify';
import environment from '../../utils/Environment';
import './create.scss';
const Create = () => {
    const {account}=useWeb3React();
    const [dropDown, setDropDown] = useState('Art');
    const [fileUrl, updateFileUrl] = useState(``);
    const { mintPro } = MintPro(fileUrl);
    const [allFormData, setAllFormData] = useState({
        formData: { price :'', userName: '', description: '',royalties:'', putOnMarketplace:false},
    })
    const handleChange = (event) => {
        const { formData } = allFormData;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        formData[event.target.name] = value;
        setAllFormData({ formData });
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


    const Item = [
        {
            itemList: 'Art'
        },
        {
            itemList: 'Photography',
        },
        {
            itemList: 'Games',
        },
        {
            itemList: 'Sports',
        },
        {
            itemList: 'Memes',
        }
    ] 
    

    console.log("file url",fileUrl)
    const handleSubmit = useCallback(async () => {
        formValidation();
        if (account) {
                if (allFormData.formData.userName === "" && allFormData.formData.description === "" && allFormData.formData.price==='' && fileUrl === '') {
                    toast.warning('Fill the required Fileds', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    return
                }
           
                try {
                    if (allFormData.formData.putOnMarketplace) {
                        const tokenId = await mintPro();
                        await addTokenAndPutOnSale(allFormData.formData,environment.BlueMoonPro, account, fileUrl, tokenId,dropDown);
                        toast.success('Created Item Successfully', {
                            position: "top-right",
                            autoClose: 2000,
                        });
                    
                    }
                    else{
                        const tokenId = await mintPro();
                        await addToken(allFormData.formData,  environment.BlueMoonPro, account, fileUrl, tokenId,dropDown);
                        toast.success('Created Item Successfully', {
                            position: "top-right",
                            autoClose: 2000,
                        });

                    }
                     
                }
                catch (err) {
                    console.log("Not Created", err)
                    toast.error('Not Created', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                }
            }

            else {
                toast.error('Please Connect the wallet', {
                    position: "top-right",
                    autoClose: 2000,
                });
        }
    })
    async function onChange(e) {
        const file = e.target.files[0]
        IpfsStorage(file).then((res) => {
            updateFileUrl(res)
        });
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
                <div class="container">
                    {/* <Header /> */}
                    <div class="row  ptb">
                        <div class="col-sm-12">
                            <div class="inner-head">
                                <h2>Create Item</h2>
                            </div>
                        </div>
                    </div>
                    <ValidatorForm className="form-contact">
                        <div class="row">
                            <div className="col-md-12 p-0">
                                <div class="form-group">
                                    <input
                                        className="input-fields" name="first" type="file" onChange={onChange} />
                                    {Object.keys(imageUrlError).map((key) => { return <p className="inputErrors">{imageUrlError[key]}</p> })}
                                    {fileUrl && (<img src={fileUrl} style={{ marginTop: 20 }} width="400px" height="400px" />)}
                                </div>
                            </div>
                            <div className=" col-lg-6 col-sm-12">
                                <div class="form-group main-text-feild-head">
                                    <label For="name">Price</label>
                                    <TextValidator
                                        fullWidth
                                        type="text"
                                        name="price"
                                        autoComplet="off"
                                        value={allFormData.formData.price}
                                        onChange={handleChange}
                                        variant="outlined"
                                        placeholder="Enter Price"
                                        className="input-fields"
                                        validators={['required']}
                                        errorMessages={['Price is required']}
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="exampleInputdec">Name</label>
                                    <TextValidator
                                        fullWidth
                                        type="text"
                                        name="userName"
                                        value={allFormData.formData.userName}
                                        onChange={handleChange}
                                        placeholder="Enter Your Name..."
                                        className="input-fields"
                                        variant="outlined"
                                        validators={['required']}
                                        errorMessages={['Name field is required']}
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="exampleInputdec">Description</label>
                                    <TextValidator
                                        fullWidth
                                        type="text"
                                        name="description"
                                        value={allFormData.formData.description}
                                        onChange={handleChange}
                                        placeholder="Enter Your Description..."
                                        className="input-fields"
                                        variant="outlined"
                                        validators={['required']}
                                        errorMessages={['Description field is required']}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                            <div class="form-group">
                                <div class="inner-drop">
                                    <h5>Categories</h5>
                                    <div className="recently-add">
                                                    <div className=" drop-recent">
                                                        <button className="button-discover-add" type="button" id="dropdownMenuButton " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <p>{dropDown}</p>
                                                            {/* <img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid main-same-img" /> */}
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            {Item.map((elem) => {
                                                                return (
                                                                    <a className="dropdown-item" onClick={() => setDropDown(elem.itemList)}>{elem.itemList}</a>
                                                                )
                                                            }
                                                            )}  
                                                        </div>
                                                    </div>
                                                </div>
                                    {/* <div class="dropdown"> */}
                                        {/* <button class="dropdown-toggle" type="button" id="dropdownMenuButton"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Art
                                        </button> */}
                                      
                                            {/* <a class="dropdown-item" href="#">
                                                Photography
                                            </a>
                                            <a class="dropdown-item" href="#">Games
                                            </a>
                                            <a class="dropdown-item" href="#">Sports
                                            </a>
                                            <a class="dropdown-item" href="#">Memes
                                            </a> */}
                                        {/* </div> */}
                                  
                                </div>
                            </div>
                            </div>
                            <div className=" col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="exampleInputdec">Royalties</label>
                                    <TextValidator
                                        fullWidth
                                        type="number"
                                        name="royalties"
                                        value={allFormData.formData.royalties}
                                        onChange={handleChange}
                                        placeholder="Enter Your Royalties..."
                                        className="input-fields"
                                        variant="outlined"
                                        validators={['required']}
                                        errorMessages={['Royalties field is required']}
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-6 col-sm-12">
                                <div className="right-swit">
                                        <span> Put on marketplace </span>
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" name="putOnMarketplace" checked={allFormData.formData.putOnMarketplace} onChange={handleChange} class="custom-control-input" id="customSwitch2" />
                                        <label class="custom-control-label" for="customSwitch2"></label>
                                    </div>
                                </div>
                            </div>
                            
                            <button class="btn-common" type="submit" onClick={handleSubmit} >Create NFT</button>
                        </div>
                    </ValidatorForm>
                </div>
            </section>

        </>
    )
}

export default Create;




// <div class="col-sm-9">

// <h5>Upload File</h5>
// <div class="inner-content text-center">

//         <div class="row pt160" >
//             <div class="col-sm-12">
//                 <h4 class="grey ptb20">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</h4>
//                 <label for="file" class="custom-file-upload btn-common-2">
//                     UPLOAD FILE <i class="fa fa-cloud-upload"></i>
//                 </label>
//                 <input class="form-control" id="file"  type="file"  />
//             </div>
//         </div>    
//         <div class="row">
//             <div class="col-sm-12">
//                 <img src="" alt="" class="img-show"/>
//             </div>
//         </div>  
// </div>

// <div class="row ptb20">
//     <div class="col-sm-9">
//         <div class="inner-inpt">

//                 <div class="form-group">
//                     <div class="inner-logo-b">
//                         <h5>Price</h5>
//                         <input type="number" class="form-control" id="exampleFormControlInput1"
//                              name="price"
//                             placeholder=" Enter price for this NFT "/>
//                         <img src="../../assets/bnb-logo.png" alt="" class="img-fluid"/>
//                     </div>
//                 </div>
//                 <div class="form-group ptb20">
//                     <h5>Name</h5>
//                     <input type="name" class="form-control" id="exampleFormControlInput1"
//                      name="title"
//                         placeholder="Enter the name for this NFT "/>
//                 </div>

//                 <div class="form-group ptb20">
//                     <h5>Description</h5>
//                     <textarea class="form-control" id="exampleFormControlTextarea1"
//                         name="description"
//                         placeholder="Enter a few lines about this NFT"></textarea>
//                 </div>
//                 <div class="form-group">
//                     <div class="inner-drop">
//                         <h5>Categories</h5>
{/* <select name="" id="" class="form-control"  name="categoryId" >
                            <option value="34"> </option>
                        </select> */}
//                          <div class="dropdown">
//                             <button class="dropdown-toggle" type="button" id="dropdownMenuButton"
//                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 Art
//                             </button>
//                             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                 <a class="dropdown-item" href="#">
//                                     Photography
//                                 </a>
//                                 <a class="dropdown-item" href="#">Games
//                                 </a>
//                                 <a class="dropdown-item" href="#">Sports
//                                 </a>
//                                 <a class="dropdown-item" href="#">Memes
//                                 </a>
//                             </div>
//                         </div> 
//                     </div>
//                 </div>
//                 <div class="form-group ptb20">
//                     <h5>Royalties</h5>
//                     <input type="number" class="form-control" id="exampleFormControlInput1"
//                         name="royalties"
//                         placeholder="Enter the percentage of royalties %" />
//                 </div>

//                 <div class="switch ptb20">
//                     Put on marketplace &nbsp;&nbsp;&nbsp;
//                     <label class="switch">
//                         <input type="checkbox" name="forSale"/>
//                         <span class="slider round"></span>
//                     </label>
//                 </div>
//                 <ul class="list-inline ptb20">
//                     <li class="list-inline-item">
//                         <button class="btn-common" type="submit" >Create NFT</button>
//                     </li>
//                 </ul>
//         </div>
//     </div>
// </div>
// </div>

// <div class="col-sm-3 d-none d-sm-block">
// <h5>Preview</h5>
{/* <div routerLink="/art-work" class="inner-card">
    <img src="../../assets/pegify/landing-assets/nft-one.png" alt=""
        class="img-fluid mb10"/>

    <h4>MAN X MACHINE</h4>
    <h6 class="clr">0.70 BNB</h6>
    <hr/>
    <ul class="list-inline">
        <li class="list-inline-item">
            <img src="../../assets/pegify/landing-assets/artist-image-one.png"
                alt="" class="img-fluid"/>
            &nbsp;
            <span class="grey">Baylee</span>
        </li>
    </ul>
</div>  */}

// <div routerLink="/art-work" class="inner-card">
//     <div class="inner-tile">
//         <h5 class="grey">Upload file to preview your NFT</h5>
//     </div>
//     <div class="border1"></div>
//     <div class="border2"></div>
//     <hr/>
//     <ul class="list-inline">
//         <li class="list-inline-item">
//             <img src="pegify/landing-assets/user-image.png" alt="" class="img-fluid"/>
//             &nbsp;
//             <span class="grey">Baylee</span>
//         </li>
//     </ul>
// </div>
// </div>