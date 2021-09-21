import { Link } from 'react-router-dom';
import './connectwatt.scss';
function TermsService() {
    return (
        <>
            <div className="dark">
                <section className="connectwallet main-ter-off">
                    <div className="container">
                        <div className="backtohome">
                            <h2> <img src="\bluemoon-nft\hot-bid\connect-line.png" alt="" className="max-width-seller " />Connect your wallet</h2>
                        </div>
                        <div className="row main-row">
                            <div className="col-lg-6 main-display-hide">
                                <div className="main-left-conect main-left-scan main-terms-office">
                                    <Link><img src="\bluemoon-nft\hot-bid\one.png" alt="" className="max-width-seller " />Formatic</Link>
                                    <Link  className="coin-base-wallet"><img src="\bluemoon-nft\hot-bid\tick-blue.png" alt="" className="max-width-seller " />Coinbase Wallet<img src="\bluemoon-nft\hot-bid\right-line.png" alt="" className="line-right-coinbase " /></Link>
                                    <Link><img src="\bluemoon-nft\hot-bid\three.png" alt="" className="max-width-seller " />MyEtherWallet</Link>
                                    <Link><img src="\bluemoon-nft\hot-bid\four.png" alt="" className="max-width-seller " />Wallet Connect</Link>
                                </div>
                            </div>
                            <div className="col-lg-5 ml-auto">
                                <div className="right-side ">
                                    <h3>Terms of service</h3>
                                    <p>Please take a few minutes to read and understand <span className="main-srack">Stacks</span>
                                        <span>Terms of Service</span>. To continue, you’ll need to accept the terms of services by checking the boxes.</p>
                                    <div className="images imagess">
                                        <img src="\bluemoon-nft\hot-bid\qr-terms.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="checkboox">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label class="form-check-label" for="inlineCheckbox1">I am at least 13 year old</label>
                                        </div>
                                        <br></br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label class="form-check-label" for="inlineCheckbox1">I agree Stack terms of service</label>
                                        </div>
                                    </div>
                                    <div className="buttons-terms">
                                    <Link  to="/connectwallet" > <button className="cancel mr-2" type="button">Cancel</button></Link>
                                     <button className="cancel" type="button">Get started now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default TermsService;