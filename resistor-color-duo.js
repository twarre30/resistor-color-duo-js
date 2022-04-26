const colorCode = (color) => COLORS.indexOf(color);

export const decodedValue = ([tens, ones]) =>
  colorCode(tens) * 10 + colorCode(ones);


const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];