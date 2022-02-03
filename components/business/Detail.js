import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const Detail = ({ route }) => {
  // console.log();
  const [detail, setDetail] = useState([]);
  const key = route.params.paramKey;
  const getdetail = async () => {
    // console.log('sesdsf');
    try {
      const response = await Axios.get(
        'https://themaxhype.com/api/businesses/' + key
      );
      console.log(response?.data['businesses']);
      setDetail(response?.data['businesses']);
    } catch (error) {
      console.error(error);
    }
  };
  console.log('hek', key);
  useEffect(() => {
    getdetail();
  }, []);

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Card>
            <Card.Cover source={{ uri: 'https://themaxhype.com/' + item.dp }} />
            <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default Detail;
