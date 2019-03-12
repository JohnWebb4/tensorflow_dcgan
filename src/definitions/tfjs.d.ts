/* tslint:disable max-classes-per-file */

declare module "@tensorflow/tfjs" {
  export const layers: Layers;

  export function sequential(): Model;
  export function tensor2d(...args: number[][]): Tensor;

  export type Layer = any;
  export type Tensor = any;

  export interface Layers {
    dense(layerProps: LayerProps): Layer;
  }

  export interface LayerProps {
    inputShape: number[];
    units: number;
  }

  export interface Model {
    add(layer: Layer): void;
    compile(compileProps: CompileProps): void;
    fit(input: Tensor, output: Tensor, props: FitProps): Promise<void>;
    predict(input: Tensor): Result;
  }

  export interface CompileProps {
    loss: "meanSquaredError";
    optimizer: "sgd";
  }

  export interface FitProps {
    epochs: number;
  }

  export interface Result {
    print(): void;
  }
}
