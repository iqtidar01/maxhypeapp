import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Test from '../../screens/Test';
import Home from '../../components/home/index';
import Business from '../../components/business/index';
import About from '../../components/about/index';
import Contact from '../../components/contact/index';
import Membership from '../../components/membership/index';
import { Feather } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

export default function Header() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen
           options={{drawerIcon: ({focused, size}) => (
              <Feather   name="home"   size={20} color="#e91e63" /> 
            ), }}
          name="Home" component={Home} />

          <Drawer.Screen
           options={{drawerIcon: ({focused, size}) => (
              <Feather   name="list"   size={20} color="#e91e63" /> 
            ), }}
          name="Business" component={Business} />

          <Drawer.Screen
           options={{drawerIcon: ({focused, size}) => (
              <Feather   name="credit-card"   size={20} color="#e91e63" /> 
            ), }}
          name="Membership" component={Membership} />
          
            <Drawer.Screen
           options={{drawerIcon: ({focused, size}) => (
              <Feather   name="file-text"   size={20} color="#e91e63" /> 
            ), }}
          name="About" component={About} />
          
            <Drawer.Screen
           options={{drawerIcon: ({focused, size}) => (
              <Feather   name="mail"   size={20} color="#e91e63" /> 
            ), }}
          name="Contact" component={Contact} />
          
            <Drawer.Screen
           options={{drawerIcon: ({focused, size}) => (
              <Feather   name="file-plus"   size={20} color="#e91e63" /> 
            ), }}
          name="Test" component={Test} />

          {/* <Drawer.Screen name="Test" component={Test} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }