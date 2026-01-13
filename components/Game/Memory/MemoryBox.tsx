import { Text } from "@/components/Themed";
import { BLACK, GREEN, GREY, RED, WHITE } from "@/constants/Colors";
import { Pressable, StyleSheet, Animated } from "react-native";
import {
  BUTTON_INPUT_RANGE,
  BUTTON_OUTPUT_RANGE,
  onReactiveButtonPressIn,
  onReactiveButtonPressOut,
  sucessButtonAnimation,
} from "@/constants/Animations";
import { useEffect, useMemo, useState } from "react";
import { selectionAsync } from "expo-haptics";

interface MemoryBoxProps {
  word: string;
  status: "default" | "selected" | "validated" | "error";
  onTap: () => void;
}

export const errorMemoryAnimation = (animation: Animated.Value) =>
  Animated.sequence([
    Animated.spring(animation, {
      toValue: 10,
      speed: 40,
      bounciness: 120,
      useNativeDriver: true,
    }),
    Animated.spring(animation, {
      toValue: -10,
      speed: 40,
      bounciness: 120,
      useNativeDriver: true,
    }),
    Animated.spring(animation, {
      toValue: 0,
      speed: 40,
      bounciness: 120,
      useNativeDriver: true,
    }),
  ]).start();

export default function MemoryBox({ word, status, onTap }: MemoryBoxProps) {
  const animation = useMemo(() => new Animated.Value(0), []);
  const scale = animation.interpolate({
    inputRange: BUTTON_INPUT_RANGE,
    outputRange: BUTTON_OUTPUT_RANGE,
  });
  const [animationRunning, setAnimationRunning] = useState(false);

  const animationB = useMemo(() => new Animated.Value(0), []);
  const rotate = animationB.interpolate({
    inputRange: [-10, 10],
    outputRange: ["-15deg", "15deg"],
  });

  useEffect(() => {
    status === "error" && errorMemoryAnimation(animationB);
  }, [status]);

  return (
    <Animated.View style={{ transform: [{ scale }, { rotate }], flex: 1 }}>
      <Pressable
        onPressIn={() => {
          setAnimationRunning(true);
          onReactiveButtonPressIn(animation, () => setAnimationRunning(false));
          selectionAsync();
          onTap();
        }}
        onPressOut={() => onReactiveButtonPressOut(animation, animationRunning)}
        style={[
          styles.box,
          {
            backgroundColor:
              status === "error"
                ? RED
                : status === "selected"
                ? GREY
                : status === "validated"
                ? GREEN
                : WHITE,
          },
        ]}
      >
        <Text
          style={[styles.text, { color: status === "error" ? WHITE : BLACK }]}
        >
          {word}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderRadius: 14,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "red-hat-display-semibold",
    fontSize: 15,
  },
});
