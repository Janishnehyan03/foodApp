import { View, Text } from "react-native";
import React from "react";
import About from "../components/Details/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/Details/MenuItems";
import ViewCart from "../components/Details/ViewCart";

export default function Details({ route }) {
  return (
    <View>
      <About props={route.params.restaurent} />
      <Divider
        width={1.8}
        style={{
          marginVertical: 20,
        }}
      />
      <MenuItems restuarantName={route.params.restaurent.name} />
      <ViewCart navigation={route.params.navigation} />
    </View>
  );
}
