import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './mainlanding.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Art, Photography, Games, Sports, Memes } from '../../redux/action';
import Header from '../header/Header';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../../ApiURL';

import MyLoader from '../Loader/MyLoader';

const MainLanding = () => {

    const [discover, setDiscover] = useState([]);
    const { account } = useWeb3React();
    const [open, setOpen] = useState(false);
    const [count,setCount]=useState(20);
    const LoadMore=()=>{
        setCount(count+4)
    }

    
    const getDiscover = async () => {
        setOpen(true)
        axios.get(`${API_URL}/token/getAllTokensAndDetails`)
            .then((res) => {
                setDiscover(res.data.data)
                setOpen(false)
            }).catch((err) => {
                return err;
            })
    }

    useEffect(() => {
        getDiscover()
    }, [])


    const LikeToken = (contractAddress, walletAddress, tokenID, index) => {
        if (walletAddress !== undefined) {
            axios.post(`${API_URL}/token/like`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = discover;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setDiscover([...temp])
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
                    let temp = discover;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setDiscover([...temp])
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

 
   
    const getArt = async () => {
        setOpen(true)
        axios.get(`${API_URL}/token/getAllTokensOfArt`)
            .then((res) => {
                setDiscover(res.data.data)
                setOpen(false)
            }).catch((err) => {
                return err;
            })
    }
    const getPhotoGraphy = async () => {
        setOpen(true)
        axios.get(`${API_URL}/token/getAllTokensOfPhotography`)
            .then((res) => {
                setDiscover(res.data.data)
                setOpen(false)
            }).catch((err) => {
                return err;
            })
    }
    const getGames = async () => {
        setOpen(true)
        axios.get(`${API_URL}/token/getAllTokensOfGames`)
            .then((res) => {
                setDiscover(res.data.data)
                setOpen(false)
            }).catch((err) => {
                return err;
            })
    }
    const getSports = async () => {
        setOpen(true)
        axios.get(`${API_URL}/token/getAllTokensOfSports`)
            .then((res) => {
                setDiscover(res.data.data)
                setOpen(false)
            }).catch((err) => {
                return err;
            })
    }
    const getMemes = async () => {
        setOpen(true)
        axios.get(`${API_URL}/token/getAllTokensOfMemes`)
            .then((res) => {
                setDiscover(res.data.data)
                setOpen(false)
            }).catch((err) => {
                return err;
            })
    }
  
    const display = discover?.slice(0,count)?.map((elem, index) => {
        const creator = elem.creators.map((elem) => {
            return (
                <Link to={`/creatorprofile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/ownerprofile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} className="img-fluid inner-tiless" alt="" />
                </Link>
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} {elem?.currency}</h6>
            )
        })

        let userLike = elem?.likedBy?.find(e => e.address === account)
        return (
            <div className="col-sm-3" key={index}>
                <div className="inner-card image-width">
                    <ul className="list-inline ">
                        <li className="list-inline-item">
                            <div className="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                {creator}
                            </div>
                        </li>
                        <li className="list-inline-item ">
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to={`/artwork/${elem.contractAddress}/${elem.tokenID}`}>
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />
                        <h4>{elem?.nftName}</h4>
                        {price}
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


    const latestUpload = useSelector(state => state.CollectionReducer.GetLatestUploadNfts)
    const latest = latestUpload?.map((elem, index) => {
        const creator = elem.creators.map((elem) => {
            return (
                <Link to={`/creatorprofile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/ownerprofile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} className="img-fluid inner-tiless" alt="" />
                </Link>
            )
        })
        const price = elem.orders?.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} {elem?.currency}</h6>
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
                    <Link to={`/artwork/${elem.contractAddress}/${elem.tokenID}`} >
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
            <section className="main-banner">
                <div className="container">
                    <Header />
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="inner-content  ptb">
                                <h2 className="">Welcome to Fudge</h2>
                                <h1>The #1 Community Based NFT Platform</h1>
                                <p className="">Create, Sell, or Buy your NFTs with our biggest NFT Community</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div className="inner-btn">
                                            <Link to="/collection"><button className="btn-newscoll" >SEE COLLECTIONS<img src="pegify/landing-assets/coll1.png" alt="" className="pl-3" /></button></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="inner-imgs">
                                <img src="pegify/landing-assets/header-image.svg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="explore explore-land ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2>EXPLORE</h2>
                                </div>
                            </div>
                            <div className="inner-tabs">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <ul class="nav nav-pills mb-3  ptb20" id="pills-tab" role="tablist">
                                            <li class="nav-item" active>
                                                <a class=" btn-common-2 active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                                    role="tab" aria-controls="pills-home" aria-selected="true" onClick={getDiscover}>All</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" onClick={getArt}
                                                    role="tab" aria-controls="pills-profile" aria-selected="false"
                                                >Art</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" onClick={getPhotoGraphy}
                                                    role="tab" aria-controls="pills-contact" aria-selected="false"
                                                >Photography</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-meme-tab" data-toggle="pill" href="#pills-meme" role="tab" onClick={getGames}
                                                    aria-controls="pills-meme" aria-selected="false" >Games</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-Photography-tab" data-toggle="pill"
                                                    href="#pills-Photography" role="tab" aria-controls="pills-Photography" onClick={getSports}
                                                    aria-selected="false" >Sports</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-sports-tab" data-toggle="pill" href="#pills-sports" onClick={getMemes}
                                                    role="tab" aria-controls="pills-sports" aria-selected="false"
                                                >Memes</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="custom-slider">
                                        <h6>PRICE RANGE</h6>
                                        <div class="dropdown main-price-range-floa">
                                            <button class="drop-downsss" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Choose Price $
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <div className="main-outer-fort">
                                                    <div className="input-main main-input-two">
                                                        <input type="number" class="form-control " id="number" placeholder="From" />
                                                        <small>Fudge</small>
                                                    </div>
                                                    <div className="input-main  main-input-one">
                                                        <input type="number" class="form-control" id="number" placeholder="To" />
                                                        <small>Fudge</small>
                                                    </div>
                                                </div>
                                                <div className="outer-buttons">
                                                    <button type="button" className="button-one">Clear</button>
                                                    <button type="button" className="button-two">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tab-content" id="pills-tabContent">

                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                        <div className="row ptb20">
                                        {open ?
                                               <MyLoader toggle={open} />:
                                               display
                                        }
                                              
                                        </div>

                                    </div>

                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="row ptb20">
                                        {open ?
                                               <MyLoader toggle={open} />:
                                               display
                                        }
                                        

                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="row ptb20">
                                        {open ?
                                               <MyLoader toggle={open} />:
                                               display
                                        }

                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-meme" role="tabpanel" aria-labelledby="pills-meme-tab">
                                        <div class="row ptb20">
                                        {open ?
                                               <MyLoader toggle={open} />:
                                               display
                                        }


                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-Photography" role="tabpanel"
                                        aria-labelledby="pills-Photography-tab">
                                        <div className="row ptb20">
                                        {open ?
                                               <MyLoader toggle={open} />:
                                               display
                                        }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-sports" role="tabpanel" aria-labelledby="pills-sports-tab">
                                        <div className="row ptb20">
                                        {open ?
                                               <MyLoader toggle={open} />:
                                               display
                                        }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row ptb20">
                        <div className="col-sm-12 text-center">
                            <ul className="list-inline">
                            {/* {display.length>0 && */}
                                <li className="list-inline-item">  
                                 {discover.length > count 
                                      ? <button className="btn-common"  onClick={LoadMore}>LOAD MORE</button>
                                       : <button className="btn-common" >No More Items</button>
                                          } 
                                  
                                </li>
                            {/* } */}
                          {/* {art.length>0 &&
                                <li className="list-inline-item">  
                                 {artsData.length > count 
                                      ? <button className="btn-common"  onClick={LoadMoreArt}>LOAD MORE</button>
                                       : <button className="btn-common" >No More Items</button>
                                          } 
                                  
                                </li> */}
                            {/* } */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="getnft ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-content text-center">
                                <h2>GET YOUR VERY FIRST NFT!</h2>
                                <h4 className="grey">Here's how it works</h4>
                                <iframe className="main-images-ss" width="100%" height="550px" src="https://www.youtube.com/embed/NNQLJcJEzv0" 
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                {/* <img src="pegify\landing-assets\video.png" alt="" className="img-fluid" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services ptb">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div className="main-head">
                                <h2>Create And Sell Now</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-sm-4">
                            <div class="box-hover-vv mb-5 mb-md-0">
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="box-contents">
                                    <div class="inner-side">
                                        <img src="pegify\landing-assets\setup-wallet-icon.svg" alt="" class="img-fluid" />
                                        <h4>Setup your Wallet</h4>
                                        <p class="grey">Once you’ve set up your wallet of choice, connect it to Fudge NFTs by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="box-hover-vv mb-5 mb-md-0">
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="box-contents">
                                    <div class="inner-side">
                                        <img src="pegify\landing-assets\add-your-nfts-icon.svg" alt="" class="img-fluid" />
                                        <h4>Add your NFTs</h4>
                                        <p class="grey">Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="box-hover-vv">
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="hover-point"></div>
                                <div class="box-contents">
                                    <div class="inner-side">
                                        <img src="pegify\landing-assets\list-them-for-sale-icon.svg" alt="" class="img-fluid" />
                                        <h4>List Them for sale</h4>
                                        <p class="grey">Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="featured ptb">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="inner-content">
                                <h3 class="">FEATURED ARTIST</h3>
                                <h2>Adijavar Maccaroni</h2>
                                <p class="">I believe that love is difficult, but worth trying</p>
                                <ul class="list-inline ptb20">
                                    <li class="list-inline-item">
                                        <div class="inner-icon">
                                            <a href="">
                                                <img src="/pegify/landing-assets/artist-social-facebook.png" alt=""
                                                    class="img-fluid" />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="inner-icon">
                                            {/* <a href=""> */}
                                            <img src="/pegify/landing-assets/artist-social-twitter.png" alt=""
                                                className="img-fluid" />
                                            {/* </a> */}
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="inner-icon">
                                            {/* <a href=""> */}
                                            <img src="/pegify/landing-assets/artist-social-dribbble.png" alt=""
                                                className="img-fluid" />
                                            {/* </a> */}
                                        </div>
                                    </li>
                                </ul>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <div class="inner-btn">
                                            <Link to="/collection"><button class="button-new-artust">VIEW COLLECTION<img src="pegify/landing-assets/coll1.png" alt="" class="pl-3" /></button></Link>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="inner-btn">
                                            <button className="btn-common-2">follow</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="inner-artist">
                                <img src="/pegify/landing-assets/featured-artist-image.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mobile ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <img src="/pegify/landing-assets/mobile-image (1).png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pink ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">

                        </div>
                        <div className="col-sm-6">
                            <div className="inner-content text-center">
                                <h2>Join The Fudge Community</h2>
                                <p className="grey ptb20">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Fudge.</p>
                                <div className="row">
                                    <div className="col-sm-9 p-0">
                                        <div className="form-group mx-sm-3 mb-2">
                                            <input type="" className="form-control" id="" placeholder="Your Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-sm-3 p-0">
                                        <button className="btn-common">SEND</button>
                                    </div>
                                </div>

                                <ul className="list-inline ptb20">
                                    <li className="list-inline-item">
                                        <a href="https://t.me/joinchat/AMNMKB50Qkw5NjE0" target="_blank">
                                            <img src="/pegify/icons/telegram-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.youtube.com/channel/UCwemAO_Osvo-N13c1efBA1g" target="_blank">
                                            <img src="/pegify/icons/youtube-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/FUDGE-109913607947898" target="_blank">
                                            <img src="/pegify/icons/facebook-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/FudgeToken" target="_blank">
                                            <img src="/pegify/icons/twitter-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/fudgetoken/" target="_blank">
                                            <img src="/pegify/icons/instagram-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/company/fudge-token/" target="_blank">
                                            <img src="/pegify/icons/linkedin-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.reddit.com/user/FudgeToken" target="_blank">
                                            <img src="/pegify/icons/reddit-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">

                        </div>
                    </div>
                </div>
            </section>

            <section className="latest ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">

                            <div className="row">
                                <div className="col-sm-12">
                                    <h2> <span className="clr">LATEST</span> UPLOADS</h2>
                                </div>
                            </div>
                            <div className="row ptb20">
                                {latest.length > 0 ? latest :
                                    <div>No Item</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* <app-footer></app-footer> */}
        </>
    )
}

export default MainLanding;