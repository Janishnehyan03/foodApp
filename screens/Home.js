import {
  SafeAreaView,
  StatusBar,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import HeaderTab from "../components/Home/HeaderTab";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestaurentItem, {
  localRestaurants,
} from "../components/Home/RestaurentItem";
import BottomTabs from "../components/Home/BottomTabs";

export default function Home({ navigation }) {
  const windowHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", height: windowHeight }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {localRestaurants.map((restaurant, index) => (
          <RestaurentItem key={index} navigation={navigation} />
        ))}
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
