export interface FileInterface {
  name: string,
  state: 'uploaded' | 'uploading' | 'error',
  processing?: boolean,
  errorMessage?: string,
  remainingTime?: string,
  size?: string,
  progress?: number
}
