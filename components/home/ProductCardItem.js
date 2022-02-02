import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';

export const { width, height } = Dimensions.get('window');
export const ITEM_WIDTH = Math.round(width * 0.7);

const ProductCardItem = ({ item, index }) => {
  // console.log({ index });
  const handle = () => {
    // alert('pressed');
    console.log('presssed');
  };
  return (
    <>
      <View style={styles.container}>
        {item?.map((list, ind) => {
          return (
            <View key={index}>
              <Image
                source={{ uri: 'https://themaxhype.com/' + list.imgUrl }}
                style={styles.image}
              />
              <View style={styles.mainContent}>
                <Text style={styles.body}> {list.title} </Text>
                <Text style={styles.subtext}> {list.body} </Text>
                <View>
                  <Pressable
                    style={styles.DetailButton}
                    onPress={() => handle()}>
                    <Text style={styles.text}>View Detail</Text>
                  </Pressable>
                  <Pressable style={styles.button} onPress={() => handle()}>
                    <Text style={styles.text}>View Purchase</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: width,
    // height: height,
    paddingBottom: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    // opacity: 0.5,
  },
  image: {
    width: width,
    height: 300,
    borderRadius: 15,
    // opacity: 0.75,
  },
  header: {
    color: '#222',
    fontSize: 28,
    paddingLeft: 20,
    paddingTop: 20,
  },
  mainContent: {
    color: '#ffff',
    alignItems: 'center',
  },
  body: {
    color: 'black',
    position: 'absolute',
    // justifyContent: 'center',
    // fontWeight: 700,
    // top: -200,
    fontSize: 18,
  },
  subtext: {
    color: '#fff',
    // left: '40%',
    fontWeight: 'bold',

    // top: -150,
    position: 'absolute',
    fontSize: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#D60D45',
    marginTop: 50,
    position: 'absolute',
  },
  DetailButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    marginTop: 50,
    // top: -150,
    right: 35,
    position: 'absolute',
  },
});

export default ProductCardItem;
