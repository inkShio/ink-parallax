This library is a fork of the repository [Universal Parallax](https://github.com/marrio-h/universal-parallax).

# inkParallax
Easy parallax plugin using pure javascript. Lightweight (2kb) and cross browser compatibility - including mobile platforms (iOS, Android). See [demo](https://inkshio.github.io/ink-parallax/).

## Install

```shell
npm i ink-parallax --save
```
## Setup

```js
import inkParallax from 'ink-parallax';
```
```scss
@import '/path/to/node_modules/ink-parallax/src/ink-parallax.scss';
```
```js
new inkParallax().init();
```
```html
<div class="ink-parallax" data-parallax-image="path/to/your_image">
<!--
  You can also use background-image to define your image instead of using data-parallax-image=""
  .bg-class: {
    background-image: url('img.jpg');
  }
-->
<div class="ink-parallax bg-class"></div>
```

## Custom speed
You can change the parallax speed; the higher the number, the slower the parallax effect

```js
new inkParallax().init({
  speed: 6.0
});
```

`speed: 1` is the minimum value before the background image is fixed

## Tips

#### Opacity
If you want your backround color to shine through or dampen the image without making it a .png - just add transparency to it

```scss
.parallax {
  opacity: 0.5;
}
```
