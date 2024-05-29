import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import Entypo from "react-native-vector-icons/Entypo";
import Materialicons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "./src/screens/CartScreen";
import { CartProvider, CartContext } from "./src/context/CartContext";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName="PRODUCT_DETAILS"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: "#f38686",
            tabBarActiveTintColor: "#633204",
          }}>
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <Entypo name={"home"} size={size} color={color} />;
              },
            }}
          />

          <Tab.Screen
            name="REORDER"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ size, focused, color }) => (
                <Materialicons name={"reorder"} size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="CART"
            component={CartScreen}
            options={{
              tabBarIcon: ({ size, color }) => {
                const { carts } = React.useContext(CartContext);
                // console.log("cart:", value);
                return (
                  <View>
                    <MaterialCommunityIcons
                      name={"cart"}
                      size={size}
                      color={color}
                    />
                    {carts ? (
                      <View
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: 7,
                          justifyContent: "center",
                          alignItems: "center",
                          position: "absolute",
                          top: -10,
                          right: -5,
                          backgroundColor: color,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: "white",
                          }}>
                          {carts.length}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                );
              },
            }}
          />

          <Tab.Screen
            name="ACCOUNT"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ size, focused, color }) => (
                <FontAwesome6 size={size} color={color} name={"user"} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
