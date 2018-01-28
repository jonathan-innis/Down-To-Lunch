import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Avatar} from 'react-native-elements';

class ProfileDisplay extends React.Component {
  static navigationOptions = {
    title: "Friends",
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", marginTop: 20}}>
        <View style={{flex: 1, flexDirection: "row"}}>
          <Avatar
            large
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Text style={{fontSize: 30, marginLeft: 20}}>Jonathans</Text>
        </View>
      </View>
    );
  }
}

export default ProfileDisplay;
