import Player from "./player/Player.js";
import VideoPlayer from "./player/VideoPlayer.js";

const videoPlayerSource = <HTMLMediaElement>(
  document.getElementById("js-video-player")
);
const playPauseButton = <HTMLMediaElement>(
  document.getElementById("js-play-pause-button")
);
const rewindButton = <HTMLMediaElement>(
  document.getElementById("js-rewind-button")
);
const forwardButton = <HTMLMediaElement>(
  document.getElementById("js-forward-button")
);

const player = new Player();
const videoPlayer = player.getVideoPlayer(videoPlayerSource);

const toggleVideoPlayer = (videoPlayer: VideoPlayer) => {
  if (videoPlayer.isPlaying) {
    videoPlayer.pause();
  } else {
    videoPlayer.play();
  }
};

const togglePlayButtonIcon = (isPlaying: boolean) => {
  if (isPlaying) {
    playPauseButton.src = "./src/assets/icons/pause.svg";
  } else {
    playPauseButton.src = "./src/assets/icons/play.svg";
  }
};

playPauseButton.addEventListener("click", () => {
  toggleVideoPlayer(videoPlayer);
  togglePlayButtonIcon(videoPlayer.isPlaying);
});

forwardButton.addEventListener("click", () => {
  videoPlayer.forward(5);
});

rewindButton.addEventListener("click", () => {
  videoPlayer.rewind(5);
});
