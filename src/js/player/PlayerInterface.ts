export default interface PlayerInterface {
  isPlaying: boolean;
  played(): number;
  play(): void;
  pause(): void;
  forward(time: number): void;
  rewind(time: number): void;
}
