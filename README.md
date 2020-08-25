# video-player

A HTML video player with basic functionalities.

<br/>

## Demo

Go to the link: [https://angry-shirley-396fd7.netlify.app/](https://angry-shirley-396fd7.netlify.app/)

<br/>

## Project Setup

Clone the repo first. To do so, go to the directory where you want to keep this repo. Then open the terminal from here and run the following command.

```
$ git clone git@github.com:Showrin/video-player.git
```

<br/>

Then navigate to the repository using this command.

```
$ cd video-player
```

<br/>

After cloning, if you are using **`yarn`**, install the required modules by running the following command.

```
$ yarn
```

<br/>

Or use the following command if you are using **`npm`**.

```
$ npm install
```

<br/>

Now open the **`index.html`** file with any browser and you will get the following UI. Here you can play or pause the video. And you can also rewind and play forward the video.

![html-video-player-by-Showrin](https://i.imgur.com/4KTScvF.png)

<br/>

## Dev Dependencies

This program has following development dependencies.

| Module Name                              | Version | Why it's used                                       |
| ---------------------------------------- | ------- | --------------------------------------------------- |
| @babel/plugin-transform-modules-commonjs | ^7.10.4 | It's being used for using ES6 import-export in node |
| jest                                     | ^26.4.1 | It's being used for writing and running tests       |
| typescript                               | 3.1     | It's being used for compiling typescript file       |

<br/>

## Pseudocode

```
// -----------Create Video-----------
put the video element in a variable named video
create player instance from Player class
create videoPlayer instance from palyer.getVideoPlayer(video)


// -----------For play()-----------
fire video.play()
set isPlaying = true


// -----------For pause()-----------
fire video.pause()
set isPlaying = false


// -----------For forward(time: number)-----------
increase video.currentTime by time


// -----------For rewind(time: number)-----------
decrease video.currentTime by time

```

<br/>

<br/>

## Used Design Pattern: Factory Design Pattern

> **Here Factory Design Pattern has been used for implementing play(), pause(), forward(), rewind() functionalities**

<br/>

First, the interface for `Player` is implemented.

```
interface PlayerInterface {
  isPlaying: boolean;
  played(): number;
  play(): void;
  pause(): void;
  forward(time: number): void;
  rewind(time: number): void;
}
```

<br />

Then, `VideoPlayer` class is implemented using the `PlayerInterface` interface.

```
class VideoPlayer implements PlayerInterface {
  private source: HTMLMediaElement;
  isPlaying: boolean = false;

  constructor(source: HTMLMediaElement) {
    this.source = source;
  }

  played(): number {
    return (this.source.currentTime / this.source.duration) * 100;
  }

  play(): void {
    this.source.play();
    this.isPlaying = true;
  }

  pause(): void {
    this.source.pause();
    this.isPlaying = false;
  }

  forward(time: number): void {
    this.source.currentTime += time;
  }

  rewind(time: number): void {
    this.source.currentTime -= time;
  }
}
```

<br />

Then, the `Player` **(factory)** class is implemented **that defines which player should be created**.

```
class Player {
  getVideoPlayer(source: HTMLMediaElement): VideoPlayer {
    return new VideoPlayer(source);
  }
}
```

<br />

And now, it's time to create `VideoPlayer` from this Factory Design Pattern.

```
const videoPlayerSource = <HTMLMediaElement>(
  document.getElementById("js-video-player")
);

const player = new Player();
const videoPlayer = player.getVideoPlayer(videoPlayerSource);
```

<br/>

## Run Tests

You can run tests using this command in the console.

```
yarn test
```

<br/>

Or use the following if you are using npm.

```
npm test
```

<br/>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

And your changes will be visible [https://angry-shirley-396fd7.netlify.app/](https://angry-shirley-396fd7.netlify.app/) here after getting merged into the master.

<br/>

## License

[MIT](https://choosealicense.com/licenses/mit/)
