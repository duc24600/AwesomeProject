import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import Liquidation from "../api/liquidations";

function Liquidations() {
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  const [phase, setPhase] = useState('');
  const [obj, setObj] = useState({});

  const onPress = async () => {
    setObj({
      collectionName: 'liquidations',
      id: id,
      reqBody: {
        Liquidation: {
          CurrentPhase: phase,
          Status: status
        }
      }
    });
    const response = await Liquidation.update(obj);
    setMessage(response.Messages[0]);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput 
          style={styles.input}
          placeholder="Input ID"
          value={id}
          onChangeText={setId} />
        <TextInput
          style={styles.input}
          placeholder="Input Status"
          value={status}
          onChangeText={setStatus} />
        <TextInput
          style={styles.input}
          placeholder="Input Phase"
          value={phase}
          onChangeText={setPhase} />
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Update</Text>
      </TouchableOpacity>
      <View>
        <Text>{message}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },
  button: {
    alignItems: "center",
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  }
})

export default Liquidations