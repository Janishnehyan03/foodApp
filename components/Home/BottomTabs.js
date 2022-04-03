import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [selectedTab, setSelectedTab] = React.useState("home");
  const tabs = [
    {
      name: "home",
      label: "Home",
      icon: "home",
    },
    {
      name: "search",
      label: "Search",
      icon: "magnify",
    },
    {
      name: "add",
      label: "Add",
      icon: "plus",
    },
    {
      name: "notifications",
      label: "Notifications",
      icon: "bell",
    },
    {
      name: "profile",
      label: "Profile",
      icon: "account",
    },
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#eee",
        padding: 15,
      }}
    >
      {tabs.map((tab) => (
        <View
          key={tab.name}
          style={{
            flex: 1,
            alignItems: "center",
            padding: 6,
            borderBottomWidth: selectedTab === tab.name ? 3 : 0,
            borderBottomColor: selectedTab === tab.name ? "red" : "",
          }}

        >
          <MaterialCommunityIcons
            onPress={() => setSelectedTab(tab.name)}
            key={tab.name}
            name={tab.icon}
            size={30}
            color={selectedTab === tab.name ? "black" : "grey"}
          />
          <Text style={{ fontSize: 10 }}>{tab.name}</Text>
        </View>
      ))}
    </View>
  );
}
