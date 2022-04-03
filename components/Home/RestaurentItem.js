import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    imageUrl:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Beach Side Restaurant",
    categories: ["Fast Food", "Desserts"],
    rating: 4.5,
    reviews: 233,
    address: "B-1, 1st Floor, Block B, Sector-1, Noida, Uttar Pradesh 201306",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Arabian Restaurant",
    categories: ["Backery Items", "Desserts"],
    rating: 4.2,
    reviews: 2303,
    address: "B-1, 1st Floor, Block B, Sector-1, Noida, Uttar Pradesh 201306",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Indian Restaurant",
    categories: ["Indian Items", "Fishes"],
    rating: 4.2,
    reviews: 2303,
    address: "B-1, 1st Floor, Block B, Sector-1, Noida, Uttar Pradesh 201306",
  },
];

export default function RestaurentItem({ navigation }) {
  return (
    <>
      {localRestaurants.map((restaurent, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("Details", {
              restaurent: restaurent,
              index: index,
            })
          }
        >
          <View
            key={index}
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            {/* Restuarent Image */}
            <RestaurentImage image={restaurent.imageUrl} />
            {/* Restuarent Info */}
            <RestaurentInfo name={restaurent.name} rating={restaurent.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurentImage = ({ image }) => {
  return (
    <>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: "100%",
          height: 180,
        }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="red" />
      </TouchableOpacity>
    </>
  );
};

const RestaurentInfo = ({ name, rating }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-40 min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          borderRadius: 15,
          justifyContent: "center",
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  );
};
