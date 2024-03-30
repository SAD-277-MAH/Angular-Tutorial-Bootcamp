export interface OperationResult<T> {
  data: T;
  isSuccess: boolean;
  messages: string[];
}
