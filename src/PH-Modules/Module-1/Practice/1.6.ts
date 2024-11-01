{
    // function, arrow function, map, forEach , method

    // functiona
    function addition(x: number, y: number): number {
        return x + y;
    }

    // arrow function
    const multiplication = (x: number, y: number): number => x * y

    // method
    const rectangle = {
        width: 250,
        height: 100,
        calculateArea: function () {
            return this.width * this.height;
        }

    };
    console.log(rectangle.calculateArea());

    // map
    const marksOfArray: number[] = [77, 45, 93];
    const marks = marksOfArray.map((item) => item + 1);
    console.log(marks)
    marks.forEach((item) => console.log(item, item * 2));
}