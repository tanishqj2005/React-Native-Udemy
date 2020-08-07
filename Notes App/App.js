import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, Text, View, Alert, FlatList, Button } from "react-native";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const deleteGoal = (goalKey) => {
    let filteredGoals = goals.filter((goal) => goal.key !== goalKey);
    setGoals(filteredGoals);
  };
  const addGoalHandler = (goalTitle) => {
    if (goalTitle !== "") {
      setGoals((currentGoals) => [
        ...currentGoals,
        { key: Math.random().toString(), value: goalTitle },
      ]);
      setIsAddMode(false);
    } else {
      Alert.alert("Please Type A Goal First!!!");
    }
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} cancelGoalAdder={() => setIsAddMode(false)} goalAdder={(title) => addGoalHandler(title)} />
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginVertical: 10,
            textDecorationLine: "underline",
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          Your Goals :
        </Text>
      </View>
      <FlatList
        style={{ marginBottom: 60 }}
        data={goals}
        keyExtractor={(item, index) => item.key}
        renderItem={(itemData) => {
          return (
            <GoalItem
              onDelete={() => deleteGoal(itemData.item.key)}
              title={itemData.item.value}
            />
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
