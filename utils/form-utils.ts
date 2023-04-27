export type ReturnType = Promise<string | string[] | null>;

export type SetSubmitting = { setSubmitting: (isSubmitting: boolean) => void };

export function extractResponse(responseMessage: string | string[]): string {
  if (Array.isArray(responseMessage)) {
    return responseMessage[0];
  }
  return responseMessage;
}
