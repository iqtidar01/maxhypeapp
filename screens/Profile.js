import * as React from 'react';
import { View, Text,Image,StyleSheet,Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

export default function ProfileScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:16,fontWeight:'700',color:'yellow'}}>Profile Screen</Text>
  <Image source={{ uri: "https://imtools.com/wp-content/uploads/2020/12/sdf.jpg" }} style={styles.logo} />
      </View>
    );
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    logo: {
    width: 305,
    height: 500,
    marginBottom: 10,
  },
});
