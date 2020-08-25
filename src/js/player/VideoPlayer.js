var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(source) {
        this.isPlaying = false;
        this.source = source;
    }
    VideoPlayer.prototype.play = function () {
        this.source.play();
        this.isPlaying = true;
        // return null;
    };
    VideoPlayer.prototype.pause = function () {
        this.source.pause();
        this.isPlaying = false;
        // return null;
    };
    VideoPlayer.prototype.forward = function () {
        // return null;
    };
    VideoPlayer.prototype.rewind = function () {
        // return null;
    };
    return VideoPlayer;
}());
export default VideoPlayer;
