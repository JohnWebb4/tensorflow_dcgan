export interface Model {
  predict(): number[];
  fit(): Promise<void>;
}
