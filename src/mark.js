export class Mark {
  constructor() {
    this._options = {};
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
  render() {}
}

export function encode(value) {
  if (typeof value === "function") return (data) => value(data);
  if (typeof value === "string") return (data) => data[value];
  return () => value;
}
