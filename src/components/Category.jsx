import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && {
            color: "#ffffff",
            backgroundColor: "#e96e6e",
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    color: "#938F8F",
    backgroundColor: "#DFDCDC",
    fontSize: 16,
    fontWeight: "600",
    padding: 10,
    borderRadius: 16,
    marginHorizontal: 10,
  },
});
