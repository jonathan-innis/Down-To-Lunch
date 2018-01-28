import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {FBLogin} from 'react-native-facebook-login';
import Logo from '../images/logo_2.png';
import {SocialIcon} from 'react-native-elements';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain'
    }
});

class LoginScreen extends React.Component {
  static navigationOptions = {
        header: null
    }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#2196F3"}}>
        <Image source={Logo} style={styles.image}/>
        <View style={{margin: 20}}>
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          onPress={() => this.props.navigation.navigate('Details')}
        />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
