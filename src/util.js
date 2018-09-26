// https://coolors.co/d72638-3f88c5-f49d37-140f2d-f7f052
export const colorAr = [
  '#D72638',
  '#3F88C5',
  '#F49D37',
  '#140F2D',
  '#393E41',
  '#012622',
  '#0A2463'
];

const selectedColors = [];

function getRandomSelection(ar) {
  return ar[Math.floor(Math.random() * ar.length)];
}

export function randomColor() {
  const unUsedAr = colorAr.filter(c => !selectedColors.includes(c));
  const rnd = getRandomSelection(unUsedAr);

  selectedColors.push(rnd);

  return rnd;
}

export default { randomColor, colorAr };
