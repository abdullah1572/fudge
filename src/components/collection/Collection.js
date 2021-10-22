import React from 'react';
import { Link } from 'react-router-dom';
import './collection.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Art, Photography, Games, Sports, Memes,GetTokenAndDetails } from '../../redux/action';
const Collection = () => {

    const token = useSelector(state => state.CollectionReducer.GetAllToken)
    const dispatch = useDispatch();
    const display = token?.map((elem) => {
        const creator=elem.creators.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class=" for-check" width="20px" height="20px" class="inner-tiless" />
            )
        })
        const owner=elem?.users.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class="img-fluid inner-tiless " />
            )
        })
        const price=elem.orders.map((elem)=>{
            return(
                <h6 class="clr">{elem?.price} BNB</h6>
            )
        })
        return (
            <div class="col-sm-3">
            <Link to="artwork" onClick={()=>dispatch(GetTokenAndDetails(elem.contractAddress,elem.walletAddress,elem.tokenID))}>
                <div class="inner-card image-width">
                    <ul class="list-inline ">
                        <li class="list-inline-item">
                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                              {creator}
                            </div>
                        </li>
                        <li class="list-inline-item ">
                            <div class="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                            </div>
                        </li>
                    </ul>
                    <img src={elem?.imageUrl} alt="" class="img-fluid mb10 set_width_height" />
                    <h4>{elem?.nftName}</h4>
                   {price}
                    <hr />
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                            <span class="grey"> {elem?.numerOfLikes} </span>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
        )
    })



    const artData = useSelector(state => state.CollectionReducer.Art)
    const art = artData.map((elem) => {
       
        const creator=elem?.creators.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class=" for-check" width="20px" height="20px" class="inner-tiless" />
            )
        })
        const owner=elem?.users.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class="img-fluid inner-tiless " />
            )
        })
        const price=elem.orders.map((elem)=>{
            return(
                <h6 class="clr">{elem?.price} BNB</h6>
            )
        })
        return (
            <div class="col-sm-3">
                <Link to="artwork" onClick={()=>dispatch(GetTokenAndDetails(elem.contractAddress,elem.walletAddress,elem.tokenID))}>
                    <div class="inner-card image-width">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                      {creator}
                                </div>
                            </li>
                            <li class="list-inline-item">
                                <div class="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                                {owner}
                                </div>
                            </li>
                        </ul>
                        <img src={elem?.imageUrl} alt="" class="img-fluid mb10 set_width_height" />

                        <h4>{elem?.userName}</h4>
                        <h6 class="clr">{price} </h6>
                        <hr />
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                <span class="grey"> {elem?.numerOfLikes} </span>
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        )
    })


   const PhotoGraphyData = useSelector(state => state.CollectionReducer.PhotoGraphy)
    const photography = PhotoGraphyData.map((elem) => {
        const creator=elem?.creators.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class=" for-check" width="20px" height="20px" class="inner-tiless" />
            )
        })
        const owner=elem?.users.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class="img-fluid inner-tiless " />
            )
        })
        const price=elem.orders.map((elem)=>{
            return(
                <h6 class="clr">{elem?.price} BNB</h6>
            )
        })
        return (
            <div class="col-sm-3">
            <Link to="artwork" onClick={()=>dispatch(GetTokenAndDetails(elem.contractAddress,elem.walletAddress,elem.tokenID))}>
                <div class="inner-card image-width">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                  {creator}
                            </div>
                        </li>
                        <li class="list-inline-item">
                            <div class="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                            {owner}
                            </div>
                        </li>
                    </ul>
                    <img src={elem?.imageUrl} alt="" class="img-fluid mb10 set_width_height" />

                    <h4>{elem?.userName}</h4>
                    <h6 class="clr">{price} </h6>
                    <hr />
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                            <span class="grey"> {elem?.numerOfLikes} </span>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
        )
    })

    const GamesData = useSelector(state => state.CollectionReducer.Games)
    const games = GamesData.map((elem) => {
        const creator=elem?.creators.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class=" for-check" width="20px" height="20px" class="inner-tiless" />
            )
        })
        const owner=elem?.users.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class="img-fluid inner-tiless " />
            )
        })
        const price=elem.orders.map((elem)=>{
            return(
                <h6 class="clr">{elem?.price} BNB</h6>
            )
        })
    
        return (
            <div class="col-sm-3">
            <Link to="artwork" onClick={()=>dispatch(GetTokenAndDetails(elem.contractAddress,elem.walletAddress,elem.tokenID))}>
                <div class="inner-card image-width">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                  {creator}
                            </div>
                        </li>
                        <li class="list-inline-item">
                            <div class="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                            {owner}
                            </div>
                        </li>
                    </ul>
                    <img src={elem?.imageUrl} alt="" class="img-fluid mb10 set_width_height" />

                    <h4>{elem?.nftName}</h4>
                    <h6 class="clr">{price} </h6>
                    <hr />
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                            <span class="grey"> {elem?.numerOfLikes} </span>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
        )
    })


    const SportsData = useSelector(state => state.CollectionReducer.Sports)
    const sports = SportsData.map((elem) => {
        const creator=elem?.creators.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class=" for-check" width="20px" height="20px" class="inner-tiless" />
            )
        })
        const owner=elem?.users.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class="img-fluid inner-tiless " />
            )
        })
        const price=elem.orders.map((elem)=>{
            return(
                <h6 class="clr">{elem?.price} BNB</h6>
            )
        })
    
        return (
            <div class="col-sm-3">
            <Link to="artwork" onClick={()=>dispatch(GetTokenAndDetails(elem.contractAddress,elem.walletAddress,elem.tokenID))}>
                <div class="inner-card image-width">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                  {creator}
                            </div>
                        </li>
                        <li class="list-inline-item">
                            <div class="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                            {owner}
                            </div>
                        </li>
                    </ul>
                    <img src={elem?.imageUrl} alt="" class="img-fluid mb10 set_width_height" />

                    <h4>{elem?.userName}</h4>
                    <h6 class="clr">{price} </h6>
                    <hr />
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                            <span class="grey"> {elem?.numerOfLikes} </span>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
        )
    })

    const MemesData = useSelector(state => state.CollectionReducer.Memes)
    const memes = MemesData.map((elem) => {
        const creator=elem?.creators.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class=" for-check" width="20px" height="20px" class="inner-tiless" />
            )
        })
        const owner=elem?.users.map((elem)=>{
            return(
                <img src={elem?.ipfsImageUrl} alt="" class="img-fluid inner-tiless " />
            )
        })
        const price=elem.orders.map((elem)=>{
            return(
                <h6 class="clr">{elem?.price} BNB</h6>
            )
        })
        return (
            <div class="col-sm-3">
            <Link to="artwork" onClick={()=>dispatch(GetTokenAndDetails(elem.contractAddress,elem.walletAddress,elem.tokenID))}>
                <div class="inner-card image-width">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                  {creator}
                            </div>
                        </li>
                        <li class="list-inline-item">
                            <div class="inner-tile2" data-toggle="tooltip" width="20px" height="20px" data-placement="top" title="Owner">
                            {owner}
                            </div>
                        </li>
                    </ul>
                    <img src={elem?.imageUrl} alt="" class="img-fluid mb10 set_width_height" />

                    <h4>{elem?.userName}</h4>
                    <h6 class="clr">{price} </h6>
                    <hr />
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                            <span class="grey"> {elem?.numerOfLikes} </span>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
        )
    })


       
    return (
        <>
            <section class="">
            </section>
            <section class="collection ptb">
                <div class="container">

                    <div class="row">
                        <div class="col-sm-12">
                            <h2 class="heading">COLLECTION</h2>
                            <div class="inner-tabs">
                                <ul class="nav nav-pills mb-3  ptb20" id="pills-tab" role="tablist">
                                    <li class="nav-item" active>
                                        <a class=" btn-common-2 " id="pills-home-tab" data-toggle="pill" href="#pills-home" 
                                            role="tab" aria-controls="pills-home" aria-selected="true">All</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn-common-2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"  onClick={() => dispatch(Art())}
                                            role="tab" aria-controls="pills-profile" aria-selected="false"
                                        >Art</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn-common-2" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"  onClick={() => dispatch(Photography())}
                                            role="tab" aria-controls="pills-contact" aria-selected="false"
                                        >Photography</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn-common-2" id="pills-meme-tab" data-toggle="pill" href="#pills-meme" role="tab"  onClick={() => dispatch(Games())}
                                            aria-controls="pills-meme" aria-selected="false" >Games</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn-common-2" id="pills-Photography-tab" data-toggle="pill"
                                            href="#pills-Photography" role="tab" aria-controls="pills-Photography"  onClick={() => dispatch(Sports())}
                                            aria-selected="false" >Sports</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn-common-2" id="pills-sports-tab" data-toggle="pill" href="#pills-sports"  onClick={() => dispatch(Memes())}
                                            role="tab" aria-controls="pills-sports" aria-selected="false"
                                        >Memes</a>
                                    </li>
                                </ul>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="inner-search">
                                            <h6>SEARCH</h6>
                                            <div class="form-group has-search">
                                                <span class="fa fa-search form-control-feedback"></span>
                                                <input type="text" class="form-control" placeholder="Search Fudge"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="inner-drop">
                                            <h6>SORT BY</h6>
                                            <select name="" id="" class="form-control" >
                                                <option value="Recently Listed">Recently</option>
                                                <option value="Recently Created">Recently Created</option>
                                                <option value="Low to High">Low to High</option>
                                                <option value="High to Low">High to Low</option>
                                            </select>
                                            {/* <div class="dropdown show">
                                                <a class="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Recently Added
                                                </a>

                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a class="dropdown-item">Recent Added</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" >Recent sold</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item">Recent mint</a>
                                                </div>
                                            </div> / */}
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        {/* <div class="custom-slider">
                                            <h6>PRICE RANGE</h6>
                                        </div> */}

                                    </div>
                                </div>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                        aria-labelledby="pills-home-tab">
                                        <div class="row ptb20">
                                        {display.length > 0 ? display :
                                                <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                        aria-labelledby="pills-profile-tab">
                                        <div class="row ptb20">
                                        {art.length > 0 ? art :
                                                <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        <div class="row ptb20">
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
                                    <div class="tab-pane fade" id="pills-Photography" role="tabpanel"
                                        aria-labelledby="pills-Photography-tab">
                                        <div class="row ptb20">
                                        {sports.length > 0 ? sports :
                                                <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-sports" role="tabpanel" aria-labelledby="pills-sports-tab">
                                        <div class="row ptb20">
                                        {memes.length > 0 ? photography :
                                                <div>No Item</div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="row ptb20">
                                <div class="col-sm-12 text-center">
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <button class="btn-common">Load more</button>
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