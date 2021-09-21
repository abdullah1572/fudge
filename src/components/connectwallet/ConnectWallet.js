import { Link } from 'react-router-dom';
import './connectwatt.scss';
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../hooks/useAuth';
import useApprove from '../../hooks/useApprove';
import { useState } from 'react';
const ConnectWallets = () => {
    const [amount, setAmount] = useState('');

    const { Approve } = useApprove(amount);
    const { account } = useWeb3React();
    const { login, logout } = useAuth();
    const walletConnect = () => {
        if (account) {
            logout()
            localStorage.setItem('flag', false)
        } else {
           login("walletconnect");
            localStorage.setItem('walletconnect', "walletconnect")
            localStorage.setItem('flag', true)
        }
    }
    const Approved = async () => {
        const hash = await Approve()
    }

    return (
        <>
            <div className="dark">
                <section className="connectwallet">
                    <div className="container">
                        <div className="backtohome">
                          <Link to="/">
                          <h2> <img src="\bluemoon-nft\hot-bid\connect-line.png" alt="" className="max-width-seller " /> Connect your wallet</h2>
                          </Link> 
                          
                        </div>
                        <div className="row main-row">
                            <div className="col-xl-8 col-lg-7 col-md-6">
                                <div className="main-left-conect ">
                                    <Link><img src="\bluemoon-nft\hot-bid\one.png" alt="" className="max-width-seller " />Formatic</Link>
                                    {/* <Link to="/scanwallet"><img src="\bluemoon-nft\hot-bid\two.png" alt="" className="max-width-seller " />Coinbase Wallet</Link> */}
                                    <button type="button" className="button-connect-wallet" onClick={walletConnect} ><img src="/bluemoon-nft/hot-bid/two.png" alt="" className="max-width-seller" />Coinbase Wallet</button>
                                    <Link><img src="\bluemoon-nft\hot-bid\three.png" alt="" className="max-width-seller " />MyEtherWallet</Link>
                                    <Link><img src="\bluemoon-nft\hot-bid\four.png" alt="" className="max-width-seller " />Wallet Connect</Link>
                                </div>
                            <input type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount" />
                            <button onClick={Approved} type="button">Approve</button>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-6">
                                <div className="image">
                                    <img src="\bluemoon-nft\hot-bid\QR Code.png" alt="" className="max-width-seller " />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ConnectWallets;