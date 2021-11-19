import React, { useState, useEffect } from 'react';
import './ownerprofile.scss';
import axios from 'axios';
import { API_URL } from '../../ApiURL'
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useWeb3React } from '@web3-react/core';
import MyLoader from '../Loader/MyLoader';
import { AddProfile } from '../../services/services';
const OwnerProfile = () => {
    const dispatch = useDispatch();
    // const ownedData = useSelector(state => state.CollectionReducer.GetOwnedData);
    const { account } = useWeb3React();
    const { walletAddress } = useParams();
    const [userDetail, setUserDetail] = useState()
    const [tocheck, setTocheck] = useState([]);
    const [open, setOpen] = useState(false);
    const [followed, setFollowed] = useState()
    const GetUserDetail = async (walletAddress) => {
        AddProfile({ walletAddress: walletAddress })
        axios.post(`${API_URL}/user/getUser`, { walletAddress: walletAddress })
            .then((res) => {
                //  console.log("res",res)
                setUserDetail(res.data.data)
            }).catch((err) => {

                return false;
            })
    }

    const [owned,setOwned]=useState([])
    const getOwnedData = async () => {
        axios.post(`${API_URL}/token/getOwnedTokensOfUserAndDetails`, { walletAddress: walletAddress })
            .then((res) => {
                setOwned(res.data.data)
            })
            .catch((err) => {
                return false;
            })
    };

    const [sale, setSale] = useState([]);

    const Onsale = async () => {
        setOpen(true)
        axios.post(`${API_URL}/token/getOnSaleTokensOfUserAndDetails`, { walletAddress: walletAddress })
            .then((res) => {
                setSale(res.data.data)
                setOpen(false)
            }).catch((err) => {

                return false;
            })
    }

    const [likes, setLikes] = useState([]);

    const GetLikesData = async () => {
        setOpen(true)
        axios.post(`${API_URL}/token/getLikedTokensOfUserAndDetails`, { walletAddress: walletAddress })
            .then((res) => {
                setLikes(res.data.data)
                setOpen(false)
            }).catch((err) => {
                return false;
            })
    }

    const [create, SetCreate] = useState([]);

    const Created = () => {
        setOpen(true)
        axios.post(`${API_URL}/token/getCreatedTokensOfUserAndDetails`, { walletAddress: walletAddress })
            .then((res) => {
                SetCreate(res.data.data)
                setOpen(false)
            }).catch((err) => {

                return false;
            })
    }

    const HasFollowed = async () => {

        if (walletAddress && account) {
            axios.post(`${API_URL}/user/getAlreadyFollowing`, { walletAddress: account, toFollow: walletAddress })
                .then((res) => {
                    setFollowed(res.data.data)
                }).catch((err) => {
                    return false;
                })
        }
    }

    const [following, setFollowing] = useState([]);
    const Followings = async () => {
        setOpen(true)
        axios.post(`${API_URL}/user/getFollowingAndDetails`, { walletAddress: walletAddress, account: account })
            .then((res) => {
                setFollowing(res.data.data.detailsOfFollowing)
                setOpen(false)
                tocheck(res.data.data.connectedAccount.following)
            }).catch((err) => {
                return false;
            })
    }

    const [followers, setFollowers] = useState([]);
    const Followers = () => {
        setOpen(true)
        axios.post(`${API_URL}/user/getFollowersAndDetails`, { walletAddress: walletAddress, account: account })
            .then((res) => {
                setFollowers(res.data.data.detailsOfFollowers)
                setTocheck(res.data.data.connectedAccount.following)
                setOpen(false)
            }).catch((err) => {

                return false;
            })
    }
    const AddFollower = () => {
        let toFollow = userDetail?.walletAddress;
        if (account && toFollow) {
            axios.post(`${API_URL}/user/addFollower`, { walletAddress: account, toFollow: toFollow })
                .then(async (res) => {
                    HasFollowed()
                })
                .catch((err) => {
                    return false;
                })
        }
        else {
            alert("Both address required")
        }
    }

    const AddFollower1 = (e) => {
        let toFollow = e;
        if (account && toFollow) {
            axios.post(`${API_URL}/user/addFollower`, { walletAddress: account, toFollow: toFollow })
                .then(async (res) => {

                    let temp = tocheck;
                    temp.push({ address: toFollow });
                    setTocheck(temp)
                    Followers()
                })
                .catch((err) => {
                    return false;
                })
        }
        else {
            alert("Both address required")
        }
    }
    
    const Remove1 = (e) => {
        let toFollow = e;
        if (account && toFollow) {
            axios.post(`${API_URL}/user/removeFollower`, { walletAddress: account, toFollow: toFollow })
                .then(async (res) => {
                    let temp = tocheck.filter(e => {
                        return e.address !== toFollow
                    });
                    setTocheck(temp)
                    Followers()
                    Followings()
                })
                .catch((err) => {
                    return false;
                })
        }
        else {
            alert("Both address required")
        }
    }

    const RemoveUnfollow = () => {
        let toFollow = userDetail?.walletAddress;
        if (account && toFollow) {
            axios.post(`${API_URL}/user/removeFollower`, { walletAddress: account, toFollow: toFollow })
                .then(async (res) => {
                    HasFollowed()
                })
                .catch((err) => {
                    return false;
                })
        }
        else {
            alert("Both address required")
        }
    }
    const fbLink = userDetail?.facebookUserName?.includes('https://') ? userDetail?.facebookUserName : `https://${userDetail?.facebookUserName}`;
    const twitterLink = userDetail?.twitterUserName?.includes('https://') ? userDetail?.twitterUserName : `https://${userDetail?.twitterUserName}`;

    useEffect(() => {
        GetUserDetail(walletAddress)
        getOwnedData()
        HasFollowed()
    }, [walletAddress, account])

    const showOwnedData = owned?.map((elem) => {
        const creator = elem?.creators.map((elem) => {
            return (
                <Link to={`/creatorprofile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>

            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/creatorprofile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" className="img-fluid inner-tiless " />
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
            <div className="col-sm-3">
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
                                <button className="for-style11"  >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" >
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

    const showOnSaleData = sale?.map((elem) => {
        const creator = elem?.creators.map((elem) => {
            return (
                <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <img src={elem?.ipfsImageUrl} alt="" className="img-fluid inner-tiless " />
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })
        let userLike = elem?.likedBy?.find(e => e.address === account)
        return (
            <div className="col-sm-3">
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
                                <button className="for-style11"  >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" >
                                    <img id={elem._id} src={elem?.likedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button>
                            }
                        </li>
                    </ul>
                </div>

            </div >
        )
    })



    // const likedData = useSelector(state => state.CollectionReducer.GetLikedData);
    const showLikedData = likes?.map((elem) => {
        const creator = elem?.creators.map((elem) => {
            return (
                <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <img src={elem?.ipfsImageUrl} alt="" className="img-fluid inner-tiless " />
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })
        let userLike = elem?.likedBy?.find(e => e.address === account)
        return (
            <div className="col-sm-3">
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
                                <button className="for-style11"  >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" >
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


    // const createdData = useSelector(state => state.CollectionReducer.GetCreatedData);

    const showCreatedData = create.map((elem) => {
        const creator = elem?.creators.map((elem) => {
            return (
                <Link to={`/ownerprofile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/ownerprofile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" className="img-fluid inner-tiless " />
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
            <div className="col-sm-3">
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
                                <button className="for-style11"  >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" >
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


    const showFollowingsData = following?.map((elem) => {
        let follow = tocheck.find(e => e.address === elem.walletAddress)
        return (
            <div className="col-sm-3">
                <div className="inner-follow text-center">
                    <img src={elem?.ipfsImageUrl} alt="" width="100" height="100" style={{ borderRadius: '50%' }} />
                    <h4>{elem?.displayName}</h4>
                    <h6 className="grey">{elem?.followersCount} Followers</h6>
                    <hr />
                    <ul className="list-inline">
                        <li className="list-inline-item">
                        {account === elem?.walletAddress ? '' : follow ?
                         <button className="btn-common3" type="submit" onClick={() => Remove1(elem.walletAddress)} >UnFollow</button>
                          : <button className="btn-common3" type="submit" onClick={() => AddFollower1(elem.walletAddress)} >Follow</button>
                          }
                        </li>
                    </ul>
                </div>
            </div>
        )
    })

    const showFollowersData = followers?.map((elem) => {
        let follow = tocheck.find(e => e.address === elem.walletAddress)
        return (
            <div className="col-sm-3">
                <div className="inner-follow text-center">
                    <img src={elem?.ipfsImageUrl} alt="" width="100" height="100" style={{ borderRadius: '50%' }} />

                    <h4>{elem?.displayName}</h4>
                    <h6 className="grey">{elem?.followersCount} Followers</h6>
                    <hr />
                    <ul className="list-inline">
                        <li className="list-inline-item">
                        {account === elem?.walletAddress ? '' : follow ?
                         <button className="btn-common3" type="submit" onClick={() => Remove1(elem.walletAddress)} >UnFollow</button>
                          : <button className="btn-common3" type="submit" onClick={() => AddFollower1(elem.walletAddress)} >Follow</button>
                          }
                           
                        </li>
                    </ul>
                </div>
            </div>
        )
    })




    return (
        <>
            <section className="main-bg">
                <div className="container">
                    <Header />
                </div>
                <div className="container-fluid p0">

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-img">
                                <img src="/pegify/profile-assets/banner-image.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row ptb20">
                        <div className="col-sm-12 text-center">
                            <div className="inner-content">
                                <div>
                                    <img src={userDetail?.ipfsImageUrl} alt="" width="200" height="200" style={{ borderRadius: '50%' }} />
                                </div>
                                <h2 className="pt-4">{userDetail?.displayName}</h2>
                                <p className="ptb20">{userDetail?.bio}</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div className="inner-icon">
                                            {userDetail?.facebookUserName &&
                                                <a href={fbLink} target="_blank" className="facebook" rel="noreferrer">
                                                </a>
                                            }
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="inner-icon">
                                            {userDetail?.twitterUserName &&
                                                <a href={twitterLink} target="_blank" className="twitter" rel="noreferrer">
                                                </a>
                                            }
                                        </div>
                                    </li>
                                    {/* <li className="list-inline-item">
                                        <div className="inner-icon">
                                            <a href="" target="_blank" className="web">

                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                                {/* <ul className="list-inline ptb20">
                                    <li className="list-inline-item">
                                        <div className="inner-icon">
                                        </div>
                                    </li>
                                </ul> */}
                                <ul className="list-inline ptb20">
                                    <li className="list-inline-item">
                                    <div className="inner-icon">
                                    {followed == false ?
                                     <button className="btn-common" type="button" onClick={AddFollower}>Follow</button> 
                                     : <button className="btn-common" type="button" onClick={RemoveUnfollow}>Unfollow</button>}
                                        </div>
                                      

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="explore">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-tabs">
                                <ul className="nav nav-pills mb-3  ptb20" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className=" for-tabs active" id="pills-owend-tab" data-toggle="pill" href="#owned"
                                            role="tab" aria-controls="owned" aria-selected="true"
                                            onClick={() => getOwnedData()}
                                        >Owned
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className=" for-tabs" id="pills-onsale-tab" data-toggle="pill" href="#onsale" role="tab"
                                            aria-controls="onsale" aria-selected="true"
                                            onClick={() => Onsale()}
                                        >OnSale
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="for-tabs" id="pills-liked-tab" data-toggle="pill" href="#liked"
                                            role="tab" aria-controls="liked" aria-selected="false"
                                            onClick={() => GetLikesData()}
                                        >Liked

                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="for-tabs" id="pills-created-tab" data-toggle="pill" href="#created"
                                            role="tab" aria-controls="created" aria-selected="false"
                                            onClick={() => Created()}
                                        >Created

                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="for-tabs" id="pills-follow-tab" data-toggle="pill" href="#follow"
                                            role="tab" aria-controls="follow" aria-selected="false"
                                            onClick={Followings}  >Following  </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="for-tabs" id="pills-follower-tab" data-toggle="pill" href="#follower"
                                            role="tab" aria-controls="follower" aria-selected="false"
                                            onClick={Followers}  >Followers
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active " id="owned" role="tabpanel" aria-labelledby="owned">
                                        <div className="row ptb20">
                                            {open ?
                                                <MyLoader toggle={open} /> :
                                                showOwnedData
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade " id="onsale" role="tabpanel" aria-labelledby="onsale">
                                        <div className="row ptb20">
                                            {open ?
                                                <MyLoader toggle={open} /> :
                                                showOnSaleData
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="liked" role="tabpanel"
                                        aria-labelledby="liked">
                                        <div className="row ptb20">
                                            {open ?
                                                <MyLoader toggle={open} /> :
                                                showLikedData.length > 0 ? showLikedData :
                                                    <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="created" role="tabpanel"
                                        aria-labelledby="created">
                                        <div className="row ptb20">
                                            {open ?
                                                <MyLoader toggle={open} /> :
                                                showCreatedData.length > 0 ? showCreatedData :
                                                    <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="follow" role="tabpanel"
                                        aria-labelledby="follow">
                                        <div className="row ptb20">
                                            {open ?
                                                <MyLoader toggle={open} /> :
                                                showFollowingsData?.length > 0 ? showFollowingsData :
                                                    <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="follower" role="tabpanel"
                                        aria-labelledby="follower">
                                        <div className="row ptb20">
                                            {open ?
                                                <MyLoader toggle={open} /> :
                                                showFollowersData?.length > 0 ? showFollowersData :
                                                    <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OwnerProfile;