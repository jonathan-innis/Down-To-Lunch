import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {FBLogin} from 'react-native-facebook-login';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
          title="Login with Facebook"
        />
      </View>
    );
  }
}

export default HomeScreen;
