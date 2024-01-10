import React from 'react';
import { TextInput, Text, View, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';

const App = () => {

  const onSubmit = (values) => {
    
    if (values.password !== values.confirmPass) {
      alert('Passwords do not match, please try again.');
    } else {
      console.log('Passwords match! ✅');
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
          style={{ marginTop: 75, marginBottom: 75 }}
        >
          <InputWithLabel
            label='Email'
            placeholder='Type your email here'
            value={values.email}
            onChangeText={handleChange('email')}
            autoCapitalize='none'
          />
          <InputWithLabel
            label='Password'
            placeholder='Type your password here'
            value={values.password}
            onChangeText={handleChange('password')}
            autoCapitalize='none'
          />
          <InputWithLabel
            label='Confirm Password'
            placeholder='Confirm Password Here'
            value={values.confirmPass}
            onChangeText={handleChange('confirmPass')}
            autoCapitalize='none'
          />
          <InputWithLabel
            label='Name'
            placeholder="Type your pet's name here"
            value={values.name}
            onChangeText={handleChange('name')}
          />
          <InputWithLabel
            label='Date of Birth'
            placeholder="Type your pet's birthday here"
            value={values.dob}
            onChangeText={handleChange('dob')}
          />
          <InputWithLabel
            label='Breed'
            placeholder="Type your pet's breed here"
            value={values.breed}
            onChangeText={handleChange('breed')}
          />
          <InputWithLabel
            label='Toy'
            placeholder="Type your pet's toy here"
            value={values.toy}
            onChangeText={handleChange('toy')}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </ScrollView>
      )}
    </Formik>
  );
};

const InputWithLabel = (props) => {
  const { label, placeholder, value, onChangeText, onSubmitEditing, autoCapitalize} = props;

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
        style={{ padding: 8, fontSize: 16 }}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};



export default App;