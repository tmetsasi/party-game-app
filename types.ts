import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
    Koti: undefined;
    Pelivalikko: undefined;
    Asetukset: undefined;
    Esimerkkipeli: {jaa: string, joo: string};
    Kakkosnäyttö: {para: string, toine: number};
    Kirjautuminen: undefined;
  };

 export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Koti">;

 export type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, "Pelivalikko">;

 export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Asetukset">;

 export type ExampleScreenProps = NativeStackScreenProps<RootStackParamList, "Esimerkkipeli">;

 export type SecondScreenProps = NativeStackScreenProps<RootStackParamList, "Kakkosnäyttö">;

 export type AuthScreenProps = NativeStackScreenProps<RootStackParamList, "Kirjautuminen">;
