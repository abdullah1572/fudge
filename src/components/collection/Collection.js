import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './collection.scss';
import Header from '../header/Header';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../../ApiURL';
import MyLoader from '../Loader/MyLoader';

const Collection = () => {

    const [dropDown, setDropDown] = useState('Recently');
    const [discover, setDiscover] = useState([]);

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
                                <div className="row">
                                    <div className="col-sm-8">
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
                                                    href="#pills-Photography" role="tab" aria-controls="pills-Photography"onClick={getSports}
                                                    aria-selected="false" >Sports</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="btn-common-2" id="pills-sports-tab" data-toggle="pill" href="#pills-sports" onClick={getMemes}
                                                    role="tab" aria-controls="pills-sports" aria-selected="false"
                                                >Memes</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                        {/* <h6>Select Token</h6> */}
                                        <div className="main-outer-fort pl-0">

                                            <div className="switch ttt">
                                                <span className="yoyo">BNB</span>
                                                <label className="switch">
                                                    <input type="checkbox" name="putOnMarketplace" className="custom-control-input" id="customSwitch2" />
                                                    <span className="slider round"></span>
                                                </label>
                                                <span className="yoyo">FUDGE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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
                                              
                                            </div>
                                      
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="col-sm-4 d-block d-sm-none d-md-none d-lg-none d-xl-none">
                                    
                                        <div className="main-outer-fort ptb20 pl-0">

                                            <div className="switch ttt">
                                                <span className="yoyo">BNB</span>
                                                <label className="switch">
                                                    <input type="checkbox" name="putOnMarketplace" className="custom-control-input" id="customSwitch2" />
                                                    <span className="slider round"></span>
                                                </label>
                                                <span className="yoyo">FUDGE</span>
                                            </div>
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
                                                            <input type="number" class="form-control " id="number" placeholder="From"  />
                                                        </div>
                                                        <div className="input-main  main-input-one">
                                                            <input type="number" class="form-control" id="number" placeholder="To" />

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
                                        {open ?
                                               <MyLoader toggle={open} />:
                                               display
                                        }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                        aria-labelledby="pills-profile-tab">
                                        <div className="row ptb20">
                                        {open ?
                                               <MyLoader toggle={open} />:
                                               display
                                        }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        <div className="row ptb20">
                                        {open ?
                                               <MyLoader toggle={open} />:
                                               display
                                        }


                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-meme" role="tabpanel" aria-labelledby="pills-meme-tab">
                                        <div className="row ptb20">
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

                            <div className="row ptb20">
                                <div className="col-sm-12 text-center">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                        {discover.length > count 
                                      ? <button className="btn-common"  onClick={LoadMore}>LOAD MORE</button>
                                       : <button className="btn-common" >No More Items</button>
                                          } 
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