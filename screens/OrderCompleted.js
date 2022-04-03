import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function OrderCompleted(props) {
  const { restaurantName, items, total } = props.route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <LottieView
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          loop
          style={{
            width: 200,
            height: 200,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Thank you for your order!
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Your order has been placed successfully.
        </Text>
    <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 20,
            color:"blue"
          }}
        >
          {restaurantName}
        </Text>
        {items.map((item, index) => (
          <View key={index} style={{ flexDirection: "row", marginBottom: 10 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <View>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 15, color: "gray" }}>
                1 x ${item.price}
              </Text>
            </View>
          </View>
        ))}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#999",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Subtotal </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}> {total}</Text>
        </View>
        <View
          onPress={() => props.navigation.navigate("Home")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontWeight: "bold",
              marginRight: 10,
              backgroundColor: "#000",
              padding: 10,
            }}
            onPress={() => props.navigation.navigate("Home")}
          >
            Continue Shopping
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
