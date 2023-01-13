import { View, Text, Button, TextInput } from "react-native";
import { ExampleScreenProps } from "../../types";
import React from "react";

export const ExampleGame: React.FC<ExampleScreenProps> = (props) => { 
  const [postText, setPostText] = React.useState('');


    return ( 
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Text>Esimerkkipeli eli tämä on peli ja tätä pelaamalla pääsee asetuksiin ja kaikki
             pelit näkymään eli pelivalikkoon. Testin vuoksi  myös pelivalikkoon komento tarjolla.
             Tästä näkymästä lähtee parametreja seuraavaan näkymään, kuten nimi.</Text>

        <Button title='Pelin kakkosnäyttöön' onPress={() => props.navigation.navigate('Kakkosnäyttö')}/>
       
      <Text> Esimerkkipelillä on nyt joitain parametreja</Text>

      <>
      <TextInput
        
        placeholder="?"
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          props.navigation.navigate('Kakkosnäyttö',{
            para: postText, toine: 34,
            
          });
        }}
      />
    </>


      <Button title="Pelivalikko" onPress={() => props.navigation.navigate('Pelivalikko')} />
      <Button title='Asetukset' onPress={() => props.navigation.push("Asetukset")} />

      </View>
    );
}