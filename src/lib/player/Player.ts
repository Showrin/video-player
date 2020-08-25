import VideoPlayer from "./VideoPlayer.js";

export default class Player {
  getVideoPlayer(source: HTMLMediaElement): VideoPlayer {
    return new VideoPlayer(source);
  }
}
