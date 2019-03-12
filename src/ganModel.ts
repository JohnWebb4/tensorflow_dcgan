import { Model } from "./definitions/model";
import { FfModel } from "./ffModel";

class GanModel implements Model {
  protected discriminator: FfModel;
  protected generator: FfModel;

  public constructor() {
    this.discriminator = new FfModel([1], 1);
    this.generator = new FfModel([1], 1);
  }

  public predict(): number[] {
    return[];
  }

  public fit(): Promise<void> {
    return;
  }
}

export { GanModel };
