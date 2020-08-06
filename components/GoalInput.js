import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const changeGoalHandler = (entered) => {
    setEnteredGoal(entered);
  };
  const goalAddFunc = () => {
    props.goalAdder(enteredGoal);
    setEnteredGoal('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
    <View
      style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Enter your goal here!"
        style={styles.inputContainer}
        onChangeText={changeGoalHandler}
        value={enteredGoal}
      />
      <View style={{flexDirection:'row', width:'60%', justifyContent: 'space-between'}}>
      <View style={styles.btn}><Button title="ADD" color="green" onPress={goalAddFunc} /></View>
      <View style={styles.btn}><Button title="CANCEL" color="red" onPress={props.cancelGoalAdder} /></View>
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    marginBottom: 20,
    padding: 10,
    width: "80%",
    fontSize: 18,
  },
  btn: {
    width: '40%',
  }
});

export default GoalInput;
