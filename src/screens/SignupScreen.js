import React, { PureComponent } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { signup } from '../redux/actions/user';

class SignupScreen extends PureComponent {
  state = {
    email: '',
    username: '',
    password: '',
    loading: false,
    error: '',
  }

  _onChangeText = (text, type) => this.setState({ [type]: text });

  _onSubmit = () => this.props.signup(this.state)

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.form}>
          <Text style={styles.text}>Fill out to register</Text>
          <TextInput
            style={styles.textInputStyle} placeholder='email' autoCapitalize='none' autoCorrect={false}
            onChangeText={text => this._onChangeText(text, 'email')}
          />
          <TextInput
            style={styles.textInputStyle} placeholder='username' autoCapitalize='none' autoCorrect={false}
            onChangeText={text => this._onChangeText(text, 'username')}
          />
          <TextInput
            style={styles.textInputStyle} placeholder='password' secureTextEntry
            onChangeText={text => this._onChangeText(text, 'password')}
          />
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

export default connect(undefined, { signup })(SignupScreen);
