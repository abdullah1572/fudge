// import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './connectwatt.scss';


function SacnConnects() {
    return (
        <>
            <div className="dark">
                <section className="connectwallet">
                    <div className="container">
                        <div className="backtohome">
                            <h2> <img src="\bluemoon-nft\hot-bid\connect-line.png" alt="" className="max-width-seller " />Connect your wallet</h2>
                        </div>
                        <div className="row main-row">
                            <div className="col-lg-6 main-display-hide">
                                <div className="main-left-conect main-left-scan main-terms-office">
                                    <Link><img src="\bluemoon-nft\hot-bid\one.png" alt="" className="max-width-seller " />Formatic</Link>
                                    <Link className="coin-base-wallet"><img src="\bluemoon-nft\hot-bid\tick-blue.png" alt="" className="max-width-seller " />Coinbase Wallet<img src="\bluemoon-nft\hot-bid\right-line.png" alt="" className="line-right-coinbase " /></Link>
                                    <Link><img src="\bluemoon-nft\hot-bid\three.png" alt="" className="max-width-seller " />MyEtherWallet</Link>
                                    <Link><img src="\bluemoon-nft\hot-bid\four.png" alt="" className="max-width-seller " />Wallet Connect</Link>
                                </div>
                            </div>
                            <div className="col-lg-5 ml-auto">
                                <div className="right-side">
                                    <h3>Scan to connect</h3>
                                    <p>Powered by UI8.Wallet</p>
                                    <div className="grey-div">
                                        <div className="black-div text-center">
                                            <Link to="/termsservice"> <img src="\bluemoon-nft\hot-bid\barcode-qr 1.png" alt="" className="img-fluid" /></Link>
                                        </div>
                                    </div>
                                    <button className="donot-have" type="button">Don’t have a wallet app?</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SacnConnects;