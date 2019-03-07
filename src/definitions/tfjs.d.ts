/* tslint:disable max-classes-per-file */

declare module "@tensorflow/tfjs" {
  export const layers: Layers;

  export function sequential(): Model;
  export function tensor2d(...args: number[][]): Tensor;

  type Layer = any;
  type Tensor = any;

  interface Layers {
    dense(layerProps: LayerProps): Layer;
  }

  interface LayerProps {
    inputShape: number[];
    units: number;
  }

  interface Model {
    add(layer: Layer): void;
    compile(compileProps: CompileProps): void;
    fit(input: Tensor, output: Tensor, props: FitProps): Promise<void>;
    predict(input: Tensor): Result;
  }

  interface CompileProps {
    loss: "meanSquaredError";
    optimizer: "sgd";
  }

  interface FitProps {
    epochs: number;
  }

  interface Result {
    print(): void;
  }
}
