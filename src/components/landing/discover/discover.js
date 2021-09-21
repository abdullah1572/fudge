import React from 'react';
import './discover.scss';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
const Discover = () => {
    const owl_option = {
        
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            360: {
                items: 1,
                nav: true,
            },
            375: {
                items: 1,
                nav: true,
                stagePadding: 50,
            },
            600: {
                items: 1,
                nav: true,
                stagePadding: 50,
            },
            800: {
                items: 1,
                stagePadding: 50,
            },
            1000: {
                items: 1,
                stagePadding: 50,
            },
            1200: {
                items: 1,
                stagePadding: 50,
            }
        },
    };
    return (
        <>
            <div className="dark">
                <section className="discover ptb">
                    <div className="container container-container">
                        <div className="row">
                            <div className="col-sm-12 p-0">
                                <div className="inner-content ">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h2 className="">Discovers</h2>
                                            <div className="upper-filter">
                                                <div className="recently-add">
                                                    <div className="dropdown drop-recent">
                                                        {/* <button className="button-discover-add" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Recently added<span><img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid" /></span>
                                                </button> */}
                                             <button className="button-discover-add" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <p> Recently added</p>
                                                            <img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid main-same-img" />
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a className="dropdown-item" href="#">All</a>
                                                            <a className="dropdown-item" href="#">COMMON</a>
                                                            <a className="dropdown-item" href="#">UNCOMMON</a>
                                                            <a className="dropdown-item" href="#">RARE</a>
                                                            <a className="dropdown-item" href="#">SUPER RARE</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="all-items">
                                                    <ul className="all-item">
                                                        <li>
                                                            <button className="item-btn active-act">All items</button>
                                                        </li>
                                                        <li>
                                                            <button className="item-btn">Art</button>
                                                        </li>
                                                        <li>
                                                            <button className="item-btn">Game</button>
                                                        </li>
                                                        <li>
                                                            <button className="item-btn">Photography</button>
                                                        </li>
                                                        <li>
                                                            <button className="item-btn">Music</button>
                                                        </li>
                                                        <li>
                                                            <button className="item-btn">Video</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="filter">
                                                    <button className="filter-button">
                                                        Filter <img src="\bluemoon-nft\hot-bid\cross-discover.png" className=" " />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="button-list">
                                                <div className="dropdown buttons-list-all">
                                                    <h5>Price</h5>

                                                    <button className="button-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <p>Highest price</p>
                                                        <img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid main-same-img" />
                                                    </button>
                                               
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">All</a>
                                                        <a className="dropdown-item" href="#">COMMON</a>
                                                        <a className="dropdown-item" href="#">UNCOMMON</a>
                                                        <a className="dropdown-item" href="#">RARE</a>
                                                        <a className="dropdown-item" href="#">SUPER RARE</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="button-list">
                                                <div className="dropdown buttons-list-all">
                                                    <h5>LIKES</h5>
                                                    <button className="button-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <p>Most Liked</p>
                                                        <img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid main-same-img" />
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">All</a>
                                                        <a className="dropdown-item" href="#">COMMON</a>
                                                        <a className="dropdown-item" href="#">UNCOMMON</a>
                                                        <a className="dropdown-item" href="#">RARE</a>
                                                        <a className="dropdown-item" href="#">SUPER RARE</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="button-list">
                                                <div className="dropdown buttons-list-all">
                                                    <h5>CREATOR</h5>

                                                    <button className="button-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <p>Verified Only</p>
                                                        <img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid main-same-img" />
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">All</a>
                                                        <a className="dropdown-item" href="#">COMMON</a>
                                                        <a className="dropdown-item" href="#">UNCOMMON</a>
                                                        <a className="dropdown-item" href="#">RARE</a>
                                                        <a className="dropdown-item" href="#">SUPER RARE</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="buttonsss-list">
                                                <div className="buttonsss-list-all">
                                                    {/* <h5>Price range</h5> */}
                                                    <form>
                                                        <div class="form-group">
                                                            <label for="formControlRange">PRICE RANGE</label>
                                                            <input type="range" class="form-control-range" id="formControlRange" />
                                                              <div className="valuess">
                                                                <div className="left-side">
                                                                    <h6>0.01 ETH</h6>
                                                                </div>
                                                                <div className="right-side">
                                                                    <h6>10 ETH</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="first-second">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-6">
                                                <Link to="/detailpage">
                                                <div className="item">
                                                    <div className="card card-width">
                                                        <div className="upper-divs-triple">
                                                            <img src="\bluemoon-nft\hot-bid\pro1.png" className="max-width-seller " />
                                                            <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                        </div>
                                                        <div className="lower-textss text-center">
                                                            <ul className="d-flex  main-button-ul">
                                                                <li>
                                                                    <h3>Amazing digital art</h3>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="buttons">2.45 ETH</button>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-buttons-span">
                                                                <li>
                                                                    <div className="images">
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h3>3 in stock</h3>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-button-fire">
                                                                <li>
                                                                    <div className="down-div d-flex">
                                                                        <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h4>New bid 🔥</h4>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6">
                                            <Link to="/detailpage">
                                                <div className="item">
                                                    <div className="card card-width">
                                                        <div className="upper-divs-triple">
                                                            <img src="\bluemoon-nft\hot-bid\pro2.png" className="max-width-seller " />
                                                            <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                        </div>
                                                        <div className="lower-textss text-center">
                                                            <ul className="d-flex  main-button-ul">
                                                                <li>
                                                                    <h3>Amazing digital art</h3>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="buttons">2.45 ETH</button>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-buttons-span">
                                                                <li>
                                                                    <div className="images">
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h3>3 in stock</h3>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-button-fire">
                                                                <li>
                                                                    <div className="down-div d-flex">
                                                                        <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h4>New bid 🔥</h4>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6">
                                            <Link to="/detailpage">
                                                <div className="item">
                                                    <div className="card card-width">
                                                        <div className="upper-divs-triple">
                                                            <img src="\bluemoon-nft\hot-bid\pro3.png" className="max-width-seller " />
                                                            <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                        </div>
                                                        <div className="lower-textss text-center">
                                                            <ul className="d-flex  main-button-ul">
                                                                <li>
                                                                    <h3>Amazing digital art</h3>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="buttons">2.45 ETH</button>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-buttons-span">
                                                                <li>
                                                                    <div className="images">
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h3>3 in stock</h3>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-button-fire">
                                                                <li>
                                                                    <div className="down-div d-flex">
                                                                        <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h4>New bid 🔥</h4>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6">
                                            <Link to="/detailpage">
                                                <div className="item">
                                                    <div className="card card-width">
                                                        <div className="upper-divs-triple">
                                                            <img src="\bluemoon-nft\hot-bid\pro4.png" className="max-width-seller " />
                                                            <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                        </div>
                                                        <div className="lower-textss text-center">
                                                            <ul className="d-flex  main-button-ul">
                                                                <li>
                                                                    <h3>Amazing digital art</h3>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="buttons">2.45 ETH</button>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-buttons-span">
                                                                <li>
                                                                    <div className="images">
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h3>3 in stock</h3>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-button-fire">
                                                                <li>
                                                                    <div className="down-div d-flex">
                                                                        <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h4>New bid 🔥</h4>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6">
                                                <div className="item">
                                                    <div className="card card-width">
                                                        <div className="upper-divs-triple">
                                                            <img src="\bluemoon-nft\hot-bid\pro3.png" className="max-width-seller " />
                                                            <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                        </div>
                                                        <div className="lower-textss text-center">
                                                            <ul className="d-flex  main-button-ul">
                                                                <li>
                                                                    <h3>Amazing digital art</h3>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="buttons">2.45 ETH</button>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-buttons-span">
                                                                <li>
                                                                    <div className="images">
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h3>3 in stock</h3>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-button-fire">
                                                                <li>
                                                                    <div className="down-div d-flex">
                                                                        <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h4>New bid 🔥</h4>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6">
                                                <div className="item">
                                                    <div className="card card-width">
                                                        <div className="upper-divs-triple">
                                                            <img src="\bluemoon-nft\hot-bid\pro4.png" className="max-width-seller " />
                                                            <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                        </div>
                                                        <div className="lower-textss text-center">
                                                            <ul className="d-flex  main-button-ul">
                                                                <li>
                                                                    <h3>Amazing digital art</h3>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="buttons">2.45 ETH</button>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-buttons-span">
                                                                <li>
                                                                    <div className="images">
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h3>3 in stock</h3>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-button-fire">
                                                                <li>
                                                                    <div className="down-div d-flex">
                                                                        <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h4>New bid 🔥</h4>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6">
                                                <div className="item">
                                                    <div className="card card-width">
                                                        <div className="upper-divs-triple">
                                                            <img src="\bluemoon-nft\hot-bid\pro1.png" className="max-width-seller " />
                                                            <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                        </div>
                                                        <div className="lower-textss text-center">
                                                            <ul className="d-flex  main-button-ul">
                                                                <li>
                                                                    <h3>Amazing digital art</h3>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="buttons">2.45 ETH</button>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-buttons-span">
                                                                <li>
                                                                    <div className="images">
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h3>3 in stock</h3>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-button-fire">
                                                                <li>
                                                                    <div className="down-div d-flex">
                                                                        <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h4>New bid 🔥</h4>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6">
                                                <div className="item">
                                                    <div className="card card-width">
                                                        <div className="upper-divs-triple">
                                                            <img src="\bluemoon-nft\hot-bid\pro2.png" className="max-width-seller " />
                                                            <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                        </div>
                                                        <div className="lower-textss text-center">
                                                            <ul className="d-flex  main-button-ul">
                                                                <li>
                                                                    <h3>Amazing digital art</h3>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="buttons">2.45 ETH</button>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-buttons-span">
                                                                <li>
                                                                    <div className="images">
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                        <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h3>3 in stock</h3>
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex  main-button-fire">
                                                                <li>
                                                                    <div className="down-div d-flex">
                                                                        <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <h4>New bid 🔥</h4>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                    <div className="first-seconds">
                                        <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
                                        <Link to="/detailpage">
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <img src="\bluemoon-nft\hot-bid\pro1.png" className="max-width-seller " />
                                                        <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">
                                                        <ul className="d-flex  main-button-ul">
                                                            <li>
                                                                <h3>Amazing digital art</h3>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="buttons">2.45 ETH</button>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-buttons-span">
                                                            <li>
                                                                <div className="images">
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h3>3 in stock</h3>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-button-fire">
                                                            <li>
                                                                <div className="down-div d-flex">
                                                                    <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>New bid 🔥</h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            </Link>
                                            <Link to="/detailpage">
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <img src="\bluemoon-nft\hot-bid\pro2.png" className="max-width-seller " />
                                                        <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">
                                                        <ul className="d-flex  main-button-ul">
                                                            <li>
                                                                <h3>Amazing digital art</h3>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="buttons">2.45 ETH</button>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-buttons-span">
                                                            <li>
                                                                <div className="images">
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h3>3 in stock</h3>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-button-fire">
                                                            <li>
                                                                <div className="down-div d-flex">
                                                                    <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>New bid 🔥</h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            </Link>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <img src="\bluemoon-nft\hot-bid\pro3.png" className="max-width-seller " />
                                                        <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">
                                                        <ul className="d-flex  main-button-ul">
                                                            <li>
                                                                <h3>Amazing digital art</h3>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="buttons">2.45 ETH</button>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-buttons-span">
                                                            <li>
                                                                <div className="images">
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h3>3 in stock</h3>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-button-fire">
                                                            <li>
                                                                <div className="down-div d-flex">
                                                                    <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>New bid 🔥</h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <img src="\bluemoon-nft\hot-bid\pro4.png" className="max-width-seller " />
                                                        <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">
                                                        <ul className="d-flex  main-button-ul">
                                                            <li>
                                                                <h3>Amazing digital art</h3>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="buttons">2.45 ETH</button>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-buttons-span">
                                                            <li>
                                                                <div className="images">
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h3>3 in stock</h3>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-button-fire">
                                                            <li>
                                                                <div className="down-div d-flex">
                                                                    <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>New bid 🔥</h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <img src="\bluemoon-nft\hot-bid\pro3.png" className="max-width-seller " />
                                                        <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">
                                                        <ul className="d-flex  main-button-ul">
                                                            <li>
                                                                <h3>Amazing digital art</h3>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="buttons">2.45 ETH</button>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-buttons-span">
                                                            <li>
                                                                <div className="images">
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h3>3 in stock</h3>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-button-fire">
                                                            <li>
                                                                <div className="down-div d-flex">
                                                                    <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>New bid 🔥</h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <img src="\bluemoon-nft\hot-bid\pro4.png" className="max-width-seller " />
                                                        <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">
                                                        <ul className="d-flex  main-button-ul">
                                                            <li>
                                                                <h3>Amazing digital art</h3>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="buttons">2.45 ETH</button>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-buttons-span">
                                                            <li>
                                                                <div className="images">
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h3>3 in stock</h3>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-button-fire">
                                                            <li>
                                                                <div className="down-div d-flex">
                                                                    <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>New bid 🔥</h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <img src="\bluemoon-nft\hot-bid\pro1.png" className="max-width-seller " />
                                                        <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">
                                                        <ul className="d-flex  main-button-ul">
                                                            <li>
                                                                <h3>Amazing digital art</h3>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="buttons">2.45 ETH</button>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-buttons-span">
                                                            <li>
                                                                <div className="images">
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h3>3 in stock</h3>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-button-fire">
                                                            <li>
                                                                <div className="down-div d-flex">
                                                                    <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>New bid 🔥</h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <img src="\bluemoon-nft\hot-bid\pro2.png" className="max-width-seller " />
                                                        <div className="overlayy">
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                            <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">
                                                        <ul className="d-flex  main-button-ul">
                                                            <li>
                                                                <h3>Amazing digital art</h3>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="buttons">2.45 ETH</button>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-buttons-span">
                                                            <li>
                                                                <div className="images">
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-one " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-two " />
                                                                    <img src="\bluemoon-nft\hot-bid\user-image-one.png" className="max-width-seller-three " />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h3>3 in stock</h3>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex  main-button-fire">
                                                            <li>
                                                                <div className="down-div d-flex">
                                                                    <span><img src="\bluemoon-nft\hot-bid\highest-bid-icon.svg" className=" " /> </span><h3>  Highest bid<span>0.001 ETH</span></h3>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>New bid 🔥</h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Discover;
