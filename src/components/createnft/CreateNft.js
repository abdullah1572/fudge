
import React from 'react';
import { Link } from 'react-router-dom';
import './createnft.scss';
import OwlCarousel from 'react-owl-carousel';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
function CreateNfts() {

    const owl_optionssss = {
        nav: false,
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            320: {
                items: 3,
                stagePadding: -120,
                margin: 15,
            },
            375: {
                items: 3,
                stagePadding: -100,
                margin: 15,
            },
            425: {
                items: 3,
                stagePadding: -60,
                margin: 15,
            },
            540: {
                items: 3,
                stagePadding: -10,
                margin: 15,
            },
            600: {
                items: 3,
                stagePadding: -60,
                margin: 15,
            },
            700: {
                items: 4,
                margin: 0,

            },
            1000: {
                items: 4,
                margin: 10,
                stagePadding: -75,
            },
            1200: {
                items: 4,
                margin: 10,
                stagePadding: -8,
            }
        },
    };
    return (
        <>
            <div className="dark">
                <section className="createnft">
                    <div className="container pad-no">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-12  remov-padd">
                                <div className="row right-side-divs">
                                    <div className="col-xl-12 col-lg-12 col-12 padd-remov pr-lg-5">
                                        <div className="left-main">
                                            <div className="upper-head">
                                                <div className="width-n">
                                                    <h2>Create single collectible</h2>
                                                </div>
                                                <div>
                                                    <button className="buttonss" type="button">Switch to Multiple</button>
                                                </div>
                                            </div>
                                            <div className="upload-fll textss">
                                                <h4>Upload file</h4>
                                                <h6>Drag or choose your file to upload</h6>
                                                <div className="upload-div">
                                                    <div className="inner-upoad">
                                                        <div class="image-uploads-create-nft">
                                                            <label for="file-input">
                                                                <img src="\bluemoon-nft\hot-bid\upload-fileshape.png" className="max-width-seller " />
                                                            </label>
                                                            <input id="file-input" type="file" />
                                                        </div>
                                                        <h6>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-main-left textss">
                                                <h4>Item Details</h4>
                                                <div className="form-inner-feild">
                                                    <ValidatorForm className="form-contact">
                                                        <div className="row">
                                                            <div className="col-md-12 p-0">
                                                                <div class="form-group main-text-feild-head">
                                                                    <label For="name">Item name</label>
                                                                    <TextValidator
                                                                        fullWidth
                                                                        type="text"
                                                                        name="itemname"
                                                                        variant="outlined"
                                                                        placeholder="e. g. “Redeemable Bitcoin Card with logo”"
                                                                        className="input-fields"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 p-0">
                                                                <div class="form-group">
                                                                    <label for="exampleInputdec">Description</label>
                                                                    <TextValidator
                                                                        fullWidth
                                                                        type="text"
                                                                        name="description"
                                                                        placeholder="e. g. “After purchasing you will able to recived the logo...”"
                                                                        className="input-fields"
                                                                        variant="outlined"
                                                                    // validators={['required', 'isEmail']}
                                                                    // errorMessages={['this field is required', 'email is not valid']}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row new-row-no">
                                                            <div className="col-md-4 pl-md-0 nopaddss">
                                                                <div className="button-list">
                                                                    <label for="exampleInputdec">Royalties</label>
                                                                    <div className="dropdown buttons-list-all">
                                                                        <button className="button-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <p>Verified Only</p>
                                                                            <img src="\bluemoon-nft\hot-bid\create7.png" className="img-fluid main-same-img" />
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
                                                            <div className="col-md-4 nopaddss">
                                                                <div class="form-group new-row-no">
                                                                    <label for="exampleInputsize">Size</label>
                                                                    <TextValidator
                                                                        fullWidth
                                                                        type="text"
                                                                        name="size"
                                                                        placeholder="e. g. Size"
                                                                        className="input-fields"
                                                                        variant="outlined"
                                                                    // validators={['required', 'isEmail']}
                                                                    // errorMessages={['this field is required', 'email is not valid']}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 pr-md-0 nopaddss">
                                                                <div class="form-group new-row-no">
                                                                    <label for="exampleInputdec">Propertie</label>
                                                                    <TextValidator
                                                                        fullWidth
                                                                        type="text"
                                                                        name="propertie"
                                                                        placeholder="e. g. Propertie"
                                                                        className="input-fields"
                                                                        variant="outlined"
                                                                    // validators={['required', 'isEmail']}
                                                                    // errorMessages={['this field is required', 'email is not valid']}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ValidatorForm>
                                                </div>

                                                <div className="main-outer-swit">
                                                    <div className="switchesss">
                                                        <div className="left-swit textss">
                                                            <h4>Put on sale</h4>
                                                            <h6>You’ll receive bids on this item</h6>
                                                        </div>
                                                        <div className="right-swit">
                                                            <div class="custom-control custom-switch">
                                                                <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                                                                <label class="custom-control-label" for="customSwitch2"></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="switchesss">
                                                        <div className="left-swit textss">
                                                            <h4>Instant sale price</h4>
                                                            <h6>Enter the price for which the item will be instantly sold</h6>
                                                        </div>
                                                        <div className="right-swit">
                                                            <div class="custom-control custom-switch">
                                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                                <label class="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="switchesss">
                                                        <div className="left-swit textss">
                                                            <h4>Unlock once purchased</h4>
                                                            <h6>Content will be unlocked after successful transaction</h6>
                                                        </div>
                                                        <div className="right-swit">
                                                            <div class="custom-control custom-switch">
                                                                <input type="checkbox" class="custom-control-input" id="customSwitch3" />
                                                                <label class="custom-control-label" for="customSwitch3"></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="createcollection textss">
                                                    <h4>Choose collection</h4>
                                                    <h6>Choose an exiting collection or create a new one</h6>

                                                    <div className="outer-create">
                                                        <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_optionssss}>
                                                            <div className="item" data-toggle="modal" data-target="#exampleModal11">
                                                                <div className="inner-create">
                                                                    <img src="\bluemoon-nft\hot-bid\create1.png" className="max1 " />
                                                                    <h5>Create collection</h5>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="inner-create">
                                                                    <img src="\bluemoon-nft\hot-bid\create2.png" className="max1 " />
                                                                    <h5>Legion - Pro</h5>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="inner-create">
                                                                    <img src="\bluemoon-nft\hot-bid\create3.png" className="max1 " />
                                                                    <h5>Legion - Unique</h5>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="inner-create">
                                                                    <img src="\bluemoon-nft\hot-bid\create4.png" className="max1 " />
                                                                    <h5>Legion Fresh</h5>
                                                                </div>
                                                            </div>
                                                        </OwlCarousel>
                                                    </div>

                                                    <div className="submit-last-form">
                                                        <div className="main-button-pad">
                                                            <button className="preivew-small" type="button" data-toggle="modal" data-target="#exampleModal">Preview</button>
                                                            <button className="create-items">Create item<img src="\bluemoon-nft\hot-bid\create5.png" className="max1 " /></button>
                                                        </div>
                                                        <div className="loader-auto">
                                                            <h5>Auto saving</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-12  on-smal-device">
                                <div className="row right-side-divs">
                                    <div className="col-xl-12 col-lg-12 col-12 padd-remov p-0">
                                        <div className="outer-div-right">
                                            <div className="inner-div-right">
                                                <h3 className="inner-first">Preview</h3>
                                                <div className="item">
                                                    <div className="card card-width">
                                                        <div className="upper-divs-triple">
                                                            <img src="\bluemoon-nft\hot-bid\create-9.png" className="max-width-seller " />
                                                            <div className="overlayy">
                                                                <Link to="" ><img src="\bluemoon-nft\hot-bid\heartplace.svg" className="img-sss1" /></Link>
                                                                <Link to="" ><img src="\bluemoon-nft\hot-bid\purchasingss.svg" className="img-sss2" /></Link>
                                                                <Link to="" ><img src="\bluemoon-nft\hot-bid\placebid.png" className="img-sss3" /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="lower-textss text-center">
                                                            <ul className="d-flex  main-button-ul">
                                                                <li>
                                                                    <h3>Legion Space Tiger</h3>
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
                                                <button className="cleare-all"><img src="\bluemoon-nft\hot-bid\create6.png" className="max2 " />Clear all</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="modal fade main-modal-partSSS" id="exampleModal11" tabindex="-1" aria-labelledby="exampleModalLabelss" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content modal-content-set">
                            <div class="modal-header main-header-body">
                                <h5 class="modal-title modal-tittless" id="exampleModalLabelss">Collection</h5>
                                <button type="button" class="preview-close close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><img src="\bluemoon-nft\profiles\item-8.png" /></span>
                                </button>
                            </div>
                            <div class="modalbody mainmodalbody">
                                <div className="outer-div-right">
                                    <div className='images-left'><img src="\bluemoon-nft\profiles\item-7.png" /></div>
                                    <div className="text-rightss">
                                        <h4>We recommend an image
                                            of at least 400x400. Gifs work too.</h4>
                                        <button className="choose-file">Choose file</button>
                                    </div>
                                </div>
                                <div className="feilds-forms">
                                    <div className="form-inner-feild">
                                        <ValidatorForm className="form-contact">

                                        <div className="col-md-12 nopaddss">
                                                <div class="form-group new-row-no">
                                                    <label for="exampleInputsize">Banner image</label>
                                                    <div className="image-dooot">
                                                    <img src="\bluemoon-nft\profiles\item-10.png" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 nopaddss">
                                                <div class="form-group new-row-no">
                                                    <label for="exampleInputsize">Display Name<span>(required)</span></label>
                                                    <TextValidator
                                                        fullWidth
                                                        type="text"
                                                        name="name"
                                                        placeholder="Enter token name"
                                                        className="input-fields"
                                                        variant="outlined"
                                                    // validators={['required', 'isEmail']}
                                                    // errorMessages={['this field is required', 'email is not valid']}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12  nopaddss">
                                                <div class="form-group new-row-no">
                                                    <label for="exampleInputdec">Symbol<span>(required)</span></label>
                                                    <TextValidator
                                                        fullWidth
                                                        type="text"
                                                        name="symbol"
                                                        placeholder="Enter token symbol"
                                                        className="input-fields"
                                                        variant="outlined"
                                                    // validators={['required', 'isEmail']}
                                                    // errorMessages={['this field is required', 'email is not valid']}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12 nopaddss">
                                                <div class="form-group new-row-no">
                                                    <label for="exampleInputsize">Description <span>(optional)</span></label>
                                                    <TextValidator
                                                        fullWidth
                                                        type="text"
                                                        name="size"
                                                        placeholder="Spread some worde about your token collection"
                                                        className="input-fields"
                                                        variant="outlined"
                                                    // validators={['required', 'isEmail']}
                                                    // errorMessages={['this field is required', 'email is not valid']}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12 nopaddss">
                                                <div class="form-group new-row-no">
                                                    <label for="exampleInputsize">short url</label>
                                                    <TextValidator
                                                        fullWidth
                                                        type="text"
                                                        name="size"
                                                        placeholder="bluemoon.com/ enter short url"
                                                        className="input-fields"
                                                        variant="outlined"
                                                    // validators={['required', 'isEmail']}
                                                    // errorMessages={['this field is required', 'email is not valid']}
                                                    />
                                                    <p className="short-pls">Will be used as public URL</p>
                                                </div>
                                            </div>

                                        </ValidatorForm>
                                        <div className="form-submit-buttons">
                                            <button className="buttonss">Create Collcetion</button>
                                            <button className="buttonsss">Cancel</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade main-modal-part" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content modal-content-set">
                            <div class="modal-header main-header-body">
                                <h5 class="modal-title modal-tittless" id="exampleModalLabel">Preview</h5>
                                <button type="button" class="preview-close close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><img src="\bluemoon-nft\profiles\item-8.png" /></span>
                                </button>
                            </div>
                            <div class="modal-body main-modal-body">
                                <div className="outer-div-right">
                                    <div className="inner-div-right">
                                        <div className="item">
                                            <div className="card card-width">
                                                <div className="upper-divs-triple">
                                                    <img src="\bluemoon-nft\hot-bid\nft-image-one.png" className="max-width-seller " />
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
                                        <button className="cleare-all"><img src="\bluemoon-nft\hot-bid\create6.png" className="max2 " />Clear all</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateNfts;