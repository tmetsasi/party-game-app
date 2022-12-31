import { SettingsScreenProps } from "../types";
import { View, Text, Button } from "react-native";

export const SettingsScreen: React.FC<SettingsScreenProps> = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings Screen</Text>
        <Button title='Go to Profile' onPress={() => props.navigation.push("Profile")} />
      </View>
    );
  };