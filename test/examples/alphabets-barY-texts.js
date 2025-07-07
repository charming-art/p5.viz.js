async function setup() {
  createCanvas(600, 150);
  noLoop();

  // Load data
  const response = await fetch("data/alphabets.json");
  const data = await response.json();

  // Create bar mark
  const barY = new p5.BarY();
  barY.data(data);
  barY.x("letter");
  barY.y("frequency");

  // Use custom shape
  barY.useShape(({x, y, w, h, datum}) => {
    const txt = datum.letter;
    const tw = fontWidth(txt);
    const th = fontAscent();
    fill("black");
    rect(x, y, w, h);
    push();
    translate(x, y + h);
    fill("white");
    scale(w / tw, h / th * 1.2);
    text(txt, 0, 0);
    pop();
  });

  // Create a visualization and add the bar mark
  const viz = new p5.Viz();
  viz.add(barY);
  viz.draw();
}
