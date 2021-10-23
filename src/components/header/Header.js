import React,{useEffect} from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../hooks/useAuth';
import Signature from '../../SignMessage/Signature';

const Header = () => {
  const {account} = useWeb3React();
  const { login, logout } = useAuth();
  const { userSign } = Signature(account);
 const disconnect=()=>{
   logout()
 }
  const connectMetaMask = () => {
    localStorage.setItem('injected', "injected")
    if (account) {
      logout()
    } else {
      login("injected");
  
    }
  }

  useEffect (async() => {
    await userSign();
  },[account])

  return (
    <>

      <header class="main-nav">
        <nav class="navbar navbar-expand-lg ">
          <Link class="navbar-brand" to="/">
            <img src="/pegify/landing-assets/logo.svg" alt="" class="img-fluid" />
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div class="style-bar"></div>
            <div class="style-bar"></div>
            <div class="style-bar"></div>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ">
                <Link class="nav-link active" to="/">HOME</Link>
                {/* <a class="nav-link" routerLink="">HOME</a> */}
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/collection">COLLECTION</Link>
              </li>
              {/* <li class="nav-item">
                <Link to="/profile" class="nav-link">PROFILE</Link>
            </li> */}
              <li class="nav-item">
                <Link class="nav-link" to="/createitem">CREATE</Link>
              </li>
              {!account ?
              <li class="nav-item">
                <div >
                  <Link class="nav-link buttons-connect" data-toggle="modal" data-target="#exampleModal">CONNECT </Link>
                </div>
              </li>
                  :""}
              {account &&
              <li class="nav-item">
                <div class="dropdown">
                  {/* <div >
              <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <img src="" alt="" class="img-show"
                  />
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div class="row">
                  <div class="col-sm-12">
                    <h5>asdasd</h5>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <span class="grey" >as</span>
                      </li>

                     <li class="list-inline-item">
                        <button class="grey">
                          <img src="../../assets/copy.png" alt="" class="img-fluid" />
                        </button>
                      </li> 
                    </ul>

                    <div class="row ptb20">
                      <div class="col-sm-3">
                        <div class="inner-im text-center">
                          <img src="../../assets/bnb-logo.png" alt="" class="img-fluid" />
                        </div>
                      </div>
                      <div class="col-sm-9">
                        <div class="inner-im">
                          <h6 class="grey">Balance</h6>
                          <h5>asd <span class="clr">BNB</span></h5>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                       <button class="btn-common">Add Funds</button> 
                      </div>
                    </div>

                    <hr />
                    <a routerLink="/profile">My Profile</a>
                    <hr />
                    <a routerLink="/edit-profile">Edit Profile</a>
              <hr/>
                    <div ><a>Disconnect Wallet</a></div>
                  </div>
                </div>
              </div>
            </div> */}
                  <div>
                    <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      <img src="/pegify/landing-assets/user-image-two.png" alt="" class="img-fluid inner-tiless" />
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <div class="row">
                        <div class="col-sm-12">
                          <h5>mydata</h5>
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <span class="grey" >sender</span>
                            </li>

                            <li class="list-inline-item">
                              <a class="grey">
                                <img src="assets/copy.png" alt="" class="img-fluid" />
                              </a>
                            </li>
                          </ul>

                          <div class="row ptb20">
                            <div class="col-sm-3">
                              <div class="inner-im text-center">
                                <img src="/assets/bnb-logo.png" alt="" class="img-fluid" />
                              </div>
                            </div>
                            <div class="col-sm-9">
                              <div class="inner-im">
                                <h6 class="grey">Balance</h6>
                                <h5><span class="clr">BNB</span></h5>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-sm-12">
                              <button class="btn-common">Add Funds</button>
                            </div>
                          </div>

                          <hr />
                          <ul>

                            <li>
                              <a >
                                <div>
                                  <Link to={`/profile/${account}`}> My Profile</Link>
                                </div>
                              </a>
                            </li>
                            <li>
                              <Link to={`/profiledetail/${account}`}>Edit Profile</Link>
                            </li>
                          </ul>
                          <hr />
                          <div >
                            {/* <a>Disconnect Wallet</a> */}
                            <button type="button" onClick={disconnect}>Disconnect Wallet</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
}

            </ul>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  {/* <div class="modal-header">
                </div> */}
                  <div class="modal-body text-center">
                    <div class="row">
                      <div class="col-sm-12">
                        <h4>Connect Your Wallet</h4>
                        <p><small>Connect with one of available wallet providers or create a new wallet. What is a
                          wallet?</small></p>
                      </div>
                    </div>
                    <div class="meta">
                      <div class="row">
                        <div class="col-sm-12 text-center">
                          <div class="">
                            <img src="/pegify/collection/metamask.png" class="img-fluid" />
                            <a>
                              <h4 class="">METAMASK</h4>
                              <p class=""><small>One of the most secure wallets with great flexibility</small> </p>
                            </a>
                            <div >
                              <button class="btn-common" data-dismiss="modal" type="button" onClick={connectMetaMask}>CONNECT</button>
                            </div>
                            {/* <div>
                              <button class="btn-common" data-dismiss="modal" >Disconnect </button>
                            </div>  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
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