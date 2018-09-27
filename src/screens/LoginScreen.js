import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

class LoginScreen extends Component {
  state = { }

  _onSubmit = () => alert('this is me')

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.form}>
          <Text style={styles.text}>Fill out to Login</Text>
          <TextInput style={styles.textInputStyle} placeholder='email' />
          <TextInput style={styles.textInputStyle} placeholder='password' />
        </View>
        <TouchableOpacity onPress={this._onSubmit} style={styles.button}>
          <Text style={styles.text}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  form: {
    height: 300,
    justifyContent: 'space-around',
  },
  textInputStyle: {
    backgroundColor: 'pink',
    height: 60,
    width: 260,
    textAlign: 'center',
    borderRadius: 3,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'pink',
    height: 70,
    width: 200,
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export default LoginScreen;
