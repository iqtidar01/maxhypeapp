import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import SavedScreen from '../screens/Saved';
import ReferScreen from '../screens/Refer';
import DrawerItems from '../constants/DrawerItems';
import css from '../assets/css';
import {Image,StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Avatar,Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Test() {
    return (
        <View>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
        <MaterialCommunityIcons 
      name="face-profile"
      size={24} 
      color="#e91e63" 
  />
   <Feather 
                name="home"
                size={24} 
                color="#e91e63" 
              /> 
               <FontAwesome5 
                name="user-friends"
                size={24} 
                color= "#e91e63" 
              />
<MaterialCommunityIcons 
      name="bookmark-check-outline"
      size={24} 
      color="#e91e63" 
  />
      <Text style={css.test}>test2</Text>
      <ActivityIndicator animating={true} color={Colors.red800} />

      <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>

    </View>
    );
  }