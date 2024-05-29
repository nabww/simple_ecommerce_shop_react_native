import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ item, handleLike }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("PRODUCT_DETAILS", { item });
      }}>
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.textContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleLike(item)}
        style={styles.likeContainer}>
        {item?.isLiked ? (
          <AntDesign name={"heart"} size={20} color={"#E55B5B"} />
        ) : (
          <AntDesign name={"hearto"} size={20} color={"#E55B5B"} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 5,
    position: "relative",
  },
  coverImage: {
    borderRadius: 20,
    width: "90%",
    height: 256,
    marginVertical: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#44444",
  },
  price: {
    fontSize: 18,
    color: "#9C9C9C",
    fontWeight: "600",
  },
  textContent: {
    paddingLeft: 15,
  },
  likeContainer: {
    height: 34,
    width: 34,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    position: "absolute",
    top: 20,
    right: 15,
  },
});
