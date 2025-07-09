const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require('./functions');

describe('capitalize', () => {
  test('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('returns empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('capitalizes single character', () => {
    expect(capitalize('a')).toBe('A');
  });
});

describe('reverseString', () => {
  test('reverses a word', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('works on empty string', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('calculator', () => {
  test('adds numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('divides numbers', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });

  test('multiplies numbers', () => {
    expect(calculator.multiply(2, 6)).toBe(12);
  });
});

describe('caesarCipher', () => {
  test('shifts lowercase letters correctly', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('preserves case of letters', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('leaves punctuation and spaces unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('supports negative shifts', () => {
    expect(caesarCipher('Khoor, Zruog!', -3)).toBe('Hello, World!');
  });
});

describe('analyzeArray', () => {
  test('returns correct statistics', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
});
