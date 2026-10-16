import {Viz} from "./viz.js";

export class Mark {
  constructor(options = {}) {
    this._options = options;
  }
  x(value) {
    this._options.x = value;
    return this;
  }
  y(value) {
    this._options.y = value;
    return this;
  }
  data(value) {
    this._options.data = value;
    return this;
  }
  useShape(shape) {
    this._options.shape = shape;
  }
  plot(options) {
    const viz = new Viz(options);
    viz.add(this);
    viz.plot();
    return viz;
  }
  render() {}
}

export function encode(value) {
  if (typeof value === "function") return (data) => value(data);
  if (typeof value === "string") return (data) => data[value];
  return () => value;
}
