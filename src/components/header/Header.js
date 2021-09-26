<header class="main-nav">
  <nav class="navbar navbar-expand-lg ">
    <a class="navbar-brand" href="#">
      <img src="../../assets/pegify/landing-assets/logo.png" alt="" class="img-fluid">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" routerLink="">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/collection">COLLECTION</a>
        </li>
        <!-- <li class="nav-item">
                <a class="nav-link" routerLink="/profile">PROFILE</a>
            </li> -->
        <li class="nav-item">
          <a class="nav-link" routerLink="/create">CREATE</a>
        </li>
        <li class="nav-item">
          <div *ngIf="!connected">
            <a class="nav-link" data-toggle="modal" data-target="#exampleModal">CONNECT</a>
          </div>
          <div *ngIf="connected">
            <a class="nav-link" data-toggle="modal" data-target="#exampleModal" (click)="disconnect()">DISCONNECT</a>
          </div>
        </li>

        <li class="nav-item">
          <div class="dropdown" *ngIf="connected">
            <div *ngIf="mydata.profileImage">
              <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <img src="{{mydata?.profileImage}}" alt="" class="img-show"
                  style="width: 65px; height: 65px; border-radius: 50%; ">
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div class="row">
                  <div class="col-sm-12">
                    <h5>{{mydata?.displayName}}</h5>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <span class="grey" style="font-size: 12px;">{{ SenderAddress }}</span>
                      </li>

                      <!-- <li class="list-inline-item">
                        <button class="grey" (click)="copyInputMessage(SenderAddress)">
                          <img src="../../assets/copy.png" alt="" class="img-fluid">
                        </button>
                      </li> -->
                    </ul>

                    <div class="row ptb20">
                      <div class="col-sm-3">
                        <div class="inner-im text-center">
                          <img src="../../assets/bnb-logo.png" alt="" class="img-fluid">
                        </div>
                      </div>
                      <div class="col-sm-9">
                        <div class="inner-im">
                          <h6 class="grey">Balance</h6>
                          <h5>{{balance | number}} <span class="clr">BNB</span></h5>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <!-- <button class="btn-common">Add Funds</button> -->
                      </div>
                    </div>

                    <hr>
                    <a routerLink="/profile">My Profile</a>
                    <hr>
                    <a routerLink="/edit-profile">Edit Profile</a>
                    <!-- <hr> -->
                    <!-- <div ><a>Disconnect Wallet</a></div> -->
                  </div>
                </div>
              </div>
            </div>
            <div *ngIf="!mydata.profileImage">
              <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <svg width="60" height="60" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z" fill="#F6F6F6" stroke="white" stroke-width="3"/>
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z" fill="#35374A"/>
                  </svg>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div class="row">
                  <div class="col-sm-12">
                    <h5>{{mydata?.displayName}}</h5>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <span class="grey" style="font-size: 12px;">{{ SenderAddress }}</span>
                      </li>

                      <li class="list-inline-item">
                        <a class="grey">
                          <img src="../../assets/copy.png" alt="" class="img-fluid">
                        </a>
                      </li>
                    </ul>

                    <div class="row ptb20">
                      <div class="col-sm-3">
                        <div class="inner-im text-center">
                          <img src="../../assets/bnb-logo.png" alt="" class="img-fluid">
                        </div>
                      </div>
                      <div class="col-sm-9">
                        <div class="inner-im">
                          <h6 class="grey">Balance</h6>
                          <h5>{{balance}} <span class="clr">BNB</span></h5>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <!-- <button class="btn-common">Add Funds</button> -->
                      </div>
                    </div>

                    <hr>
                    <ul>
                     
                      <li>
                        <a routerLink="/profile">
                        <div>
                          My Profile
                        </div>
                      </a>
                      </li>
                      <li>
                        <a routerLink="/edit-profile">Edit Profile</a>
                      </li>
                    </ul>
                    <hr>
                    <!-- <hr> -->
                    <!-- <div ><a>Disconnect Wallet</a></div> -->
                  </div>
                </div>
              </div>
            </div>

          </div>
        </li>

      </ul>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <!-- <div class="modal-header">
                </div> -->
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
                      <img src="../../assets/pegify/collection/metamask.png" class="img-fluid">
                      <a>
                        <h4 class="">METAMASK</h4>
                        <P class=""><small>One of the most secure wallets with great flexibility</small> </P>
                      </a>
                      <div *ngIf="!connected">
                        <button class="btn-common" data-dismiss="modal" (click)="enableMetamask()">CONNECT</button>
                      </div>
                      <!-- <div >
                              <button class="btn-common" data-dismiss="modal" >Disconnect </button>
                            </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>