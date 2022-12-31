import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
    Profile: undefined;
  };

 export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

 export type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, "Settings">;

 export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Settings">;

