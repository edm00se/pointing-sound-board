import { randomColor, colorAr } from './util';
const hexRegEx = /^#(\d|[A-F]){6}$/i;
const resultsAr = [];
const colorArLen = colorAr.length;

describe('util', () => {
  it('provides randomColor', () => {
    expect(randomColor).toBeTruthy();
  });
  it('provides randomColor as a function', () => {
    expect(typeof randomColor).toBe('function');
  });
  it('provides a string response', () => {
    let tmp = randomColor();
    expect(typeof tmp).toBe('string');
  });
  it('provides a hex string value', () => {
    let tmp = randomColor();
    resultsAr.push(tmp);
    expect(hexRegEx.test(tmp)).toBe(true);
  });
  it('provides unique values', () => {
    // already got one, should be array length - 2 remaining
    for (let i = 0; i < colorArLen - 1; i++) {
      let tmp = randomColor();
      resultsAr.push(tmp);
    }
    let uniqueAr = [...new Set(resultsAr)];
    expect(uniqueAr.length).toBe(colorArLen);
  });
});
