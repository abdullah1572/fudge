import React,{useEffect} from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import { GetUserNFTS,GetUserData } from '../../redux/action';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import './profile.scss';
const Profile = () => {

    const {walletAddress} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetUserData(walletAddress));
    }, [walletAddress])
    const userData = useSelector(state => state.CollectionReducer.GetUserData);
    const owl_option = {

        margin: 40,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        dotsEach: true,
        loop: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,

            },
            400: {
                items: 1,

            },
            600: {
                items: 1,

            },
            700: {
                items: 1,

            },
        },
    };

    return (
        <>

            <section class="main-bg">
                <div class="container">
                    {/* <Header/> */}
                </div>
                <div class="container-fluid p0">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="inner-img">
                                <img src="/pegify/profile-assets/banner-image.png" alt="" class="img-fluid" />
                                {/* <img  src="data:image/png;base64,{{{mydata?.profileImage}}" alt="" class="img-show">  */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row ptb20">
                        <div class="col-sm-12 text-center">
                            <div class="inner-content">
                                {userData?.ipfsImageUrl>0 ?
                                <img src={userData?.ipfsImageUrl} alt="" width="130" height="150" style={{borderRadius:'50%'}}/>
                             :   <div>
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
}
                                {/* <div>
                                    <img src="{{mydata?.profileImage}}" alt="" class="img-show"
                                    />
                                </div> */}
                                <h2 class="pt-4">{userData?.displayName}</h2>
                                <p class="ptb20">{userData?.displayName}</p>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <div class="inner-icon">
                                            <a href="" target="_blank" class="facebook">
                                            </a>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <div class="inner-icon">
                                            <a href="" target="_blank" class="twitter">

                                            </a>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <div class="inner-icon">
                                            <a href="" target="_blank" class="web">

                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="list-inline ptb20">
                                    <li class="list-inline-item">
                                        <div class="inner-icon">
                                            {/* <!-- <button class="btn-common">follow</button> --> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section class="explore">
                {/* <ngx-spinner bdColor="rgba(0, 0, 0, 0.8)" size="medium" color="#fff" type="square-jelly-box" [fullScreen]="true">
        <p style="color: white">Loading ... </p>
    </ngx-spinner> */}

                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            {/* <h2>EXPLORE</h2>  */}
                            <div class="inner-tabs">
                                <ul class="nav nav-pills mb-3  ptb20" id="pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class=" for-tabs active" id="pills-owned-tab" data-toggle="pill" href="#pills-owned"
                                            role="tab" aria-controls="pills-owned" aria-selected="true" >Owned
                                            <span class="grey">1</span> </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class=" for-tabs" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                            aria-controls="pills-home" aria-selected="true" >On Sale <span
                                                class="grey">2</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="for-tabs" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                            role="tab" aria-controls="pills-profile" aria-selected="false"
                                        >Liked <span class="grey">3</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="for-tabs" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                                            role="tab" aria-controls="pills-contact" aria-selected="false"
                                        >Created <span class="grey">4</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="for-tabs" id="pills-activity-tab" data-toggle="pill" href="#pills-activity"
                                            role="tab" aria-controls="pills-activity" aria-selected="false">Activity</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="for-tabs" id="pills-following-tab" data-toggle="pill" href="#pills-following"
                                            role="tab" aria-controls="pills-following" aria-selected="false"
                                        >Following <span class="grey">5</span> </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="for-tabs" id="pills-follower-tab" data-toggle="pill" href="#pills-follower"
                                            role="tab" aria-controls="pills-follower" aria-selected="false"
                                        >Followers <span class="grey">6</span> </a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div class="row ptb20">
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade  show active" id="pills-owned" role="tabpanel"
                                        aria-labelledby="pills-owned-tab">
                                        <div class="row ptb20">
                                            <div class="col-sm-3">
                                                <Link to="artwork">
                                                    <div class="inner-card">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item">
                                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                    <img src="/pegify/landing-assets/user-image.png" alt="" class="inner-tiless" />
                                                                    <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                                </div>
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                    <img src="/pegify/landing-assets/user-image-two.png" alt="" class="img-fluid inner-tiless" />
                                                                    <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <img src="/pegify/landing-assets/team-img-one.png" alt="" class="img-fluid mb10" />

                                                        <h4>#11 EVOL Tech</h4>
                                                        <h6 class="clr">0.70 BNB</h6>
                                                        <hr />
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item">
                                                                <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                                <span class="grey"> 1.5k </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-sm-3">
                                                <Link to="artwork">
                                                    <div class="inner-card">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item">
                                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                    <img src="/pegify/landing-assets/user-image.png" alt="" class="inner-tiless" />
                                                                    <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                                </div>
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                    <img src="/pegify/landing-assets/user-image-two.png" alt="" class="img-fluid inner-tiless" />
                                                                    <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <img src="/pegify/landing-assets/team-img-two.png" alt="" class="img-fluid mb10" />

                                                        <h4>#11 EVOL Frank</h4>
                                                        <h6 class="clr">0.70 BNB</h6>
                                                        <hr />
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item">
                                                                <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                                <span class="grey"> 1.5k </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/user-image.png" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/user-image-two.png" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/team-img-three.png" alt="" class="img-fluid mb10" />

                                                    <h4>#11 EVOL Yayo</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/user-image.png" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/user-image-two.png" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/team-img-four.png" alt="" class="img-fluid mb10" />

                                                    <h4>#11 EVOL Blue</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                        aria-labelledby="pills-profile-tab">
                                        <div class="row ptb20">
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                        aria-labelledby="pills-contact-tab">
                                        <div class="row ptb20">
                                  

                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                                <img src="/pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                                <img src="/pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <img src="/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                                    <h4>MAN X MACHINE</h4>
                                                    <h6 class="clr">0.70 BNB</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="/pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                            <span class="grey"> 1.5k </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-activity" role="tabpanel"
                                        aria-labelledby="pills-activity-tab">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="inner-side">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <div class="inner-drop">
                                                                <div class="dropdown show">
                                                                    <h5>Event Type</h5>
                                                                    <a class="btn dropdown-toggle" href="#" role="button"
                                                                        id="dropdownMenuLink" data-toggle="dropdown"
                                                                        aria-haspopup="true" aria-expanded="false">
                                                                        All
                                                                    </a>

                                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                        <a class="dropdown-item" href="#">Listing</a>
                                                                        <div class="dropdown-divider"></div>
                                                                        <a class="dropdown-item" href="#">Sale</a>
                                                                        <div class="dropdown-divider"></div>
                                                                        <a class="dropdown-item" href="#">Purchased</a>
                                                                        <div class="dropdown-divider"></div>
                                                                        <a class="dropdown-item" href="#">Created</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <table class="table">
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
                                                                                class="img-fluid" />
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
                                                                                class="img-fluid" />
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
                                                                                class="img-fluid" />
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
                                    <div class="tab-pane fade" id="pills-following" role="tabpanel"
                                        aria-labelledby="pills-following-tab">
                                        <div class="row ptb20">
                                            <div class="col-sm-3" >
                                                <div class="inner-follow text-center">
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
                                                        <img src="{{items?.profileImage}}" alt="" class="img-show"
                                                        />
                                                    </div>
                                                    <h4>ss</h4>
                                                    <h6 class="grey">12 Followers</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item" >
                                                            <button class="btn-common" >Unfollow</button>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <button class="btn-common" >Follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                
                                        </div>

                                    </div>
                                    <div class="tab-pane fade" id="pills-follower" role="tabpanel"
                                        aria-labelledby="pills-follower-tab">
                                        <div class="row ptb20">
                                            <div class="col-sm-3" >
                                                <div class="inner-follow text-center">
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
                                                        <img src="{{items?.profileImage}}" alt="" class="img-show"
                                                        />
                                                    </div>
                                                    <h4>sdsda</h4>
                                                    <h6 class="grey">12 Followers</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item" >
                                                            <button class="btn-common" >Unfollow</button>
                                                        </li>
                                                        <li class="list-inline-item" >
                                                            <button class="btn-common" >Follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-follow text-center">
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
                                                    <h6 class="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <button class="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-follow text-center">
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
                                                    <h6 class="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <button class="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-follow text-center">
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
                                                    <h6 class="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <button class="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-3">
                                                <div class="inner-follow text-center">
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
                                                    <h6 class="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <button class="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-follow text-center">
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
                                                    <h6 class="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <button class="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-follow text-center">
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
                                                    <h6 class="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <button class="btn-common3">follow</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="inner-follow text-center">
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
                                                    <h6 class="grey">1.2k Followers</h6>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <button class="btn-common3">follow</button>
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