import VideoPlayer from "./VideoPlayer.js";

export default class Player {
  getVideoPlayer(source: any): VideoPlayer {
    return new VideoPlayer(source);
  }
}
