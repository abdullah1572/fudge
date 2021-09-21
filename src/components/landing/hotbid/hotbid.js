import React from 'react';
import './hotbid.scss';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
const HotBid = () => {
    const owl_option = {
        nav: true,
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            400: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            600: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            700: {
                items: 2,
                margin: 40,
            
            },
            1000: {
                items: 3,
                margin: 40,
               
            },
            1200: {
                items: 4,
                margin: 40,
               
            }
        },
    };

    return (
        <>
            <div className="dark">
                <section className="hotbid ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 P-0">
                                <div className="inner-content ">
                                    <div className="main-seller-head">
                                        <h2 className="grey">Hot bid</h2>
                                    </div>
                                    <div className="first-second">

                                        <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <img src="\bluemoon-nft\hot-bid\nft-image-one.png" className="max-width-seller " />
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
                                                        <img src="\bluemoon-nft\hot-bid\nft-image-four.png" className="max-width-seller " />
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
                                                        <img src="\bluemoon-nft\hot-bid\nft-image-three.png" className="max-width-seller " />
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
                                                        <img src="\bluemoon-nft\hot-bid\nft-image-four.png" className="max-width-seller " />
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
                                                        <img src="\bluemoon-nft\hot-bid\nft-image-one.png" className="max-width-seller " />
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

export default HotBid;
