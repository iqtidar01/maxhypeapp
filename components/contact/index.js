import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { FormBuilder } from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';
import { Button, TextInput } from 'react-native-paper';
import Axios from 'axios';
// import Container, { Toast } from 'toastify-react-native';
export default function Contact() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const { control, setFocus, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      name: '',
      phone: '',
    },
    mode: 'onChange',
  });
  const formSubmit = async (data) => {
    console.log('form data', { ...data, message: message });
    try {
      const response = await Axios.post(
        `https://themaxhype.com/api/savecontact`,
        data
      );
      console.log(response.data);
      reset();
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.scrollViewStyle}>
      <Text style={{ fontSize: 16, fontWeight: '700' }}> Contact Screen </Text>
      <ScrollView>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              type: 'email',
              name: 'email',

              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
              },
              textInputProps: {
                label: 'Email',
              },
            },
            {
              type: 'text',
              name: 'name',
              rules: {
                required: {
                  value: true,
                  message: 'fullname is required',
                },
              },
              textInputProps: {
                label: 'Full Name',
              },
            },
            {
              type: 'text',
              name: 'phone',
              rules: {
                required: {
                  value: true,
                  message: 'phone is required',
                },
              },
              textInputProps: {
                label: 'phone',
              },
            },
          ]}
        />
        <TextInput
          style={styles.textArea}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder='Type Message'
          multiline={true}
        />
        <Button mode={'contained'} onPress={handleSubmit(formSubmit)}>
          Submit
        </Button>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
});
