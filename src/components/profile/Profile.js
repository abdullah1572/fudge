import React from 'react';
import { Link } from 'react-router-dom';
import './profile.scss';
const Profiles = () => {
    return (
        <>
            <div className="dark">
                <section className="profiles-back">
                    <div className="container profiless">
                        <div className="action-button">
                            <button type="button" className="act-but">Edit cover photo<img src="\bluemoon-nft\profiles\profile-1.png" className="img-fluid" /></button>
                            <Link to="/editprofile"><button type="button" className="act-but">Edit profile<img src="\bluemoon-nft\profiles\profile-2.png" className="img-fluid" /></button></Link>
                        </div>
                    </div>
                </section>
                <section className="Profile-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 p-0">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-12 main-profile-pad">
                                        <div className="side-profilessss">
                                            <div className="main-image-d text-center">
                                                <img src="\bluemoon-nft\profiles\profile-3.png" className="img-fluid side-pf-img" />
                                                <h2>Enrico Cole</h2>
                                                <h6>0xc4c16a645...b21a <button><img src="\bluemoon-nft\profiles\blue-cir.png" className="img-fluid" /></button></h6>
                                                <p>A wholesome farm owner in Montana. Upcoming gallery solo show in Germany</p>
                                                <Link className="linkkks"><img src="\bluemoon-nft\profiles\earth1.png" className="img-fluid " />https://ui8.net</Link>
                                                <div className="followw">
                                                    <button className="fllow" type="button">Follow</button>
                                                    <button className="uplode" type="button"><img src="\bluemoon-nft\profiles\follow-next-1.png" className="" /></button>
                                                    <button className="uplode" type="button"><img src="\bluemoon-nft\profiles\follow-next-2.png" className="" /></button>
                                                </div>
                                                <div className="socialss">
                                                    <Link><img src="\bluemoon-nft\profiles\tiwitters.png" className="img-fluid " /></Link>
                                                    <Link className="link-main-oad"><img src="\bluemoon-nft\profiles\instaa.png" className="img-fluid " /></Link>
                                                    <Link><img src="\bluemoon-nft\profiles\facebooks.png" className="img-fluid " /></Link>
                                                </div>
                                                <h4>Member since Mar 15, 2021</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-8 col-md-12  col-12  main-paddss">
                                        <div className="right-profile-slider">
                                            <div className="row">
                                                <div className="col-"></div>
                                            </div>
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">On Sale</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#collectible" role="tab" aria-controls="collectible" aria-selected="false">Collectibles</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Created</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Likes</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Following</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#followers" role="tab" aria-controls="followers" aria-selected="false">Followers</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <div className="row">
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro1.png" className="max-width-seller " />
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
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro2.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro3.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro4.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro3.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro4.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro1.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro2.png" className="max-width-seller " />
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
                                                <div class="tab-pane fade" id="collectible" role="tabpanel" aria-labelledby="collectible-tab">
                                                    <div className="row">
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro3.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro4.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro3.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro4.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro1.png" className="max-width-seller " />
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

                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src="\bluemoon-nft\hot-bid\pro2.png" className="max-width-seller " />
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
                                                <div class="tab-pane fade" id="followers" role="tabpanel" aria-labelledby="followers-tab">
                                                    <div className="folowers">
                                                        <div className="followers-list">
                                                            <div className="followers__item">
                                                                <div className="followers__user">
                                                                    <div className="followers__avatar">
                                                                        <img src="\bluemoon-nft\profiles\follower-1.png" className="img-fluid " />
                                                                    </div>
                                                                    <div className="followers__details">
                                                                        <h4>Sally Fadel</h4>
                                                                        <p>161 followers</p>
                                                                        <button className="follow-but">Follow</button>
                                                                    </div>
                                                                </div>
                                                                <div className="followers__wrap">
                                                                    <div className="followers__gallery">
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-2.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-3.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-4.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-5.png" className=" " />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="followers__item">
                                                                <div className="followers__user">
                                                                    <div className="followers__avatar">
                                                                        <img src="\bluemoon-nft\profiles\follower-1.png" className="img-fluid " />
                                                                    </div>
                                                                    <div className="followers__details">
                                                                        <h4>Sally Fadel</h4>
                                                                        <p>161 followers</p>
                                                                        <button className="follow-but">Follow</button>
                                                                    </div>
                                                                </div>
                                                                <div className="followers__wrap">
                                                                    <div className="followers__gallery">
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-2.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-3.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-4.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-5.png" className=" " />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="followers__item">
                                                                <div className="followers__user">
                                                                    <div className="followers__avatar">
                                                                        <img src="\bluemoon-nft\profiles\follower-1.png" className="img-fluid " />
                                                                    </div>
                                                                    <div className="followers__details">
                                                                        <h4>Sally Fadel</h4>
                                                                        <p>161 followers</p>
                                                                        <button className="follow-but">Follow</button>
                                                                    </div>
                                                                </div>
                                                                <div className="followers__wrap">
                                                                    <div className="followers__gallery">
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-2.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-3.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-4.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-5.png" className=" " />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="followers__item">
                                                                <div className="followers__user">
                                                                    <div className="followers__avatar">
                                                                        <img src="\bluemoon-nft\profiles\follower-1.png" className="img-fluid " />
                                                                    </div>
                                                                    <div className="followers__details">
                                                                        <h4>Sally Fadel</h4>
                                                                        <p>161 followers</p>
                                                                        <button className="follow-but">Follow</button>
                                                                    </div>
                                                                </div>
                                                                <div className="followers__wrap">
                                                                    <div className="followers__gallery">
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-2.png" className="" />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-3.png" className="" />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-4.png" className="" />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-5.png" className="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="followers__item">
                                                                <div className="followers__user">
                                                                    <div className="followers__avatar">
                                                                        <img src="\bluemoon-nft\profiles\follower-1.png" className="img-fluid " />
                                                                    </div>
                                                                    <div className="followers__details">
                                                                        <h4>Sally Fadel</h4>
                                                                        <p>161 followers</p>
                                                                        <button className="follow-but">Follow</button>
                                                                    </div>
                                                                </div>
                                                                <div className="followers__wrap">
                                                                    <div className="followers__gallery">
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-2.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-3.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-4.png" className=" " />
                                                                        </div>
                                                                        <div className="follower-pre">
                                                                            <img src="\bluemoon-nft\profiles\follow-5.png" className=" " />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
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
            </div>
        </>
    )
}

export default Profiles;