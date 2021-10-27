import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Buy } from '../../hooks/FudgeBuyAndSale';
import { GetAllTokensOfCreator } from '../../redux/action';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import { AddSale } from '../../services/services';
import Header from '../header/Header';
import environment from '../../utils/Environment';
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

import './artwork.scss';
const ArtWork = () => {
    const { account } = useWeb3React();
    const [open, setOpen] = useState(false);
    const [terms, setTerms] = useState(false);
    const [fudgeDropDown, setFudgeDropDown] = useState('FUDGE');
    const single = useSelector(state => state.CollectionReducer.GetSingletTokenData)
    const creatorData = useSelector(state => state.CollectionReducer.GetAllTokensOfCreator)

    console.log("creatorData", creatorData)
    console.log("single", single)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAllTokensOfCreator(single?.creator?.walletAddress))
    }, [single?.creator?.walletAddress, dispatch])
    const handleChange = () => {
        if (terms) {
            setTerms(false)
        }
        else {

            setTerms(true)
        }
    }
    const { FudgeBuy } = Buy()

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
    const OpenBuyModal = () => {
        window.$("#checkout").modal('show');
        window.$("#putonsale").modal('show');
        window.$("#success").modal('show');

    }

    const BuyNft = useCallback(async () => {
        if (account) {


            try {
                window.$("#checkout").modal('hide');
                setOpen(true)

                const res = await FudgeBuy(single?.token?.tokenID, single?.order?.price);
                console.log("res", res)
                if (res.status) {
                    await AddSale(account, single?.token?.walletAddress, environment.BlueMoonPro, single?.token?.tokenID, single?.order?.price)
                    setOpen(false)
                    toast.success('Buy Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                    });
                }
                else {
                    setOpen(false)
                    toast.error('Not Buy', {
                        position: "top-center",
                        autoClose: 5000,
                    });

                }


            }
            catch (err) {
                setOpen(false)
                toast.error('User Denied Transaction', {
                    position: "top-center",
                    autoClose: 5000,
                });
            }
            //  try{
            //     if(tx){
            //         await dispatch(AddSale(account,environment.BlueMoonPro,single?.token?.tokenID,single?.order?.price))
            //         toast.success('Successfully Bought', {
            //             position: "top-right",
            //             autoClose: 2000,
            //         });
            //     }
            //  }catch{
            //        toast.error('Fail to Buy', {
            //         position: "top-right",
            //         autoClose: 2000,
            //     });
            //     return false
            //  }

        } else {
            toast.error('Please Connect the wallet', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }, [FudgeBuy, account, single?.token?.walletAddress, single?.token?.tokenID, single?.order?.price])
    const MoreCreatorNfts = creatorData.map((elem, index) => {

        const creator = elem?.creators.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })
        return (
            <div className="col-sm-3" key={index}>
                <Link to="artwork">
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
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price}</h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                {/* <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" /> */}
                                <img src="pegify/heart-outline-icon.png" alt="" className="img-fluid" />
                                <span className="grey"> {elem?.numerOfLikes}</span>
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        )
    })


    //Remove from

    const RemoveFromMarket = () => {
        console.log("yes=============")
    }

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
                                    <img src={single?.token?.imageUrl} className="img-fluid" alt="" /></a>
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
                                                <h2 className="inner-heading" >{single?.token?.nftName}</h2>
                                                <h4 className="inner-para"> <span>{single?.order?.price} BNB</span></h4>
                                            </div>
                                            <div className="icons">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item" >
                                                        {/* <img src="pegify/landing-assets/heart.png" alt=""
                                                            className="img-fluid" /> */}
                                                        <img src="pegify/heart-outline-icon.png" alt="" className="img-fluid" />
                                                        <span className="grey"> {single?.token?.numerOfLikes}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-para">
                                                <p className="inner-para">{single?.token?.description}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ptb20">
                                    <div className="col-sm-12">
                                        <div className="owner" >
                                            <Link to="ownerprofile">
                                                <h6>Owner</h6>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <img src={single?.user?.ipfsImageUrl} alt=""
                                                            className="img-fluid inner-imagess"
                                                        />
                                                    </li>
                                                    <li className="list-inline-item grey-1">
                                                        {`${single?.token?.walletAddress.substring(0, 6)}...${single?.token?.walletAddress.substring(
                                                            single?.token?.walletAddress.length - 4
                                                        )}`}
                                                    </li>
                                                    <li className="list-inline-item grey-1">
                                                        {single?.user?.displayName}
                                                    </li>

                                                </ul>

                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="owner" >
                                            <Link to="ownerprofile">
                                                <h6>Creator</h6>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <img src={single?.user?.ipfsImageUrl} alt=""
                                                            className="img-fluid inner-imagess"
                                                        /></li>
                                                    <li className="list-inline-item grey-1">
                                                        {`${single?.token?.creatorAddress.substring(0, 6)}...${single?.token?.creatorAddress.substring(
                                                            single?.token?.creatorAddress.length - 4
                                                        )}`}
                                                    </li>
                                                    <li className="list-inline-item grey-1">{single?.user?.displayName}</li>
                                                </ul>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* This is first part end */}

                                <div className="row ptbb">
                                    <div className="col-sm-12">
                                        <div className="inner-btn">

                                            {!single?.order && single?.token?.walletAddress === account ? <button type="button" className="btn-common-1" data-toggle="modal" data-target="#putonsale">Put On Market Place</button> :
                                                single?.token?.walletAddress === account && single.order?.price <= 0 ? <button type="button" className="btn-common-1" onClick={OpenBuyModal}>Put On Market Place</button> :
                                                    single?.order && single?.token?.walletAddress !== account && single?.order?.price > 0 ?
                                                        <button className="btn-common-1" data-toggle="modal" onClick={OpenBuyModal} >BUY NOW
                                                            FOR {single?.order?.price} BNB</button>

                                                        : single?.order && single?.token?.walletAddress === account && single?.order?.price > 0 ?
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
                                        <div className="col-sm-4 main-margin-sho text-center">
                                            <img src={single?.token?.imageUrl} className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-sm-8 main-margin-sho">
                                            <div className="inner-man">
                                                <h4>Prime</h4>
                                                <div >
                                                    <div className="owner" >
                                                        <Link to="ownerprofile">
                                                            <h6>Owner</h6>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item">
                                                                    <img src={single?.user?.ipfsImageUrl} alt=""
                                                                        className="img-fluid inner-imagess"
                                                                    /></li>
                                                                <li className="list-inline-item grey-1">{single?.user?.displayName}</li>
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
                                                                    <img src={single?.user?.ipfsImageUrl} alt=""
                                                                        className="img-fluid inner-imagess"
                                                                    /></li>
                                                                <li className="list-inline-item grey-1">{single?.user?.displayName}</li>
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
                                            <p className="grey">Total</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row main-margin-sho">
                                        <div className="col-sm-9 main-margin-sho" >

                                            <p className="grey"><strong>Item Price</strong></p>
                                        </div>

                                        <div className="col-sm-3 main-margin-sho">
                                            <h6><span>{single?.order?.price} BNB</span></h6>
                                        </div>

                                    </div>

                                    <div className="row main-margin-sho">
                                        <div className="col-sm-9 main-margin-sho">

                                            <p className="grey"><strong>Service Fees</strong></p>
                                        </div>

                                        <div className="col-sm-3 main-margin-sho">
                                            <h6><span>0 BNB</span></h6>
                                        </div>

                                    </div>
                                    <div className="row main-margin-sho">
                                        <div className="col-sm-9 main-margin-sho">

                                            <p className="grey"><strong>Total</strong></p>
                                        </div>

                                        <div className="col-sm-3 main-margin-sho">
                                            <h6><span className="clr">{single?.order?.price} BNB</span></h6>
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
                                                                        <h4>Your NFT Has Been Purchased
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
                                <div className="row ptb20">
                                    <div className="col-sm-12 main-margin-sho text-center">
                                        <img src={single?.token?.imageUrl} className="img-fluid" alt="" />
                                    </div>

                                </div>

                                <div className="headeeing pb-4">
                                    <h4>{single?.token?.description}</h4>
                                    <div className="iconsss d-flex justify-content-start align-items-center">
                                        <img src={single?.user?.ipfsImageUrl} className="img-fluid" />

                                        <h6>{single?.user?.displayName}</h6>
                                    </div>
                                    <label className="label-newsss" for="exampleInputEmail1">Price</label>
                                    <div className="main-inpuits-modal">

                                        <div className="modal-input-ssds">
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter The Price Of The NFT" />
                                        </div>
                                        <div className="bootstrap-drops-ss">
                                            <div class="dropdown drop-downssde">
                                                <button class="shdgs-drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

                                <div className="row ptb20">
                                    <div className="col-sm-12">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"
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
                                            <li className="list-inline-item"><button className="btn-common"
                                                data-toggle="modal" data-target="#exampleModal2">Proceed to
                                                Payment</button></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/*paymement successful */}
                <div className="modal fade" id="putonsale" tabindex="-1"
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
                                        <h4>Your NFT Has Been Purchased
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

            </section>

            <section className="latest">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2> <span className="clr">MORE FROM</span> THIS CREATOR</h2>
                            <div className="row ptb20">
                                {MoreCreatorNfts}
                            </div>
                            <div className="row ptb20">
                                <div className="col-sm-12 text-center">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <button className="btn-common">Load more</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ArtWork;