import React from 'react';
import { Link } from 'react-router-dom';
import './detail.scss';
const DetailPages = () => {
    return (
        <>
            <div className="dark">
                <section className="profile-detail">
                    <div className="container profiless-detailss">
                        <div className="abso-icons">
                            <div className="share-1 share-h">
                                <Link><img src="\bluemoon-nft\profiles\share-1.png" className="img-fluid" /></Link>
                            </div>
                            <div className="share-1">
                                <Link><img src="\bluemoon-nft\profiles\share-2.png" className="img-fluid" /></Link>
                            </div>
                            <div className="share-1">
                                <Link><img src="\bluemoon-nft\profiles\share-3.png" className="img-fluid" /></Link>
                            </div>
                            <div className="share-1">
                                <Link><img src="\bluemoon-nft\profiles\share-4.png" className="img-fluid" /></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="image upper-imageaaaasa">
                                    <img src="\bluemoon-nft\profiles\profile-detail-1.png" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-xl-4 offset-xl-1 col-lg-5 offset-0">
                                <div className="right-side-div">
                                    <h2>The amazing art</h2>
                                    <div className="ether-main">
                                        <div className="ether">
                                            <p>2.5 ETH</p>
                                        </div>
                                        <div className="ether-dollar">
                                            <p>$4,429.87</p>
                                        </div>
                                        <div className="instock">
                                            <p>  10 in stock</p>
                                        </div>
                                    </div>
                                    <div className="main-p">
                                        <p>This NFT Card will give you Access to Special Airdrops. To learn more about UI8 please visit<span>https://ui8.net</span></p>
                                    </div>
                                    <div className="tabssss">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Info</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Owners</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">History</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="bids-tab" data-toggle="tab" href="#bids" role="tab" aria-controls="bids" aria-selected="false">Bids</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div class="main-tabs-div">
                                                    <div className="imagess">
                                                        <img src="\bluemoon-nft\profiles\detail-2.png" />
                                                        <img src="\bluemoon-nft\profiles\detail-3.png" className="detail-profile-abso" />
                                                    </div>
                                                    <div className="textt">
                                                        <h3>Owner</h3>
                                                        <h4>Raquel Will</h4>
                                                    </div>
                                                </div>
                                                <div class="main-tabs-div">
                                                    <div className="imagess">
                                                        <img src="\bluemoon-nft\profiles\detail-2.png" />
                                                        <img src="\bluemoon-nft\profiles\detail-3.png" className="detail-profile-abso" />
                                                    </div>
                                                    <div className="textt">
                                                        <h3>Owner</h3>
                                                        <h4>Raquel Will</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">..rfrfr.</div>
                                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">..f.</div>
                                            <div class="tab-pane fade" id="bids" role="tabpanel" aria-labelledby="bids-tab">.rr..</div>
                                        </div>
                                    </div>
                                    <div className="purchase-bid">
                                        <div className="inner-div">
                                            <div className="image-text">
                                                <div className="image">
                                                    <img src="\bluemoon-nft\profiles\detail-2.png" />
                                                </div>
                                                <div className="textse">
                                                    <h5>Highest bid by&nbsp;<span>Kohaku Tora</span></h5>
                                                    <h4>1.46 ETH&nbsp;<span>$2,764.89</span></h4>
                                                </div>
                                            </div>
                                            <div className="buttonaa">
                                                <button type="button" className="button-left" data-toggle="modal" data-target="#exampleModalCenter">Purchase now</button>
                                                <button type="button" className="button-right">Place a bid</button>
                                            </div>
                                            <div className="last-p">
                                                <p>Service fee &nbsp; <span>1.5% &nbsp; </span>2.563 ETH &nbsp; $4,540.62</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade modal-checkout-main" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">

                            {/* First Modal Setup Here */}

                            {/* <div class="modal-content main-content-back">
                                <div class="modal-header checkout-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Checkout</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"><img src="\bluemoon-nft\hot-bid\close-checkout.png" /></span>
                                    </button>
                                </div>
                                <div class="modal-body main-body-check">
                                    <div className="checkout-main-body">
                                        <p>You are about to purchase C O I N Z from UI8</p>
                                        <div className="main-ris">
                                            <h6>0.007</h6>
                                            <h6>ETH</h6>
                                        </div>
                                        <div className="main-down-ris">
                                            <div className="balance-fee-pay">
                                                <h6 className="lftd">Your balance</h6>
                                                <h6>8.498 ETH</h6>
                                            </div>
                                            <div className="balance-fee-pay">
                                                <h6 className="lftd">Service fee</h6>
                                                <h6>0 ETH</h6>
                                            </div>
                                            <div className="balance-fee-pay">
                                                <h6 className="lftd">You will pay</h6>
                                                <h6>0.007 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="not-verified">
                                            <div className="imagess">
                                                <img src="\bluemoon-nft\hot-bid\modal-111.png" />
                                            </div>
                                            <div className="textss">
                                                <h4>This creator is not verified</h4>
                                                <h5>Purchase this item at your own risk</h5>
                                            </div>
                                        </div>
                                        <div className="buttonsss">
                                            <button type="button" className="upper-button">I understand, continue</button>
                                            <button type="button" className="lower-button">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* 2nd Modal Setup Here */}

                            {/* <div class="modal-content main-content-back">
                                <div class="modal-header checkout-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Follow steps</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"><img src="\bluemoon-nft\hot-bid\close-checkout.png" /></span>
                                    </button>
                                </div>
                                <div class="modal-body main-body-check">
                                    <div className="checkout-main-body">
                                        <div className="loaderss">
                                            <div className="image-load">
                                                <img src="\bluemoon-nft\hot-bid\loader-checkout.png" />
                                            </div>
                                            <div className="text-loade">
                                                <h4>Purchasing</h4>
                                                <h5>Sending transaction with your wallet</h5>
                                            </div>
                                        </div>
                                        <div className="not-verified">
                                            <div className="imagess">
                                                <img src="\bluemoon-nft\hot-bid\modal-111.png" />
                                            </div>
                                            <div className="textss">
                                                <h4>This creator is not verified</h4>
                                                <h5>Purchase this item at your own risk</h5>
                                            </div>
                                            <div className="images-follow">
                                                <img src="\bluemoon-nft\hot-bid\profile-im-checkout.png" />
                                            </div>
                                        </div>
                                        <div className="buttonsss">
                                            <button type="button" className="upper-button">I understand, continue</button>
                                            <button type="button" className="lower-button">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* 3nd Modal Setup Here */}

                            <div class="modal-content main-content-back">
                                <div class="modal-header checkout-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle"></h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"><img src="\bluemoon-nft\hot-bid\close-checkout.png" /></span>
                                    </button>
                                </div>
                                <div class="modal-body main-body-check">
                                    <div className="checkout-main-body">
                                        <div className="div-head-text">
                                            <h2>Yay! 🎉</h2>
                                            <p>You successfully purchased<br></br>C O I N Z from UI8</p>
                                        </div>
                                        <div className="status-process">
                                            <div className="status">
                                            <h6 className="lftd">Status</h6>
                                                <h6>Transaction ID</h6>
                                            </div>
                                            <div className="processiong">
                                            <h6 className="lftd">Processing</h6>
                                                <h6 className="ellipsesss">0msx836930...87r398</h6>
                                            </div>
                                        </div>
                                        <div className="socialss">
                                            <h4>Time to show-off</h4>
                                            <div className="sociual-inner">
                                            <Link><img src="\bluemoon-nft\hot-bid\checkout-1.png" /></Link>
                                            <Link><img src="\bluemoon-nft\hot-bid\checkout-2.png" /></Link>
                                            <Link><img src="\bluemoon-nft\hot-bid\checkout-3.png" /></Link>
                                            <Link><img src="\bluemoon-nft\hot-bid\checkout-4.png" /></Link>
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

export default DetailPages;