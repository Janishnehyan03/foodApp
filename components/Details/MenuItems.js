import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

export default function MenuItems({ restuarantName }) {
  const foodItems = [
    {
      name: "Chicken Burger",
      price: 50,
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "With a juicy chicken patty, a sweet mayonnaise and a fresh lettuce, this is the perfect burger for a quick lunch or dinner. It’s also a great choice for a quick snack or snack-and-drink.",
    },
    {
      name: "Tikka Burger",
      price: 60,
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "With a juicy chicken patty, a sweet mayonnaise and a fresh lettuce, this is the perfect burger for a quick lunch or dinner. It’s also a great choice for a quick snack or snack-and-drink.",
    },
    {
      name: "Chicken Shawarma",
      price: 70,
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "With a juicy chicken patty, a sweet mayonnaise and a fresh lettuce, this is the perfect burger for a quick lunch or dinner. It’s also a great choice for a quick snack or snack-and-drink.",
    },
    {
      name: "Chicken Tikka",
      price: 80,
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "With a juicy chicken patty, a sweet mayonnaise and a fresh lettuce, this is the perfect burger for a quick lunch or dinner. It’s also a great choice for a quick snack or snack-and-drink.",
    },
    {
      name: "Egg Burger",
      price: 90,
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "With a juicy chicken patty, a sweet mayonnaise and a fresh lettuce, this is the perfect burger for a quick lunch or dinner. It’s also a great choice for a quick snack or snack-and-drink.",
    },
    {
      name: "Chicken Shawarma",
      price: 70,
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "With a juicy chicken patty, a sweet mayonnaise and a fresh lettuce, this is the perfect burger for a quick lunch or dinner. It’s also a great choice for a quick snack or snack-and-drink.",
    },
    {
      name: "Chicken Tikka",
      price: 80,
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "With a juicy chicken patty, a sweet mayonnaise and a fresh lettuce, this is the perfect burger for a quick lunch or dinner. It’s also a great choice for a quick snack or snack-and-drink.",
    },
    {
      name: "Egg Burger",
      price: 90,
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "With a juicy chicken patty, a sweet mayonnaise and a fresh lettuce, this is the perfect burger for a quick lunch or dinner. It’s also a great choice for a quick snack or snack-and-drink.",
    },
  ];
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.selectedItems.items);
  const isFoodInCart = (food, cartItems) => {
   return Boolean(cartItems.find((item) => item.name === food.name));
  };
  const selectedItem = (item, checkBoxValue) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restuarantName,
        checkBoxValue: checkBoxValue,
      },
    });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foodItems.map((food, index) => (
        <>
          <View key={index} style={styles.menuItemstyle}>
            <BouncyCheckbox
              size={25}
              fillColor="green"
              iconStyle={{ borderColor: "gray" }}
              onPress={(checkBoxValue) => selectedItem(food, checkBoxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} />
        </>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => {
  return (
    <View
      style={{
        width: 240,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {props.food.name}
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "400" }}>
        $ {props.food.price}
      </Text>
      <Text style={{ fontSize: 10, fontWeight: "300" }}>
        {props.food.description}
      </Text>
    </View>
  );
};

const FoodImage = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{ width: 100, height: 100, borderRadius: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemstyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
});
