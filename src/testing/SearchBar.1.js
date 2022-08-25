const { handleOnClick } = require("../components/SearchBar");

test('should trim "hello%world" and return "hello world"', () => { 
    const text = handleOnClick('hello%world');
    expect(text).toBe('hello world');
 })