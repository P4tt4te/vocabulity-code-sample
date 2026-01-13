import { getMemoryDataFromNewWords } from "../getMemoryDataFromNewWords";
import { FrEnWords } from "@/helpers/languages/fr-FR/en";

const fakeNewWords = (length: number) =>
  Array.from(new Array(length), (_, i) => {
    return {
      listId: 1,
      index: i,
      word: i.toString(),
      wordTraded: i.toString(),
    };
  });

describe("getMemoryData", () => {
  it("Should return all coordinates with 5 words x(0-1) y(1-5)", () => {
    const memoryData = getMemoryDataFromNewWords(fakeNewWords(5));
    const responses = new Array(10).fill(false);

    memoryData.forEach((_) => {
      const val = _.y + _.x * 5;
      console.log("val : ", val);
      responses[val - 1] = true;
    });

    console.log("responses : ", responses);

    expect(responses.includes(false)).toBe(false);
  });
  it("Should return all coordinates with 4 words x(0-1) y(1-4)", () => {
    const memoryData = getMemoryDataFromNewWords(fakeNewWords(4));
    const responses = new Array(8).fill(false);

    memoryData.forEach((_) => {
      const val = _.y + _.x * 4;
      responses[val - 1] = true;
    });

    expect(responses.includes(false)).toBe(false);
  });
  it("Should return all coordinates with 4 words x(0-1) y(1-3)", () => {
    const memoryData = getMemoryDataFromNewWords(fakeNewWords(3));
    const responses = new Array(6).fill(false);

    memoryData.forEach((_) => {
      const val = _.y + _.x * 3;
      responses[val - 1] = true;
    });

    expect(responses.includes(false)).toBe(false);
  });
  it("Should return all coordinates with 4 words x(0-1) y(1-2)", () => {
    const memoryData = getMemoryDataFromNewWords(fakeNewWords(2));
    const responses = new Array(4).fill(false);

    memoryData.forEach((_) => {
      const val = _.y + _.x * 2;
      responses[val - 1] = true;
    });

    expect(responses.includes(false)).toBe(false);
  });
  it("Should return all coordinates with 1 word x(0-1) y(1)", () => {
    const memoryData = getMemoryDataFromNewWords(fakeNewWords(1));
    const responses = new Array(2).fill(false);

    memoryData.forEach((_) => {
      const val = _.y + _.x * 1;
      responses[val - 1] = true;
    });

    expect(responses.includes(false)).toBe(false);
  });
});
