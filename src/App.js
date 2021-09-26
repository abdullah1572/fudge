import './App.scss';
// import Landing from './components/landing/Landing.js';
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'fontawesome'
// import UploadsItem from './components/uploaditem/UploadItem.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ConnectWallets from './components/connectwallet/ConnectWallet';
// import SacnConnects from './components/connectwallet/ScanConnect';
// import TermsService from './components/connectwallet/TermsofService';
// import Profiles from './components/profile/Profile.js';
// import DetailPages from './components/detailpage/DetailPage.js';
// import Footer from './components/landing/footer/Footer.js';
// import Navbar from './components/landing/header/Navbar.js';
// import EditUserProfile from './components/editpage/EditProfile';
// import CreateNft from './components/createnft/CreateNft';
// import Item from './components/collectionpage/Item.js';
function App() {
  return (
    <>
        <Router>
        {/* <Navbar/> */}
        <Switch>
          {/* <Route exact path='/' component={Landing}/> */}
          {/* <Route exact path='/uploaditem' component={UploadsItem}/>
          <Route exact path='/connectwallet' component={ConnectWallets}/>
          <Route exact path='/scanwallet' component={SacnConnects}/>
          <Route exact path='/termsservice' component={TermsService}/>
          <Route exact path='/createnft' component={CreateNft}/>
          <Route exact path='/profile' component={Profiles}/>
          <Route exact path='/detailpage' component={DetailPages}/>
          <Route exact path='/editprofile' component={EditUserProfile}/>
          <Route exact path='/itemscollection' component={Item}/> */}
        </Switch>
        {/* <Footer/> */}
        </Router>
    </>
  );
}

export default App;
