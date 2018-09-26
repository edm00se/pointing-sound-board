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
    const tmp = randomColor();
    expect(typeof tmp).toBe('string');
  });
  it('provides a hex string value', () => {
    const tmp = randomColor();
    resultsAr.push(tmp);
    expect(hexRegEx.test(tmp)).toBe(true);
  });
  it('provides unique values', () => {
    // already got one, should be array length - 2 remaining
    for (let i = 0; i < colorArLen - 1; i++) {
      const tmp = randomColor();
      resultsAr.push(tmp);
    }
    const uniqueAr = [...new Set(resultsAr)];
    expect(uniqueAr.length).toBe(colorArLen);
  });
});
