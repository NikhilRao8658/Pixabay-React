
import '../../src/App.css'



import React from 'react';
import { useLocation } from 'react-router-dom';
import Footerlast from '../components/Lastfooter';


const SinglePage = () => {
  var particular = useLocation();
  let images = particular.state.x;

  return (
    <div id="single-page"> {/* Add the ID to the main div */}
      <div>
        
        <img src={images.webformatURL} alt="" />
      </div>
   
    </div>
  );
};

export default SinglePage;
