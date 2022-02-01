import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/layout/Header';
import css from './assets/css';
import {Image,StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Avatar,Button, Card, Title, Paragraph } from 'react-native-paper';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button onPress={() => navigation.goBack()} title="Go back home" />
  </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


export default function App() {
  return (
    <Header/>
  );
}