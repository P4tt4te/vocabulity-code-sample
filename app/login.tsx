import usePreventGoingBack from "@/hooks/usePreventGoingBack";
import LoginScreen from "@/screens/LoginScreen";
import { Platform } from "react-native";
import {
  setBackgroundColorAsync,
  setBorderColorAsync,
} from "expo-navigation-bar";
import { GREYLIGHT } from "@/constants/Colors";

export default function Page() {
  usePreventGoingBack();
  return <LoginScreen />;
}
