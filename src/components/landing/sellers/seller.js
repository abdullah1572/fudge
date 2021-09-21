import React from 'react';
import './seller.scss';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
const Seller = () => {
    const owl_option = {
        nav: true,
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            361: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            600: {
                items: 1,
                stagePadding: -100,
                margin: 15,
            },
            700: {
                items: 3,
                margin: 40,
            },
            1000: {
                items: 4,
                margin: 40,
            },
            1200: {
                items: 5,
                margin: 40,
            }
        },
    };
    return (
        <>
            <div className="dark">
                <section className="sellers ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="inner-content ">
                                    <div className="main-seller-head">
                                        <div className="left-side-seller">
                                            <h4>Popular</h4>
                                            <h2 className="grey">Sellers<img src="\bluemoon-nft\popular-sellers\arrow-down.png" className="img-fluid" /></h2>
                                        </div>
                                        <div className="right-side-seller">
                                            <p>TIMEFRAME</p>
                                            <div className="dropdown drop-seller">
                                                <button className="button-seller" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Today<span><img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid" /></span>
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

                                    <div className="first-second">

                                        <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <div className="left-side">
                                                            <span><img src="\bluemoon-nft\popular-sellers\cup.png" className="max-width-seller img-fluid" /></span><span><h6>#1</h6></span>
                                                        </div>
                                                        <div className="right-side">
                                                            <Link><img src="\bluemoon-nft\popular-sellers\plus-icon.svg" className="max-width-seller " /></Link><span><Link><img src="\bluemoon-nft\popular-sellers\external-link-icon.svg" className="max-width-seller " /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">
                                                        
                                                        <div className="image">
                                                            <img src="\bluemoon-nft\popular-sellers\userss.png" className="max-width-seller-one " />
                                                            <img src="\bluemoon-nft\popular-sellers\user-abso.png" className="max-width-seller-two " />
                                                        </div>

                                                        <h3>Payton Harris</h3>
                                                        <p>2.456 <span>ETH</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <div className="left-side">
                                                            <span><img src="\bluemoon-nft\popular-sellers\cup.png" className="max-width-seller img-fluid" /></span><span><h6>#1</h6></span>
                                                        </div>
                                                        <div className="right-side">
                                                            <Link><img src="\bluemoon-nft\popular-sellers\plus-icon.svg" className="max-width-seller " /></Link><span><Link><img src="\bluemoon-nft\popular-sellers\external-link-icon.svg" className="max-width-seller " /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">

                                                        <div className="image">
                                                            <img src="\bluemoon-nft\popular-sellers\userss.png" className="max-width-seller-one " />
                                                            <img src="\bluemoon-nft\popular-sellers\user-abso.png" className="max-width-seller-two " />
                                                        </div>

                                                        <h3>Payton Harris</h3>
                                                        <p>2.456 <span>ETH</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <div className="left-side">
                                                            <span><img src="\bluemoon-nft\popular-sellers\cup.png" className="max-width-seller img-fluid" /></span><span><h6>#1</h6></span>
                                                        </div>
                                                        <div className="right-side">
                                                            <Link><img src="\bluemoon-nft\popular-sellers\plus-icon.svg" className="max-width-seller " /></Link><span><Link><img src="\bluemoon-nft\popular-sellers\external-link-icon.svg" className="max-width-seller " /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">

                                                        <div className="image">
                                                            <img src="\bluemoon-nft\popular-sellers\userss.png" className="max-width-seller-one " />
                                                            <img src="\bluemoon-nft\popular-sellers\user-abso.png" className="max-width-seller-two " />
                                                        </div>

                                                        <h3>Payton Harris</h3>
                                                        <p>2.456 <span>ETH</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <div className="left-side">
                                                            <span><img src="\bluemoon-nft\popular-sellers\cup.png" className="max-width-seller img-fluid" /></span><span><h6>#1</h6></span>
                                                        </div>
                                                        <div className="right-side">
                                                            <Link><img src="\bluemoon-nft\popular-sellers\plus-icon.svg" className="max-width-seller " /></Link><span><Link><img src="\bluemoon-nft\popular-sellers\external-link-icon.svg" className="max-width-seller " /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">

                                                        <div className="image">
                                                            <img src="\bluemoon-nft\popular-sellers\userss.png" className="max-width-seller-one " />
                                                            <img src="\bluemoon-nft\popular-sellers\user-abso.png" className="max-width-seller-two " />
                                                        </div>

                                                        <h3>Payton Harris</h3>
                                                        <p>2.456 <span>ETH</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card card-width">
                                                    <div className="upper-divs-triple">
                                                        <div className="left-side">
                                                            <span><img src="\bluemoon-nft\popular-sellers\cup.png" className="max-width-seller img-fluid" /></span><span><h6>#1</h6></span>
                                                        </div>
                                                        <div className="right-side">
                                                            <Link><img src="\bluemoon-nft\popular-sellers\plus-icon.svg" className="max-width-seller " /></Link><span><Link><img src="\bluemoon-nft\popular-sellers\external-link-icon.svg" className="max-width-seller " /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="lower-textss text-center">

                                                        <div className="image">
                                                            <img src="\bluemoon-nft\popular-sellers\userss.png" className="max-width-seller-one " />
                                                            <img src="\bluemoon-nft\popular-sellers\user-abso.png" className="max-width-seller-two " />
                                                        </div>
                                                        <h3>Payton Harris</h3>
                                                        <p>2.456 <span>ETH</span></p>
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

export default Seller;
