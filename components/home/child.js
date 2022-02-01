import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
class ChildClass extends Component {
  constructor(props) {
    super(props);
    this.goForFetch();
    this.state = {
      name: 'ali',
      mobile: null,
      email: null,
      msg: null,
      isSubmited: false,
    };
  }
  goForFetch = () => {
    // alert('goForFetch');
    // console.log(this.state.name);
    return 2;
  };
  render() {
    return (
      <View>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

// const ChildClass = (props) => {
//     return(
//       <h2>asfd </h2>
//     );
// }

export default ChildClass;
