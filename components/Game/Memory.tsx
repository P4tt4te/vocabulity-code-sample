import { View } from "../Themed";
import { StyleSheet } from "react-native";
import MemoryBox from "./Memory/MemoryBox";
import { useMemo } from "react";

interface MemoryProps {
  data: {
    word: string;
    wordIndex: number;
    idIndex: number;
    x: number;
    y: number;
  }[];
  reponses: {
    wordIndex: number;
    isValid: boolean;
    isError: boolean;
    x: number;
    y: number;
  }[];
  onSubmit: (index: number, x: number, y: number, idsIdx: number) => void;
  selectedCoords: { x: number; y: number };
  blockEvents: boolean;
}

export default function Memory({
  data,
  reponses,
  onSubmit,
  selectedCoords,
  blockEvents,
}: MemoryProps) {
  function mappingTiles(line: number) {
    return data.map((item, i) => {
      if (item.x === line) {
        const reponse =
          reponses.find(
            (response) =>
              response.y === item.y &&
              response.x === item.x &&
              response.wordIndex === item.wordIndex
          ) ?? null;

        const isValidated = reponse?.isValid ?? false;
        const isError = reponse?.isError ?? false;

        return (
          <MemoryBox
            word={item.word}
            key={i}
            status={
              isError
                ? "error"
                : isValidated
                ? "validated"
                : selectedCoords.x === item.x && selectedCoords.y === item.y
                ? "selected"
                : "default"
            }
            onTap={() =>
              !blockEvents &&
              !isValidated &&
              onSubmit(item.wordIndex, item.x, item.y, item.idIndex)
            }
          />
        );
      }
    });
  }

  const line1 = useMemo(
    () => mappingTiles(0),
    [data, reponses, blockEvents, selectedCoords]
  );
  const line2 = useMemo(
    () => mappingTiles(1),
    [data, reponses, blockEvents, selectedCoords]
  );

  return (
    <View style={styles.container}>
      <View style={styles.line}>{line1}</View>
      <View style={styles.line}>{line2}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 10,
    overflow: "visible",
  },
  line: {
    flex: 1,
    gap: 10,
    backgroundColor: "transparent",
    overflow: "visible",
  },
});
