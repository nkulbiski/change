import { makeChange } from '../src/change'

test('get change for 3.82', () => {
    expect(makeChange(3.82)).toBe('3 one dollar bills, 3 quaters, 1 nickel, 2 pennies');
});

test('get change for 3034.82', () => {
    expect(makeChange(3034.82)).toBe('303 ten dollar bills, 4 one dollar bills, 3 quaters, 1 nickel, 2 pennies');
});

test('get change for .01', () => {
    expect(makeChange(.01)).toBe('1 penny');
});