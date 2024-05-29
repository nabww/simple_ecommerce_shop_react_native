import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const CartCard = ({ item, deleteFromCart }) => {
  const imageUrl =
    "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/vy2q98s8ucsywwxjx2cf.png";
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.coverImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.circleSizeContainer}>
          <View style={[styles.circle, { backgroundColor: item.color }]}></View>
          <View style={styles.size}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteFromCart(item)}>
        <FontAwesome6 name={"trash"} color={"#F68CB5"} size={22} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    margin: 5,
  },
  coverImage: {
    height: 125,
    width: "25%",
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: "#444444",
    fontWeight: "500",
  },
  price: {
    color: "#797979",
    fontSize: 18,
    marginVertical: 10,
  },
  circle: {
    borderRadius: 16,
    height: 32,
    width: 32,
    // backgroundColor: "#7094C1",
  },
  circleSizeContainer: {
    flexDirection: "row",
  },
  size: {
    backgroundColor: "white",
    height: 32,
    width: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  sizeText: {
    fontWeight: "500",
    fontSize: 18,
  },
});
