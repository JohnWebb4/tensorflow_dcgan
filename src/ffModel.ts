import * as tf from "@tensorflow/tfjs";
import { Model } from "./definitions/model";

class FfModel implements Model {
  protected model: tf.Model;

  public constructor(inputShape: number[], units: number) {
    this.model = tf.sequential();

    this.model.add(tf.layers.dense({ inputShape, units }));

    this.model.compile({ loss: "meanSquaredError", optimizer: "sgd" });
  }

  public fit(xs: tf.Tensor, ys: tf.Tensor, epochs: number): Promise<void> {
    return this.model.fit(xs, ys, { epochs });
  }

  public predict(xs: tf.Tensor) {
    this.model.predict(xs).print();
  }
}

export { FfModel };
