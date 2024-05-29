import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import CartCard from "../components/CartCard";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
  const { carts, totalPrice, deleteFromCart } = useContext(CartContext);
  return (
    <LinearGradient colors={["#fdf0f3", "#fffbfc"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={carts}
        renderItem={({ item }) => (
          <CartCard item={item} deleteFromCart={deleteFromCart} />
        )}
        ListFooterComponent={
          <>
            <View style={styles.priceContainer}>
              <View style={styles.priceAndTitle}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>${totalPrice}</Text>
              </View>
              <View style={styles.priceAndTitle}>
                <Text style={styles.text}>Shipping:</Text>
                <Text style={styles.text}>$0.0</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.priceAndTitle}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text
                style={[styles.text, { color: "black", fontWeight: "700" }]}>
                ${totalPrice}
              </Text>
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <TouchableOpacity style={styles.checkOutContainer}>
        <Text style={styles.buttonText}>Check Out</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  headerContainer: {
    margingBottom: 20,
  },
  priceAndTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: "#757575",
    fontSize: 18,
  },
  priceContainer: {
    marginTop: 40,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginVertical: 10,
  },
  checkOutContainer: {
    backgroundColor: "#E96E6E",
    borderRadius: 10,
    margin: 10,
    width: "90%",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 25,
    color: "#FFFFFF",
    textAlign: "center",
    padding: 10,
  },
});
