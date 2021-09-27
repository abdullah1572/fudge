import './App.scss';
import MainLanding  from './components/mainlanding/MainLanding.js';
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Collection from './components/collection/Collection';
import Create from './components/create/Create';
function App() {
  return (
    <>
        <Router>
        <Switch>
          <Route exact path='/' component={MainLanding}/>
          <Route exact path='/collection' component={Collection}/>
         
          <Route exact path='/createitem' component={Create}/> 
        </Switch>
        <Footer/>
        </Router>
    </>
  );
}

export default App;
