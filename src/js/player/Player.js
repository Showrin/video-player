import VideoPlayer from "./VideoPlayer.js";
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.getVideoPlayer = function (source) {
        return new VideoPlayer(source);
    };
    return Player;
}());
export default Player;
