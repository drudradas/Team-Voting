import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends Component {
  teamA() {
    db.ref('/').update({
      teamA: 1,
    });
  }

  teamB() {
    console.log(db);
    db.ref('/').update({
      teamB: 2,
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SecretScreen')}>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
              Vote Here For
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
              ______________________________
            </Text>
            <TouchableOpacity style={styles.buttons} onPress={this.teamA()}>
              <Text style={{ fontSize: 20 }}>Team A</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
              or
            </Text>
            <TouchableOpacity style={styles.buttons} onPress={this.teamB()}>
              <Text style={{ fontSize: 20 }}>Team B</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
              ______________________________
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                color: 'white',
                marginTop: 10,
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
