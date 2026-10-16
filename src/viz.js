import {draw} from "./draw.js";
import {registerAPI} from "./register.js";

export class Viz {
  constructor(options = {}) {
    this._options = {width, height, x: 0, y: 0, ...options};
    this._marks = [];
  }
  add(mark) {
    this._marks.push(mark);
    return this;
  }
  plot() {
    const options = Object.assign({}, this._options, {marks: this._marks});
    draw(options);
  }
}

export const viz = registerAPI("Viz", Viz);
