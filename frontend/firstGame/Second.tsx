import { View, Text, Button, TextInput } from "react-native";
import { SecondScreenProps } from "../../types";
import React from "react";


export const SecondScreen: React.FC<SecondScreenProps> = (props) => { 
    const {params } = props.route

   
    return ( 
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Text>Esimerkkipelin toinen näyttö, tänne johdetaan tietoa</Text>
        <Text>Nimi: {JSON.stringify(params.para)}</Text>
        <Text>Ikä: {JSON.stringify(params.toine)}</Text>

        <Button title='Esimerkkipelin eka näyttö' onPress={() => props.navigation.push("Esimerkkipeli")} />
        <Button title="Pelivalikko" onPress={() => props.navigation.navigate('Pelivalikko')} />


      <Text> Esimerkkipelillä on nyt joitain parametreja</Text>

      </View>
    );
}