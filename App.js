import React, { useState } from 'react';
import { TextInput, Text, View, ScrollView } from 'react-native';
import { Formik } from 'formik';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');

  const confirmPasswordsMatch = (props) => {
    const { nativeEvent: { text } } = props;

    if (text !== password) {
      alert('Passwords do not match, please try again.')
    }

  }

  const onSubmit = (values) => {
    if (values.password !== values.confirmPass) {
      alert('Passwords do not match, please try again.');
    }
  }


  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPass: '',
        name: '',
        dob: '',
        breed: '',
        toy: ''
      }}
      onSubmit={onSubmit}
    >
      
      {({ handleChange, handleSubmit, values }) => (
          <ScrollView
          >
            <InputWithLabel
              label='Email'
              placeholder='Type your email here'
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <InputWithLabel
              label='Password'
              placeholder='Type your password here'
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <InputWithLabel
              label='Confirm Password'
              placeholder='Confirm Password Here'
              value={values.confirmPass}
              onChangeText={handleChange('confirmPass')}
              onSubmitEditing={handleSubmit}
            />
            <InputWithLabel
              label='Name'
              placeholder="Type your pet's name here"
              value={name}
              onChangeText={setName}
            />
            <InputWithLabel
              label='Date of Birth'
              placeholder="Type your pet's birthday here"
              value={dob}
              onChangeText={setDob}
            />
            <InputWithLabel
              label='Breed'
              placeholder="Type your pet's breed here"
              value={breed}
              onChangeText={setBreed}
            />
            <InputWithLabel
              label='Toy'
              placeholder="Type your pet's toy here"
              value={toy}
              onChangeText={setToy}
            />
          </ScrollView>
        )
      }
      
    </Formik>
  );

};

const InputWithLabel = (props) => {
  const { label, placeholder, value, onChangeText, onSubmitEditing } = props;

  return (
    <View style={{ padding: 32 }}>
      <Text style={{ padding: 8, fontSize: 18 }}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={label == 'Password' || label == 'Confirm Password' ? true : false}
        onSubmitEditing={onSubmitEditing}
        style={styles.inputClass}
      />
    </View>
  );
};



export default App;