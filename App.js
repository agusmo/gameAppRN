import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header  from "./components/Header";
import StartGameScreen from './screen/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Adiviná el número"} />
      <StartGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
