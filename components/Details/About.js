import { View, Text, Image } from "react-native";
import React from "react";

export default function About({ props }) {
  const imageUrl = props.imageUrl;
  const title = props.name;
  const description = props.description;
  return (
    <View>
      <RestaurentImage imageUrl={imageUrl} />
      <RestaurentTitle title={title} />
      <RestaurentDescription description={description} />
    </View>
  );
}

const RestaurentImage = ({ imageUrl }) => {
  return (
    <Image
      source={{ uri: imageUrl }}
      style={{ width: "100%", height: 180, resizeMode: "cover" }}
    />
  );
};

const RestaurentTitle = ({ title }) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {title}
    </Text>
  );
};

const RestaurentDescription = ({ description }) => {
  return (
    <Text
      style={{
        fontSize: 15,
        marginTop: 10,
        marginHorizontal: 15,
        color: "gray",
        fontWeight: "400",
      }}
    >
      {description}
    </Text>
  );
};
