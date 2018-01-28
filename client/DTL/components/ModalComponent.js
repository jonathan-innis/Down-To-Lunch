import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet, ToastAndroid } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { GooglePlacesAutocomplete, geocodeByAddress, getLatLng } from 'react-native-google-places-autocomplete';
import {Constants} from 'expo';

class ModalComponent extends Component {
  state = {
    modalVisible: false,
    longitude: null,
    latitude: null,
  }

  openModal = () => {
    this.setState({modalVisible: true});
  }

  closeModal = () => {
    if (this.state.longitude !== null){
    fetch("https://dtl-foufou1560.c9users.io/",{
      method: 'POST', // or 'PUT'
        body: JSON.stringify({
          id: 123,
          first_name: "Jonathan",
          last_name: "Innis",
          longitude: this.state.longitude,
          latitude: this.state.latitude,
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      });
      ToastAndroid.show('Down To Lunch Request Sent', ToastAndroid.LONG);
    }
      this.setState({modalVisible:false});
  }

  render() {

    return (
      <View style={{position: 'absolute', bottom: 15, right: 0}}>
        <Button
          raised
          iconRight={{name: 'add'}}
          title="I'M DOWN TO LUNCH"
          backgroundColor="#2196F3"
          onPress={() => this.openModal()} />
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
            <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
                <GooglePlacesAutocomplete
                  placeholder="Search"
                  minLength={2} // minimum length of text to search
                  autoFocus={false}
                  returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                  listViewDisplayed="auto" // true/false/undefined
                  fetchDetails={true}
                  renderDescription={row => row.description} // custom description render
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data);
                    console.log(details);
                    this.setState({latitude: details.geometry.location.lat});
                    this.setState({longitude: details.geometry.location.lng});
                    this.closeModal();
                  }}
                  getDefaultValue={() => {
                    return ''; // text input default value
                  }}
                  query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyC2QhtACfVZ2cr9HVvxQuzxd3HT36NNK3Q',
                    language: 'en', // language of the results
                  }}
                  styles={{
                    description: {
                      fontWeight: 'bold',
                    },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                  }}
                  currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                  currentLocationLabel="Current location"
                  nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                  GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                  }}
                  GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    types: 'food',
                  }}
                  filterReverseGeocodingByTypes={[
                    'locality',
                    'administrative_area_level_3',
                  ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                  debounce={200}
                />
              </View>
            </View>
          </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    marginBottom: 0
  },
});

export default ModalComponent;
