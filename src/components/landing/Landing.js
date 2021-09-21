// import logo from './logo.svg';
import '../../App.scss';

import Seller from './sellers/seller.js';
import Banner from './main-banner/Banner.js';
import HotBid from './hotbid/hotbid.js';
import HotCollection from './hotcollections/hotcollection.js';
import Discover from './discover/discover.js';
import Bluemoon from './bluemoon/Bluemoon.js';
import Futures from './future/Future';
// import OwlCarousel from 'react-owl-carousel';
import Stack from './stacks/Stack.js';


function Landing() {
  return (
    <>
      <Banner />
      <Bluemoon />
      <Futures />
      <Seller />
      <HotBid />
      <HotCollection />
      <Discover />
      <Stack />
    </>
  );
}

export default Landing;