import React from 'react';
import './bluemoon.scss';
import OwlCarousel from 'react-owl-carousel';
const Bluemoon = () => {
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
            <div className="dark">
                <section className="main-blue ptb">
                    <div className="container container-f">
                        <div className="first-second">

                            <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-8 col-md-12 col-12">
                                            <div className="inner-contents">
                                                <img src="\bluemoon-nft\the-blue-moon\video.png" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-0 col-md-12 offset-0 col-12">
                                            <div className="inner-contents inner-owl">
                                                <h2 className="">the blue <br></br>moon ®</h2>
                                                <ul className=" upper-line ptb20">
                                                    <div className="upper-blue">
                                                        <li className="list-inline-item">
                                                            <img src="\bluemoon-nft\the-blue-moon\creator-image.png" className="img-fluid" />
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <h6 className="">Creator</h6>
                                                            <h5 className="">Enrico Cole</h5>
                                                        </li>
                                                    </div>
                                                    <div className="right-blue">
                                                        <li className="list-inline-item">
                                                            <img src="\bluemoon-nft\the-blue-moon\instant-price-image.png" className="img-fluid" />
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <h6 className="">Instant price</h6>
                                                            <h5 className="">3.5 ETH</h5>
                                                        </li>
                                                    </div>
                                                </ul>
                                                <div className="inner-tile text-center">
                                                    <h6 className="">
                                                        Current Bid
                                                    </h6>
                                                    <h2> 1.00 ETH
                                                    </h2>
                                                    <h4 className="">$3,618.36</h4>
                                                    <p className="">Auction ending in</p>

                                                    <ul className="list-inline dis-pay">
                                                        <li className="list-inline-items">
                                                            <h2 className="">19</h2>
                                                            <h6 className="">Hrs</h6>
                                                        </li>
                                                        <li className="list-inline-items">
                                                            <h2 className="">24</h2>
                                                            <h6 className="">Mins</h6>
                                                        </li>
                                                        <li className="list-inline-items">
                                                            <h2 className="">19</h2>
                                                            <h6 className="">Secs</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="divs-butt-abso">
                                                    <div className="row">
                                                        <div className="col-sm-12 p-0">
                                                            <button className="btn-commonss">Place a bid</button>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12 p-0">
                                                            <button className="btn-commonsss">View Item</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-8 col-md-12 col-12">
                                            <div className="inner-contents">
                                                <img src="\bluemoon-nft\the-blue-moon\video.png" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-0 col-md-12 offset-0 col-12">
                                            <div className="inner-contents inner-owl">
                                                <h2 className="">the blue <br></br>moon ®</h2>
                                                <ul className=" upper-line ptb20">
                                                    <div className="upper-blue">
                                                        <li className="list-inline-item">
                                                            <img src="\bluemoon-nft\the-blue-moon\creator-image.png" className="img-fluid" />
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <h6 className="">Creator</h6>
                                                            <h5 className="">Enrico Cole</h5>
                                                        </li>
                                                    </div>
                                                    <div className="right-blue">
                                                        <li className="list-inline-item">
                                                            <img src="\bluemoon-nft\the-blue-moon\instant-price-image.png" className="img-fluid" />
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <h6 className="">Instant price</h6>
                                                            <h5 className="">3.5 ETH</h5>
                                                        </li>
                                                    </div>
                                                </ul>
                                                <div className="inner-tile text-center">
                                                    <h6 className="">
                                                        Current Bid
                                                    </h6>
                                                    <h2> 1.00 ETH
                                                    </h2>
                                                    <h4 className="">$3,618.36</h4>
                                                    <p className="">Auction ending in</p>

                                                    <ul className="list-inline dis-pay">
                                                        <li className="list-inline-items">
                                                            <h2 className="">19</h2>
                                                            <h6 className="">Hrs</h6>
                                                        </li>
                                                        <li className="list-inline-items">
                                                            <h2 className="">24</h2>
                                                            <h6 className="">Mins</h6>
                                                        </li>
                                                        <li className="list-inline-items">
                                                            <h2 className="">19</h2>
                                                            <h6 className="">Secs</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="divs-butt-abso">
                                                    <div className="row">
                                                        <div className="col-sm-12 p-0">
                                                            <button className="btn-commonss">Place a bid</button>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12 p-0">
                                                            <button className="btn-commonsss">View Item</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-8 col-md-12 col-12">
                                            <div className="inner-contents">
                                                <img src="\bluemoon-nft\the-blue-moon\video.png" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-0 col-md-12 offset-0 col-12">
                                            <div className="inner-contents inner-owl">
                                                <h2 className="">the blue <br></br>moon ®</h2>
                                                <ul className=" upper-line ptb20">
                                                    <div className="upper-blue">
                                                        <li className="list-inline-item">
                                                            <img src="\bluemoon-nft\the-blue-moon\creator-image.png" className="img-fluid" />
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <h6 className="">Creator</h6>
                                                            <h5 className="">Enrico Cole</h5>
                                                        </li>
                                                    </div>
                                                    <div className="right-blue">
                                                        <li className="list-inline-item">
                                                            <img src="\bluemoon-nft\the-blue-moon\instant-price-image.png" className="img-fluid" />
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <h6 className="">Instant price</h6>
                                                            <h5 className="">3.5 ETH</h5>
                                                        </li>
                                                    </div>
                                                </ul>
                                                <div className="inner-tile text-center">
                                                    <h6 className="">
                                                        Current Bid
                                                    </h6>
                                                    <h2> 1.00 ETH
                                                    </h2>
                                                    <h4 className="">$3,618.36</h4>
                                                    <p className="">Auction ending in</p>

                                                    <ul className="list-inline dis-pay">
                                                        <li className="list-inline-items">
                                                            <h2 className="">19</h2>
                                                            <h6 className="">Hrs</h6>
                                                        </li>
                                                        <li className="list-inline-items">
                                                            <h2 className="">24</h2>
                                                            <h6 className="">Mins</h6>
                                                        </li>
                                                        <li className="list-inline-items">
                                                            <h2 className="">19</h2>
                                                            <h6 className="">Secs</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="divs-butt-abso">
                                                    <div className="row">
                                                        <div className="col-sm-12 p-0">
                                                            <button className="btn-commonss">Place a bid</button>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12 p-0">
                                                            <button className="btn-commonsss">View Item</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-8 col-md-12 col-12">
                                            <div className="inner-contents">
                                                <img src="\bluemoon-nft\the-blue-moon\video.png" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-0 col-md-12 offset-0 col-12">
                                            <div className="inner-contents inner-owl">
                                                <h2 className="">the blue <br></br>moon ®</h2>
                                                <ul className=" upper-line ptb20">
                                                    <div className="upper-blue">
                                                        <li className="list-inline-item">
                                                            <img src="\bluemoon-nft\the-blue-moon\creator-image.png" className="img-fluid" />
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <h6 className="">Creator</h6>
                                                            <h5 className="">Enrico Cole</h5>
                                                        </li>
                                                    </div>
                                                    <div className="right-blue">
                                                        <li className="list-inline-item">
                                                            <img src="\bluemoon-nft\the-blue-moon\instant-price-image.png" className="img-fluid" />
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <h6 className="">Instant price</h6>
                                                            <h5 className="">3.5 ETH</h5>
                                                        </li>
                                                    </div>
                                                </ul>
                                                <div className="inner-tile text-center">
                                                    <h6 className="">
                                                        Current Bid
                                                    </h6>
                                                    <h2> 1.00 ETH
                                                    </h2>
                                                    <h4 className="">$3,618.36</h4>
                                                    <p className="">Auction ending in</p>

                                                    <ul className="list-inline dis-pay">
                                                        <li className="list-inline-items">
                                                            <h2 className="">19</h2>
                                                            <h6 className="">Hrs</h6>
                                                        </li>
                                                        <li className="list-inline-items">
                                                            <h2 className="">24</h2>
                                                            <h6 className="">Mins</h6>
                                                        </li>
                                                        <li className="list-inline-items">
                                                            <h2 className="">19</h2>
                                                            <h6 className="">Secs</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="divs-butt-abso">
                                                    <div className="row">
                                                        <div className="col-sm-12 p-0">
                                                            <button className="btn-commonss">Place a bid</button>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12 p-0">
                                                            <button className="btn-commonsss">View Item</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>



                    </div>
                </section>
            </div>
        </>
    )
}

export default Bluemoon;