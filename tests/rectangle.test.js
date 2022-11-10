import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";


test('should properly output the perimeter of rectangle', () => {
    const rectanglePerimeter = getRectanglePerimeter(3, 4);
    expect(rectanglePerimeter).toBe(14)
});

test('should properly output the area of rectangle', () => {
    const rectangleArea = getRectangleArea(3, 4);
    expect(rectangleArea).toBe(12)
});

test('should properly output the rectangle info', () => {
    const consoleOutput = jest.spyOn(console, 'log');
    getRectangleInfo(3, 4);
    expect(consoleOutput).toHaveBeenCalledWith('The perimeter of a rectangle is 14 and the area is 12');
});