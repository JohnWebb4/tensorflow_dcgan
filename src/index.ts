import { textToTrainingData } from "./generateData";

window.handleTestFile = function handleTestFile(files: any[]): void {
  const file = files[0];

  if (file) {
    const reader = new FileReader();

    reader.readAsText(file, "UTF-8");

    reader.onload = (evt: ProgressEvent) => {
      const { input, output, wordMap } = textToTrainingData(evt.target.result);

    };

    reader.onerror = (evt) => {
      alert("Error reading file");
    };
  }
};

