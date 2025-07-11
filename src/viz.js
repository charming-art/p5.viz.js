import {draw} from "./draw.js";
import {registerAPI} from "./register.js";

export class Viz {
  constructor() {
    this._options = {width, height, x: 0, y: 0};
    this._marks = [];
  }
  add(mark) {
    this._marks.push(mark);
  }
  draw() {
    const options = Object.assign({}, this._options, {marks: this._marks});
    draw(options);
  }
}

export const viz = registerAPI("Viz", Viz);
