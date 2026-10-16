# p5.viz.js

A data storytelling library for [p5.js](https://p5js.org/). Requires p5.js 2.x.

## Get started

### In the browser

Load p5.viz after p5.js. It registers itself automatically.

```html
<script src="https://cdn.jsdelivr.net/npm/p5@2"></script>
<script src="https://cdn.jsdelivr.net/npm/p5.viz"></script>
<script>
  const data = [
    {letter: "A", frequency: 0.08167},
    {letter: "B", frequency: 0.01492},
    {letter: "C", frequency: 0.02782},
  ];

  function setup() {
    createCanvas(640, 480);
    noLoop();

    const barY = new p5.BarY();
    barY.data(data);
    barY.x("letter");
    barY.y("frequency");
    barY.plot();
  }
</script>
```

### With npm

```sh
npm install p5 p5.viz
```

```js
import p5 from "p5";
import {viz} from "p5.viz";

p5.registerAddon(viz);
```

## API reference

### p5.Viz

A visualization that holds one or more marks.

#### `new p5.Viz([options])`

Creates a visualization. Options:

- **width**: width of the plot area. Defaults to the canvas width.
- **height**: height of the plot area. Defaults to the canvas height.
- **x**, **y**: position of the plot area's top-left corner. Default to `0`.

#### `viz.add(mark)`

Adds a mark to the visualization. Returns the visualization.

#### `viz.plot()`

Draws all marks to the canvas.

```js
const viz = new p5.Viz({width: 320, height: 240});
viz.add(barY);
viz.plot();
```

### Marks

All marks share the following methods.

#### `mark.data(array)`

Sets the data. Returns the mark.

#### `mark.x(channel)`, `mark.y(channel)`

Sets the x or y channel. Returns the mark. A channel can be:

- a field name, such as `"letter"`
- a function of the datum, such as `(d) => d.frequency * 100`
- a constant value

#### `mark.plot([options])`

Shorthand for plotting a single mark: creates a `p5.Viz` with the given options, adds the mark, and plots it. Returns the visualization.

### p5.BarY

#### `new p5.BarY()`

Creates a vertical bar mark: a band scale on x and a linear scale (starting at zero) on y.

#### `barY.useShape(shape)`

Draws each bar with a custom function instead of the default black rectangle. The function receives `{x, y, w, h, datum}`: the bar's position, size, and data item.

```js
barY.useShape(({x, y, w, h, datum}) => {
  fill("steelblue");
  rect(x, y, w, h);
  fill("white");
  text(datum.letter, x, y + h);
});
```
