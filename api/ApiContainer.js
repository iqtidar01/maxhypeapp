// import React, { useEffect, useState,Component } from 'react';
import React, { Component, Button } from 'react';
import Axios from 'axios';
import { BASE_URL } from '../constants/settings';
import Home from '../components/home/index';

class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromFetch: false,
      dataSource: [],
    };
  }

  goForFetch = () => {
    console.log('afsd2');
  };

  render() {
    const { fromFetch } = this.state;
    return (
      <Button
        title={'Click using Fetch'}
        onPress={this.props.name}
        color='green'
      />
      // <Home
      // goForFetch={this.goForFetch}
      // />
    );
  }
}

export default ApiContainer;
