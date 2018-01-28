import React from 'react';
import ModalComponent from './ModalComponent.js';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { List, ListItem, Button, Avatar } from 'react-native-elements';
import DTLMap from './DTLMap.js';
import {
  TabNavigator,
} from 'react-navigation';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Freebirds',
    coordinates:{
      latitude: 30.7116676,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Dixie Chicken',
    coordinates:{
      latitude: 30.6116676,
      longitude: -96.3417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: "Lane's Chicken",
    coordinates:{
      latitude: 30.65,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Sbisa',
    coordinates:{
      latitude: 30.55,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Freebirds',
    coordinates:{
      latitude: 30.7116676,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Dixie Chicken',
    coordinates:{
      latitude: 30.6116676,
      longitude: -96.3417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Freebirds',
    coordinates:{
      latitude: 30.7116676,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Dixie Chicken',
    coordinates:{
      latitude: 30.6116676,
      longitude: -96.3417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Freebirds',
    coordinates:{
      latitude: 30.7116676,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Dixie Chicken',
    coordinates:{
      latitude: 30.6116676,
      longitude: -96.3417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Freebirds',
    coordinates:{
      latitude: 30.7116676,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Dixie Chicken',
    coordinates:{
      latitude: 30.6116676,
      longitude: -96.3417157,
    },
    title: 'Foo Place',
  },
];

class FriendScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Friends',
  };

  render() {
    return (
      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 20, marginLeft: 5}}> Friends Down to Lunch </Text>
        <ScrollView>
        <List containerStyle={{marginBottom: 20, marginTop: 5}}>
          {
            list.map((l, i) => (
              <ListItem
                roundAvatar
                subtitle={l.subtitle}
                hideChevron={true}
                avatar={{uri:l.avatar_url}}
                key={i}
                style={{height: 30}}
                title={l.name}
                onPress={() => Alert.alert(
                  'I want to DTL with Amy Ferha',
                  'Attempting to DTL may result in adverse side effects',
                  [
                    {text: 'Call Friend to DTL', onPress: () => console.log('Ask me later pressed')},
                  ],
                  { cancelable: true }
                )}
                badge={{ value: "12:30 - 1:00pm", textStyle: { color: 'white' }, containerStyle: { marginTop: 0 } }}
              />
            ))
          }
        </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const TabNavigation = TabNavigator({
  Map: {
    screen: DTLMap,
  },
  Friends: {
    screen: FriendScreen,
  },
},
{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#ffffff',
  },
});

export default TabNavigation;
