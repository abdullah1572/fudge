import React from 'react';
import Header from '../header/Header';
import './create.scss';
const Create = () => {
    const owl_option = {

        margin: 40,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        dotsEach: true,
        loop: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,


            },
            400: {
                items: 1,


            },
            600: {
                items: 1,


            },
            700: {
                items: 1,

            },
        },
    };

    return (
        <>

<section class="create">
    <div class="container">
        <Header/>
        <div class="row  ptb">
            <div class="col-sm-12">
                <div class="inner-head">
                    <h2>Create Item</h2>
                </div>
            </div>
        </div>

        <div class="row">
            {/* <ngx-spinner bdColor = "rgba(0, 0, 0, 0.8)" size = "medium" color = "#fff" type = "square-jelly-box" ><p style="color: white" > Please confirm the transaction in your wallet and wait for it to go through. </p></ngx-spinner> */}
            <div class="col-sm-9">

                <h5>Upload File</h5>
                <div class="inner-content text-center">
               
                        <div class="row pt160" >
                            <div class="col-sm-12">
                                <h4 class="grey ptb20">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</h4>
                                <label for="file" class="custom-file-upload btn-common-2">
                                    UPLOAD FILE <i class="fa fa-cloud-upload"></i>
                                </label>
                                <input class="form-control" id="file"  type="file"  />
                            </div>
                        </div>    
                        <div class="row">
                            <div class="col-sm-12">
                                <img src="" alt="" class="img-show"/>
                            </div>
                        </div>  
                </div>

                <div class="row ptb20">
                    <div class="col-sm-9">
                        <div class="inner-inpt">
                         
                                <div class="form-group">
                                    <div class="inner-logo-b">
                                        <h5>Price</h5>
                                        <input type="number" class="form-control" id="exampleFormControlInput1"
                                             name="price"
                                            placeholder=" Enter price for this NFT "/>
                                        <img src="../../assets/bnb-logo.png" alt="" class="img-fluid"/>
                                    </div>
                                </div>
                                <div class="form-group ptb20">
                                    <h5>Name</h5>
                                    <input type="name" class="form-control" id="exampleFormControlInput1"
                                     name="title"
                                        placeholder="Enter the name for this NFT "/>
                                </div>

                                <div class="form-group ptb20">
                                    <h5>Description</h5>
                                    <textarea class="form-control" id="exampleFormControlTextarea1"
                                        name="description"
                                        placeholder="Enter a few lines about this NFT"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="inner-drop">
                                        <h5>Categories</h5>
                                        <select name="" id="" class="form-control"  name="categoryId" >
                                            <option value="34"> </option>
                                        </select>
                                         <div class="dropdown">
                                            <button class="dropdown-toggle" type="button" id="dropdownMenuButton"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Art
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">
                                                    Photography
                                                </a>
                                                <a class="dropdown-item" href="#">Games
                                                </a>
                                                <a class="dropdown-item" href="#">Sports
                                                </a>
                                                <a class="dropdown-item" href="#">Memes
                                                </a>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="form-group ptb20">
                                    <h5>Royalties</h5>
                                    <input type="number" class="form-control" id="exampleFormControlInput1"
                                        name="royalties"
                                        placeholder="Enter the percentage of royalties %" />
                                </div>

                                <div class="switch ptb20">
                                    Put on marketplace &nbsp;&nbsp;&nbsp;
                                    <label class="switch">
                                        <input type="checkbox" name="forSale"/>
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                                <ul class="list-inline ptb20">
                                    <li class="list-inline-item">
                                        <button class="btn-common" type="submit" >Create NFT</button>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-3 d-none d-sm-block">
                <h5>Preview</h5>
             <div routerLink="/art-work" class="inner-card">
                    <img src="../../assets/pegify/landing-assets/nft-one.png" alt=""
                        class="img-fluid mb10"/>

                    <h4>MAN X MACHINE</h4>
                    <h6 class="clr">0.70 BNB</h6>
                    <hr/>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <img src="../../assets/pegify/landing-assets/artist-image-one.png"
                                alt="" class="img-fluid"/>
                            &nbsp;
                            <span class="grey">Baylee</span>
                        </li>
                    </ul>
                </div> 

                <div routerLink="/art-work" class="inner-card">
                    <div class="inner-tile">
                        <h5 class="grey">Upload file to preview your NFT</h5>
                    </div>
                    <div class="border1"></div>
                    <div class="border2"></div>
                    <hr/>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <img src="../../assets/pegify/landing-assets/artist-image-one.png" alt="" class="img-fluid"/>
                            &nbsp;
                            <span class="grey">Baylee</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    )
}

export default Create;