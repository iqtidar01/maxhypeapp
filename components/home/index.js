import React, { useEffect, useState, Component, useRef } from 'react';
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
import { TextInput } from 'react-native-paper';
import { BASE_URL, COLORS } from '../../constants/settings';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem from './CarouselCardItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import Product from './Product';
import { Business } from './Business';

export const { width, height } = Dimensions.get('window');

export default function Home(props) {
  const isCarousel = React.useRef(null);

  const fref = useRef();
  const [text, setText] = useState('');
  const [productDataList, productData] = useState([]);
  const [home, setHome] = useState([]);
  const [index, setIndex] = React.useState(0);
  const getProductList = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/product_list`);

      productData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const homeSilder = async () => {
    try {
      const response = await Axios.get(`https://themaxhype.com/api/home`);
      // console.log(response.data);

      setHome(response?.data['slider']);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    homeSilder();
  }, []);
  // console.log({ home });
  let imagePath = {
    uri: 'https://igtechservices.com/public/uploads/setting/1631384125-logo-ig.png',
  };
  const data = home?.map((data) => {
    return [
      {
        title: data?.sub_heading,
        body: data?.heading,
        imgUrl: data?.file,
        buttontext: data?.button_text,
      },
    ];
  });
  {
    /* <FlatList
data={home}
keyExtractor={({ id }, index) => id}
renderItem={({ item }) => <Text>{item.title},</Text>}
/> */
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Carousel
              layout='stack'
              layoutCardOffset={9}
              ref={isCarousel}
              data={data}
              renderItem={CarouselCardItem}
              sliderWidth={width}
              itemWidth={width}
              // onSnapToItem={(index) => setIndex(index)}
              useScrollView={true}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Icon
                name='diamond'
                size={30}
                color='#005294'
                style={{ marginTop: 10, marginBottom: 10 }}
              />
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>
          <Text style={styles.headingStyle}>TOP PRODUCTS</Text>
          <Product />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Icon
                name='diamond'
                size={30}
                color='#005294'
                style={{ marginTop: 10, marginBottom: 10 }}
              />
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>
          <Text style={styles.headingStyle}>TOP COUNTRIES</Text>
          <Text style={{ padding: 13, fontSize: 15 }}>
            Discover the best Restaurants, Clubs, lounges, Bars, Events, Shows,
            Movie Theaters, Luxury Vehicles, Atv Rentals, Supermarkets, Stores,
            Sightseeing, Spa's, Medical Marijuanna & CBD, Jet Skis, Boat/Yatch.
            FUN Thingstodo & more.
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Icon
                name='diamond'
                size={30}
                color='#005294'
                style={{ marginTop: 10, marginBottom: 10 }}
              />
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>
          <Text style={styles.headingStyle}>TOP BUSINESESS</Text>
          <Business />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  headingStyle: {
    fontSize: 20,
    textAlign: 'center',
    // marginTop: 40,
    marginBottom: 25,
    fontWeight: 'bold',
  },
});
