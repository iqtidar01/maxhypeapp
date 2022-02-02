import React, { useEffect, useState, Component, useRef } from 'react';
export const { width, height } = Dimensions.get('window');
import Axios from 'axios';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
export default function Business({ navigation }) {
  // console.log({ navigation });
  const [items, setItems] = useState([
    { name: 'Bar & Store', code: '#3498db' },
    { name: 'Restaurants', code: '#3498db' },
    { name: 'Vehicles-ATV-Bikes-Boats-JetSkis', code: '#3498db' },
    { name: 'Adult Entertainment', code: '#3498db' },
    { name: 'Medical Marijuana & CBD', code: '#3498db' },
    { name: 'Adventures', code: '#3498db' },
    { name: 'Afrobeats', code: '#3498db' },
    { name: 'Sky Diving', code: '#3498db' },
    { name: 'Movie Theaters & Hotels', code: '#3498db' },
    { name: 'Clubs', code: '#3498db' },
  ]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatGrid
        itemDimension={160}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={15}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                paramKey: item.name,
              })
            }>
            <ImageBackground
              source={{ uri: 'https://themaxhype.com/' + item.dp }}
              resizeMode='cover'
              style={styles.image}>
              <View
                style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 150,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    // alignContent: 'center',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
