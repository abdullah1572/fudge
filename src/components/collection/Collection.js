import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './collection.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Art, Photography, Games, Sports, Memes, GetTokenAndDetails } from '../../redux/action';
import Header from '../header/Header';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const Collection = () => {
    function valuetext(value) {
        return `${value}°C`;
    }
    const [value, setValue] = React.useState([0.01, 20]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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

    const token = useSelector(state => state.CollectionReducer.GetAllToken)
    const dispatch = useDispatch();
    const display = token?.map((elem) => {
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
                    <Link to="/artwork" onClick={() => dispatch(GetTokenAndDetails(elem.contractAddress, elem.walletAddress, elem.tokenID))}>
                        <img src={elem?.imageUrl} alt="" className="img-fluid mb10 set_width_height" />
                        <h4>{elem?.nftName}</h4>
                        {price}
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> {elem?.numerOfLikes} </span>
                            </li>
                        </ul>
                    </Link>
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

                        <h4>{elem?.userName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> {elem?.numerOfLikes} </span>
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

                        <h4>{elem?.userName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> {elem?.numerOfLikes} </span>
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
                                <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> {elem?.numerOfLikes} </span>
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

                        <h4>{elem?.userName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> {elem?.numerOfLikes} </span>
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

                        <h4>{elem?.userName}</h4>
                        <h6 className="clr">{price} </h6>
                        <hr />
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <img src="pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> {elem?.numerOfLikes} </span>
                            </li>
                        </ul>
                    </Link>
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
                                    <div className="col-sm-4">
                                        <div className="custom-slider">
                                            <h6>PRICE RANGE</h6>
                                            <Box sx={{}}>
                                                <Slider
                                                    getAriaLabel={() => 'Temperature range'}
                                                    value={value}
                                                    onChange={handleChange}
                                                    valueLabelDisplay="auto"
                                                    getAriaValueText={valuetext}
                                                />
                                            </Box>
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