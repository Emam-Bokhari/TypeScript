{
    // generic
    const marks: Array<number> = [22, 33, 44];

    const subjects: Array<string> = ["Biology", "Physics", "Mathmatics"];

    type Students<T> = Array<T>

    const students1: Students<string> = ["Abdul Aziz", "Abdul Matin", "Abdul Alim"];

    const studentsAge: Students<number> = [24, 33, 29];

    type Teachers<T> = Array<T>

    const teachersName: Teachers<string> = ["Abdul Aziz", "Abdul Matin", "Abdul Alim"];

    const teachersAge: Teachers<number> = [66, 55, 63];

    type StudentsInfo = {
        id: number;
        name: string;
        age: number;
    }[]

    const studentsInfo: StudentsInfo = [
        {
            id: 421,
            name: "Moshfiqur Rahman",
            age: 24,
        },
        {
            id: 491,
            name: "Emam Bokhari",
            age: 25,
        },
    ]

    const studentsData: Students<{ id: number; name: string; age: number }> = [
        {
            id: 421,
            name: "Moshfiqur Rahman",
            age: 24,
        },
        {
            id: 491,
            name: "Emam Bokhari",
            age: 25,
        }
    ]

    type StudentsData = {
        id: number;
        name: string;
        age: number;
    }

    const studentsData1: Students<StudentsData> = [
        {
            id: 421,
            name: "Moshfiqur Rahman",
            age: 24,
        },
        {
            id: 491,
            name: "Emam Bokhari",
            age: 25,
        }
    ]

    type GenericStudent<T, U, V> = {
        id: T;
        name: U;
        age: V;
    }

    const students3: GenericStudent<number, string, number> = {
        id: 299,
        name: "Moshfiqur Rahman",
        age: 24,
    }

    type Fruits<T> = Array<T>;

    const fruitsOfList: Fruits<{ id: number; name: string; brand?: string; }> = [
        {
            id: 1,
            name: "Jackfruit"
        },
        {
            id: 2,
            name: "Pinapple"
        },
        {
            id: 3,
            name: "Jackfruit",
            brand: "Dreams Fruits & House"
        },
    ]

    type Data<T> = T;

    const userName: Data<string> = "Moshfiqur Rahman";

    const userId: Data<number> = 310233;

    const isAdmin: Data<boolean> = true;

    type TupleGenericFruits<T, Q> = [T, Q];

    const tupleFruitsList: TupleGenericFruits<string, string> = ["JackFruits", "Pinapple"];

    const coordinates: TupleGenericFruits<string, number> = ["X", 3.9];

    const fruitsData: TupleGenericFruits<number, { name: string; brand: string }> = [2111,
        {
            name: "Jackfruit",
            brand: "Dreams Fruits House"
        }
    ]

}