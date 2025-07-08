async function setup() {
  createCanvas(640, 480);
  noLoop();

  // Load data
  const response = await fetch("data/alphabets.json");
  const data = await response.json();

  // Create bar mark
  const barY = new p5.BarY();
  barY.data(data);
  barY.x("letter");
  barY.y("frequency");

  // Create a visualization and add the bar mark
  const viz = new p5.Viz();
  viz.add(barY);
  viz.draw();
}
