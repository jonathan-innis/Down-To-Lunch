import React from 'react';
import MapView from 'react-native-maps';
import ModalComponent from './ModalComponent.js';
import { StyleSheet, Text, View, Alert, ScrollView, Animated } from 'react-native';
import { List, ListItem, Button, Avatar } from 'react-native-elements';

const list = [
  {
    first_name: 'Amy',
    last_name: 'Farha',
    avatar_url: 'https://pbs.twimg.com/profile_images/847868382133329920/zFjQMYX1_400x400.jpg',
    subtitle: 'Freebirds',
    coordinates:{
      latitude: 30.7116676,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
  {
    first_name: 'Chris',
    last_name: 'Jackson',
    avatar_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAr4AAAAJDU1Y2NhMmQ3LTNhOTctNGRjZS1hNjcyLTMwMjM4ZjkzODJjZA.jpg',
    subtitle: 'Dixie Chicken',
    coordinates:{
      latitude: 30.6116676,
      longitude: -96.3417157,
    },
    title: 'Foo Place',
  },
  {
    first_name: 'Amy',
    last_name: 'Farha',
    avatar_url: 'http://www.brownfound.org/images/scholars/Jonathan-Innis.jpg',
    subtitle: "Lane's Chicken",
    coordinates:{
      latitude: 30.65,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
  {
    first_name: 'Chris',
    last_name: 'Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Sbisa',
    coordinates:{
      latitude: 30.55,
      longitude: -96.4417157,
    },
    title: 'Foo Place',
  },
];

const styles = StyleSheet.create({
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "rgba(130,4,150, 0.9)",
    alignSelf: "center",
    justifyContent: "center",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    position: "absolute",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

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
      selectedPin: [],
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

  updatePeople = (marker) => {
    this.state.selectedPin = [];
    this.state.selectedPin.push(marker);
    this.setState(this.state.selectedPin);
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal = () =>{
    this.setState({modalVisible:false});
    fetch("https://dtl-foufou1560.c9users.io/",{
      method: 'POST', // or 'PUT'
        body: JSON.stringify({
          id: 123,
          first_name: "Jonathan",
          last_name: "Innis",
          longitude: 0,
          latitude: 0,
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      });
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
              title={marker.first_name + " " + marker.last_name}
              description={marker.subtitle}
              onPress={() => this.updatePeople(marker)}>
              <View style={styles.ring}>
                <View style={styles.marker} />
              </View>
            </MapView.Marker>
          ))}
        </MapView>
        <ModalComponent/>
        {this.state.selectedPin.map((pin,index) =>
        <View key={index} style={{position: "absolute", bottom: 80, left: 20, flexDirection: "row"}}>
          <Avatar
            small
            rounded
            source={{uri: pin.avatar_url}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <View>
          <Text style={{marginLeft: 5, fontWeight: "bold"}}> {pin.first_name + " " + pin.last_name} </Text>
          <Text style={{marginLeft: 7, fontSize: 12}}> {pin.subtitle} </Text>
          </View>
        </View>)
      }
      </View>
    );
  }
}
