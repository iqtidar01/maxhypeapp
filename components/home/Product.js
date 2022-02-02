import React, { useEffect, useState, Component, useRef } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ProductCardItem from './ProductCardItem';
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
} from 'react-native';
export default function Product() {
  const [home, setHome] = useState([]);
  const isCarousel = React.useRef(null);

  const data = home?.map((data) => {
    return [
      {
        title: data?.title,
        body: data?.heading,
        imgUrl: data?.product_dp,
        buttontext: data?.button_text,
      },
    ];
  });
  const homeSilder = async () => {
    try {
      const response = await Axios.get(`https://themaxhype.com/api/home`);
      // console.log(response.data);
      setHome(response?.data['product']);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    homeSilder();
  }, []);
  return (
    <View>
      <Carousel
        layout='stack'
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={ProductCardItem}
        sliderWidth={width}
        itemWidth={width}
        // onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
    </View>
  );
}
