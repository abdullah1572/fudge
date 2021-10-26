import React, { useState, useCallback } from 'react';
import { IpfsStorage } from '../../IPFSStorage/ipfs'
import { useWeb3React } from '@web3-react/core';
import { addToken, addTokenAndPutOnSale } from '../../services/services';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { MintPro } from '../../hooks/Mint';
import { toast } from 'react-toastify';
import environment from '../../utils/Environment';
import { ApproveForAll } from '../../hooks/FudgeBuyAndSale';
import { Sale } from '../../hooks/FudgeBuyAndSale';
import './create.scss';
import Header from '../header/Header';
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { GetAllNftsAndDetails } from '../../redux/action';
import { useDispatch } from 'react-redux'
import MyLoader from '../Loader/MyLoader';

const Create = () => {

    const dispatch=useDispatch();
    const { account,active } = useWeb3React();
    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [dropDown, setDropDown] = useState('Choose Category');
    const [fudgeDropDown, setFudgeDropDown] = useState('FUDGE');
    const [fileUrl, updateFileUrl] = useState(``);
    const { mintPro } = MintPro(fileUrl);
    const [allFormData, setAllFormData] = useState({
        formData: { price: '', nftName: '', description: '', royalties: '', putOnMarketplace: false },
    })
    const handleChange = (e) => {
        const { formData } = allFormData;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        formData[e.target.name] = value;
        setAllFormData({ formData });
    }
    
    const DropDownChange=(e)=>{
        
    }
    const [imageUrlError, setImageUrlError] = useState({});
    const [chooseCategory, setChooseCategory] = useState({});
    const formValidation = useCallback(() => {

        const imageUrlError = {};
        const chooseCategory = {};
        let isValid = true;
        if (fileUrl === ``) {
            imageUrlError.urlError = "Image is Required";
            isValid = false;
        }
        if (dropDown === 'Choose Category') {
            chooseCategory.category = "Category is Required";
            isValid = false;
        }
        setImageUrlError(imageUrlError)
        setChooseCategory(chooseCategory)
        return isValid;
    }, [fileUrl, dropDown])



    // const [tokenId, setTokenId] = useState('')
    const { ApproveAllTokenID } = ApproveForAll()
    const { FudgeSale } = Sale()
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

    const FudgeToken = [
        {
            token: 'BNB',
            logo: '/pegify/bnb-logo.png'
        },
        {
            token: 'FUDGE',
            logo: '/pegify/fudge-logo1.png'
        },
    ]
    // src/assets/bnb-logo.png
    const handleSubmit = useCallback(async () => {
        formValidation();
        if (account) {
            if (allFormData.formData.nftName === '' || allFormData.formData.description === '' || allFormData.formData.price === '' || fileUrl === ''
                || dropDown === 'Choose Category' || allFormData.formData.royalties === '') {
                toast.warning('Fill the required Fileds', {
                    position: "top-right",
                    autoClose: 2000,
                });
                return
            }
            if (allFormData.formData.price === '0') {
                toast.warning('Price Greater than 0', {
                    position: "top-right",
                    autoClose: 2000,
                });
                return
            }
            if (allFormData.formData.royalties === '0') {
                toast.warning('Royalties Greater than 0', {
                    position: "top-right",
                    autoClose: 2000,
                });
                return
            }

            try {
                if (allFormData.formData.putOnMarketplace) {
                    const getPrice = allFormData.formData.price
                    setOpen(true)
                    const tokenID = await mintPro();
                    if (tokenID) {
                        setOpen(false)
                    }
                    setOpen(true)
                    const approve = await ApproveAllTokenID();
                    //  console.log("approve",approve.status)
                    if (approve.status) {
                        setOpen(false)
                    }
                    setOpen(true)
                    const sale = await FudgeSale(tokenID, getPrice);
                    //  console.log("sale======",sale)
                    if (sale.status) {
                        setOpen(false)
                        await addTokenAndPutOnSale(allFormData.formData, environment.BlueMoonPro, account, fileUrl, tokenID, dropDown,fudgeDropDown);
                        toast.success('Created Item Successfully', {
                            position: "top-right",
                            autoClose: 2000,
                        });
                        dispatch(GetAllNftsAndDetails());
                    }

                }
                else {
                    const tokenId = await mintPro();
                    await addToken(allFormData.formData, environment.BlueMoonPro, account, fileUrl, tokenId, dropDown,fudgeDropDown);
                    toast.success('Created Item Successfully', {
                        position: "top-right",
                        autoClose: 2000,
                    });

                }

            }
            catch (err) {
                setOpen(false)
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
    }, [ApproveAllTokenID, FudgeSale, account, allFormData.formData, dropDown, fileUrl, formValidation, mintPro])

    async function onChange(e) {
        const file = e.target.files[0]
        setToggle(true)
        IpfsStorage(file).then((res) => {
            updateFileUrl(res)
            // setOpen(false)
        });
    }


    console.log("allFormData.formData.royalties", allFormData.formData.royalties)

    return (
        <>
        <Backdrop className="loader" sx={{ color: '#fff' }} open={open}> <h1>Please Wait. Transaction in Process.</h1><CircularProgress color="inherit"  style={{marginLeft:20}}/>
        
        </Backdrop>
    
            <section className="creates">
                <div className="container">
                    <Header />
                    <div className="row  ptb">
                        <div className="col-sm-12">
                            <div className="inner-head">
                                <h2>Lets create your NFT</h2>
                            </div>
                        </div>
                    </div>
                    <ValidatorForm className="form-contact">
                        <div className="row">
                            <div className="col-sm-9">
                                <h5>Upload File</h5>
                                <div className="inner-content text-center">
                                    <div className="row pt160" >
                                        <div className="col-sm-12">
                                            <h4 className="grey ptb20">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</h4>
                                            <label for="file" className="custom-file-upload btn-common-2">
                                                UPLOAD FILE <i className="fa fa-cloud-upload"></i>
                                            </label>
                                            <input
                                                className="input-fields form-control" name="first" id="file" type="file" onChange={onChange} />
                                            {Object.keys(imageUrlError).map((key) => { return <p className="inputErrors">{imageUrlError[key]}</p> })}
                                            <div className="main-image-new-close">
                                                {!fileUrl ? <MyLoader toggle={toggle} />
                                                    : <img className="img-uploader-mm" src={fileUrl} style={{ marginTop: 20, borderRadius: 30 }} width="400px" height="400px" />

                                                }
                                                <div className="icons-image-close">
                                                    <i class="far fa-times-circle"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row ptb20">
                                    <div className="col-sm-9">
                                        <div className="inner-inpt">
                                            <div className="form-group">
                                                <div className="inner-logo-b">
                                                    <div className="form-group main-text-feild-head">
                                                        <label For="name">Price</label>
                                                        <TextValidator
                                                            fullWidth
                                                            type="number"
                                                            name="price"
                                                            min="0"
                                                            // value={allFormData.formData.price}
                                                            value={allFormData.formData.price && Math.max(0, allFormData.formData.price)}
                                                            onChange={handleChange}
                                                            variant="outlined"
                                                            placeholder="Enter Price"
                                                            className="input-fields"
                                                            validators={['required']}
                                                            errorMessages={['Price is required']}
                                                        />
                                                    </div>
                                                    <div className="sdsdsd">
                                                        <button className="button-discov" type="button" id="dropdownMenuButton " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            {fudgeDropDown}  
                                                            {/* <img src={fudgeDropDown}  /> */}
                                                            <i class="pl-2 fas fa-chevron-down"></i>
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            {FudgeToken.map((elem) => {
                                                                return (
                                                                    // <a className="dropdown-item" onClick={() => setDropDown(elem.itemList)}>{elem.itemList}</a>
                                                                    <a className="dropdown-item items" onClick={() => setFudgeDropDown(elem.token)}> <img src={elem.logo} alt="" className="widdd mr-2" />{elem.token}</a>
                                                                )
                                                            }
                                                            )}
                                                        </div>
                                                        {/* {Object.keys(chooseCategory).map((key) => { return <p className="inputErrors">{chooseCategory[key]}</p> })} */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputdec">NFT Name</label>
                                                <TextValidator
                                                    fullWidth
                                                    type="text"
                                                    name="nftName"
                                                    value={allFormData.formData.nftName}
                                                    onChange={handleChange}
                                                    placeholder="Enter The Name For Your NFT..."
                                                    className="input-fields"
                                                    variant="outlined"
                                                    validators={['required']}
                                                    errorMessages={['NFT Name field is required']}
                                                />
                                            </div>
                                            <div className="form-group">
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
                                            <div className="form-group">
                                                <div className="inner-drop">
                                                    <label for="exampleInputdec">Categories</label>
                                                    <div className="recently-add">
                                                        <div className=" drop-recent main-creatre-decent">
                                                            <button className="button-discover-add" type="button" id="dropdownMenuButton " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                {dropDown}
                                                                <i class="pl-2 fas fa-chevron-down ml-auto"></i>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                {/* <select> */}

                                                                {Item.map((elem) => {
                                                                    return (
                                                                        <a className="dropdown-item" onClick={() => setDropDown(elem.itemList)}>{elem.itemList}</a>
                                                                    )
                                                                }
                                                                )}
                                                                {/* </select> */}
                                                            </div>
                                                            {Object.keys(chooseCategory).map((key) => { return <p className="inputErrors">{chooseCategory[key]}</p> })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group  percentage-images">
                                                <label for="exampleInputdec">Royalties</label>
                                                <TextValidator
                                                    fullWidth
                                                    type="number"
                                                    min="0"
                                                    name="royalties"
                                                    // value={allFormData.formData.royalties}
                                                    value={allFormData.formData.royalties && Math.max(0, allFormData.formData.royalties)}
                                                    onChange={handleChange}
                                                    placeholder="Enter Your Royalties..."
                                                    className="input-fields"
                                                    variant="outlined"
                                                    validators={['required']}
                                                    errorMessages={['Royalties Persentage is required']}
                                                />
                                                <div className="mamam">
                                                    <i class="fas fa-percent"></i>
                                                </div>
                                            </div>

                                            <div className="switch">
                                                <span className="yoyo">Put on marketplace</span>
                                                <label className="switch">
                                                    <input type="checkbox" name="putOnMarketplace" checked={allFormData.formData.putOnMarketplace} onChange={handleChange} className="custom-control-input" id="customSwitch2" />
                                                    <span className="slider round"></span>

                                                </label>
                                            </div>
                                            <ul className="list-inline ptb20">
                                                <li className="list-inline-item">
                                                    <button className="btn-common" type="submit" onClick={handleSubmit} >Create NFT</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <h5>Preview</h5>
                                <div className="main-privew-div">
                                    {fileUrl ?
                                        <img src={fileUrl} style={{ borderRadius: 20 }} width="220px" height="310px" />
                                        : <h6>Upload file to preview you NFT</h6>
                                    }
                                </div>
                            </div>
                        </div>
                    </ValidatorForm>
                </div>
            </section>

        </>
    )
}

export default Create;




