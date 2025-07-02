async function setup() {
  createCanvas(640, 480);
  noLoop();

  // Load data
  const data = [
    {genre: "Sports", sold: 275},
    {genre: "Strategy", sold: 115},
    {genre: "Action", sold: 120},
    {genre: "Shooter", sold: 350},
    {genre: "Other", sold: 150},
  ];

  // Create bar mark
  const barY = new p5.BarY();
  barY.data(data);
  barY.x("genre");
  barY.y("sold");

  // Create a visualization and add the bar mark
  const viz = new p5.Viz();
  viz.add(barY);
  viz.draw();
}
