import React from 'react';
import MapView from 'react-native-maps';
import ModalComponent from './ModalComponent.js';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { List, ListItem, Button, Avatar } from 'react-native-elements';

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
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Freebirds',
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
      latitude: 30.7116686,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Freebirds',
    coordinates:{
      latitude: 30.7116696,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
];

export default class DTLMap extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
  };

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      latitude: null,
      longitude: null,
      error: null,
      markers: list,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  updatePeople = () => {
    console.log("Works");
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView style={{flex: 1, zIndex: -1}}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.state.markers.map(marker => (
            <MapView.Marker
              key = {marker.coordinates}
              coordinate={marker.coordinates}
              title={marker.title}
              onPress={() => this.updatePeople()}
            />
          ))}
        </MapView>
        <View style={{position: 'absolute', bottom: 15, right: 0}}>
          <Button
            raised
            iconRight={{name: 'add'}}
            title="I'M DOWN TO LUNCH"
            backgroundColor="#2196F3"
            onPress={() => this.openModal()} />
          <ModalComponent modalVisible={this.state.modalVisible} closeModal={() => this.closeModal()}/>
        </View>
        <View style={{position: "absolute", bottom: 80, left: 20, flexDirection: "row"}}>
          <Avatar
            small
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <View>
          <Text style={{marginLeft: 5}}> Amy Farha </Text>
          <Text style={{marginLeft: 7, fontSize: 12}}> Freebirds </Text>
          </View>
        </View>
      </View>
    );
  }
}
