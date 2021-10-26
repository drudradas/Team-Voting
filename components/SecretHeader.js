import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SecretScreen extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Secret Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#700B97'
  },
  text:{
    padding: 20,
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

