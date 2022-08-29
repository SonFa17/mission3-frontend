const { trimString } = require("./Punctuation");

test('should trim "hello%world" and return "hello world"', () => {
  const text = trimString("hello%world");
  expect(text).toBe("hello world");
});

test('should trim "!hello world" and return "hello world"', () => {
  const text = trimString("!hello world");
  expect(text).toBe(" hello world");
});

test('should trim "hello?world" and return "hello world"', () => {
  const text = trimString("hello?world");
  expect(text).toBe("hello world");
});

test('should trim "hello;world" and return "hello world"', () => {
  const text = trimString("hello;world");
  expect(text).toBe("hello world");
});

test('should trim "hello world?" and return "hello world"', () => {
  const text = trimString("hello world?");
  expect(text).toBe("hello world ");
});
