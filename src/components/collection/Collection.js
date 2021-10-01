import React from 'react';
import Header from '../header/Header';
import './collection.scss';
const Collection = () => {
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
            <section class="">
    <div class="container">
        <Header/>
    </div>
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
                                        <a class="btn-common-2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                            role="tab" aria-controls="pills-profile" aria-selected="false"
                                        >Art</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn-common-2" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                                            role="tab" aria-controls="pills-contact" aria-selected="false"
                                        >Photography</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn-common-2" id="pills-meme-tab" data-toggle="pill" href="#pills-meme" role="tab"
                                            aria-controls="pills-meme" aria-selected="false" >Games</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn-common-2" id="pills-Photography-tab" data-toggle="pill"
                                            href="#pills-Photography" role="tab" aria-controls="pills-Photography"
                                            aria-selected="false" >Sports</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn-common-2" id="pills-sports-tab" data-toggle="pill" href="#pills-sports"
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
                                        <div class="custom-slider">
                                            <h6>PRICE RANGE</h6>
                                            {/* <ngx-slider [(value)]="value" [(highValue)]="highValue" [options]="options"
                                    (mouseup)="valueofprice()"></ngx-slider> */}
                                        </div>

                                    </div>
                                </div>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                        aria-labelledby="pills-home-tab">
                                        <div class="row ptb20">
                                            {/* <div class="col-sm-3" >
                                    <div class="inner-card">
                                        <div >
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <img src="" alt=""
                                                            class="img-fluid"
                                                            />
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check" />
                                                    </div>
                                                </li>
                                                <li class="list-inline-item">
                                                    <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                                        title="Owner">
                                                        <img src="" alt="" class="img-fluid"
                                                            />
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
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
                                                <li class="list-inline-item" >
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
                                        <div>
                                            <img src="pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10 mx-auto d-block"
                                                />

                                            <h4>itemname</h4>
                                        </div>

                                        <h6 class="clr">price BNB</h6>
                                        <hr />

                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/heart-outline.png" alt=""
                                                    class="img-fluid" />
                                                <span class="grey">itemlikes</span>
                                            </li>
                                            <li class="list-inline-item" >
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                    class="img-fluid" />
                                                <span class="grey"> itemlike </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
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
                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                        aria-labelledby="pills-profile-tab">
                                        <div class="row ptb20">
                                            <div class="col-sm-3">
                                                <div class="inner-card">
                                                    <div>
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item">
                                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                                    title="Creator">
                                                                    <img src="" alt=""
                                                                        class="img-fluid" />
                                                                    <img src="../../assets/Vector.svg" alt=""
                                                                        class="img-fluid for-check" />
                                                                </div>
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                                                    title="Owner">
                                                                    <img src="" alt="" class="img-fluid" />
                                                                    <img src="../../assets/Vector.svg" alt=""
                                                                        class="img-fluid for-check" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
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
                                                            <li class="list-inline-item" >
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
                                                    <div >
                                                        <img src="" alt="" class="img-fluid mb10 mx-auto d-block"
                                                        />

                                                        <h4>fdgfg</h4>
                                                        <h6 class="clr"> BNB</h6>
                                                    </div>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item" >
                                                            <img src="../../assets/pegify/heart-outline.png" alt=""
                                                                class="img-fluid" />
                                                            <span class="grey">fgf </span>
                                                        </li>
                                                        <li class="list-inline-item" >
                                                            <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                                class="img-fluid" />
                                                            <span class="grey"> gfgf </span>
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
                                                    <div>
                                                        <div >
                                                            <ul class="list-inline">
                                                                <li class="list-inline-item">
                                                                    <div class="inner-tile" data-toggle="tooltip"
                                                                        data-placement="top" title="Creator">
                                                                        <img src="" alt=""
                                                                            class="img-fluid"
                                                                        />
                                                                        <img src="../../assets/Vector.svg" alt=""
                                                                            class="img-fluid for-check" />
                                                                    </div>
                                                                </li>
                                                                <li class="list-inline-item">
                                                                    <div class="inner-tile2" data-toggle="tooltip"
                                                                        data-placement="top" title="Owner">
                                                                        <img src="" alt=""
                                                                            class="img-fluid"
                                                                        />
                                                                        <img src="../../assets/Vector.svg" alt=""
                                                                            class="img-fluid for-check" />
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div >
                                                            <ul class="list-inline">
                                                                <li class="list-inline-item">
                                                                    <div class="inner-tile" data-toggle="tooltip"
                                                                        data-placement="top" title="Creator">
                                                                        <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                                            <path opacity="0.3" fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                                fill="#35374A" />
                                                                        </svg>
                                                                    </div>
                                                                </li>
                                                                <li class="list-inline-item" >
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
                                                        <img src="" alt="" class="img-fluid mb10 mx-auto d-block"
                                                        />

                                                        <h4>ddfd</h4>
                                                        <h6 class="clr">df BNB</h6>
                                                    </div>
                                                    <hr />
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="../../assets/pegify/heart-outline.png" alt=""
                                                                class="img-fluid" />
                                                            <span class="grey">vb </span>
                                                        </li>
                                                        <li class="list-inline-item" >
                                                            <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                                class="img-fluid" />
                                                            <span class="grey"> bnb</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-meme" role="tabpanel" aria-labelledby="pills-meme-tab">
                                        <div class="row ptb20">
                                            {/* <div class="col-sm-3" >
                                    <div class="inner-card">
                                        <div>
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <img src="" alt=""
                                                            class="img-fluid"
                                                            />
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check"/>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item">
                                                    <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                                        title="Owner">
                                                        <img src="" alt="" class="img-fluid"
                                                            />
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check"/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
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
                                                <li class="list-inline-item" >
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
                                        <div routerLink="/art-work/{{items.id}}/{{mydata}}">
                                            <img src="{{items.imageLink}}" alt="" class="img-fluid mb10 mx-auto d-block"
                                                />

                                            <h4>vhg</h4>
                                            <h6 class="clr">fh BNB</h6>
                                        </div>
                                        <hr/>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/heart-outline.png" alt=""
                                                    class="img-fluid"/>
                                                <span class="grey">vb </span>
                                            </li>
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                    class="img-fluid"/>
                                                <span class="grey">vb </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
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
                                    </div>
                                    <div class="tab-pane fade" id="pills-Photography" role="tabpanel"
                                        aria-labelledby="pills-Photography-tab">
                                        <div class="row ptb20">
                                            {/* <div class="col-sm-3">
                                    <div class="inner-card">
                                        <div >
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <img src="" alt=""
                                                            class="img-fluid"
                                                            />
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check"/>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item">
                                                    <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                                        title="Owner">
                                                        <img src="" alt="" class="img-fluid"
                                                            />
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check"/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div >
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
                                                <li class="list-inline-item" >
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
                                        <div >
                                            <img src="" alt="" class="img-fluid mb10 mx-auto d-block"
                                                />

                                            <h4>cgfg</h4>
                                            <h6 class="clr">cvv BNB</h6>
                                        </div>
                                        <hr/>
                                        <ul class="list-inline">
                                            <li class="list-inline-item" >
                                                <img src="../../assets/pegify/heart-outline.png" alt=""
                                                    class="img-fluid"/>
                                                <span class="grey">dgdg </span>
                                            </li>
                                            <li class="list-inline-item" >
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                    class="img-fluid"/>
                                                <span class="grey">dgdg </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
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
                                    </div>
                                    <div class="tab-pane fade" id="pills-sports" role="tabpanel" aria-labelledby="pills-sports-tab">
                                        <div class="row ptb20">
                                            {/* <div class="col-sm-3" >
                                    <div class="inner-card">
                                        <div>
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <img src="{{items.Creator.profileImage}}" alt=""
                                                            class="img-fluid"
                                                           />
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check"/>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item">
                                                    <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                                        title="Owner">
                                                        <img src="{{items.Owner.profileImage}}" alt="" class="img-fluid"
                                                           />
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check"/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div >
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
                                                <li class="list-inline-item">
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
                                        <div routerLink="/art-work/{{items.id}}/{{mydata}}">
                                            <img src="" alt="" class="img-fluid mb10 mx-auto d-block"
                                               />

                                            <h4>ccc</h4>
                                            <h6 class="clr">cvc BNB</h6>
                                        </div>
                                        <hr/>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/heart-outline.png" alt=""
                                                    class="img-fluid"/>
                                                <span class="grey">fgg </span>
                                            </li>
                                            <li class="list-inline-item" >
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                    class="img-fluid"/>
                                                <span class="grey"> dfdf </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
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