import Player from "./player/Player.js";

const videoPlayerSource: any = document.getElementById("js-video-player");
const playPauseButton: any = document.getElementById("js-play-pause-button");
const rewindButton: any = document.getElementById("js-rewind-button");
const forwardButton: any = document.getElementById("js-forwrd-button");

const player = new Player();
const videoPlayer = player.getVideoPlayer(videoPlayerSource);

const togglePlayButtonIcon = (isPlaying: boolean) => {
  if (isPlaying) {
    playPauseButton.src = "./src/assets/icons/pause.svg";
  } else {
    playPauseButton.src = "./src/assets/icons/play.svg";
  }
};

playPauseButton.addEventListener("click", () => {
  if (videoPlayer.isPlaying) {
    videoPlayer.pause();
  } else {
    videoPlayer.play();
  }

  togglePlayButtonIcon(videoPlayer.isPlaying);
});
