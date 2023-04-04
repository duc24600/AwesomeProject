/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"

function App() {
  const [state, setState] = useState({ count: 0 });

  onPress = () => {
    setState({
      count: state.count + 1,
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text>Click</Text>
      </TouchableOpacity>
      <View>
        <Text>You clicked {state.count} times</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  }
})

export default App
