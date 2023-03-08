export interface ErrorScreenPresentationalInterface {
  errorMessage: string;
  onPressTryAgain(): Promise<void>;
}
