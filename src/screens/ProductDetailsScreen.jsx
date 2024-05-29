import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CartContext } from "../context/CartContext";

const imageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";

const sizes = ["S", "M", "L", "XL", "XXL"];
const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const route = useRoute();
  const item = route.params.item;

  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (item) => {
    item.size = selectedSize;
    item.color = selectedColor;
    addToCart(item);
    navigation.navigate("CART");
  };

  return (
    <LinearGradient colors={["#fdf0f3", "#fffbfc"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      {/* <View> */}
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      {/* </View> */}
      <View style={styles.textContainer}>
        <Text style={styles.title}> {item.title}</Text>
        <Text style={[styles.price, styles.title]}>${item.price}</Text>
      </View>
      <Text style={[styles.title, styles.sizeText]}>Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.sizeValueContainer}
                onPress={() => {
                  setSelectedSize(size);
                  // console.log(selectedSize);
                }}>
                <Text
                  style={[
                    styles.sizeValue,
                    selectedSize === size && { color: "#e55b5b" },
                  ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <Text style={[styles.title, styles.colorText]}>Colors</Text>
      <View style={styles.colorContainer}>
        {colorsArray.map((color, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedColor(color);
              }}
              style={[
                styles.ciircleBorder,

                selectedColor === color && {
                  borderColor: color,
                  borderWidth: 2,
                },
              ]}>
              <View style={[styles.circle, { backgroundColor: color }]}></View>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* Button Container */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddToCart(item)}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 20,
    padding: 5,
  },
  coverImage: {
    height: 420,
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "#444444",
    fontWeight: "500",
  },
  price: {
    color: "#4D4C4C",
  },
  sizeText: {
    marginHorizontal: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  sizeValueContainer: {
    fontSize: 18,
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  colorText: {
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    margin: 10,
  },
  colorContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
  },
  ciircleBorder: {
    borderRadius: 24,
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#E96E6E",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    margin: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
