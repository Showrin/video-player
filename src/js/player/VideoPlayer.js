var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(source) {
        this.isPlaying = false;
        this.source = source;
    }
    VideoPlayer.prototype.play = function () {
        this.source.play();
        this.isPlaying = true;
    };
    VideoPlayer.prototype.pause = function () {
        this.source.pause();
        this.isPlaying = false;
    };
    VideoPlayer.prototype.forward = function () { };
    VideoPlayer.prototype.rewind = function () { };
    return VideoPlayer;
}());
export default VideoPlayer;
