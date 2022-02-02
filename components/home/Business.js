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

export const Business = () => {
  const [home, setHome] = useState([]);

  const [items, setItems] = useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
  ]);

  const homeSilder = async () => {
    try {
      const response = await Axios.get(`https://themaxhype.com/api/home`);
      console.log(response.data['businesses']);
      setHome(response?.data['businesses']);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    homeSilder();
  }, []);
  return (
    <FlatGrid
      itemDimension={160}
      data={home}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={15}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => console.log(item.name)}>
          <ImageBackground
            source={{ uri: 'https://themaxhype.com/' + item.dp }}
            resizeMode='cover'
            style={styles.image}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
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
