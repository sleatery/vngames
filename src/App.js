import React from 'react';
import './App.css';
import Header from './Component/Header';

import Promotion from './Component/Promotion';

import Car2 from './Component/Car2';

class App extends React.Component {

  render() {
    return (
      <div>
      <Header/>
      <Promotion/>
      <Car2/>
      </div>
    );
  }
}
export default App;
