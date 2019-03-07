import * as tf from "@tensorflow/tfjs";

const model = tf.sequential();

// Define
model.add(tf.layers.dense({ inputShape: [1], units: 1 }));

model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

// Generate data
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train
model.fit(xs, ys, { epochs: 10 }).then(() => {
  model.predict(tf.tensor2d([5], [1, 1])).print();
});
