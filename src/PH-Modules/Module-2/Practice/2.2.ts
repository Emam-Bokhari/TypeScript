{
    // interface, alias, intersection

    const user: {
        id: number;
        name: string;
        age: number;
    } = {
        id: 2111,
        name: "Emam",
        age: 24,
    }

    type Students = {
        id: number;
        name: string;
        age: number;
    }

    const students: Students = {
        id: 2111,
        name: "Emam",
        age: 24,
    }

    interface Teachers {
        id: number;
        name: string;
        age: number;
    }

    const teachers: Teachers = {
        id: 2111,
        name: "Emam",
        age: 47,
    }

    type Subject = string;

    const fruits: string[] = ["Apple", "Banana", "Mango"];

    type Fruits = string[];

    const fruitsList: Fruits = ["Jackfruit", "Pianapple", "Orange"];

    interface Fishes {
        [index: number]: string
    };
    const fishes: Fishes = ["Silver", "Katla", "Boual"];

    interface Marks {
        [index: number]: number
    };

    const marks: Marks = [23, 17, 98]

    // function
    function addition(x: number, y: number, z: number): number {
        return x + y + z;
    }

    const substraction = (x: number, y: number): number => {
        return x - y;
    }

    type Add = (x: number, y: number) => number

    const add: Add = (x, y) => {
        return x + y;
    }

    interface Multiplication {
        (x: number, y: number): number
    }

    const multiply: Multiplication = (x, y) => {
        return x * y;
    }

    // intersection
    type User1 = {
        id: number;
        name: string;
    }

    type UserWithAge = User1 & { age: number }

    const user1: UserWithAge = {
        id: 211,
        name: "Emam",
        age: 24,
    };

    interface User2 {
        id: number;
        age: number;
    };

    interface UserWithName extends User2 {
        name: string;
    }

    const user2: UserWithName = {
        id: 2999,
        name: "Emam",
        age: 24,
    }



}