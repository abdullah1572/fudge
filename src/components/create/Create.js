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
const Create = () => {
    const { account } = useWeb3React();
    const [dropDown, setDropDown] = useState('Choose Category');
    const [fileUrl, updateFileUrl] = useState(``);
    const { mintPro } = MintPro(fileUrl);
    const [allFormData, setAllFormData] = useState({
        formData: { price: '', nftName: '', description: '', royalties: '', putOnMarketplace: false },
    })
    const handleChange = (event) => {
        const { formData } = allFormData;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        formData[event.target.name] = value;
        setAllFormData({ formData });
    }
    const [imageUrlError, setImageUrlError] = useState({});
    const [chooseCategory, setChooseCategory] = useState({});
    const formValidation = () => {
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
    }

    

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

    const handleSubmit = useCallback(async () => {
        formValidation();
        if (account) {
            if (allFormData.formData.nftName === '' || allFormData.formData.description === '' || allFormData.formData.price === '' || fileUrl === ''
             || dropDown==='Choose Category') {
                toast.warning('Fill the required Fileds', {
                    position: "top-right",
                    autoClose: 2000,
                });
                return 
            }

            try {
                if (allFormData.formData.putOnMarketplace) {
                    const getPrice = allFormData.formData.price
                    const tokenID = await mintPro();
                    await ApproveAllTokenID();
                    try {
                        // const price = await getPriceFormat(allFormData.formData.price)
                        // if(getPrice===0){
                        //     toast.warning('Value mut be greater than 0', {
                        //         position: "top-right",
                        //         autoClose: 2000,
                        //     });
                        //     return
                        // }
                      
                        await FudgeSale(tokenID, getPrice);
                    }
                    catch (err) {
                        console.log("errrrrrrrrrrrrrrrrrrrrrrrr", err)
                    }

                    await addTokenAndPutOnSale(allFormData.formData, environment.BlueMoonPro, account, fileUrl, tokenID, dropDown);
                    toast.success('Created Item Successfully', {
                        position: "top-right",
                        autoClose: 2000,
                    });

                }
                else {
                    const tokenId = await mintPro();
                    await addToken(allFormData.formData, environment.BlueMoonPro, account, fileUrl, tokenId, dropDown);
                    toast.success('Created Item Successfully', {
                        position: "top-right",
                        autoClose: 2000,
                    });

                }

            }
            catch (err) {
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
    }, [ApproveAllTokenID, FudgeSale])

    async function onChange(e) {
        const file = e.target.files[0]
        IpfsStorage(file).then((res) => {
            updateFileUrl(res)
        });
    }


    return (
        <>

            <section className="creates">
                <div className="container">
                    <div className="row  ptb">
                        <div className="col-sm-12">
                            <div className="inner-head">
                                <h2>Create Item</h2>
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
                                            {fileUrl && (<img src={fileUrl} style={{ marginTop: 20 ,borderRadius:30}} width="400px" height="400px" />)}
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
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputdec">NFT Name</label>
                                                <TextValidator
                                                    fullWidth
                                                    type="text"
                                                    name="nftName"
                                                    value={allFormData.formData.nftName}
                                                    onChange={handleChange}
                                                    placeholder="Enter Your Name..."
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
                                                    <h5>Categories</h5>
                                                    <div className="recently-add">
                                                        <div className=" drop-recent">
                                                            <button className="button-discover-add" type="button" id="dropdownMenuButton " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                {dropDown}
                                                               
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
                                            <div className="form-group">
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
                                                    // validators={['required']}
                                                    // errorMessages={['Royalties field is required']}
                                                />
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
                        </div>
                    </ValidatorForm>
                </div>
            </section>

        </>
    )
}

export default Create;




