import {registerAPI} from "./register.js";
import {Mark, encode} from "./mark.js";
import {range, max, scaleLinear, scaleBand} from "d3";

export class BarY extends Mark {
  render(options, {width, height, x: dx, y: dy}) {
    const {x, y, data} = options;
    const I = range(data.length);
    const X = data.map(encode(x));
    const Y = data.map(encode(y));
    const domainX = Array.from(new Set(X));
    const domainY = [0, max(Y)];
    const scaleX = scaleBand(domainX, [dx, dx + width]).padding(0.1);
    const scaleY = scaleLinear(domainY, [dy + height, dy]);
    for (const i of I) {
      const x0 = scaleX(X[i]);
      const y0 = scaleY(Y[i]);
      const w = scaleX.bandwidth();
      const h = height - y0;
      fill("black");
      rect(x0, y0, w, h);
    }
  }
}

export const barY = registerAPI("BarY", BarY);
