import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
  
  return (
    <>
<footer className="main-footer ptb">
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
                <div className="inner-content">
                    <a href="/">
                        <img src="pegify\landing-assets\logo.svg" alt="" className="img-fluid" />
                    </a>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="inner-content">
                    <h5>Quick Links</h5>
                    <ul>
                        <li>
                            <Link to="/createitem">
                                CREATE
                            </Link>
                        </li>
                        <li>
                            <Link to="/collection">
                                COLLECTION
                            </Link>
                        </li>
                        {/* <li>
                            <a>
                                HOW IT WORKS
                            </a>
                        </li>
                        <li>
                            <a>
                                SUPPORT
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
            {/* <div className="col-sm-3">
                <div className="inner-content">
                    <h5>Community</h5>
                    <ul>
                        <li>
                            <a>
                                DISCUSSION
                            </a>
                        </li>
                        <li>
                            <a>
                                VOTING
                            </a>
                        </li>
                        <li>
                            <a>
                                SUGGEST FEATURES
                            </a>
                        </li>
                        <li>
                            <a>
                                TOKENS
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="col-sm-3">
                <div className="inner-content">
                    <h5>Follow</h5>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="https://www.google.com.pk/">
                                <img src="pegify\socails\discord-icon.svg" alt="" className="img-fluid" target="_blank" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.google.com.pk/">
                                <img src="pegify\socails\twitter-icon.svg" alt="" className="img-fluid" target="_blank"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.google.com.pk/">
                                <img src="pegify\socails\facebook-icon.svg" alt="" className="img-fluid" target="_blank" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.google.com.pk/">
                                <img src="pegify\socails\instagram-icon.svg" alt="" className="img-fluid" target="_blank" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr/>

        <div className="row">
            <div className="col-sm-6">
                <div className="inner-contentss">
                    <p className="grey">© 2021 FUDGE, All Rights Reserved</p>
                </div>
            </div>
            <div className="col-sm-6">
            <ul className="list-inline text-right">
                        <li className="list-inline-item">
                            {/* <a href=""> */}
                                <p className="grey">Privacy Policy</p>
                            {/* </a> */}
                        </li>
                        <li className="list-inline-item">
                        <p className="grey">|</p>
                        </li>
                        <li className="list-inline-item">
                            {/* <a href=""> */}
                            <p className="grey">Terms & Conditions</p>
                            {/* </a> */}
                        </li>
                        
                    </ul>
            </div>
        </div>
    </div>
</footer>
</>
    )
}
export default Footer;