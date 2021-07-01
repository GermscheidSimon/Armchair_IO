import React, { Component } from 'react';

//
import { connect } from 'react-redux';

// main app componentes
import mapStoreToProps from '../../redux/mapStoreToProps';

import './App.css';


class App extends Component {


  render() {
    return (
      <>"hi"</>
    );
  }
}

export default connect(mapStoreToProps)(App);
