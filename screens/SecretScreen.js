import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import SecretHeader from '../components/SecretHeader';

export default class SecretScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <SecretHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SecretScreen')}>
              <Image
                style={{ width: 500, height: 220, marginLeft: 5, scaleX: 0.7, scaleY: 0.7 }}
                source={require('../assets/Secret-Screen.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
              Congrats
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
              You Found
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
              The Secret Screen
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
              ______________________________
            </Text>
            <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize: 20 }}>Go Back</Text>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                color: 'white',
                marginTop: 90,
              }}></Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
  },
  buttonsContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    marginTop: 50,
  },
  buttons: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    marginLeft: 95,
    width: 150,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    marginTop: 50,
  },
});

