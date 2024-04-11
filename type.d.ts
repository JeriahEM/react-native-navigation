import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type appNativeParamsList = {
    LoginScreen: undefined;
    ProfileScreen: undefined;
    DataScreen: {
        name: string
        img: string
    }
}

export type Props = NativeStackScreenProps<appNativeParamsList, LoginScreen, ProfileScreen, DataScreen>