import React from 'react';
import './stack.scss';
const Stack = () => {
    return (
        <>
            <hr></hr>
            <section className="main-stack ptb">
                <div className="container">
                  <div className="row">
                      <div className="col-sm-6">
                          <div className="inner-content">
                              <h6 className="grey">Save your time with Stacks</h6>
                              <h1 className="white">Earn free crypto <br></br> with Crypter</h1>
                              <p className="grey ptb20">A creative agency that lead and inspire</p>

                              <ul className="list-inline ptb20">
                                  <li className="list-inline-item">
                                      <a className="btn-common">Earn Now</a>
                                  </li>
                                  <li className="list-inline-item">
                                      <a className="btn-common">Discover More</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-sm-6">
                          <div className="inner-content">
                          <img src="\bluemoon-nft\save-your-time\save-your-time-image.png" className="img-fluid" />
                          </div>
                      </div>
                  </div>
                </div>
            </section>
        </>
    )
}

export default Stack;
