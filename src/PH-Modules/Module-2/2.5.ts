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

    const multyplication = <T extends number>(x: T, y: T): number => {
        return x * y;
    };

    multyplication(2, 3);

    const fruitsList = (x: string, y: string, z: string): string[] => {
        return [x, y, z];
    }

    const result1 = fruitsList("Jackfruit", "Pinapple", "Mango");

    const animalList = <T>(x: T, y: T, z: T): T[] => {
        return [x, y, z];
    }

    const result2 = animalList<string>("Cat", "Tiger", "Monkey");

    const result3 = animalList<number>(2, 3, 5);

    const createArrayWithGenericTuple = <T, Q>(x: T, y: Q): [T, Q] => {
        return [x, y];
    }

    const manList = createArrayWithGenericTuple<string, string>("Emam Bokhari", "Moshfiqur Rahman");


    const listOfStudents = createArrayWithGenericTuple<{ id: number, name: string }, { id: number, name: string }>({ id: 2111, name: "Emam" }, { id: 2444, name: "Bokhari" });

    type User = {
        id: number;
        name: string;
    }

    const listOfTeachers = createArrayWithGenericTuple<User, User>({ id: 2111, name: "Emam" }, { id: 2444, name: "Bokhari" });

    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development";
        return {
            course,
            ...student,
        }
    }

    const student1 = addCourseToStudent<{ id: number; name: string; email: string }>({ id: 1, name: "Emam Bokhari", email: "abc@gmail.com" });

    const student2 = addCourseToStudent<{ id: number; name: string; isLogedin: boolean }>({ id: 2, name: "Moshfiqur Rahman", isLogedin: true })

}