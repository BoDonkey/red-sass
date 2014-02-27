# RED-Sass [![Build Status](https://travis-ci.org/ff0000/red-sass.png?branch=master)](https://travis-ci.org/ff0000/red-sass)

A collection of Sass mixins and helpers

## Usage

Install RED-Sass through [bower](http://bower.io/).

```
bower install red-sass --save
```

Import RED-Sass into your `scss` files.

```scss
@import "path/to/red-sass";
```

## Mixins

### Debug

```scss
@include debug;
```

[source](mixins/_debug.scss)

Add outlines to elements. The deeper the elements are nested, the higher the hue degree.

This is helpful for quickly seeing how a site's layout is constructed.

```scss
// scss
@include debug;

// css
*          { outline: 1px solid  #ff0000; }
*:before   { outline: 1px dotted #800000; }
*:after    { outline: 1px dashed #ff8080; }
* *        { outline: 1px solid  #ff4d00; }
* *:before { outline: 1px dotted #802600; }
* *:after  { outline: 1px dashed #ffa680; }
// ... 20 iterations of this
* * * * * * * * * * * * * * * * * * *          { outline: 1px solid  #ff0099; }
* * * * * * * * * * * * * * * * * * *:before   { outline: 1px dotted #80004c; }
* * * * * * * * * * * * * * * * * * *:after    { outline: 1px dashed #ff80cc; }
* * * * * * * * * * * * * * * * * * * *        { outline: 1px solid  #ff004c; }
* * * * * * * * * * * * * * * * * * * *:before { outline: 1px dotted #800026; }
* * * * * * * * * * * * * * * * * * * *:after  { outline: 1px dashed #ff80a6; }
```

### Timing Functions

[source](mixins/_easings.scss)

```scss
// scss
div { animation-timing-function: $ease-in-circ; }

// css
div { animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86); }
```

Available timing functions:

```
              in               out               in-out
      * -------------- * --------------- * ------------------ *
 quad | $ease-in-quad  | $ease-out-quad  | $ease-in-out-quad  |
cubic | $ease-in-cubic | $ease-out-cubic | $ease-in-out-cubic |
quart | $ease-in-quart | $ease-out-quart | $ease-in-out-quart |
quint | $ease-in-quint | $ease-out-quint | $ease-in-out-quint |
 sine | $ease-in-sine  | $ease-out-sine  | $ease-in-out-sine  |
 expo | $ease-in-expo  | $ease-out-expo  | $ease-in-out-expo  |
 circ | $ease-in-circ  | $ease-out-circ  | $ease-in-out-circ  |
      * -------------- * --------------- * ------------------ *
```

### Ellipsis

```scss
@include ellipsis ($max-width);
```

[source](mixins/_ellipsis.scss)

Add automatic ellipsis to single line of text.

```scss
// scss
.ellipsis     { @include ellipsis; }
.ellipsis-314 { @include ellipsis(314px); }

// css
.ellipsis {
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.ellipsis-314 {
	max-width: 314px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
```

### Fonts

```scss
body { font: 16px/1.4 $helvetica; }
body { font: 16px/1.4 $georgia; }
body { font: 16px/1.4 $lucida-grande; }
body { font: 16px/1.4 $monospace; }
body { font: 16px/1.4 $verdana; }
@include helvetica;
@include georgia;
@include lucida-grande;
@include monospace;
@include verdana;
```

[source](mixins/_fonts.scss)

Mixins and variables for common font families.

```scss
// scss
.helvetica     { @include helvetica; }
.helvetica2    { font: 16px/1.4 $helvetica; }
.georgia       { @include georgia; }
.lucida-grande { @include lucida-grande; }
.monospace     { @include monospace; }
.verdana       { @include verdana; }

// css
.helvetica     { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }
.helvetica2    { font: 16px/1.4 "Helvetica Neue", Helvetica, Arial, sans-serif; }
.georgia       { font-family: Georgia, Cambria, "Times New Roman", Times, serif; }
.lucida-grande { font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif; }
.monospace     { font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace; }
.verdana       { font-family: Verdana, Geneva, sans-serif; }
```

### Microfix

```scss
@include microfix;
```

[source](mixins/_microfix.scss)

A small clearfix hack from [Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/).

```scss
// scss
.microfix { @include microfix; }

// css
.microfix:before,
.microfix:after { content: ""; display: table; }
.microfix:after { clear: both; }
```

### Position

```scss
@include position($position, $parameters);
@include absolute($parameters);
@include relative($parameters);
@include fixed($parameters);
```

[source](mixins/_position.scss)

A helper for absolute, relative, or fixed positioning.

The parameters match the syntax for `padding`, `margin`, and `border-width` parameters;

```scss
// scss
.absolute-0    { @include absolute(0); }
.fixed-12      { @include relative(1px 2px); }
.relative-123  { @include relative(1px 2px 3px); }
.relative-1234 { @include relative(1px 2px 3px 4px); }
.position-1234 { @include position(absolute, 1px 2px 3px 4px); }

// css
.absolute-0    { position: absolute; top: 0;   right: 0;   bottom: 0;   left: 0; }
.fixed-12      { position: fixed;    top: 1px; right: 2px; bottom: 1px; left: 2px; }
.relative-123  { position: relative; top: 1px; right: 2px; bottom: 3px; left: 2px; }
.relative-1234 { position: relative; top: 1px; right: 2px; bottom: 3px; left: 4px; }
.position-1234 { position: absolute; top: 1px; right: 2px; bottom: 3px; left: 4px; }
```

### Reset

```scss
@include reset;
```

[source](mixins/_reset.scss)

A CSS reset.

```scss
// scss
@include reset;

// css
* { margin:0; padding:0; border:0; font-size:100%; font:inherit; vertical-align:baseline; box-sizing:border-box; }
article, aside, details, summary, figcaption, figure, footer, header, hgroup, menu, nav, section { display:block; }
body { line-height:1; }
ol, ul { list-style:none; }
blockquote, q { quotes:none; }
blockquote:before, blockquote:after, q:before, q:after { content:''; content:none; }
table { border-collapse:collapse; border-spacing:0; }
```

## License

[MIT Licensed](LICENSE)
