import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Box, Text} from 'react-native-design-utility'

class SplashScreen extends Component {
  state = {  }
  render() {
    return (
      <Box f={1} center>
        <Text size='sm' mb='sm'> Please enter your phone number to register</Text>
        <TextInput style={{backgroundColor: 'pink',height: 50, width: 200}}/>
      </Box>
    );
  }
}

export default SplashScreen;
