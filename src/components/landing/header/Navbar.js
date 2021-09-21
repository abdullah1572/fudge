import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
    return (
        <section className="main-navbar">
            <div className="container-fluid">
                <nav className="navbar ptb20 navbar-expand-lg">
                    <NavLink to="/" className="navbar-brand">
                    <img src="\bluemoon-nft\footer\logo.svg" alt="" className="img-fluid" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span> <img src="\bluemoon-nft\hot-bid\navbar-m.png" alt="" className="img-fluid" /></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li>
                                <form className="form-inline formm-mm my-2 my-lg-0">
                                    <input className="form-control input-bbb mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn search-barss  my-2 my-sm-0" type="submit"><img src="\bluemoon-nft\hot-bid\search-bar-1.svg" className="img-fluid" /></button>
                                </form>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">

                         <button className="nav-buttoo" type="submit">Marketplace</button>
                            <button className="nav-buttoo" type="submit">Collaborate</button>
                            <NavLink to="/connectwallet"><button className="nav-buttoo" type="submit">Connect Wallet</button></NavLink>
                            <NavLink to="/uploaditem"><button className="btn-common buttoooo my-2 my-sm-0" type="submit">Create NFT</button></NavLink>
                            <button type="button" className="buttonsss">
                                <img src="\bluemoon-nft\hot-bid\navbar-3.png" alt="" className="img-fluid" />
                            </button>
                            <button type="button" className="buttonsss pr-2 pl-2">
                                <img src="\bluemoon-nft\hot-bid\navbar-2.png" alt="" className="img-fluid" />
                            </button>
                            <button type="button" className="buttonsss">
                            <NavLink to="/profile">  <img src="\bluemoon-nft\hot-bid\future-4.png" alt="" className="img-fluid" /></NavLink>
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;
