import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import GoogleAutoSuggest from './GoogleAutoSuggest.js';

export default class ModalComponent extends Component {

  render() {
    return (
          <Modal
              visible={this.props.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.props.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <FormLabel>Location</FormLabel>
                <FormInput/>
                <FormLabel>Start Time</FormLabel>
                <FormInput/>
                <FormLabel>End Time</FormLabel>
                <FormInput/>
              </View>
              <View style={{margin: 20}}>
                <Button
                    onPress={() => this.props.closeModal()}
                    title="Down To Lunch"
                    iconRight={{name: 'check'}}
                >
                </Button>
              </View>
            </View>
          </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    margin: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    marginBottom: 0
  },
});
