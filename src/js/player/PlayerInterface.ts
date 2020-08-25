export default interface PlayerInterface {
  isPlaying: boolean;
  play(): void;
  pause(): void;
  forward(time: number): void;
  rewind(time: number): void;
}
