import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.yellowView}></View>
      <View style={styles.blueView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center'
  }, 
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow'
  }, 
  blueView: {
    flex: 1, 
    backgroundColor: 'blue'
  }
});
