import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    title: "Pick Up",
  },
  {
    image: require("../../assets/images/coffee.png"),
    title: "Backery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    title: "Fast Food",
  },
  {
    image: require("../../assets/images/desserts.png"),
    title: "Desserts",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    title: "Drinks",
  },
];

export default function Categories() {
  return (
    <ScrollView
      horizontal
      style={{ marginTop: 5, backgroundColor: "#fff", paddingLeft: 20 }}
      showsHorizontalScrollIndicator={false}
    >
      {items.map((item, index) => (
        <View key={index} style={{ marginRight: 30, alignItems: "center" }}>
          <Image
            source={item.image}
            style={{ width: 50, height: 40, resizeMode: "contain" }}
          />
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
