import React from 'react';
import Header from '../header/Header';
import './owner.scss';
const OwnerArtWork= () => {
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

            <section class="main-banner">
                <div class="container">
                    {/* <Header /> */}
                    <div class="row ptb">
                        {/* <ngx-spinner bdColor="rgba(0, 0, 0, 0.8)" size="medium" color="#fff" type="square-jelly-box"
                [fullScreen]="true"></div>
                <p style="color: white">Loading ... </p>
            </ngx-spinner> */}

                        <div class="col-sm-6">
                            <div class="art-image">
                                <a a href="#myModal" role="button" class="btn btn-primary" data-toggle="modal"><img
                                    src="pegify/art-work/Rectangle12.png" class="img-fluid" /></a>
                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog modal-full" role="document">
                                        <div class="modal-content" >
                                            <div class="modal-body p-4" id="result">
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <img src="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <ul class="list-inline ptbb">
                                                <li class="">
                                                    <div class="icon-1">
                                                        <a routerLink="/owner-pro/{{onecollection?.Creator.id}}"
                                                            data-dismiss="modal">
                                                            <img src="pegify/art-work/profile-img.png" alt=""
                                                                class="img-fluid img-1" />&nbsp;&nbsp;
                                                            <span class="grey-1">Abdullah</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="pt-3">
                                                    <h4>NFT MM</h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="art-inner">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="profile">
                                            {/* <ul class="list-inline">
                                                <li class="list-inline-item"><img src="pegify/art-work/profile-img.png" class="img-fluid" /></li>
                                                <li class="list-inline-item">
                                                    <div class="profile-text">
                                                        Baylee
                                                    </div>
                                                </li>
                                            </ul> */}
                                            <div class="profile-heading">
                                                <h2 class="inner-heading" >
                                                    NFTMM</h2>
                                                <h4 class="inner-para"> <span>345 BNB</span></h4>
                                            </div>
                                            <div class="icons">
                                                <ul class="list-inline">
                                                    {/* <li class="list-inline-item" >
                                                        <img src="pegify/heart-outline.png" alt="" class="img-fluid" />
                                                        <span class="grey">25 </span>
                                                    </li> */}
                                                    <li class="list-inline-item" >
                                                        <img src="pegify/landing-assets/heart.png" alt=""
                                                            class="img-fluid" />
                                                        <span class="grey"> 20</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="main-para">
                                                <p class="inner-para">This is Dummy NFT</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row ptb20">
                                    <div class="col-sm-12">
                                        <div class="owner" >
                                            <a>
                                                <h6 className="black">Owner</h6>

                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><img src="pegify/profile-assets/artist-image-four.png"
                                                        class="img-fluid inner-imagess"
                                                    />
                                                    </li>
                                                    <li class="list-inline-item grey-1">abdullah</li>
                                                </ul>
                                            </a>
                                        </div>
                                        {/* <div >
                                            <a>
                                                <h6>Owner</h6>

                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <div class="inner-tile" data-toggle="tooltip" data-placement="top"
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
                                                    <li class="list-inline-item grey-1">
                                                        abdullah
                                                    </li>
                                                </ul>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="owner" >
                                            <a>
                                                <h6 className="black">Creator</h6>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><img src="pegify/profile-assets/artist-image-four.png"
                                                        class="img-fluid inner-imagess"
                                                    /></li>
                                                    <li class="list-inline-item grey-1">gfdg</li>
                                                </ul>
                                            </a>
                                        </div>
                                        {/* <div >
                                            <a>
                                                <h6>Creator</h6>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <div class="inner-tile" data-toggle="tooltip" data-placement="top"
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
                                                    <li class="list-inline-item grey-1"> abdullah
                                                    </li>
                                                </ul>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                                <div class="row ptbb">
                                    <div class="col-sm-12">
                                        <div class="inner-btn">
                                            <button class="btn-common-1" data-toggle="modal" data-target="#exampleModal1">BUY NOW
                                                FOR 23 BNB</button>
                                            <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="mx-auto">Checkout</h4>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="row ptb20">
                                                                <div class="col-sm-4 main-margin-sho text-center">
                                                                    <img src="pegify/art-work/img-9.png" class="img-fluid" />
                                                                </div>
                                                                <div class="col-sm-8 main-margin-sho">
                                                                    <div class="inner-man">
                                                                        <h4>Prime</h4>


                                                                        {/* <div>
                                                                            <h6>Owner</h6>
                                                                            <ul class="list-inline">
                                                                                <li class="list-inline-item"><img
                                                                                    src=""
                                                                                    class="img-fluid"
                                                                                />
                                                                                </li>
                                                                                <li class="list-inline-item grey-1">
                                                                                    abdullah</li>
                                                                            </ul>
                                                                        </div> */}
                                                                        <div >
                                                                            <h6>Owner</h6>
                                                                            <ul class="list-inline">
                                                                                <li class="list-inline-item">
                                                                                    <div class="inner-tile" data-toggle="tooltip"
                                                                                        data-placement="top" title="Creator">
                                                                                        <svg width="50" height="50"
                                                                                            viewBox="0 0 56 56" fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <path
                                                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                                                fill="#F6F6F6" stroke="white"
                                                                                                stroke-width="3" />
                                                                                            <path opacity="0.3" fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                                                fill="#35374A" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </li>
                                                                                <li class="list-inline-item grey-1">
                                                                                    abdullah
                                                                                </li>
                                                                            </ul>
                                                                        </div>


                                                                        {/* <div>
                                                                            <h6>Created</h6>
                                                                            <ul class="list-inline">
                                                                                <li class="list-inline-item"><img
                                                                                    src=""
                                                                                    class="img-fluid"
                                                                                />
                                                                                </li>
                                                                                <li class="list-inline-item grey-1">
                                                                                    Abdullah</li>
                                                                            </ul>
                                                                        </div> */}
                                                                        <div >
                                                                            <h6>Created</h6>
                                                                            <ul class="list-inline">
                                                                                <li class="list-inline-item">
                                                                                    <div class="inner-tile" data-toggle="tooltip"
                                                                                        data-placement="top" title="Creator">
                                                                                        <svg width="50" height="50"
                                                                                            viewBox="0 0 56 56" fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <path
                                                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                                                fill="#F6F6F6" stroke="white"
                                                                                                stroke-width="3" />
                                                                                            <path opacity="0.3" fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                                                fill="#35374A" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </li>
                                                                                <li class="list-inline-item grey-1">
                                                                                    abdullah
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row main-margin-sho">
                                                                <div class="col-sm-10 main-margin-sho">
                                                                    <p class="grey">Item</p>
                                                                </div>
                                                                <div class="col-sm-2 main-margin-sho">
                                                                    <p class="grey">Total</p>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div class="row main-margin-sho">
                                                                <div class="col-sm-9 main-margin-sho" >

                                                                    <p class="grey"><strong>Item Price</strong></p>
                                                                </div>

                                                                <div class="col-sm-3 main-margin-sho">
                                                                    <h6><span>23 BNB</span></h6>
                                                                </div>

                                                            </div>

                                                            <div class="row main-margin-sho">
                                                                <div class="col-sm-9 main-margin-sho">

                                                                    <p class="grey"><strong>Service Fees</strong></p>
                                                                </div>

                                                                <div class="col-sm-3 main-margin-sho">
                                                                    <h6><span>0.1 BNB</span></h6>
                                                                </div>

                                                            </div>
                                                            <div class="row main-margin-sho">
                                                                <div class="col-sm-9 main-margin-sho">

                                                                    <p class="grey"><strong>Total</strong></p>
                                                                </div>

                                                                <div class="col-sm-3 main-margin-sho">
                                                                    <h6><span class="clr">total 23 BNB</span></h6>
                                                                </div>

                                                            </div>
                                                            <hr />
                                                            <div class="row ptb20">
                                                                <div class="col-sm-12">
                                                                    <div class="custom-control custom-checkbox mr-sm-2">
                                                                        <input type="checkbox" class="custom-control-input"
                                                                            id="customControlAutosizing" />
                                                                        &nbsp;
                                                                        <label class="custom-control-label"
                                                                            for="customControlAutosizing"><small>I agree to Pegify's
                                                                                <span><a>Terms of Service</a></span></small></label>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div class="row">
                                                                <div class="col-sm-12 text-center">
                                                                    <ul class="list-inline">
                                                                        <li class="list-inline-item"><button class="btn-common"
                                                                            data-toggle="modal" data-target="#exampleModal2">Proceed to
                                                                            Payment</button></li>
                                                                        {/* <li class="pt-3"><a class="pt-3">Add Funds</a></li> */}
                                                                        <div class="modal fade" id="exampleModal2" tabindex="-1"
                                                                            role="dialog" aria-labelledby="exampleModalLabel"
                                                                            aria-hidden="true">
                                                                            <div class="modal-dialog" role="document">
                                                                                <div class="modal-content">
                                                                                    <div class="modal-header">
                                                                                        <h4 class="mx-auto" >Success</h4>
                                                                                        <button type="button" class="close"
                                                                                            data-dismiss="modal" aria-label="Close">
                                                                                            <span aria-hidden="true">&times;</span>
                                                                                        </button>
                                                                                    </div>
                                                                                    <div class="modal-body">
                                                                                        <div class="row ptb20">
                                                                                            <div class="col-sm-12 text-center">
                                                                                                <h4>Your NFT Has Been Purchased
                                                                                                    Successfully</h4>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="modal-footer">
                                                                                        <button type="button"
                                                                                            class="btn btn-secondary"
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
                                    </div>
                                    {/* <div class="col-sm-6">
                                        <div class="inner-btn">
                                            <button class="btn-common-1">PLACE A BID</button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section class="latest">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h2> <span class="clr">MORE FROM</span> THIS CREATOR</h2>
                            <div class="row ptb20">
                                <div class="col-sm-3">
                                    <div class="inner-card">
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr />
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
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
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr />
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
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
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr />
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
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
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr />
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                <span class="grey"> 1.5k </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row ptb20">
                                <div class="col-sm-3">
                                    <div class="inner-card">
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr />
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
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
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr />
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
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
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr />
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
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
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class=" for-check" />
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="pegify/landing-assets/Ellipse.svg" alt="" class="img-fluid inner-tiless" />
                                                    <img src="pegify/landing-assets/Vector.svg" alt="" class="img-fluid for-check" />
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10" />

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr />
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="pegify/landing-assets/heart.png" alt="" class="img-fluid" />
                                                <span class="grey"> 1.5k </span>
                                            </li>
                                        </ul>
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
            </section> */}

        </>
    )
}

export default OwnerArtWork;