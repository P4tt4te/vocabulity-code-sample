import { DailyData } from "@/constants/Types";
import { shuffleArray } from "../arrays/shuffleArray";

export function getMemoryDataFromNewWords(newWords: DailyData[]) {
  let data: {
    word: string;
    wordIndex: number;
    idIndex: number;
    x: number;
    y: number;
  }[] = [];
  // shuffle coords
  const shufflePositions = Array.from(
    new Array(newWords.length * 2),
    (_, i) => i + 1
  );
  const midPositions = shufflePositions.length / 2;
  shuffleArray(shufflePositions);

  let tileCounter = 0;
  newWords.forEach((newWord, index) => {
    for (let lang = 0; lang < 2; lang++) {
      const strLang = lang === 0 ? "wordTraded" : "word";
      const x = shufflePositions[tileCounter] > midPositions ? 1 : 0;
      const y =
        shufflePositions[tileCounter] > midPositions
          ? shufflePositions[tileCounter] - midPositions
          : shufflePositions[tileCounter];

      console.log("counter : ", tileCounter, " | x : ", x, " | y : ", y);

      data.push({
        word: newWord[strLang],
        wordIndex: newWord.index,
        idIndex: index,
        x: x,
        y: y,
      });

      tileCounter++;
    }
  });

  data.sort((a, b) => {
    if (a.x < b.x) return -1;
    if (a.x > b.x) return 1;
    if (a.y < b.y) return -1;
    if (a.y > b.y) return 1;
    return 0;
  });

  console.log("getMemoryDataFromNewWords : ", data);

  return data;
}
