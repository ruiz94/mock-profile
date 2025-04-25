export const getErrorMessage = (error: unknown) => {
  let message: string = '';
  if(error instanceof Error) {
    message = error.message
  } else if(error && typeof error === 'object' && 'message' in error) {
    message = (error as { message: string }).message;
  } else {
    message = 'An unknown error occurred: ' + JSON.stringify(error);
  }

  return message;
}