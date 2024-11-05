{
    // primitive, nonprimitive (object, array, tuple, function, arrow function), type alias

    // primitive data types

    const userName: string = "Moshfiqur Rahman";

    const userId: number = 20159;

    const isActive: boolean = true;

    const userData: null = null;

    const userBalance: undefined = undefined;

    // non primitive data type

    const userInfo: {
        id: number;
        name: string;
        age: number;
        isActive: boolean;
    } = {
        id: 1580,
        name: "Moshfiqur Rahman",
        age: 24,
        isActive: true,
    }

    const fruits: string[] = ["Mango", "Banana", "Apple"];

    const fruitsPrice: number[] = [320, 120, 140];

    const userNameAndAge: [string, number, string, number] = ["Moshfiqur Rahman", 24, "Imtiaz Hossain Akib", 21];

    const division = (x: number, y: number): number => {
        return x / y;
    }

    const result: number = division(22, 11);

    function addition(x: number, y: number): number {
        return x + y;
    }

    const resultAddition: number = addition(11, 13);

    // type
    type Person = {
        id: number;
        name: string;
        age: number;
    }

}