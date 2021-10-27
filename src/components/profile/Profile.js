
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetUserData } from '../../redux/action';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import './profile.scss';
import { Owned, OnSale, Liked, Created } from '../../redux/action';
import Header from '../header/Header';
const Profile = () => {

    const { walletAddress } = useParams();
    const { account } = useWeb3React()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetUserData(walletAddress));
        dispatch(Owned(walletAddress))
    }, [walletAddress, dispatch])
    const userData = useSelector(state => state.CollectionReducer.GetUserData);
    const fbLink = userData?.facebookUserName?.includes('https://') ? userData?.facebookUserName : `https://${userData?.facebookUserName}`;
    const twitterLink = userData?.twitterUserName?.includes('https://') ? userData?.twitterUserName : `https://${userData?.twitterUserName}`;
    const instaLink = userData?.instagramUserName?.includes('https://') ? userData?.instagramUserName : `https://${userData?.instagramUserName}`;

    const ownedData = useSelector(state => state.CollectionReducer.GetOwnedData);

    const showOwnedData = ownedData.map((elem) => {
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
        return (
            <div className="col-sm-3">
                <Link to="/artwork">
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
                                <img src="/pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> 1.5k </span>
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        )
    })

    const onSaleData = useSelector(state => state.CollectionReducer.GetOnSaleData);

    console.log("onSaleData", onSaleData)
    const showOnSaleData = onSaleData.map((elem) => {
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
        return (
            <div className="col-sm-3">
                <Link to="/artwork">
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
                                <img src="/pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> 1.5k </span>
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        )
    })


    const likedData = useSelector(state => state.CollectionReducer.GetLikedData);
    const showLikedData = likedData.map((elem) => {
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
        return (
            <div className="col-sm-3">
                <Link to="/artwork">
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
                                <img src="/pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> 1.5k </span>
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        )
    })


    const createdData = useSelector(state => state.CollectionReducer.GetCreatedData);

    const showCreatedData = createdData.map((elem) => {
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
        return (
            <div className="col-sm-3">
                <Link to="/artwork">
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
                                <img src="/pegify/landing-assets/heart.png" alt="" className="img-fluid" />
                                <span className="grey"> 1.5k </span>
                            </li>
                        </ul>
                    </div>
                </Link>
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
                                <img src={userData?.ipfsImageUrl} alt="" width="200" height="200" style={{ borderRadius: '50%' }} />
                                <h2 className="pt-4">{userData?.displayName}</h2>
                                <p className="ptb20">{userData?.bio}</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">

                                        <div className="inner-icon">
                                            {userData?.facebookUserName &&
                                                <a href={fbLink} target="_blank" className="facebook" rel="noreferrer">
                                                </a>
                                            }
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="inner-icon">
                                            {userData?.twitterUserName &&
                                                <a href={twitterLink} target="_blank" className="twitter" rel="noreferrer">
                                                </a>
                                            }
                                        </div>
                                    </li>
                                    {/* <li className="list-inline-item">
                                        <div className="inner-icon">
                                            <a href={instaLink} target="_blank" className="web" rel="noreferrer">
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                                <ul className="list-inline ptb20">
                                    <li className="list-inline-item">
                                        {walletAddress !== account &&
                                            <div className="inner-icon">
                                                <button className="btn-common">follow</button>
                                            </div>
                                        }
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
                                        <a className=" for-tabs active" id="pills-owned-tab" data-toggle="pill" href="#pills-owned"
                                            onClick={() => dispatch(Owned(walletAddress))}
                                            role="tab" aria-controls="pills-owned" aria-selected="true" >Owned
                                            {/* <span className="grey">1</span>  */}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className=" for-tabs" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                            onClick={() => dispatch(OnSale(walletAddress))}
                                            aria-controls="pills-home" aria-selected="true" >On Sale
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="for-tabs" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                            onClick={() => dispatch(Liked(walletAddress))}
                                            role="tab" aria-controls="pills-profile" aria-selected="false" >Liked
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="for-tabs" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                                            onClick={() => dispatch(Created(walletAddress))}
                                            role="tab" aria-controls="pills-contact" aria-selected="false">Created
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="for-tabs" id="pills-activity-tab" data-toggle="pill" href="#pills-activity"
                                            role="tab" aria-controls="pills-activity" aria-selected="false">Activity</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="for-tabs" id="pills-following-tab" data-toggle="pill" href="#pills-following"
                                            role="tab" aria-controls="pills-following" aria-selected="false" >Following
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="for-tabs" id="pills-follower-tab" data-toggle="pill" href="#pills-follower"
                                            role="tab" aria-controls="pills-follower" aria-selected="false">Followers

                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="row ptb20">

                                            {showOnSaleData.length > 0 ? showOnSaleData :
                                                <div>No Item</div>
                                            }

                                        </div>
                                    </div>
                                    <div className="tab-pane fade  show active" id="pills-owned" role="tabpanel"
                                        aria-labelledby="pills-owned-tab">
                                        <div className="row ptb20">
                                            {showOwnedData.length > 0 ? showOwnedData :
                                                <div>No Item</div>
                                            }

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                        aria-labelledby="pills-profile-tab">
                                        <div className="row ptb20">

                                            {showLikedData.length > 0 ? showLikedData :
                                                <div>No Item</div>
                                            }


                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        <div className="row ptb20">

                                            {showCreatedData.length > 0 ? showCreatedData :
                                                <div>No Item</div>
                                            }

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-activity" role="tabpanel"
                                        aria-labelledby="pills-activity-tab">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="inner-side">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <div className="inner-drop">
                                                                <div className="dropdown show">
                                                                    <h5>Event Type</h5>
                                                                    <a className="btn dropdown-toggle" role="button"
                                                                        id="dropdownMenuLink" data-toggle="dropdown"
                                                                        aria-haspopup="true" aria-expanded="false">
                                                                        All
                                                                    </a>

                                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                        <a className="dropdown-item" href="#">Listing</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="#">Sale</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="#">Purchased</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="#">Created</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Item</th>
                                                                        <th scope="col">Event</th>
                                                                        <th scope="col">Unit Price</th>
                                                                        <th scope="col">Quantity</th>
                                                                        <th scope="col">From</th>
                                                                        <th scope="col">To</th>
                                                                        <th scope="col">Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <img src="../../assets/pegify/yoy.png" alt=""
                                                                                className="img-fluid" />
                                                                        </td>
                                                                        <td>Listing</td>
                                                                        <td>0.70 BNB</td>
                                                                        <td>01</td>
                                                                        <td>Baylee</td>
                                                                        <td>-</td>
                                                                        <td>11 Jun</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <img src="../../assets/pegify/yoy.png" alt=""
                                                                                className="img-fluid" />
                                                                        </td>
                                                                        <td>Listing</td>
                                                                        <td>0.70 BNB</td>
                                                                        <td>01</td>
                                                                        <td>Baylee</td>
                                                                        <td>-</td>
                                                                        <td>11 Jun</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <img src="../../assets/pegify/yoy.png" alt=""
                                                                                className="img-fluid" />
                                                                        </td>
                                                                        <td>Listing</td>
                                                                        <td>0.70 BNB</td>
                                                                        <td>01</td>
                                                                        <td>Baylee</td>
                                                                        <td>-</td>
                                                                        <td>11 Jun</td>

                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-following" role="tabpanel"
                                        aria-labelledby="pills-following-tab">
                                        <div className="row ptb20">
                                            <div className="col-sm-3" >
                                                <div className="inner-follow text-center">
                                                    <div >
                                                        <svg width="135" height="135" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                fill="#35374A" />
                                                        </svg>
                                                    </div>
                                                    <div >
                                                        <img src="{{items?.profileImage}}" alt="" className="img-show"
                                                        />
                                                    </div>
                                                    <h4>ss</h4>
                                                    <h6 className="grey">12 Followers</h6>
                                                    <hr />
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item" >
                                                            <button className="btn-common" >Unfollow</button>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <button className="btn-common" >Follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="pills-follower" role="tabpanel"
                                        aria-labelledby="pills-follower-tab">
                                        <div className="row ptb20">
                                            <div className="col-sm-3" >
                                                <div className="inner-follow text-center">
                                                    <div>
                                                        <svg width="200" height="200" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                fill="#35374A" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <img src="{{items?.profileImage}}" alt="" className="img-show"
                                                        />
                                                    </div>
                                                    <h4>sdsda</h4>
                                                    <h6 className="grey">12 Followers</h6>
                                                    <hr />
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item" >
                                                            <button className="btn-common" >Unfollow</button>
                                                        </li>
                                                        <li className="list-inline-item" >
                                                            <button className="btn-common" >Follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="inner-follow text-center">
                                                    <svg width="105" height="105" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                    <h4>Baylee</h4>
                                                    <h6 className="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <button className="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="inner-follow text-center">
                                                    <svg width="105" height="105" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                    <h4>Baylee</h4>
                                                    <h6 className="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <button className="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="inner-follow text-center">
                                                    <svg width="105" height="105" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                    <h4>Baylee</h4>
                                                    <h6 className="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <button className="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-3">
                                                <div className="inner-follow text-center">
                                                    <svg width="105" height="105" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                    <h4>Baylee</h4>
                                                    <h6 className="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <button className="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="inner-follow text-center">
                                                    <svg width="105" height="105" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                    <h4>Baylee</h4>
                                                    <h6 className="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <button className="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="inner-follow text-center">
                                                    <svg width="105" height="105" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                    <h4>Baylee</h4>
                                                    <h6 className="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <button className="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="inner-follow text-center">
                                                    <svg width="105" height="105" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                    <h4>Baylee</h4>
                                                    <h6 className="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <button className="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
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

export default Profile;