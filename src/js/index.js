import Player from "./player/Player.js";
var videoPlayerSource = (document.getElementById("js-video-player"));
var playPauseButton = (document.getElementById("js-play-pause-button"));
var rewindButton = (document.getElementById("js-rewind-button"));
var forwardButton = (document.getElementById("js-forward-button"));
var player = new Player();
var videoPlayer = player.getVideoPlayer(videoPlayerSource);
var toggleVideoPlayer = function (videoPlayer) {
    if (videoPlayer.isPlaying) {
        videoPlayer.pause();
    }
    else {
        videoPlayer.play();
    }
};
var togglePlayButtonIcon = function (isPlaying) {
    if (isPlaying) {
        playPauseButton.src = "./src/assets/icons/pause.svg";
    }
    else {
        playPauseButton.src = "./src/assets/icons/play.svg";
    }
};
playPauseButton.addEventListener("click", function () {
    toggleVideoPlayer(videoPlayer);
    togglePlayButtonIcon(videoPlayer.isPlaying);
});
videoPlayerSource.addEventListener("click", function () {
    toggleVideoPlayer(videoPlayer);
    togglePlayButtonIcon(videoPlayer.isPlaying);
});
forwardButton.addEventListener("click", function () {
    videoPlayer.forward(5);
});
rewindButton.addEventListener("click", function () {
    videoPlayer.rewind(5);
});
