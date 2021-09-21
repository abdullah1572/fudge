import React from 'react';
import './footer.scss';
const Footer = () => {
    return (
        <>
            <hr></hr>
            <section className="main-footer ptb20">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="inner-logo">
                                <a className="" href="#">
                                    <img src="\bluemoon-nft\footer\logo.svg" className="img-fluid" />
                                </a>
                                <h3 className="ptb20 ">The New <br></br> Creative Economy.</h3>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="inner-icon">
                                <h5 className="">Stacks</h5>

                                <ul className="">
                                    <li>
                                        <a className="grey" href="#">
                                            Discover
                                        </a>
                                    </li>
                                    <li>
                                        <a className="grey" href="#">
                                            Connect wallet
                                        </a>
                                    </li>
                                    <li>
                                        <a className="grey" href="#">
                                            Create item
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="inner-icon">
                                <h5 className="">Info</h5>

                                <ul className="">
                                    <li>
                                        <a className="grey" href="#">
                                            Download
                                        </a>
                                    </li>
                                    <li>
                                        <a className="grey" href="#">
                                            Demos
                                        </a>
                                    </li>
                                    <li>
                                        <a className="grey" href="#">
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="inner-icon">
                                <h5 className="">Join Newsletter</h5>
                                <p className=" ">Subscribe our newsletter to get more free design course and resource</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Enter your email" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <a className="" href="#">
                                            <img src="\bluemoon-nft\footer\send-icon.svg" className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="inner-rights ptb20">
                                <p className="grey">Copyright © 2021 UI8 LLC. All rights reserved</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="inner-rights text-right ptb20">
                                <p className="white">We use cookies for better service. <span>
                                    <a className="common" href="#">Accept</a>
                                </span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
