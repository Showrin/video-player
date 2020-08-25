export default interface PlayerInterface {
  isPlaying: boolean;
  play(): void;
  pause(): void;
  forward(): void;
  rewind(): void;
}
