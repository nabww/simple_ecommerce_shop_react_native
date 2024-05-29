import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from "expo-linear-gradient";
import Fontisto from "react-native-vector-icons/Fontisto";
import Header from "../components/Header";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json";

const categories = [
  "Trending Now",
  "Just In",
  "All",
  "Women's",
  "Men's",
  "Kids",
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [numColumns, setNumColumns] = useState(2);
  const [isLiked, setIsLiked] = useState(false);
  const [products, setProducts] = useState(data.products);

  const toggleColumns = () => {
    // Change the number of columns based on your logic
    setNumColumns(numColumns === 1 ? 2 : 1);
  };

  // confirm functionality...
  const handleLike = (item) => {
    const newProducts = products.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isLiked: !prod.isLiked,
        };
      }
      return prod;
    });
    setProducts(newProducts);
    // console.log(products.isLiked);
  };

  return (
    <LinearGradient colors={["#fdf0f3", "#fffbfc"]} style={styles.container}>
      <Header />

      {/* category section */}

      {/* <Category/> */}
      {/* Product List */}
      <FlatList
        key={numColumns}
        data={products}
        renderItem={({ item, index }) => (
          <ProductCard item={item} handleLike={handleLike} />
        )}
        numColumns={numColumns}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Text style={styles.headertext}>Match Your Style</Text>
            {/* Search bar */}
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name="search" size={26} color="#c0c0c0" />
              </View>
              <TextInput style={styles.textInput} placeholder="Search" />
            </View>
            {/* categories */}
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
              horizontal={true}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { marginTop: 35, margin: 5 },
  headertext: {
    fontSize: 28,
    color: "#000000",
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: "#ffffff",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
  },
});
