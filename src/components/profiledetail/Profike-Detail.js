import React from 'react';
import Header from '../header/Header';
import './profiledetail.scss';
const ProfileDetail = () => {
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
                    <h2>Edit Profile</h2>
                </div>
            </div>
        </div>

        <div class="row">
    {/* <ngx-spinner bdColor = "rgba(0, 0, 0, 0.8)" size = "medium" color = "#fff" type = "square-jelly-box" [fullScreen] = "true"><p style="color: white" >Loading ... </p></ngx-spinner> */}

            <div class="col-sm-8">
                
                
                <div class="row ptb20">
                    <div class="col-sm-12">
                        <div class="inner-inpt">
                            <form name="form" >
                                {/* <div class="alert alert-danger" >
                                    <p>dfdfd.</p>
                                </div> */}
                                <div class="form-group">
                                    <h5>Display Name</h5>
                                    <input type="text" class="form-control"   name="displayName"   placeholder="Enter Display Name" required/>
                                    <div  class="invalid-feedback">
                                        <div >
                                        </div>
                                      </div>
                                </div>
                                <div class="form-group ptb20">
                                    <h5>Bio</h5>
                                    <textarea class="form-control"  name="bio"   placeholder="Tell about yourself in a few words" required></textarea>
                                    <div  class="invalid-feedback">
                                        <div >
                                        </div>
                                      </div>
                                </div>
                                <div class="form-group ptb20">
                                    <h5>Twitter Username</h5>
                                    <input type="type" class="form-control"  name="twitter" placeholder="Enter your twitter username"/>
                                </div>
                                <div class="form-group ptb20">
                                    <h5>Instagram</h5>
                                    <input type="type" class="form-control"   name="instagram" placeholder="Enter your instagram username"/>
                                </div>
                                <div class="form-group ptb20">
                                    <h5>Facebook Username</h5>
                                    <input type="type" class="form-control"   name="facebook" placeholder="Enter your facebook username"/>
                                </div>
                               
                                <div class="form-group ptb20">
                                    <h5>Telegram Channel</h5>
                                    <input type="type" class="form-control"   name="telegram" placeholder="Enter your telegram username"/>
                                </div>
                                <div class="form-group ptb20">
                                    <h5>Email Address</h5>
                                    <input type="email" class="form-control"   email name="email"    placeholder="enter your Email Address" required />
                                    <div  class="invalid-feedback">
                                        <div >
                                        </div>
                                        <div >
                                        </div>
                                      </div>
                                </div>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <button class="btn-common" type="submit">Save Changes</button>
                                    </li>
                                    {/* <li class="list-inline-item">
                                        <div >
                                            <h4>dfdf</h4>
                                        </div>
                                    </li> */}
                                    
                                    <li class="list-inline-item">
                                        <button class="remove">Cancel</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="inner-cards ptb20 text-center">
                    <h5>User Image</h5>
                   
                    <div class="row" >
                        <div>
                            <img src="data:image/png;base64,{{base64textString}}" alt="" class="img-show" />
                        </div>
                    </div> 
                    <div >
                        <img src="{{data.profileImage}}" alt="" class="img-show" /> 
                    </div>
                    <ul class="list-inline ptb20">
                        <li class="list-inline-item">
                            <div>
                                <label for="file" class="custom-file-upload btn-common-2">
                                     Upload Image <i class="fa fa-cloud-upload"></i>
                                </label>
                                <input class="form-control" id="file"  type="file" />
                            </div>
                        </li>
                        <div>
                            <li class="list-inline-item">
                                <button class="remove">Remove</button>
                            </li>
                        </div>  
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


        </>
    )
}

export default ProfileDetail ;