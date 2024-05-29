import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ isCart }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.appIconContainer}
        onPress={() => navigation.navigate("HOME_STACK")}>
        {isCart ? (
          <Ionicons name="chevron-back" color={"#E96E6E"} size={24} />
        ) : (
          <Image
            source={require("../assets/appIcon.png")}
            style={styles.appIcon}
          />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCart}>My Cart</Text>}

      <View style={styles.appIconContainer}>
        <Image source={require("../assets/dp.png")} style={styles.dp} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appIconContainer: {
    backgroundColor: "#ffffff",
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  appIcon: {
    height: 28,
    width: 28,
  },

  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  myCart: {
    fontSize: 28,
    color: "#000000",
  },
});
