import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
import logo from '../../public/logo.png';
import './App.css';
import Heatmap from '../Heatmap/Heatmap'

class App extends React.Component{
  render() {
    return(
      <div>
        <img className='logo' src={logo} alt='logo'/>
        <div className='container'>
        <div className='segment'>
        <hr/>
        </div>
        <Heatmap />
        </div>
      </div>
    );
  }
}

export default App;
