import React from 'react';
import { Link } from 'react-router-dom';
import './collection.scss';
const Item = () => {
    return (
        <>
            <div className="dark">
                <section className="profiles-collection">
                </section>
                <section className="upper-head-no">
                    <div className="container">
                        <div className="upper-head-profile">
                            <div className="cococola">
                                <img src="\bluemoon-nft\profiles\item-1.png" className="img-fluid" />
                                <h5>Coca-Cola</h5>
                                <p>0xc4c16a645...b21a &nbsp;  <img src="\bluemoon-nft\profiles\item-2.png" className="img-fluid" /></p>
                                <div className="images-upload">
                                    <img src="\bluemoon-nft\profiles\item-3.png" className="img-fluid bgg" />
                                    <img src="\bluemoon-nft\profiles\item-4.png" className="img-fluid bgg" />
                                </div>
                            </div>
                        </div>
                        <div className="lower-tabs-main">
                            <div className="button-item-activity">
                                <button className="buttonss">Items</button>
                                <button className="buttonsss">Activity</button>
                            </div>
                            <div className="button-file">
                                <button className="buttons-li">Filter  <img src="\bluemoon-nft\profiles\item-5.png" className="img-fluid bgg" /></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="button-list">
                                    <div className="dropdown buttons-list-all">
                                        <h5>Price</h5>

                                        <button className="button-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <p>Highest price</p>
                                            <img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid main-same-img" />
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
                            <div className="col-lg-3 col-md-6">
                                <div className="button-list">
                                    <div className="dropdown buttons-list-all">
                                        <h5>LIKES</h5>
                                        <button className="button-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <p>Most Liked</p>
                                            <img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid main-same-img" />
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
                            <div className="col-lg-3 col-md-6">
                                <div className="button-list">
                                    <div className="dropdown buttons-list-all">
                                        <h5>CREATOR</h5>

                                        <button className="button-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <p>Verified Only</p>
                                            <img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid main-same-img" />
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
                            <div className="col-lg-3 col-md-6">
                                <div className="buttonsss-list">
                                    <div className="buttonsss-list-all">
                                        {/* <h5>Price range</h5> */}
                                        <form>
                                            <div class="form-group">
                                                <label for="formControlRange">PRICE RANGE</label>
                                                <input type="range" class="form-control-range" id="formControlRange" />
                                                <div className="valuess">
                                                    <div className="left-side">
                                                        <h6>0.01 ETH</h6>
                                                    </div>
                                                    <div className="right-side">
                                                        <h6>10 ETH</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="first-second">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <Link to="/detailpage">
                                        <div className="item">
                                            <div className="card card-width">
                                                <div className="upper-divs-triple">
                                                    <img src="\bluemoon-nft\hot-bid\pro1.png" className="max-width-seller " />
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
                                    </Link>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <Link to="/detailpage">
                                        <div className="item">
                                            <div className="card card-width">
                                                <div className="upper-divs-triple">
                                                    <img src="\bluemoon-nft\hot-bid\pro2.png" className="max-width-seller " />
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
                                    </Link>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <Link to="/detailpage">
                                        <div className="item">
                                            <div className="card card-width">
                                                <div className="upper-divs-triple">
                                                    <img src="\bluemoon-nft\hot-bid\pro3.png" className="max-width-seller " />
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
                                    </Link>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <Link to="/detailpage">
                                        <div className="item">
                                            <div className="card card-width">
                                                <div className="upper-divs-triple">
                                                    <img src="\bluemoon-nft\hot-bid\pro4.png" className="max-width-seller " />
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
                                    </Link>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="card card-width">
                                            <div className="upper-divs-triple">
                                                <img src="\bluemoon-nft\hot-bid\pro3.png" className="max-width-seller " />
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
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="card card-width">
                                            <div className="upper-divs-triple">
                                                <img src="\bluemoon-nft\hot-bid\pro4.png" className="max-width-seller " />
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
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="card card-width">
                                            <div className="upper-divs-triple">
                                                <img src="\bluemoon-nft\hot-bid\pro1.png" className="max-width-seller " />
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
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="card card-width">
                                            <div className="upper-divs-triple">
                                                <img src="\bluemoon-nft\hot-bid\pro2.png" className="max-width-seller " />
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
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

              
            </div>
        </>
    )
}
export default Item;