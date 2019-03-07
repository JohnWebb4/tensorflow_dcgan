type WordMap = Map<number | string, number | string>;

interface TrainingData {
  input: number[][];
  output: number[];
  wordMap: WordMap;
}

function textToTrainingData(text: string): TrainingData {
  const words = [...new Set(text.split(/\s/))];

  const wordMap = textToWordDictionary(words);

  const lines = text.split(/\n/);

  const validInput = lines.map((line) => textToWordVector(line, wordMap));

  const output = [];

  for (let i = 0; i < validInput.length; i += 1) {
    output[i] = 1;
  }

  const failInput = generateFailInput(validInput.length, words, wordMap);

  const input = validInput.concat(failInput);

  for (let i = validInput.length; i < input.length; i += 1) {
    output[i] = 0;
  }

  return { input, output, wordMap };
}

function textToWordDictionary(words: string[]): WordMap {
  const map = new Map();

  words.forEach((word, index) => {
    map.set(word, index);
    map.set(index, word);
  });

  return map;
}

function textToWordVector(text: string, wordMap: WordMap): number[] {
  const words = text.split(" ");

  return words.map((word) => {
    if (!wordMap.has(word)) {
      return -1;
    }

    return wordMap.get(word) as any;
  });
}

function generateFailInput(
  length: number,
  words: string[],
  wordMap: WordMap,
): number[][] {
  const maxSentenceLength = 20;
  const minSentenceLength = 10;

  const failInput: number[][] = [];

  function generateRandomSentence(): string {
    const sentenceLength =
      Math.random() * (maxSentenceLength - minSentenceLength) +
      minSentenceLength;

    let sentence = "";

    for (let i = 0; i < sentenceLength; i += 1) {
      sentence += words[Math.floor(Math.random() * words.length)];
    }

    return sentence;
  }

  for (let i = 0; i < length; i += 1) {
    failInput[i] = textToWordVector(generateRandomSentence(), wordMap);
  }

  return failInput;
}

export { TrainingData, WordMap, textToTrainingData };
