import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text style={{ fontSize: 20 }}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "whitesmoke",
    padding: 30,
    margin: 20,
    borderRadius: 10,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GoalItem;
