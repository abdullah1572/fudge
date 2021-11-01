import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './collection.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Art, Photography, Games, Sports, Memes, GetTokenAndDetails } from '../../redux/action';
import Header from '../header/Header';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../../ApiURL';

const Collection = () => {

    const [dropDown, setDropDown] = useState('Recently');

    const sortBy = [

        {
            itemList: 'Recently',
        },
        {
            itemList: 'Recently Created',
        },
        {
            itemList: 'Low to High'
        },
        {
            itemList: 'High to Low'
        }
    ]
    const dispatch = useDispatch();;
    const { account } = useWeb3React();
    const token = useSelector(state => state.CollectionReducer.GetAllToken)
    const artData = useSelector(state => state.CollectionReducer.Art)
    const PhotoGraphyData = useSelector(state => state.CollectionReducer.PhotoGraphy)
    const GamesData = useSelector(state => state.CollectionReducer.Games)
    const SportsData = useSelector(state => state.CollectionReducer.Sports)
    const MemesData = useSelector(state => state.CollectionReducer.Memes)

    const [tokenData,setAllToken]=useState([]) 
    const [artsData,setArtData]=useState([]) 
    const [photographyData,setPhotographyData]=useState([]) 
    const [gamesData,setGamesData]=useState([]) 
    const [sportsData,setSportsData]=useState([]) 
    const [memesData,setMemesData]=useState([]) 

    useEffect(()=>{
        setAllToken(token)
        setArtData(artData)
        setPhotographyData(PhotoGraphyData)
        setGamesData(GamesData)
        setSportsData(SportsData)
        setMemesData(MemesData)
    },[token,artData,PhotoGraphyData,GamesData,SportsData,MemesData])



    const LikeToken = async(contractAddress, walletAddress, tokenID , index) => {
        if (walletAddress !== undefined) {
         axios.post(`${API_URL}/token/like`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = tokenData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setAllToken([...temp])
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

    const UnlikeToken = (contractAddress, walletAddress, tokenID,index) => {
        if (walletAddress !== undefined) {
            console.log(contractAddress, walletAddress, tokenID)
            axios.post(`${API_URL}/token/unlike`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = artsData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setAllToken([...temp])
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



    const artLikeToken = async(contractAddress, walletAddress, tokenID , index) => {
        if (walletAddress !== undefined) {
         axios.post(`${API_URL}/token/like`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = artsData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setArtData([...temp])
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

    const artUnlikeToken = (contractAddress, walletAddress, tokenID,index) => {
        if (walletAddress !== undefined) {
            axios.post(`${API_URL}/token/unlike`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = tokenData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setArtData([...temp])
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


    const photoLikeToken = async(contractAddress, walletAddress, tokenID , index) => {
        if (walletAddress !== undefined) {
         axios.post(`${API_URL}/token/like`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = photographyData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setPhotographyData([...temp])
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

    const photoUnlikeToken = (contractAddress, walletAddress, tokenID,index) => {
        if (walletAddress !== undefined) {
            axios.post(`${API_URL}/token/unlike`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = photographyData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setPhotographyData([...temp])
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
    

    const gameLikeToken = async(contractAddress, walletAddress, tokenID , index) => {
        if (walletAddress !== undefined) {
         axios.post(`${API_URL}/token/like`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = gamesData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setGamesData([...temp])
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

    const gameUnlikeToken = (contractAddress, walletAddress, tokenID,index) => {
        if (walletAddress !== undefined) {
            axios.post(`${API_URL}/token/unlike`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = gamesData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setGamesData([...temp])
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


    const sportLikeToken = async(contractAddress, walletAddress, tokenID , index) => {
        if (walletAddress !== undefined) {
         axios.post(`${API_URL}/token/like`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = sportsData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setSportsData([...temp])
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

    const sportUnlikeToken = (contractAddress, walletAddress, tokenID,index) => {
        if (walletAddress !== undefined) {
            axios.post(`${API_URL}/token/unlike`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = sportsData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setSportsData([...temp])
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

    const memesLikeToken = async(contractAddress, walletAddress, tokenID , index) => {
        if (walletAddress !== undefined) {
         axios.post(`${API_URL}/token/like`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = memesData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setMemesData([...temp])
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

    const memesUnlikeToken = (contractAddress, walletAddress, tokenID,index) => {
        if (walletAddress !== undefined) {
            axios.post(`${API_URL}/token/unlike`, { contractAddress: contractAddress, walletAddress: walletAddress, tokenID: tokenID })
                .then((res) => {
                    let temp = memesData;
                    temp[index].likedBy = res.data.data.likeToken.likedBy
                    temp[index].numerOfLikes = res.data.data.likeToken.numerOfLikes
                    setMemesData([...temp])
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


    const display = tokenData?.map((elem, index) => {
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
                <h6 className="clr">{elem?.price} BNB</h6>
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
                                <button className="for-style11" onClick={() => LikeToken(elem.contractAddress, account, elem.tokenID , index)} >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" onClick={() => UnlikeToken(elem.contractAddress, account, elem.tokenID , index)}>
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

 
    const art = artsData?.map((elem,index) => {
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
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to={`/artwork/${elem.contractAddress}/${elem.tokenID}`} >
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                    </Link>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            {!userLike ?
                                <button className="for-style11" onClick={() => artLikeToken(elem.contractAddress, account, elem.tokenID , index)} >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" onClick={() => artUnlikeToken(elem.contractAddress, account, elem.tokenID , index)}>
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

   
    const photography = photographyData?.map((elem,index) => {
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
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to={`/artwork/${elem.contractAddress}/${elem.tokenID}`} >
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                    </Link>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            {!userLike ?
                                <button className="for-style11" onClick={() => photoLikeToken(elem.contractAddress, account, elem.tokenID)} >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" onClick={() => photoUnlikeToken(elem.contractAddress, account, elem.tokenID)}>
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

 
    const games = gamesData?.map((elem,index) => {
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
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to={`/artwork/${elem.contractAddress}/${elem.tokenID}`} >
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                    </Link>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            {!userLike ?
                                <button className="for-style11" onClick={() => gameLikeToken(elem.contractAddress, account, elem.tokenID,index)} >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" onClick={() => gameUnlikeToken(elem.contractAddress, account, elem.tokenID,index)}>
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

    const sports = sportsData?.map((elem,index) => {
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
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to={`/artwork/${elem.contractAddress}/${elem.tokenID}`} >
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />
                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                    </Link>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                        {!userLike ?
                                <button className="for-style11" onClick={() => sportLikeToken(elem.contractAddress, account, elem.tokenID,index)} >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" onClick={() => sportUnlikeToken(elem.contractAddress, account, elem.tokenID,index)}>
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

    const memes = memesData?.map((elem,index) => {
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
                            <div className="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <Link to={`/artwork/${elem.contractAddress}/${elem.tokenID}`} >
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />

                        <h4>{elem?.nftName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                        </Link>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                            {!userLike ?
                                <button className="for-style11" onClick={() => memesLikeToken(elem.contractAddress, account, elem.tokenID,index)} >
                                    <img id={elem._id} src={elem?.unLikedImage} alt="" className="img-fluid" />
                                    <span className="grey"> {elem?.numerOfLikes} </span>
                                </button> :
                                <button className="for-style11" onClick={() => memesUnlikeToken(elem.contractAddress, account, elem.tokenID,index)}>
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
            <section class="container">
                <Header />
            </section>
            <section class="collection ptb">
                <div class="container">

                    <div class="row">
                        <div class="col-sm-12">
                            <h2 class="heading">COLLECTION</h2>
                            <div class="inner-tabs">
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
                                <hr />
                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="inner-search">
                                            <h6>SEARCH</h6>
                                            <div className="form-group has-search">
                                                <span className="fa fa-search form-control-feedback"></span>
                                                <input type="text" className="form-control" placeholder="Search Fudge"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="inner-drop">
                                            <h6>SORT BY</h6>
                                            <button className="button-discover-add_1" type="button" id="dropdownMenuButton " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {dropDown}
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                {/* <select> */}

                                                {sortBy.map((elem) => {
                                                    return (
                                                        <a className="dropdown-item" onClick={() => setDropDown(elem.itemList)}>{elem.itemList}</a>
                                                    )
                                                }
                                                )}
                                                {/* </select> */}
                                            </div>
                                            {/* <select name="" id="" className="form-control" > */}
                                            {/* <option value="Recently Listed">Recently</option>
                                                <option value="Recently Created">Recently Created</option>
                                                <option value="Low to High">Low to High</option>
                                                <option value="High to Low">High to Low</option> */}

                                            {/* </select> */}
                                            {/* <div className="dropdown show">
                                                <a className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Recently Added
                                                </a>

                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a className="dropdown-item">Recent Added</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" >Recent sold</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item">Recent mint</a>
                                                </div>
                                            </div> / */}
                                        </div>
                                    </div>
                                    <hr></hr>
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
                                                            {/* <div>
                                                                <div class="dropdown">
                                                                    <button class="new-bnb-dr" type="button" id="dropdownMenuButtontwoy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        BNB
                                                                    </button>
                                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButtontwoy">
                                                                        <a class="dropdown-item" href="#">FUDGE</a>
                                                                    </div>
                                                                </div>
                                                            </div> */}
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
                                </div>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                        aria-labelledby="pills-home-tab">
                                        <div className="row ptb20">
                                            {display.length > 0 ? display :
                                                <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                        aria-labelledby="pills-profile-tab">
                                        <div className="row ptb20">
                                            {art.length > 0 ? art :
                                                <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        <div className="row ptb20">
                                            {photography.length > 0 ? photography :
                                                <div>No Item</div>
                                            }


                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-meme" role="tabpanel" aria-labelledby="pills-meme-tab">
                                        <div className="row ptb20">
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

export default Collection;