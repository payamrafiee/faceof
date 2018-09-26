import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

class SplashScreen extends Component {
  state = { }

  _onSignup = () => this.props.navigation.navigate('Signup')
  _onLogin = () => this.props.navigation.navigate('Login')

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>
          {'Welcome to FaceOf \n \nFind your ideal date with Artificical Inteligence'}
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={this._onLogin} style={styles.button}>
            <Text style={styles.text}>
            Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onSignup} style={styles.button}>
            <Text style={styles.text}>
            Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'pink',
    height: 70,
    width: 150,
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default SplashScreen;
