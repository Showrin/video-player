import PlayerInterface from "./PlayerInterface.js";

export default class VideoPlayer implements PlayerInterface {
  private source: any;
  isPlaying: boolean = false;

  constructor(source: any) {
    this.source = source;
  }

  play(): void {
    this.source.play();
    this.isPlaying = true;
  }

  pause(): void {
    this.source.pause();
    this.isPlaying = false;
  }

  forward(): void {}

  rewind(): void {}
}
