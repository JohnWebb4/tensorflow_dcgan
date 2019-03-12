import { GanModel } from "./ganModel";
import { textToTrainingData, WordMap } from "./generateData";

window.handleTestFile = function handleTestFile(files: any[]): void {
  const file = files[0];

  if (file) {
    const reader = new FileReader();

    reader.readAsText(file, "UTF-8");

    reader.onload = (evt: ProgressEvent) => {
      if (app) {
        app.train(evt.target.result);
      }
    };

    reader.onerror = (evt) => {
      alert("Error reading file");
    };
  }
};

class App {
  protected ganModel: GanModel;
  protected wordMap: WordMap;

  public constructor() {
    this.ganModel = new Model([1], 1);
  }

  public train(text: string): Promise<void> {
    const { input, output, wordMap } = textToTrainingData(text);

    this.wordMap = wordMap;

    return this.ganModel.fit(input, output, 10);
  }

  public predict(): void {
    this.ganModel.predict();
  }
}

const app = new App();
