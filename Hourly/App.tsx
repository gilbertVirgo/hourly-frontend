import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Login from './screens/Login';
import Container from './components/Container';

const styles = StyleSheet.create({
  master: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: window.innerHeight
  }
});

const App = () => {
  return (
    <View style={styles.master}>
      <Login />
    </View>
  );
}

export default App;