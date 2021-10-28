import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import './mainlanding.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Art, Photography, Games, Sports, Memes, GetTokenAndDetails,LikeToken,UnLikeToken,GetAllNftsAndDetails } from '../../redux/action';
import Header from '../header/Header';
import Box from '@mui/material/Box';
import { useWeb3React } from '@web3-react/core';

import Slider from '@mui/material/Slider';
const MainLanding = () => {
    function valuetext(value) {
        return `${value}°C`;
    }
    const [value, setValue] = React.useState([15, 70]);
    const { account } = useWeb3React();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
   
   const reRender=()=>{

       dispatch(GetAllNftsAndDetails())
   }

    const token = useSelector(state => state.CollectionReducer.GetAllToken)
    console.log("token",token)
    const Like =(contractAddress,tokenID)=>{
         dispatch(LikeToken(contractAddress,account,tokenID))
         reRender()
        }
    const unLike =(contractAddress,tokenID)=>{
        dispatch(UnLikeToken(contractAddress,account,tokenID))
        // dispatch(GetAllNftsAndDetails())
        reRender();
   }
    // useEffect(() => {
    //    dispatch(GetAllNftsAndDetails())
    // }, [account])
    // const userLike = useSelector(state => state.CollectionReducer.GetUserLike)
    // console.log("userLike",userLike)
    const dispatch = useDispatch();
    const display = token.map((elem, index) => {
        const creator = elem.creators.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} className="img-fluid inner-tiless" alt="" />
                </Link>
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })
       
        let userLike=elem?.likedBy?.find(e=>e.address===account)
        console.log("userLike",userLike)
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
                    <Link to="artwork" onClick={() => dispatch(GetTokenAndDetails(elem.contractAddress, elem.walletAddress, elem.tokenID))}>
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />
                        <h4>{elem?.nftName}</h4>
                        {price}
                        <hr />
                    </Link>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                {userLike?.address==undefined ||userLike== null  ?
                                <button className="for-style11" onClick={()=>Like(elem.contractAddress,elem.tokenID)} >
                                    <img src="/pegify/heart-outline-icon.png" alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button>:
                               <button className="for-style11" onClick={() => unLike(elem.contractAddress, elem.tokenID)} >
                                <img src="/pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> {elem?.numerOfLikes} </span>

                            </button> 
                        }
                            </li>
                        </ul>
                </div>
            </div>
        )
    })

    const artData = useSelector(state => state.CollectionReducer.Art)
    const art = artData.map((elem) => {

        const creator = elem.creators.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} className="img-fluid inner-tiless" alt="" />
                </Link>
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })
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
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to="/artwork" onClick={() => dispatch(GetTokenAndDetails(elem.contractAddress, elem.walletAddress, elem.tokenID))}>
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button className="for-style11">
                                    {/* <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" /> */}
                                    <img src="pegify/heart-outline-icon.png" alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>

                                </button>
                            </li>
                        </ul>
                    </Link>
                </div>
            </div>
        )
    })

    const PhotoGraphyData = useSelector(state => state.CollectionReducer.PhotoGraphy)
    const photography = PhotoGraphyData.map((elem) => {
        const creator = elem.creators.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} className="img-fluid inner-tiless" alt="" />
                </Link>
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })
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
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to="/artwork" onClick={() => dispatch(GetTokenAndDetails(elem.contractAddress, elem.walletAddress, elem.tokenID))}>
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button className="for-style11">
                                    {/* <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" /> */}
                                    <img src="pegify/heart-outline-icon.png" alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button>
                            </li>
                        </ul>
                    </Link>
                </div>
            </div>
        )
    })

    const GamesData = useSelector(state => state.CollectionReducer.Games)
    const games = GamesData.map((elem) => {
        const creator = elem.creators.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} className="img-fluid inner-tiless" alt="" />
                </Link>
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })

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
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to="/artwork" onClick={() => dispatch(GetTokenAndDetails(elem.contractAddress, elem.walletAddress, elem.tokenID))}>
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button className="for-style11">
                                    {/* <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" /> */}
                                    <img src="pegify/heart-outline-icon.png" alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>

                                </button>
                            </li>
                        </ul>
                    </Link>
                </div>
            </div>
        )
    })



    const SportsData = useSelector(state => state.CollectionReducer.Sports)
    const sports = SportsData.map((elem) => {
        const creator = elem.creators.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} className="img-fluid inner-tiless" alt="" />
                </Link>
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })

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
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to="/artwork" onClick={() => dispatch(GetTokenAndDetails(elem.contractAddress, elem.walletAddress, elem.tokenID))}>
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button className="for-style11">
                                    {/* <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" /> */}
                                    <img src="pegify/heart-outline-icon.png" alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>

                                </button>
                            </li>
                        </ul>
                    </Link>
                </div>
            </div>
        )
    })


    const MemesData = useSelector(state => state.CollectionReducer.Memes)
    const memes = MemesData.map((elem) => {
        const creator = elem.creators.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} className="img-fluid inner-tiless" alt="" />
                </Link>
            )
        })
        const price = elem.orders.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })
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
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to="/artwork" onClick={() => dispatch(GetTokenAndDetails(elem.contractAddress, elem.walletAddress, elem.tokenID))}>
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button className="for-style11">
                                    {/* <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" /> */}
                                    <img src="pegify/heart-outline-icon.png" alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>

                                </button>
                            </li>
                        </ul>
                    </Link>
                </div>
            </div>
        )
    })



    const latestUpload = useSelector(state => state.CollectionReducer.GetLatestUploadNfts)
    const latest = latestUpload?.map((elem) => {
        const creator = elem.creators.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} alt="" width="20px" height="20px" className="inner-tiless" />
                </Link>
            )
        })
        const owner = elem?.users.map((elem) => {
            return (
                <Link to={`/profile/${elem.walletAddress}`}>
                    <img src={elem?.ipfsImageUrl} className="img-fluid inner-tiless" alt="" />
                </Link>
            )
        })
        const price = elem.orders?.map((elem) => {
            return (
                <h6 className="clr">{elem?.price} BNB</h6>
            )
        })
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
                    <Link to="/artwork" onClick={() => dispatch(GetTokenAndDetails(elem.contractAddress, elem.walletAddress, elem.tokenID))}>
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price}</h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button className="for-style11">
                                    {/* <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" /> */}
                                    <img src="pegify/heart-outline-icon.png" alt="" className="img-fluid" />
                                    <span className="grey"> 1.5k </span>

                                </button>
                            </li>
                        </ul>
                    </Link>
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
                                                    role="tab" aria-controls="pills-home" aria-selected="true">All</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" onClick={() => dispatch(Art())}
                                                    role="tab" aria-controls="pills-profile" aria-selected="false"
                                                >Art</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" onClick={() => dispatch(Photography())}
                                                    role="tab" aria-controls="pills-contact" aria-selected="false"
                                                >Photography</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-meme-tab" data-toggle="pill" href="#pills-meme" role="tab" onClick={() => dispatch(Games())}
                                                    aria-controls="pills-meme" aria-selected="false" >Games</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-Photography-tab" data-toggle="pill"
                                                    href="#pills-Photography" role="tab" aria-controls="pills-Photography" onClick={() => dispatch(Sports())}
                                                    aria-selected="false" >Sports</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-sports-tab" data-toggle="pill" href="#pills-sports" onClick={() => dispatch(Memes())}
                                                    role="tab" aria-controls="pills-sports" aria-selected="false"
                                                >Memes</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="col-lg-12">
                                    <div className="custom-slider">
                                        <h6>PRICE RANGE</h6>
                                        <Box sx={{ width: 300 }}>
                                            <Slider
                                                getAriaLabel={() => 'Temperature range'}
                                                value={value}
                                                onChange={handleChange}
                                                valueLabelDisplay="auto"
                                                getAriaValueText={valuetext}
                                            />
                                        </Box>
                                    </div>
                                </div> */}


                                <div className="tab-content" id="pills-tabContent">

                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                        <div className="row ptb20">

                                            {display.length > 0 ? display :
                                                <div>No Item</div>
                                            }

                                        </div>

                                    </div>

                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="row ptb20">

                                            {art.length > 0 ? art :
                                                <div>No Item</div>
                                            }

                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="row ptb20">

                                            {photography.length > 0 ? photography :
                                                <div>No Item</div>
                                            }

                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-meme" role="tabpanel" aria-labelledby="pills-meme-tab">
                                        <div class="row ptb20">

                                            {games.length > 0 ? games :
                                                <div>No Item</div>
                                            }


                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-Photography" role="tabpanel"
                                        aria-labelledby="pills-Photography-tab">
                                        <div className="row ptb20">
                                            {sports.length > 0 ? sports :
                                                <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-sports" role="tabpanel" aria-labelledby="pills-sports-tab">
                                        <div className="row ptb20">
                                            {memes.length > 0 ? photography :
                                                <div>No Item</div>
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
                                <li className="list-inline-item">
                                    <button className="btn-common">Load more</button>
                                </li>
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

                                <img src="pegify\landing-assets\video.png" alt="" className="img-fluid" />
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
                                                <img src="pegify\landing-assets\artist-social-facebook.png" alt=""
                                                    class="img-fluid" />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="inner-icon">
                                            {/* <a href=""> */}
                                            <img src="/pegify\landing-assets\artist-social-twitter.png" alt=""
                                                className="img-fluid" />
                                            {/* </a> */}
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="inner-icon">
                                            {/* <a href=""> */}
                                            <img src="/pegify\landing-assets\artist-social-dribbble.png" alt=""
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
                                <img src="pegify\landing-assets\featured-artist-image.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mobile ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <img src="pegify\landing-assets\mobile-image (1).png" alt="" className="img-fluid" />
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
                                        {/* <a href=""> */}
                                        <img src="pegify\socails\discord-icon.svg" alt="" className="img-fluid" />
                                        {/* </a> */}
                                    </li>
                                    <li className="list-inline-item">
                                        {/* <a href=""> */}
                                        <img src="pegify\socails\twitter-icon.svg" alt="" className="img-fluid" />
                                        {/* </a> */}
                                    </li>
                                    <li className="list-inline-item">
                                        {/* <a href=""> */}
                                        <img src="pegify\socails\facebook-icon.svg" alt="" className="img-fluid" />
                                        {/* </a> */}
                                    </li>
                                    <li className="list-inline-item">
                                        {/* <a href=""> */}
                                        <img src="pegify\socails\instagram-icon.svg" alt="" className="img-fluid" />
                                        {/* </a> */}
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
                                {/* <div className="col-sm-3" >
                        <div className="inner-card">
                            <div >
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div className="inner-tile" data-toggle="tooltip" data-placement="top"
                                            title="Creator">
                                            <img src="" alt="" className="img-fluid"
                                               />
                                            <img src="../../assets/Vector.svg" alt="" className="img-fluid for-check"/>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="inner-tile2" data-toggle="tooltip" data-placement="top"
                                            title="Owner">
                                            <img src="" alt="" className="img-fluid"
                                               />
                                            <img src="../../assets/Vector.svg" alt="" className="img-fluid for-check"/>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div className="inner-tile" data-toggle="tooltip" data-placement="top"
                                            title="Creator">
                                            <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                    fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                    fill="#35374A" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="list-inline-item" >
                                        <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                fill="#35374A" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div routerLink="/art-work/{{latest.id}}/{{mydata}}">
                                <img src="{{latest?.imageLink}}" alt="" className="img-fluid mb10  mx-auto d-block"
                                   />

                                <h4>fggf</h4>
                                <h6 className="clr">fgf BNB</h6>
                            </div>
                            <hr/>
                            <ul className="list-inline">
                                <li className="list-inline-item" >
                                    <img src="../../assets/pegify/heart-outline.png" alt="" className="img-fluid"/>
                                    <span className="grey">fggf </span>
                                </li>
                                <li className="list-inline-item" >
                                    <img src="../../assets/pegify/landing-assets/heart.png" alt="" className="img-fluid"/>
                                    <span className="grey"> ffgg </span>
                                </li>
                            </ul>
                        </div>
                    </div> */}

                                {latest}

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