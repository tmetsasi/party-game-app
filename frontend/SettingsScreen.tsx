import { SettingsScreenProps } from "../types";
import { View, Text, Button } from "react-native";

export const SettingsScreen: React.FC<SettingsScreenProps> = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Asetukset, tästä ei pääse muualle kuin takaisin edelliseen näkymään</Text>
        
        <Button title="Takaisin edelliseen" onPress={() => props.navigation.goBack()} />
      </View>
    );
  };