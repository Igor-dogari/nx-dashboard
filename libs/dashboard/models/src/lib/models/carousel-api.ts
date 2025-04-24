export interface CarouselApiInterface {
  previous: () => void
  next: () => void,
  isPreviousDisabled: () => boolean,
  isNextDisabled: () => boolean
}
