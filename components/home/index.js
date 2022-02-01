import React, { useEffect, useState, Component, useRef } from 'react';
import Axios from 'axios';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-paper';

import { BASE_URL, COLORS } from '../../constants/settings';
import ApiContainer from '../../api/ApiContainer';
import Carousel from 'react-native-snap-carousel';
export default function Home(props) {
  const fref = useRef();
  const [text, setText] = useState('');
  const [productDataList, productData] = useState([]);
  const getProductList = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/product_list`);
      productData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {}, []);
  const fetchapi = () => {};

  let imagePath = {
    uri: 'https://igtechservices.com/public/uploads/setting/1631384125-logo-ig.png',
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>Home Screen</Text>

      {/* <FlatList
        data={productDataList}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>
            {item.product_name}, {item.product_name}
          </Text>
        )}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
