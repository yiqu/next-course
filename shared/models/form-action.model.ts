export interface FormActionState<T> {
  status: string;
  message: string;
  payload: T | null;
}