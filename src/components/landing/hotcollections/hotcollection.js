import React from 'react';
import './hotcollection.scss';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
const HotCollection = () => {
    const owl_option = {
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
                margin: 15,
                nav: true,
            },
            400: {
                items: 1,
                stagePadding: 0,
                margin: 15,
                nav: true,
            },
            600: {
                items: 1,
                stagePadding: 0,
                margin: 15,
                nav: true,
            },
            768: {
                items: 3,
                margin: 40,
                stagePadding: -100,
                nav: true,
            },
            1199: {
                items: 3,
                margin: 40,
                stagePadding: -100,
                nav: true,
            },
            1200: {
                items: 3,
                margin: 40,
                nav: false,
            }
        },
    };

    return (
        <>
            <div className="dark">
                <section className="hot-collection ptb">
                    <div className="container container-f">
                        <div className="row">
                            <div className="col-sm-12 ">
                                <div className="inner-contents ">
                                    <h2>Hot collection</h2>
                                    <div className="first-second">
                                        <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
                                            <Link to="itemscollection">
                                                <div className="item">
                                                    <div className="outer-div">
                                                        <div className="upper-image">
                                                            <img src="\bluemoon-nft\hot-bid\collection-1.png" className="img-fluid" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-4 pr-2 pl-0 pt-2">
                                                                <div className="mini-image">
                                                                    <img src="\bluemoon-nft\hot-bid\mini-1.png" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-4 pr-1 pl-1 pt-2">
                                                                <div className="mini-image">
                                                                    <img src="\bluemoon-nft\hot-bid\mini-2.png" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-4 pl-2 pr-0 pt-2">
                                                                <div className="mini-image">
                                                                    <img src="\bluemoon-nft\hot-bid\mini-3.png" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="head-down">
                                                            <h4>Awesome collection</h4>
                                                            <div className="down-di">
                                                                <div className="text-img">
                                                                    <p> <img src="\bluemoon-nft\hot-bid\collection-mini-1.png" className="img-fluid" />By Tyrese Littel</p>
                                                                </div>
                                                                <button className="items">28 ITEMS</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="itemscollection">
                                                <div className="item">
                                                    <div className="outer-div">
                                                        <div className="upper-image">
                                                            <img src="\bluemoon-nft\hot-bid\collection-2.png" className="img-fluid" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-4 pr-2 pl-0 pt-2">
                                                                <div className="mini-image">
                                                                    <img src="\bluemoon-nft\hot-bid\mini-4.png" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-4 pr-1 pl-1 pt-2">
                                                                <div className="mini-image">
                                                                    <img src="\bluemoon-nft\hot-bid\mini-5.png" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-4 pl-2 pr-0 pt-2">
                                                                <div className="mini-image">
                                                                    <img src="\bluemoon-nft\hot-bid\mini-6.png" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="head-down">
                                                            <h4>Awesome collection</h4>
                                                            <div className="down-di">
                                                                <div className="text-img">
                                                                    <p> <img src="\bluemoon-nft\hot-bid\collection-mini-1.png" className="img-fluid" />By Tyrese Littel</p>
                                                                </div>
                                                                <button className="items">28 ITEMS</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="itemscollection">
                                                <div className="item">
                                                    <div className="outer-div">
                                                        <div className="upper-image">
                                                            <img src="\bluemoon-nft\hot-bid\collection-1.png" className="img-fluid" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-4 pr-2 pl-0 pt-2">
                                                                <div className="mini-image">
                                                                    <img src="\bluemoon-nft\hot-bid\mini-1.png" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-4 pr-1 pl-1 pt-2">
                                                                <div className="mini-image">
                                                                    <img src="\bluemoon-nft\hot-bid\mini-3.png" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-4 pl-2 pr-0 pt-2">
                                                                <div className="mini-image">
                                                                    <img src="\bluemoon-nft\hot-bid\mini-4.png" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="head-down">
                                                            <h4>Awesome collection</h4>
                                                            <div className="down-di">
                                                                <div className="text-img">
                                                                    <p> <img src="\bluemoon-nft\hot-bid\collection-mini-1.png" className="img-fluid" />By Tyrese Littel</p>
                                                                </div>
                                                                <button className="items">28 ITEMS</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
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

export default HotCollection;
