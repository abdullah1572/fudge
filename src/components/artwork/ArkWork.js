import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import { AddSale, RemoveOrder, AddOrder } from '../../services/services';
import Header from '../header/Header';
import environment from '../../utils/Environment';
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { API_URL } from '../../ApiURL';
import axios from 'axios';
import { useParams } from 'react-router';
import './artwork.scss';
import { GetAllNftsAndDetails } from '../../redux/action';
import { ApproveForAll, BNBSalePrice, ApproveForFudge, ByUningBnb, BuyUsingFudge, FudgeSalePrice } from '../../hooks/FudgeBuyAndSale';
import MyLoader from '../Loader/MyLoader';

const ArtWork = () => {

    const { account } = useWeb3React();
    const [open, setOpen] = useState(false);
    const [terms, setTerms] = useState(false);
    const { contractAddress, tokenId } = useParams();
    const [fudgeDropDown, setFudgeDropDown] = useState('FUDGE');
    const single = useSelector(state => state.CollectionReducer.GetSingletTokenData)
    // const creatorData = useSelector(state => state.CollectionReducer.GetAllTokensOfCreator)
    const { ApproveAllTokenID } = ApproveForAll()
    const { approveForFudge } = ApproveForFudge();
    const { BNBSale } = BNBSalePrice();
    const { FudgeSale } = FudgeSalePrice()
    const [price, setPrice] = useState('')
    const handleChange1 = (e) => {
        setPrice(e.target.value);
    }
    const dispatch = useDispatch();
    const [singleData, setSingleData] = useState([]);


    const [count, setCount] = useState(12);
    
    const LoadMore = () => {
        setCount(count + 4)
    }

    const [more, setMore] = useState([])
    const GetSingleData = async () => {
        setOpen()
        try {
            await axios.post(`${API_URL}/token/getTokenAndDetailsOfSingleToken`, { contractAddress: contractAddress, tokenID: tokenId })
                .then((res) => {
                    setSingleData(res.data.data)
                    getMoreCreatorsNfts(res.data.data[0].creatorAddress)
                    // getDate(response.data.msg)
                    // toast.success('Project Approved Succesfully', {
                    //     position: "top-right",
                    //     autoClose: 2000,
                    // });
                });

        }
        catch (err) {
            // toast.error('Project Not Approved', {
            //     position: "bottom-center",
            //     autoClose: 2000,
            // });
            return false
        }
    }
    const getMoreCreatorsNfts = async (creatorAddress) => {
        axios.post(`${API_URL}/token/getAllTokensOfCreator`, { creatorAddress: creatorAddress })
            .then((res) => {
                setMore(res.data.data)
            })
            .catch((err) => {
                return false;
            })

    }
    const LikeToken = (contractAddress, walletAddress, tokenID, index) => {
        if (walletAddress !== undefined) {
            axios.post(`${API_URL}/token/like`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = more;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setMore([...temp])
                    // getDiscover()
                })
                .catch((err) => {
                    return false;
                })
        }
        else {
            toast.error('Not logged in', {
                position: "top-right",
                autoClose: 2000,
            });
        }

    };



    const UnlikeToken = (contractAddress, walletAddress, tokenID, index) => {
        if (walletAddress !== undefined) {
            axios.post(`${API_URL}/token/unlike`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = more;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setMore([...temp])
                    // getDiscover()
                })
                .catch((err) => {
                    return false;
                })
        }
        else {
            toast.error('Not logged in', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    };


    useEffect(() => {
        GetSingleData()
    }, [contractAddress, tokenId])
   
    // console.log("creators",singleData[0]?.creatorAddress)

    const handleChange = () => {
        if (terms) {
            setTerms(false)
        }
        else {

            setTerms(true)
        }
    }
    const { BNBBuy } = ByUningBnb()
    const { FudgeBuy } = BuyUsingFudge();

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
    // const OpenBuyModal = () => {


    // }
    const OpenPutOnsaleModal = () => {
        window.$("#putonsale").modal('show');
    }


    const PutOnSale = useCallback(async () => {
        if (account) {
            if (price === '') {
                toast.warning('Fill the required Fileds', {
                    position: "top-right",
                    autoClose: 2000,
                });
                return
            }
            try {
                const approve = await ApproveAllTokenID();
                window.$("#putonsale").modal('hide');
                setOpen(true)
                if (fudgeDropDown === "FUDGE") {
                    // window.$("#success").modal('show');
                    if (approve.status) {
                        setOpen(false)
                    }
                    setOpen(true)
                    const fudgeSale = await FudgeSale(tokenId, singleData[0]?.orders[0]?.price)
                    if (fudgeSale.status) {
                        setOpen(false)
                        await AddOrder(account, environment.BlueMoonPro, tokenId, price, fudgeDropDown);
                        // toast.success('Created Item Successfully', {
                        //     position: "top-center",
                        //     autoClose: 5000,
                        // });

                        dispatch(GetAllNftsAndDetails());
                    }
                    window.$("#success").modal('show');
                    setPrice('')
                }
                else {
                    const sale = await BNBSale(tokenId, price);
                    if (sale.status) {
                        setOpen(false)
                        await AddOrder(account, environment.BlueMoonPro, tokenId, price, fudgeDropDown);
                        // toast.success('Created Item Successfully', {
                        //     position: "top-center",
                        //     autoClose: 5000,
                        // });

                        dispatch(GetAllNftsAndDetails());
                    }
                    window.$("#success").modal('show');
                    setPrice('')
                }
            }
            catch (err) {
                console.log("err", err)
                setOpen(false)
                toast.error('User Denied Transaction', {
                    position: "top-center",
                    autoClose: 5000,
                });
            }


            // else{
            //     try {
            //         window.$("#putonsale").modal('hide');
            //         // window.$("#success").modal('show');
            //         setOpen(true)
            //         const approve = await ApproveAllTokenID();
            //         if (approve.status) {
            //             setOpen(false)
            //         }
            //         setOpen(true)
            //         const sale = await BNBSale(tokenId, price);
            //         if (sale.status) {
            //                 setOpen(false)
            //                 await AddOrder(account, environment.BlueMoonPro,tokenId,price,fudgeDropDown);
            //                 // toast.success('Created Item Successfully', {
            //                 //     position: "top-center",
            //                 //     autoClose: 5000,
            //                 // });

            //                 dispatch(GetAllNftsAndDetails());
            //             }
            //             window.$("#success").modal('show');
            //             setPrice('')
            //     }
            //     catch (err) {
            //         setOpen(false)
            //         toast.error('User Denied Transaction', {
            //             position: "top-center",
            //             autoClose: 5000,
            //         });
            //     }
            // }
        }

        else {
            toast.error('Please Connect the wallet', {
                position: "top-right",
                autoClose: 5000,
            });
        }
    }, [BNBSale, FudgeSale])



    const buyModal = () => {
        window.$("#checkout").modal('show');
    }

    const BuyNft = useCallback(async () => {
        if (account) {
            try {
                setOpen(true)
                if (singleData[0]?.orders[0]?.currency === 'FUDGE') {
                    window.$("#checkout").modal('hide');
                    const FudgePrice = await approveForFudge(singleData[0]?.orders[0]?.price)
                    if (FudgePrice.status) {
                        const res = await FudgeBuy(tokenId);
                        if (res.status) {
                            await AddSale(account, singleData[0]?.walletAddress, environment.BlueMoonPro, tokenId, singleData[0]?.orders[0]?.price)
                            setOpen(false)
                            toast.success('Buy Successfully', {
                                position: "top-center",
                                autoClose: 5000,
                            });
                            setTerms(false)
                            dispatch(GetAllNftsAndDetails());
                        }
                        else {
                            setOpen(false)
                            toast.error('Not Buy', {
                                position: "top-center",
                                autoClose: 5000,
                            });

                        }
                    }

                }
                else {
                    const res = await BNBBuy(tokenId, singleData[0]?.orders[0]?.price);
                    if (res.status) {
                        await AddSale(account, singleData[0]?.walletAddress, environment.BlueMoonPro, tokenId, singleData[0]?.orders[0]?.price)
                        setOpen(false)
                        toast.success('Buy Successfully', {
                            position: "top-center",
                            autoClose: 5000,
                        });
                        setTerms(false)
                        dispatch(GetAllNftsAndDetails());
                    }
                    else {
                        setOpen(false)
                        toast.error('Not Buy', {
                            position: "top-center",
                            autoClose: 5000,
                        });

                    }
                }

            }
            catch (err) {
                setOpen(false)
                window.$("#checkout").modal('hide');
                toast.error('User Denied Transaction', {
                    position: "top-center",
                    autoClose: 5000,
                });
            }

        } else {
            toast.error('Please Connect the wallet', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }, [BNBBuy, FudgeBuy, account, approveForFudge, single?.token?.walletAddress, single?.token?.tokenID, single?.order?.price])


    //Remove from market
    const RemoveFromMarket = async () => {
        setOpen(true)
        const res = await RemoveOrder(environment.BlueMoonPro, account, tokenId)
        if (res.data.status) {
            setOpen(false)
        }
        dispatch(GetAllNftsAndDetails());
        window.$("#remove").modal('show');
    }


    const MoreCreatorNfts = more?.slice(0, count)?.map((elem, index) => {

        const creator = elem?.creators.map((elem) => {
            return (
                <Link to={`/creatorprofile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/ownerprofile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })
        let userLike = elem?.likedBy?.find(e => e.address === account)
        return (
            <div className="col-sm-3" key={index}>
                <div className="inner-card image-width">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <div className="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                {creator}
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to={`/artwork/${elem.contractAddress}/${elem.tokenID}`}>
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />
                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price}</h6>
                        <hr />
                    </Link>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            {!userLike ?
                                <button className="for-style11" onClick={() => LikeToken(elem.contractAddress, account, elem.tokenID, index)} >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" onClick={() => UnlikeToken(elem.contractAddress, account, elem.tokenID, index)}>
                                    <img id={elem._id} src={elem?.likedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        )
    })



    return (
        <>

            <Backdrop className="loader" sx={{ color: '#fff' }} open={open}> <h1>Please Wait. Transaction in Process.</h1><CircularProgress color="inherit" style={{ marginLeft: 20 }} />

            </Backdrop>
            <section className="art-work">
                <div className="container">
                    <Header />
                    <div className="row ptb">
                        {/* This is first part start */}

                        <div className="col-sm-6">
                            <div className="art-image">
                                <a href="#myModal" role="button" className="btn btn-primary" data-toggle="modal">
                                    <img src={singleData[0]?.imageUrl} className="img-fluid" alt="" /></a>
                                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div className="modal-dialog modal-full" role="document">
                                        <div className="modal-content" >
                                            <div className="modal-body p-4" id="result">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <img src={single?.token?.imageUrl} className="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <ul className="list-inline ptbb">
                                                <li className="">
                                                    <div className="icon-1">
                                                        <button data-dismiss="modal">
                                                            <img src={single?.user?.ipfsImageUrl} className="img-fluid img-1" alt="" />&nbsp;&nbsp;
                                                            <span className="grey-1">{single?.user?.displayName}</span>
                                                        </button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="art-inner">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="profile">
                                            <div className="profile-heading">
                                                <h2 className="inner-heading" >{singleData[0]?.nftName}</h2>
                                                <h4 className="inner-para"> <span>{singleData[0]?.orders[0]?.price ? singleData[0]?.orders[0]?.price : 0} {singleData[0]?.orders[0]?.currency}</span></h4>
                                            </div>
                                            <div className="icons">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item" >
                                                        <img src="/pegify/landing-assets/heart.png" alt=""
                                                            className="img-fluid" />
                                                        <img src="pegify/heart-outline-icon.png" alt="" className="img-fluid" />
                                                        <span className="grey">{singleData[0]?.numerOfLikes}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-para">
                                                <p className="inner-para">{singleData[0]?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ptb20">
                                    <div className="col-sm-12">
                                        <div className="owner" >
                                            <Link to={`/ownerprofile/${singleData[0]?.walletAddress}`}>
                                                <h6>Owner</h6>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <img src={singleData[0]?.users?.ipfsImageUrl} alt=""
                                                            className="img-fluid inner-imagess"
                                                        />
                                                    </li>
                                                    <li className="list-inline-item grey-1">
                                                        {/* {singleData[0]?.walletAddress === undefined 
                                                            ? "..."
                                                            : singleData[0]?.walletAddress === null
                                                                ? "None"
                                                                : `${singleData[0]?.walletAddress.substring(0, 6)}...${singleData[0]?.walletAddress.substring(
                                                                    singleData[0]?.walletAddress.length - 4
                                                                )}`} */}

                                                    </li>
                                                    <li className="list-inline-item grey-1">
                                                        {singleData[0]?.users?.displayName}
                                                    </li>

                                                </ul>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="owner" >
                                            <Link to={`/creatorprofile/${singleData[0]?.creators?.walletAddress}`}>
                                                <h6>Creator</h6>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <img src={singleData[0]?.creators?.ipfsImageUrl} alt=""
                                                            className="img-fluid inner-imagess"
                                                        /></li>
                                                    <li className="list-inline-item grey-1">
                                                        {/* {singleData[0]?.creators?.walletAddress === undefined
                                                            ? "..."
                                                            : singleData[0]?.creators?.walletAddress === null
                                                                ? "None"
                                                                : `${singleData[0]?.creators?.walletAddress.substring(0, 6)}...${singleData[0]?.creators?.walletAddress.substring(
                                                                    account.length - 4
                                                                )}`} */}
                                                    </li>
                                                    <li className="list-inline-item grey-1">{singleData[0]?.creators?.displayName}</li>
                                                </ul>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* This is first part end */}

                                <div className="row ptbb">
                                    <div className="col-sm-12">
                                        <div className="inner-btn">
                                            {!singleData[0]?.orders[0] && singleData[0]?.users?.walletAddress === account ?
                                                <button type="button" className="btn-common-1" data-toggle="modal" data-target="#putonsale">Put On Market Place</button> :
                                                singleData[0]?.users?.walletAddress === account && singleData[0].orders[0]?.price <= 0 ?
                                                    <button type="button" className="btn-common-1" onClick={OpenPutOnsaleModal}>Put On Market Place</button> :
                                                    singleData[0]?.orders[0] && singleData[0]?.users?.walletAddress !== account && singleData[0]?.orders[0]?.price > 0 ?
                                                        <button className="btn-common-1" data-toggle="modal" onClick={buyModal} >BUY NOW
                                                            FOR {singleData[0]?.orders[0]?.price} {singleData[0]?.orders[0]?.currency}</button>
                                                        : singleData[0]?.orders[0] && singleData[0]?.users?.walletAddress === account && singleData[0]?.orders[0]?.price > 0 ?
                                                            <button type="button" className="btn-common-1" onClick={RemoveFromMarket}>
                                                                Remove From Market Place</button> : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buy Modal */}
                <div className="inner-btn">
                    <div className="modal fade" id="checkout" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="mx-auto">Checkout</h4>
                                    <button type="button" className="close" data-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row ptb20">
                                        <div className="col-sm-4  main-upper-modal-image text-center">
                                            <img src={singleData[0]?.imageUrl} className="img-fluid wdimagessks" alt="" />
                                        </div>
                                        <div className="col-sm-8 ">
                                            <div className="inner-man">
                                                <h4>Prime</h4>
                                                <div >
                                                    <div className="owner" >
                                                        <Link to="ownerprofile">
                                                            <h6>Owner</h6>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item">
                                                                    <img src={singleData[0]?.users?.ipfsImageUrl} alt=""
                                                                        className="img-fluid inner-imagessss"
                                                                    /></li>
                                                                <li className="list-inline-item grey-1">{singleData[0]?.users?.displayName}</li>
                                                            </ul>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div >
                                                    <div className="owner" >
                                                        <Link to="ownerprofile">
                                                            <h6>Creator</h6>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item">
                                                                    <img src={singleData[0]?.creators?.ipfsImageUrl} alt=""
                                                                        className="img-fluid inner-imagessss"
                                                                    /></li>
                                                                <li className="list-inline-item grey-1">{singleData[0]?.creators?.displayName}</li>
                                                            </ul>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row main-margin-sho">
                                        <div className="col-sm-10 main-margin-sho">
                                            <p className="grey">Item</p>
                                        </div>
                                        <div className="col-sm-2 main-margin-sho">
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row main-margin-sho">
                                        <div className="col-sm-9 " >

                                            <p className="grey"><strong>Item Price</strong></p>
                                        </div>

                                        <div className="col-sm-3 main-margin-sho">
                                            <h6><span>{singleData[0]?.orders[0]?.price} BNB</span></h6>
                                        </div>

                                    </div>

                                    <div className="row main-margin-sho">
                                        <div className="col-sm-9 main-margin-sho">

                                            <p className="grey"><strong>Service Fees</strong></p>
                                        </div>

                                        <div className="col-sm-3 ">
                                            <h6><span>0 BNB</span></h6>
                                        </div>

                                    </div>
                                    <div className="row main-margin-sho">
                                        <div className="col-sm-9 ">

                                            <p className="grey"><strong>Total</strong></p>
                                        </div>

                                        <div className="col-sm-3 ">
                                            <h6><span className="clr">{singleData[0]?.orders[0]?.price} BNB</span></h6>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row ptb20">
                                        <div className="col-sm-12">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" value={terms}

                                                    onChange={handleChange}
                                                    id="customControlAutosizing" />
                                                &nbsp;
                                                <label className="custom-control-label"
                                                    for="customControlAutosizing"><small>I agree to Fudge
                                                        <span>Terms of Service</span></small></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <ul className="list-inline">

                                                <li className="list-inline-item"><button className={terms ? "btn-common" : "btn-common1"} onClick={BuyNft}>Proceed to Payment</button></li>
                                                {/* <li className="pt-3"><a className="pt-3">Add Funds</a></li> */}
                                                <div className="modal fade" id="exampleModal2" tabindex="-1"
                                                    role="dialog" aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true">
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="mx-auto" >Success</h4>
                                                                <button type="button" className="close"
                                                                    data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row ptb20">
                                                                    <div className="col-sm-12 text-center">
                                                                        <h4>Your NFT Put On Market
                                                                            Successfully</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button"
                                                                    className="btn btn-secondary"
                                                                    data-dismiss="modal">OK</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Put on sale modal */}
                <div className="modal fade" id="putonsale" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <ValidatorForm className="form-contact">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="mx-auto">Sell NFT</h4>
                                    <button type="button" className="close" data-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row ptb20 justify-content-center">
                                        <div className="col-sm-12 main-margin-sho text-center">
                                            <img src={singleData[0]?.imageUrl} className="img-fluid" alt="" />
                                        </div>

                                    </div>

                                    <div className="headeeing pb-4">
                                        <h4>{singleData[0]?.description}</h4>
                                        <div className="iconsss d-flex justify-content-start align-items-center">
                                            <img src={singleData[0]?.users?.ipfsImageUrl} className="img-fluid" />

                                            <h6>{singleData[0]?.users?.displayName}</h6>
                                        </div>
                                        {/* <label className="label-newsss" for="exampleInputEmail1">Price</label> */}
                                        <label For="name">Price</label>
                                        <div className="main-inpuits-modal">
                                            <div className="modal-input-ssds">
                                                <TextValidator
                                                    fullWidth
                                                    type="number"
                                                    // name="price"
                                                    min="0"
                                                    value={price}
                                                    value={price && Math.max(0, price)}
                                                    onChange={handleChange1}
                                                    variant="outlined"
                                                    placeholder="Enter Price"
                                                    className="input-fields"
                                                    validators={['required']}
                                                    errorMessages={['Price is required']}
                                                />
                                                {/* <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter The Price Of The NFT" /> */}
                                            </div>
                                            <div className="bootstrap-drops-ss">
                                                <div class="dropdown drop-downssde">
                                                    <button class="shdgs-dropss" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        {fudgeDropDown}
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        {/* <select> */}

                                                        {FudgeToken.map((elem) => {
                                                            return (
                                                                // <a className="dropdown-item" onClick={() => setDropDown(elem.itemList)}>{elem.itemList}</a>
                                                                <a className="dropdown-item items" onClick={() => setFudgeDropDown(elem.token)}> <img src={elem.logo} alt="" className="widdd mr-2" />{elem.token}</a>
                                                            )
                                                        }
                                                        )}
                                                        {/* </select> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    < hr />
                                    {/* <div className="row ptb20">
                                        <div className="col-sm-12">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" value={terms}

                                                onChange={handleChange}
                                                    id="customControlAutosizing" />
                                                &nbsp;
                                                <label className="custom-control-label"
                                                    for="customControlAutosizing"><small>I agree to Fudge
                                                        <span>Terms of Service</span></small></label>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <button className="btn-common" type="submit" onClick={PutOnSale}>PUT ON MARKET PLACE</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </ValidatorForm>
                </div>


                {/*paymement successful */}
                <div className="modal fade" id="remove" tabindex="-1"
                    role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="mx-auto" >Success</h4>
                                <button type="button" className="close"
                                    data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row ptb20">
                                    <div className="col-sm-12 text-center">
                                        <h4>Your NFT Has Been Removed From Market Place.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="success" tabindex="-1"
                    role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="mx-auto" >Success</h4>
                                <button type="button" className="close"
                                    data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row ptb20">
                                    <div className="col-sm-12 text-center">
                                        <h4>Your NFT Has Been Put On Market Place.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="latest">
                <div className="container">
                    <div className="row">
                        {MoreCreatorNfts.length > 0 &&
                            <div className="col-sm-12">
                                <h2> <span className="clr">MORE FROM</span> THIS CREATOR</h2>
                                <div className="row ptb20">
                                    {MoreCreatorNfts}
                                </div>
                                <div className="row ptb20">
                                    <div className="col-sm-12 text-center">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                {more.length > count
                                                    ? <button className="btn-common" onClick={LoadMore}>LOAD MORE</button>
                                                    : <button className="btn-common" >No More Items</button>
                                                }

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default ArtWork;