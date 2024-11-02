{
    // function with generic

    const addition = (x: number, y: number): number => {
        return x + y;
    }

    type Substraction = (x: number, y: number) => number;

    const substraction: Substraction = (x, y) => {
        return x - y;
    };

    interface Multyplication {
        (x: number, y: number): number;
    }

    const multyplication: Multyplication = (x, y) => {
        return x * y;
    }

}