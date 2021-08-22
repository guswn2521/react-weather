import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text style={styles.text}>Hello</Text>
      </View>
      <View style={styles.blueView}>
        <Text style={styles.text}>Hello</Text>
      </View>
      <View style={styles.yellowView}>
        <Text style={styles.text}>Hello</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    
  },
  yellowView:{
    flex:1,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
    
  },
  blueView:{
    flex:8,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    
  },
  text:{
    color:'white',
    fontSize:20
  }
});
