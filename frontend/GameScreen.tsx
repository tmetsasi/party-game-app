import { ProfileScreenProps } from "../types";
import { View, Text, Button } from "react-native";

export const GameScreen: React.FC<ProfileScreenProps> = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Pelivalikko missä on kaikki pelit ja peliasetukset</Text>
        
        <Button title='Esimerkkipeli' onPress={() => props.navigation.push("Esimerkkipeli")} />

        <Button title='Asetukset' onPress={() => props.navigation.push("Asetukset")} />
        
      </View>
    );
  };