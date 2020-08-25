var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(source) {
        this.isPlaying = false;
        this.source = source;
    }
    VideoPlayer.prototype.played = function () {
        return (this.source.currentTime / this.source.duration) * 100;
    };
    VideoPlayer.prototype.play = function () {
        this.source.play();
        this.isPlaying = true;
    };
    VideoPlayer.prototype.pause = function () {
        this.source.pause();
        this.isPlaying = false;
    };
    VideoPlayer.prototype.forward = function (time) {
        this.source.currentTime += time;
    };
    VideoPlayer.prototype.rewind = function (time) {
        this.source.currentTime -= time;
    };
    return VideoPlayer;
}());
export default VideoPlayer;
