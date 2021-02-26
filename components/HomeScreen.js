import React from "react";
import { View } from "react-native";

import PokeGrid from "./PokeGrid";

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, flexDirection: "row", justifyContent:"center", alignItems:"center" }}>
        <PokeGrid navigation={navigation} />
      </View>
    );
}

export default HomeScreen;