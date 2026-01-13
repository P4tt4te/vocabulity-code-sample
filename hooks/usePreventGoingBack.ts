import { Platform } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export default function usePreventGoingBack(force: boolean = false) {
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS === "ios") {
      navigation.setOptions({ gestureEnabled: force });
    } else if (Platform.OS === "android") {
      // android does not respect gestureEnabled flag
      const unsub = navigation.addListener("beforeRemove", (nav) => {
        // Prevent going back on swipe
        if (
          nav.data.action.type === "GO_BACK" &&
          !nav.data.action.source &&
          !force
        ) {
          console.warn("EVENT PREVENTED");
          nav.preventDefault();
        } else {
          navigation.dispatch(nav.data.action);
        }
      });
      return unsub;
    }
  }, [navigation]);
}
