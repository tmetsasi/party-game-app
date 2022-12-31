import { HomeScreenProps } from "../types";
import { View, Button } from "react-native";

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title='jotai' onPress={() => props.navigation.push("Profile")} />
        <Button title='muuta' onPress={() => props.navigation.push("Settings")} />
      </View>
    );
  };