import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import abab from "abab"

function Liquidations() {
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  const [phase, setPhase] = useState('');
  const updateData = async () => {
    let data = JSON.stringify({
      Liquidation: {
        //        DisplayName : name
      }
    });
    let credentials = abab.btoa("hpt.admin:hpthnadmin");
    let headers = {
      "Authorization": `Basic ${credentials}`,
      "Content-Type": "application/json",
      "Content-Length": `${data.length}`,
      "Host": `10.4.18.42:13081`
    };
    try {
      const res = await fetch(`http://10.4.18.42:13081/SM/9/rest/liquidations/${id}/action/Resolve`,
        {
          headers: headers,
          method: 'POST',
          body: data
        });
      const json = await res.json();
      setMessage(json.Messages[0]);
      setStatus(json.Liquidation.Status);
      setPhase(json.Liquidation.CurrentPhase);
    } catch (error) {
      console.log(error);
      setMessage("Update failed!");
    }
  };

  onPress = () => {
    updateData();
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
          value={status} />
        <TextInput
          style={styles.input}
          value={phase} />
      </View>
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
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