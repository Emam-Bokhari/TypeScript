{
    // generics

    const subjects1: string[] = ["Physics", "Biology", "Mathmatics"];

    type Subjects1 = string[]

    type Subjects3 = Array<string>

    const subjects3: Subjects3 = ["Physics", "Biology", "Mathmatics"];

    const subjects2 = ["Physics", "Biology", "Mathmatics"];

    const marks: Array<number> = [23, 33, 72];

    type Marks = Array<number>

    const marksOfSubject: Marks = [41, 44, 77];

    type Students<T> = Array<T>

    const studentsOfClassFive: Students<string> = ["Abdullah", "Abdur Rahman", "Abul Miya"];

    const studentsListClassFive: Students<number> = [5, 11, 18];

    const studentsInfo: {
        id: number;
        name: string;
    }[] = [
            {
                id: 2111,
                name: "Emam",
            },
            {
                id: 3111,
                name: "Bokhari",
            },
        ]

    const studentsDetails: Students<{ id: number, name: string }> = [
        {
            id: 2111,
            name: "Emam",
        },
        {
            id: 3111,
            name: "Bokhari",
        },
    ]

    const coordinators: [string, string] = ["x", "y"]

    const coordinates: Array<string> = ["x", "y"];

    const coordinates2: Array<number> = [3, 5]

    type GenericTuple<a, b, c, d> = [a, b, c, d]

    const GenericCoordniates: GenericTuple<number, { name: string }, { age: number }, string> = [2111, { name: "Emam Bokhari" }, { age: 24 }, "studentemam@gmail.com"]
}