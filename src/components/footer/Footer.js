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
            <div className="col-sm-6">
                <div className="inner-content">
                    <h5>Follow</h5>
                    <ul className="list-inline ptb20">
                                    <li className="list-inline-item">
                                        <a href="https://t.me/joinchat/AMNMKB50Qkw5NjE0" target="_blank">
                                        <img src="pegify\icons\telegram-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.youtube.com/channel/UCwemAO_Osvo-N13c1efBA1g" target="_blank">
                                        <img src="pegify\icons\youtube-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/FUDGE-109913607947898" target="_blank">
                                        <img src="pegify\icons\facebook-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/FudgeToken" target="_blank">
                                        <img src="pegify\icons\twitter-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/fudgetoken/" target="_blank">
                                        <img src="pegify\icons\instagram-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/company/fudge-token/" target="_blank">
                                        <img src="pegify\icons\linkedin-icon.svg" alt="" className="img-fluid" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.reddit.com/user/FudgeToken" target="_blank">
                                        <img src="pegify\icons\reddit-icon.svg" alt="" className="img-fluid" />
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