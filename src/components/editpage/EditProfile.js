
import React from 'react';
import { Link } from 'react-router-dom';
import './edit.scss';
function EditUserProfile() {
    return (
        <>
            <div className="dark">
                <section className="edit-profile">
                    <div className="backtohomess">
                        <div className="container">
                            <div className="backtohome">
                                <div className="left-side-button">
                                    <Link to="/"> <button type="button" className="buttonss">
                                        <img src="\bluemoon-nft\hot-bid\line.png" className="max-width-seller " />Back to home
                                    </button></Link>
                                </div>
                                <div className="home-upload">
                                    <ul className="display hom-uploaddsds">
                                        <li className="nav-item">
                                            <Link className="nav-link aa">Home</Link>
                                        </li>
                                        <span> <img src="\bluemoon-nft\hot-bid\Shape.png" className="max-width-seller " /></span>
                                        <li className="nav-item active acti ">
                                            <Link className="nav-link aa">Upload Item </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-12 m-auto">
                                <div className="text-heads-edit">
                                    <h2>Edit profile</h2>
                                    <h4>You can set preferred display name, create<span> &nbsp; your profile URL &nbsp; </span> and manage other personal settings.</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12 p-0">
                                        <div className="edit-profiless">
                                            <div className="left-edit">
                                                <img src="\bluemoon-nft\hot-bid\edit-profile-1.png" className="img-editss " />
                                            </div>
                                            <div className="right-edit">
                                                <h4>Profile photo</h4>
                                                <p>   We recommend an image
                                                    of at least 400x400.Gifs work too 🙌</p>
                                                <div className="file-edit-button">
                                                    <form action="">
                                                        <input type="file" className="custom-file-inputt" id="myFile" name="filename" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 p-0">
                                        <div className="row left-side-divs">
                                            <div className="col-xl-12 col-lg-6 col-12 padd-remov">
                                                <div className="form-main-form-account">
                                                    <h4>Account info</h4>
                                                    <div class="form-group">
                                                        <label for="exampleInputdisplayname">display name</label>
                                                        <input type="text" class="form-control" id="exampleInputdisplayname" aria-describedby="emailHelp" placeholder="Enter your display name" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputurl">Custom url</label>
                                                        <input type="text" class="form-control" id="exampleInputurl" placeholder="ui8.net/Your custom URL" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputurlbio">Bio</label>
                                                        <textarea class="form-control" id="exampleInputurlbio" placeholder="About yourselt in a few words" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-6 col-12 padd-remov">
                                                <div className="form-main-form-social">
                                                    <h4>Social</h4>
                                                    <div class="form-group">
                                                        <label for="exampleInputurl">portfolio or website</label>
                                                        <input type="text" class="form-control" id="exampleInputurl" aria-describedby="emailHelp" placeholder="Enter URL" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputtwitter">twitter</label>
                                                        <input type="text" class="form-control" id="exampleInputtwitter" placeholder="@twitter username" />
                                                    </div>
                                                    <button className="twittersss" type="button"> <img src="\bluemoon-nft\hot-bid\edit-profile-4.png" className="max-width-seller " /><span>Add more social account</span></button>
                                                </div>
                                            </div>
                                            <div className="col-12 padd-remov">
                                                <p className="doen-p">To update your settings you should sign message through your wallet. Click 'Update profile' then sign the message</p>
                                                <div className="buttonss">
                                                    <button type="button" className="left-but">Update Profile</button>
                                                    <button type="button" className="right-but"><img src="\bluemoon-nft\hot-bid\edit-profile-2.png" className="max-width-seller " /> Clear all</button>
                                                </div>
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
    );
}

export default EditUserProfile;