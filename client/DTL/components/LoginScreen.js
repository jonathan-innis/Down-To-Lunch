import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {FBLogin} from 'react-native-facebook-login';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#2196F3" }}>
        <Text style={{color: "#fff", fontSize: 100}}> DTL </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
          title="Login with Facebook"
        />
      </View>
    );
  }
}

export default LoginScreen;
