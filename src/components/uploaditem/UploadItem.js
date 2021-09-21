// import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './uploaditem.scss';


function UploadsItem() {
    return (
        <>
            <div className="dark">
                <section className="upload-items">
                    <div className="backtohomess">
                        <div className="container">
                            <div className="backtohome">
                                <div className="left-side-button">
                                    <Link to="/"> <button type="button" className="buttonss">
                                        <img src="\bluemoon-nft\hot-bid\line.png" className="max-width-seller " />Back to home
                                    </button></Link>
                                </div>
                                <div className="home-upload">
                                    <ul className="display">
                                        <li className="nav-item">
                                            <Link className="nav-link aa">Home</Link>
                                        </li>
                                        <span> <img src="\bluemoon-nft\hot-bid\Shape.png" className="max-width-seller " /></span>
                                        <li className="nav-item active acti">
                                            <Link className="nav-link aa">Upload Item </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 offset-xl-2 offset-lg-1 ">
                                <div className="text-head text-center">
                                    <h1>Upload item</h1>
                                    <p>Choose <span>“Single”</span> if you want your collectible to be one of a kind or <span>“Multiple”</span> if you want to sell one collectible multiple times</p>
                                </div>
                                <div className="row hide-upload">
                                    <div className="col-md-6">
                                        <div className="left-card text-center">
                                            <img src="\bluemoon-nft\hot-bid\left-up.png" className="max-width-seller " />
                                            <Link to="createnft"><button className="buttons" type="button">Create Single</button></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="left-card text-center">
                                            <img src="\bluemoon-nft\hot-bid\right-up.png" className="max-width-seller " />
                                            <button className="buttons" type="button">Create Multiple</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-div-terms">
                                    <div className="upper-single">
                                        <Link className="coin-base-wallet"><img src="\bluemoon-nft\hot-bid\icon-upload-1.png" className="max-width-seller " />Create Single<img src="\bluemoon-nft\hot-bid\icon-upload-3.png" className="line-right-coinbase " /></Link>
                                    </div>
                                    <div className="multiple">
                                        <Link className="coin-base-wallet"><img src="\bluemoon-nft\hot-bid\icon-upload-2.png" className="max-width-seller " />Create Multiple<img src="\bluemoon-nft\hot-bid\icon-upload-3.png" className="line-right-coinbase " /></Link>
                                    </div>
                                </div>

                                <p className="pp text-center">We do not own your private keys and cannot access your funds without your confirmation.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default UploadsItem;