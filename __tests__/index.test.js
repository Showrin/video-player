import Player from "../dist/player/Player.js";

const player = new Player();
const videoPlayer = player.getVideoPlayer();

describe("index.html", () => {
  it("should call play() function", () => {
    videoPlayer.play = jest.fn();

    videoPlayer.play();

    expect(videoPlayer.play).toHaveBeenCalled();
  });

  it("should call pause() function", () => {
    videoPlayer.pause = jest.fn();

    videoPlayer.pause();

    expect(videoPlayer.pause).toHaveBeenCalled();
  });

  it("should call forward() function", () => {
    videoPlayer.forward = jest.fn();

    videoPlayer.forward();

    expect(videoPlayer.forward).toHaveBeenCalled();
  });

  it("should call rewind() function", () => {
    videoPlayer.rewind = jest.fn();

    videoPlayer.rewind();

    expect(videoPlayer.rewind).toHaveBeenCalled();
  });

  it("should call played() function", () => {
    videoPlayer.played = jest.fn();

    videoPlayer.played();

    expect(videoPlayer.played).toHaveBeenCalled();
  });
});
