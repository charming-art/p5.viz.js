export function draw({width = 640, height = 480, x = 0, y = 0, marks = []} = {}) {
  for (const mark of marks) {
    mark.render(mark._options, {width, height, x, y});
  }
}
