import React, { useEffect } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../hooks/useAuth';
// import Signature from '../../SignMessage/Signature';
import { AddProfile } from '../../services/services';
import { useSelector, useDispatch } from 'react-redux';
import { GetUserData } from '../../redux/action';
import EthBalance from '../../hooks/EthBalance';

const Header = () => {
  const { account,active } = useWeb3React();
  const { login, logout } = useAuth();
  // const { userSign } = Signature(account);
  const userData = useSelector(state => state.CollectionReducer.GetUserData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserData(account));
  }, [account, dispatch])

  const disconnect = () => {
    logout()
    localStorage.setItem('flag', 'false')
  }
  const connectMetaMask = () => {
    login("injected");
    localStorage.setItem('flag', 'true')
  }

  const SignMessage = async () => {
    await AddProfile({ walletAddress: account })
  }
  useEffect(async () => {
    await SignMessage()
  }, [account])
  // const SignMessage=useCallback(async()=>{
  //   await userSign();
  // },[userSign])
  // useEffect (async() => {
  //      await userSign()
  // },[account])

  return (
    <>

      <header className="main-nav">
        <nav className="navbar navbar-expand-lg ">
          <Link className="navbar-brand" to="/">
            <img src="/pegify/landing-assets/logo.svg" alt="" className="img-fluid" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className="style-bar"></div>
            <div className="style-bar"></div>
            <div className="style-bar"></div>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav text-center ml-auto">
              <li class="nav-item ">
                <Link class="nav-link active" to="/">HOME</Link>
                {/* <a class="nav-link" routerLink="">HOME</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/collection">COLLECTION</Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/profile" className="nav-link">PROFILE</Link>
            </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/createitem">CREATE</Link>
              </li>
             
            <div className="d-flex justify-content-center align-items-center">
            {!account ?
                <li className="nav-item">
                  <div >
                    <button class="nav-link buttons-connect" data-toggle="modal" data-target="#exampleModal">CONNECT </button>
                  </div>
                </li>
                : ""}
              {account &&
                <li className="nav-item">
                  <div className="dropdown">
                    <div>
                      <a className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <img src={userData?.ipfsImageUrl} alt="" className="img-fluid inner-tiless" width="50px" height="50px" style={{ borderRadius: '50%' }} />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="row">
                          <div className="col-sm-12">
                            <h5>mydata</h5>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <span className="grey" >sender</span>
                              </li>

                              <li className="list-inline-item">
                                <a className="grey">
                                  <img src="/assets/copy.png" alt="" className="img-fluid" />
                                </a>
                              </li>
                            </ul>
                            <div className="row ptb20">
                              <div className="col-sm-3">
                                <div className="inner-im text-center">
                                  <img src="/assets/bnb-logo.png" alt="" className="img-fluid" />
                                </div>
                              </div>
                              <div className="col-sm-9">
                                <div className="inner-im">
                                  <h6 className="grey">Balance</h6>
                                  <h5><span className="clr">BNB</span></h5>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <button className="btn-common">Add Funds</button>
                              </div>
                            </div>
                            <hr />
                            <ul>
                              <li>
                                <div>
                                  <Link to={`/profile/${account}`}> My Profile</Link>
                                </div>
                              </li>
                              <li>
                                <Link to={`/profiledetail/${account}`}>Edit Profile</Link>
                              </li>
                            </ul>
                            <hr />
                            <div >
                              <button type="button" className="btn-common color-buttonsss" onClick={disconnect}>Disconnect Wallet</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              }
              <li>
              <div className="button_indicator ml-2" style={{ margin: "0", textAlign: "right" }}>
                {account ? "🟢" :  "🔴"}
              </div>
              </li>
              </div>
            </ul>
            <ul>
              
            </ul>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  {/* <div className="modal-header">
                </div> */}
                  <div className="modal-body text-center">
                    <div className="row">
                      <div className="col-sm-12">
                        <h4>Connect Your Wallet</h4>
                        <p><small>Connect with one of available wallet providers or create a new wallet. What is a
                          wallet?</small></p>
                      </div>
                    </div>
                    <div className="meta">
                      <div className="row">
                        <div className="col-sm-12 text-center">
                          <div className="">
                            <img src="/pegify/collection/metamask.png" className="img-fluid" alt="" />
                            <a>
                              <h4 className="">METAMASK</h4>
                              <p className=""><small>One of the most secure wallets with great flexibility</small> </p>
                            </a>
                            <div >
                              <button className="btn-common" data-dismiss="modal" type="button" onClick={connectMetaMask}>CONNECT</button>
                            </div>
                            {/* <div>
                              <button className="btn-common" data-dismiss="modal" >Disconnect </button>
                            </div>  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header;