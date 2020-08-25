import PlayerInterface from "./PlayerInterface.js";

export default class VideoPlayer implements PlayerInterface {
  private source: HTMLMediaElement;
  isPlaying: boolean = false;

  constructor(source: any) {
    this.source = source;
  }

  played(): number {
    return (this.source.currentTime / this.source.duration) * 100;
  }

  play(): void {
    this.source.play();
    this.isPlaying = true;
  }

  pause(): void {
    this.source.pause();
    this.isPlaying = false;
  }

  forward(time: number): void {
    this.source.currentTime += time;
  }

  rewind(time: number): void {
    this.source.currentTime -= time;
  }
}
