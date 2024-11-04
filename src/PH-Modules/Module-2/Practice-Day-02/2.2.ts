{
    // interface, type alias, intersection

    type User1 = {
        id: number;
        name: string;
        age: number;
    };

    interface User2 {
        id: number;
        name: string;
        age: number;
    }

    type Fruits = string[];

    interface FruitsList {
        [index: number]: string;
    }

    type Addition = (x: number, y: number) => number;

    interface Addition2 {
        (x: number, y: number): number;
    }

    type Person1 = {
        id: number;
        name: string;
    };

    type Person2 = {
        id: number;
        name: string;
        age: number;
    };

    type Person = Person1 & Person2;

    interface Student1 {
        id: number;
        name: string;
    };

    interface Student2 {
        id: number;
        name: string;
        age: number;
    };

    interface Student extends Student1, Student2 { }

    const attachStudents: Student = {
        id: 2111,
        name: "Moshfiqur Rahman",
        age: 24
    }

    type teacher1 = {
        id: number;
    }

    type Teacher = teacher1 & { name: string };

    const teacher: Teacher = {
        id: 2111,
        name: "Emam Bokhari"
    }

    interface Car {
        id: number;
    };

    interface Car1 extends Car {
        modelNumber: string;
        brand: string;
    };

    const car: Car1 = {
        id: 2111,
        modelNumber: "KK-2441",
        brand: "Dreams Car"
    }
}