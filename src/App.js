import './App.scss';
import MainLanding  from './components/mainlanding/MainLanding.js';
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Collection from './components/collection/Collection';
import Create from './components/create/Create';
import Profile from './components/profile/Profile';
import ProfileDetail from './components/profiledetail/Profike-Detail';
import ArtWork from './components/artwork/ArkWork';
import OwnerArtWork from './components/ownerartwork/OwnerArt';
import OwnerProfile from './components/ownerprofile/OwnerProfile';
function App() {
  return (
    <>
        <Router>
        <Switch>
          <Route exact path='/' component={MainLanding}/>
          <Route exact path='/collection' component={Collection}/>
          <Route exact path='/profile' component={Profile}/> 
          <Route exact path='/profiledetail' component={ProfileDetail}/> 
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



