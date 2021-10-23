import './App.scss';
import MainLanding  from './components/mainlanding/MainLanding.js';
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';
// import Header from './components/header/Header.js';
import Collection from './components/collection/Collection';
import Create from './components/create/Create';
import Profile from './components/profile/Profile';
import ProfileDetail from './components/profiledetail/Profike-Detail';
import ArtWork from './components/artwork/ArkWork';
import OwnerArtWork from './components/ownerartwork/OwnerArt';
import { ToastContainer} from 'react-toastify';
import OwnerProfile from './components/ownerprofile/OwnerProfile';
import 'react-toastify/dist/ReactToastify.css';
import {GetTop4TokensOfCollection,GetAllNftsAndDetails} from './redux/action'
import Header from './components/header/Header.js';
import {useDispatch} from 'react-redux'

function App() {
  const dispatch=useDispatch();
  dispatch(GetTop4TokensOfCollection());
  dispatch(GetAllNftsAndDetails());
  return (
    <>
        <Router>
        <ToastContainer/>
        
        {/* <Header/> */}
        <Switch>
           <Route exact path='/' component={MainLanding}/>
          <Route exact path='/collection' component={Collection}/>
          <Route exact path='/profile/:walletAddress' component={Profile}/> 
          <Route exact path='/profiledetail/:walletAddress' component={ProfileDetail}/> 
          <Route exact path='/createitem' component={Create}/> 
          <Route exact path='/artwork' component={ArtWork}/> 
          <Route exact path='/ownerart' component={OwnerArtWork}/> 
          <Route exact path='/ownerprofile' component={OwnerProfile}/> 
        </Switch>
        <Footer/>
        </Router>
    </>
  );
}

export default App;



