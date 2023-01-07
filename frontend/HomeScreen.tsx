import { HomeScreenProps } from "../types";
import { View, Button, Text } from "react-native";

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Tämä on siis häiviintyvä näkymä, josta ei suoraan pääse mihinkään, paitsi toistaiseksi pelivalikkoon
          Tähän tulee logo ja sellasta
        </Text>

        <Button title='Pelivalikko' onPress={() => props.navigation.push("Pelivalikko")} />
      </View>
    );
  };