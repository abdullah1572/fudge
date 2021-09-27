import React from 'react';
import './footer.scss';
import OwlCarousel from 'react-owl-carousel';
const Footer = () => {
  
  return (
    <>


<footer class="main-footer ptb">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="inner-content">
                    <a>
                        <img src="../../assets/pegify/landing-assets/logo-footer.png" alt="" class="img-fluid" />
                    </a>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="inner-content">
                    <h5>Quick Links</h5>
                    <ul>
                        <li>
                            <a>
                                CREATE
                            </a>
                        </li>
                        <li>
                            <a>
                                EXPLORE
                            </a>
                        </li>
                        <li>
                            <a>
                                HOW IT WORKS
                            </a>
                        </li>
                        <li>
                            <a>
                                SUPPORT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="inner-content">
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
            </div>
            <div class="col-sm-3">
                <div class="inner-content">
                    <h5>Follow</h5>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="">
                                <img src="../../assets/pegify/landing-assets/discord-icon.png" alt="" class="img-fluid" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="">
                                <img src="../../assets/pegify/landing-assets/twitter-icon.png" alt="" class="img-fluid" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="">
                                <img src="../../assets/pegify/landing-assets/facebook-icon.png" alt="" class="img-fluid" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="">
                                <img src="../../assets/pegify/landing-assets/instagram-icon.png" alt="" class="img-fluid" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
</>
    )
}
export default Footer;