import React from 'react';
import './mainlanding.scss';
import OwlCarousel from 'react-owl-carousel';
const Bluemoon = () => {
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
           <section class="main-banner">
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-sm-7">
                <div class="inner-content  ptb">
                    <h2 class="clr">Welcome to Pegify</h2>
                    <h1>The #1 Community Based NFT Platform</h1>
                    <p class="grey ptb20">Create, Sell, or Buy your NFTs with our biggest NFT Community</p>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <div class="inner-btn">
                                <button class="btn-common" routerLink="/collection">see collections</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-5">
                <div class="inner-imgs">
                    <img src="../../assets/pegify/landing-assets/header-image.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="explore ptb">
    <ngx-spinner bdColor="rgba(0, 0, 0, 0.8)" size="medium" color="#fff" type="square-jelly-box" [fullScreen]="true">
        <p style="color: white">Loading ... </p>
    </ngx-spinner>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2>EXPLORE</h2>
                <div class="inner-tabs">
                    <ul class="nav nav-pills mb-3  ptb20" id="pills-tab" role="tablist">
                        <li class="nav-item" active>
                            <a class=" btn-common-2 " id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                role="tab" aria-controls="pills-home" aria-selected="true" (click)="load()">All</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn-common-2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                role="tab" aria-controls="pills-profile" aria-selected="false"
                                (click)="changecollection(1)">Art</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn-common-2" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                                role="tab" aria-controls="pills-contact" aria-selected="false"
                                (click)="changecollection(2)">Photography</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn-common-2" id="pills-meme-tab" data-toggle="pill" href="#pills-meme" role="tab"
                                aria-controls="pills-meme" aria-selected="false" (click)="changecollection(3)">Games</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn-common-2" id="pills-Photography-tab" data-toggle="pill"
                                href="#pills-Photography" role="tab" aria-controls="pills-Photography"
                                aria-selected="false" (click)="changecollection(4)">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn-common-2" id="pills-sports-tab" data-toggle="pill" href="#pills-sports"
                                role="tab" aria-controls="pills-sports" aria-selected="false"
                                (click)="changecollection(5)">Memes</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">
                            <div class="row ptb20">
                                <div class="col-sm-3" *ngFor="let items of allresdata">
                                    <div class="inner-card">
                                        <div *ngIf="items.Creator.profileImage">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <img src="{{items.Creator.profileImage}}" alt=""
                                                            class="img-fluid"
                                                            style="width: 50px; height: 50px; border-radius: 30px;">
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check">
                                                    </div>
                                                </li>
                                                <li class="list-inline-item">
                                                    <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                                        title="Owner">
                                                        <img src="{{items.Owner.profileImage}}" alt="" class="img-fluid"
                                                            style="width: 50px; height: 50px; border-radius: 30px;">
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check">
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div *ngIf="!items.Creator.profileImage">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                fill="#35374A" />
                                                        </svg>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item" style="margin-left: -22px;">
                                                    <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <div routerLink="/art-work/{{items.id}}/{{mydata}}">
                                            <img src="{{items.imageLink}}" alt="" class="img-fluid mb10 mx-auto d-block"
                                                style="width: 200px; height: 200px;">

                                            <h4>{{items.name}}</h4>
                                        </div>

                                        <h6 class="clr">{{items.price}} BNB</h6>
                                        <hr>

                                        <ul class="list-inline">
                                            <li class="list-inline-item" *ngIf="!items.users.length"
                                                (click)="likeapp1(items?.id)">
                                                <img src="../../assets/pegify/heart-outline.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey">{{items.likes}} </span>
                                            </li>
                                            <li class="list-inline-item" *ngIf="items.users.length"
                                                (click)="unlikeapp1(items?.id)">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey"> {{items.likes}} </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- <div class="col-sm-3">
                                    <div routerLink="/art-work" class="inner-card">
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="../../assets/pegify/landing-assets/nft-two.png" alt="" class="img-fluid mb10">

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt="" class="img-fluid">
                                                <span class="grey"> 1.5k </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div routerLink="/art-work" class="inner-card">
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="../../assets/pegify/landing-assets/nft-three.png" alt="" class="img-fluid mb10">

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt="" class="img-fluid">
                                                <span class="grey"> 1.5k </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div routerLink="/art-work" class="inner-card">
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="../../assets/pegify/landing-assets/nft-four.png" alt="" class="img-fluid mb10">

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt="" class="img-fluid">
                                                <span class="grey"> 1.5k </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div> -->
                            </div>
                            <!-- <div class="row">
                                <div class="col-sm-3">
                                    <div routerLink="/art-work" class="inner-card">
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="../../assets/pegify/landing-assets/nft-one.png" alt="" class="img-fluid mb10">

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt="" class="img-fluid">
                                                <span class="grey"> 1.5k </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div routerLink="/art-work" class="inner-card">
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="../../assets/pegify/landing-assets/nft-two.png" alt="" class="img-fluid mb10">

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt="" class="img-fluid">
                                                <span class="grey"> 1.5k </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div routerLink="/art-work" class="inner-card">
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="../../assets/pegify/landing-assets/nft-three.png" alt="" class="img-fluid mb10">

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt="" class="img-fluid">
                                                <span class="grey"> 1.5k </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div routerLink="/art-work" class="inner-card">
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <div class="inner-tile" data-toggle="tooltip" data-placement="top" title="Creator">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                            <li class="list-inline-item">
                                                <div class="inner-tile2" data-toggle="tooltip" data-placement="top" title="Owner">
                                                    <img src="../../assets/Ellipse.svg" alt="" class="img-fluid">
                                                    <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                                </div>
                                            </li>
                                        </ul>
                                        <img src="../../assets/pegify/landing-assets/nft-four.png" alt="" class="img-fluid mb10">

                                        <h4>MAN X MACHINE</h4>
                                        <h6 class="clr">0.70 BNB</h6>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt="" class="img-fluid">
                                                <span class="grey"> 1.5k </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab">
                            <div class="row ptb20">
                                <div class="col-sm-3" *ngFor="let items of typeCategories">
                                    <div class="inner-card">
                                        <div *ngIf="items.Creator.profileImage">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <img src="{{items.Creator.profileImage}}" alt=""
                                                            class="img-fluid"
                                                            style="width: 50px; height: 50px; border-radius: 30px;">
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check">
                                                    </div>
                                                </li>
                                                <li class="list-inline-item">
                                                    <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                                        title="Owner">
                                                        <img src="{{items.Owner.profileImage}}" alt="" class="img-fluid"
                                                            style="width: 50px; height: 50px; border-radius: 30px;">
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check">
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div *ngIf="!items?.Creator.profileImage">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                fill="#35374A" />
                                                        </svg>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item" style="margin-left: -22px;">
                                                    <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <div routerLink="/art-work/{{items.id}}/{{mydata}}">
                                            <img src="{{items.imageLink}}" alt="" class="img-fluid mb10 mx-auto d-block"
                                                style="width: 200px; height: 200px;">

                                            <h4>{{items.name}}</h4>
                                            <h6 class="clr">{{items.price}} BNB</h6>
                                        </div>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item" *ngIf="!items.users.length"
                                                (click)="likeapp(items)">
                                                <img src="../../assets/pegify/heart-outline.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey">{{items.likes}} </span>
                                            </li>
                                            <li class="list-inline-item" *ngIf="items.users.length"
                                                (click)="unlikeapp(items)">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey"> {{items.likes}} </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                            aria-labelledby="pills-contact-tab">
                            <div class="row ptb20">
                                <div class="col-sm-3" *ngFor="let items of typeCategories">
                                    <div  class="inner-card">
                                        <div routerLink="/art-work/{{items.id}}/{{mydata}}">
                                            <div *ngIf="items.Creator.profileImage">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <div class="inner-tile" data-toggle="tooltip"
                                                            data-placement="top" title="Creator">
                                                            <img src="{{items.Creator.profileImage}}" alt=""
                                                                class="img-fluid"
                                                                style="width: 50px; height: 50px; border-radius: 30px;">
                                                            <img src="../../assets/Vector.svg" alt=""
                                                                class="img-fluid for-check">
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <div class="inner-tile2" data-toggle="tooltip"
                                                            data-placement="top" title="Owner">
                                                            <img src="{{items.Owner.profileImage}}" alt=""
                                                                class="img-fluid"
                                                                style="width: 50px; height: 50px; border-radius: 30px;">
                                                            <img src="../../assets/Vector.svg" alt=""
                                                                class="img-fluid for-check">
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div *ngIf="!items.Creator.profileImage">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <div class="inner-tile" data-toggle="tooltip"
                                                            data-placement="top" title="Creator">
                                                            <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                    fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                                <path opacity="0.3" fill-rule="evenodd"
                                                                    clip-rule="evenodd"
                                                                    d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                    fill="#35374A" />
                                                            </svg>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item" style="margin-left: -22px;">
                                                        <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                fill="#35374A" />
                                                        </svg>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src="{{items.imageLink}}" alt="" class="img-fluid mb10 mx-auto d-block"
                                                style="width: 200px; height: 200px;">

                                            <h4>{{items.name}}</h4>
                                            <h6 class="clr">{{items.price}} BNB</h6>
                                        </div>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item" *ngIf="!items.users.length"
                                                (click)="likeapp(items)">
                                                <img src="../../assets/pegify/heart-outline.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey">{{items.likes}} </span>
                                            </li>
                                            <li class="list-inline-item" *ngIf="items.users.length"
                                                (click)="unlikeapp(items)">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey"> {{items.likes}} </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-meme" role="tabpanel" aria-labelledby="pills-meme-tab">
                            <div class="row ptb20">
                                <div class="col-sm-3" *ngFor="let items of typeCategories">
                                    <div class="inner-card">
                                        <div *ngIf="items.Creator.profileImage">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <img src="{{items.Creator.profileImage}}" alt=""
                                                            class="img-fluid"
                                                            style="width: 50px; height: 50px; border-radius: 30px;">
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check">
                                                    </div>
                                                </li>
                                                <li class="list-inline-item">
                                                    <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                                        title="Owner">
                                                        <img src="{{items.Owner.profileImage}}" alt="" class="img-fluid"
                                                            style="width: 50px; height: 50px; border-radius: 30px;">
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check">
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div *ngIf="!items.Creator.profileImage">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                fill="#35374A" />
                                                        </svg>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item" style="margin-left: -22px;">
                                                    <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <div routerLink="/art-work/{{items.id}}/{{mydata}}">
                                            <img src="{{items.imageLink}}" alt="" class="img-fluid mb10 mx-auto d-block"
                                                style="width: 200px; height: 200px;">

                                            <h4>{{items.name}}</h4>
                                            <h6 class="clr">{{items.price}} BNB</h6>
                                        </div>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item" *ngIf="!items.users.length"
                                                (click)="likeapp(items)">
                                                <img src="../../assets/pegify/heart-outline.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey">{{items.likes}} </span>
                                            </li>
                                            <li class="list-inline-item" *ngIf="items.users.length"
                                                (click)="unlikeapp(items)">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey"> {{items.likes}} </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-Photography" role="tabpanel"
                            aria-labelledby="pills-Photography-tab">
                            <div class="row ptb20">
                                <div class="col-sm-3" *ngFor="let items of typeCategories">
                                    <div class="inner-card">
                                        <div *ngIf="items.Creator.profileImage">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <img src="{{items.Creator.profileImage}}" alt=""
                                                            class="img-fluid"
                                                            style="width: 50px; height: 50px; border-radius: 30px;">
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check">
                                                    </div>
                                                </li>
                                                <li class="list-inline-item">
                                                    <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                                        title="Owner">
                                                        <img src="{{items.Owner.profileImage}}" alt="" class="img-fluid"
                                                            style="width: 50px; height: 50px; border-radius: 30px;">
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check">
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div *ngIf="!items.Creator.profileImage">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                fill="#35374A" />
                                                        </svg>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item" style="margin-left: -22px;">
                                                    <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <div routerLink="/art-work/{{items.id}}/{{mydata}}">
                                            <img src="{{items.imageLink}}" alt="" class="img-fluid mb10 mx-auto d-block"
                                                style="width: 200px; height: 200px;">

                                            <h4>{{items.name}}</h4>
                                            <h6 class="clr">{{items.price}} BNB</h6>
                                        </div>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item" *ngIf="!items.users.length"
                                                (click)="likeapp(items)">
                                                <img src="../../assets/pegify/heart-outline.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey">{{items.likes}} </span>
                                            </li>
                                            <li class="list-inline-item" *ngIf="items.users.length"
                                                (click)="unlikeapp(items)">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey"> {{items.likes}} </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-sports" role="tabpanel" aria-labelledby="pills-sports-tab">
                            <div class="row ptb20">
                                <div class="col-sm-3" *ngFor="let items of typeCategories">
                                    <div class="inner-card">
                                        <div *ngIf="items.Creator.profileImage">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <img src="{{items.Creator.profileImage}}" alt=""
                                                            class="img-fluid"
                                                            style="width: 50px; height: 50px; border-radius: 30px;">
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check">
                                                    </div>
                                                </li>
                                                <li class="list-inline-item">
                                                    <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                                        title="Owner">
                                                        <img src="{{items.Owner.profileImage}}" alt="" class="img-fluid"
                                                            style="width: 50px; height: 50px; border-radius: 30px;">
                                                        <img src="../../assets/Vector.svg" alt=""
                                                            class="img-fluid for-check">
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div *ngIf="!items.Creator.profileImage">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                                        title="Creator">
                                                        <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                fill="#35374A" />
                                                        </svg>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item" style="margin-left: -22px;">
                                                    <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                            fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                            fill="#35374A" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <div routerLink="/art-work/{{items.id}}/{{mydata}}">
                                            <img src="{{items.imageLink}}" alt="" class="img-fluid mb10 mx-auto d-block"
                                                style="width: 200px; height: 200px;">

                                            <h4>{{items.name}}</h4>
                                            <h6 class="clr">{{items.price}} BNB</h6>
                                        </div>
                                        <hr>
                                        <ul class="list-inline">
                                            <li class="list-inline-item" *ngIf="!items.users.length"
                                                (click)="likeapp(items)">
                                                <img src="../../assets/pegify/heart-outline.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey">{{items.likes}} </span>
                                            </li>
                                            <li class="list-inline-item" *ngIf="items.users.length"
                                                (click)="unlikeapp(items)">
                                                <img src="../../assets/pegify/landing-assets/heart.png" alt=""
                                                    class="img-fluid">
                                                <span class="grey"> {{items.likes}} </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row ptb20">
            <div class="col-sm-12 text-center">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <button class="btn-common">Load more</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="getnft ptb">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="inner-content text-center">
                    <h2>GET YOUR VERY FIRST NFT!</h2>
                    <h4 class="grey">Here's how it's work</h4>

                    <img src="../../assets/pegify/landing-assets/video.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="services ptb">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="inner-side">
                    <img src="../../assets/pegify/landing-assets/peggs-liquidity-icon.png" alt="" class="img-fluid">
                    <h4>PEGGS Liquidity</h4>
                    <p class="grey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="inner-side">
                    <img src="../../assets/pegify/landing-assets/peggs-stats-icon.png" alt="" class="img-fluid">
                    <h4>PEGGS Stats</h4>
                    <p class="grey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="inner-side">
                    <img src="../../assets/pegify/landing-assets/peggs-volume.png" alt="" class="img-fluid">
                    <h4>PEGGS Volume</h4>
                    <p class="grey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="featured ptb">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="inner-content">
                    <h3 class="clr ptb20">FEATURED ARTIST</h3>
                    <h2>Adijavar Maccaroni</h2>
                    <p class="grey">I believe that love is difficult, but worth trying</p>

                    <ul class="list-inline ptb20">
                        <li class="list-inline-item">
                            <div class="inner-icon">
                                <a href="">
                                    <img src="../../assets/pegify/landing-assets/artist-social-facebook.png" alt=""
                                        class="img-fluid">
                                </a>
                            </div>
                        </li>
                        <li class="list-inline-item">
                            <div class="inner-icon">
                                <a href="">
                                    <img src="../../assets/pegify/landing-assets/artist-social-twitter.png" alt=""
                                        class="img-fluid">
                                </a>
                            </div>
                        </li>
                        <li class="list-inline-item">
                            <div class="inner-icon">
                                <a href="">
                                    <img src="../../assets/pegify/landing-assets/artist-social-dribbble.png" alt=""
                                        class="img-fluid">
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <div class="inner-btn">
                                <button class="btn-common">see collection</button>
                            </div>
                        </li>
                        <li class="list-inline-item">
                            <div class="inner-btn">
                                <button class="btn-common-2">follow</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="inner-artist">
                    <img src="../../assets/pegify/landing-assets/featured-artist-image.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="mobile ptb">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <img src="../../assets/pegify/landing-assets/mobile-image.png" alt="" class="img-fluid">
            </div>
        </div>
    </div>
</section>

<section class="pink ptb">
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <div class="inner-content text-center">
                    <img src="../../assets/pegify/landing-assets/nft-icon.png" alt="" class="img-fuild">
                    <h3>NFTS</h3>
                    <h2>16246</h2>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="inner-content text-center">
                    <img src="../../assets/pegify/landing-assets/transaction-icon.png" alt="" class="img-fuild">
                    <h3>TRANSACTIONS</h3>
                    <h2>16246</h2>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="inner-content text-center">
                    <img src="../../assets/pegify/landing-assets/artists-icon.png" alt="" class="img-fuild">
                    <h3>ARTISTS</h3>
                    <h2>16246</h2>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="inner-content text-center">
                    <img src="../../assets/pegify/landing-assets/members-icon.png" alt="" class="img-fuild">
                    <h3>MEMBERS</h3>
                    <h2>16246</h2>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="latest ptb">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2> <span class="clr">LATEST</span> UPLOADS</h2>
                <div class="row ptb20">
                    <div class="col-sm-3" *ngFor="let latest of latestitems">
                        <div class="inner-card">
                            <div *ngIf="latest?.Creator.profileImage">
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                            title="Creator">
                                            <img src="{{latest?.Creator.profileImage}}" alt="" class="img-fluid"
                                                style="width: 50px; height: 50px; border-radius: 30px;">
                                            <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <div class="inner-tile2" data-toggle="tooltip" data-placement="top"
                                            title="Owner">
                                            <img src="{{latest?.Owner.profileImage}}" alt="" class="img-fluid"
                                                style="width: 50px; height: 50px; border-radius: 30px;">
                                            <img src="../../assets/Vector.svg" alt="" class="img-fluid for-check">
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div *ngIf="!latest?.Creator.profileImage">
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <div class="inner-tile" data-toggle="tooltip" data-placement="top"
                                            title="Creator">
                                            <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                    fill="#F6F6F6" stroke="white" stroke-width="3" />
                                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                    fill="#35374A" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li class="list-inline-item" style="margin-left: -22px;">
                                        <svg width="50" height="50" viewBox="0 0 56 56" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                fill="#F6F6F6" stroke="white" stroke-width="3" />
                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                fill="#35374A" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div routerLink="/art-work/{{latest.id}}/{{mydata}}">
                                <img src="{{latest?.imageLink}}" alt="" class="img-fluid mb10  mx-auto d-block"
                                    style="width: 200px; height: 200px;">

                                <h4>{{latest?.name}}</h4>
                                <h6 class="clr">{{latest?.price}} BNB</h6>
                            </div>
                            <hr>
                            <ul class="list-inline">
                                <li class="list-inline-item" *ngIf="!latest.users.length" (click)="likeapp1(latest?.id)">
                                    <img src="../../assets/pegify/heart-outline.png" alt="" class="img-fluid">
                                    <span class="grey">{{latest.likes}} </span>
                                </li>
                                <li class="list-inline-item" *ngIf="latest.users.length"
                                    (click)="unlikeapp1(latest?.id)">
                                    <img src="../../assets/pegify/landing-assets/heart.png" alt="" class="img-fluid">
                                    <span class="grey"> {{latest.likes}} </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row ptb20">
                    <div class="col-sm-12 text-center">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <button class="btn-common">Load more</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<app-footer></app-footer>
        </>
    )
}

export default Bluemoon;