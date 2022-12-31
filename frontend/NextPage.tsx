import { ProfileScreenProps } from "../types";
import { View, Text, Button } from "react-native";

export const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
        <Button title='Go to Settings' onPress={() => props.navigation.push("Settings")} />
      </View>
    );
  };