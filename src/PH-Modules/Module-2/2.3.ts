{
    // generic 

    const marks: Array<number> = [33, 99, 96];

    const subjects: Array<string> = ["Ict", "Biology", "Islam"];

    type Students = Array<number>

    const rollOfStudents: Students = [2111, 3111, 4111];

    type Teachers<T> = Array<T>

    const teachersList: Teachers<string> = ["Abdul Motin", "Abdullah", "Abdur Jobbar"];

    const teachersWorkingDays: Teachers<number> = [4, 6, 12];

    const isTeacherAdmin: Teachers<boolean> = [false];

    const usersInfo: {
        id: number;
        name: string;
        isAdmin: boolean;
    }[] = [
            {
                id: 2111,
                name: "Emam",
                isAdmin: true,
            },
            {
                id: 3111,
                name: "Bokhari",
                isAdmin: false,
            },
        ]

    const teachersInfo: Teachers<{ id: number, name: string, isAdmin: boolean }> = [
        {
            id: 2111,
            name: "Emam",
            isAdmin: true,
        },
        {
            id: 3111,
            name: "Bokhari",
            isAdmin: false,
        },
    ]

    type GenerecTuple<x, y> = [x, y];

    const man: GenerecTuple<string, string> = ["Mr.x", "Mr.y"];

    const userWithId: [number, { name: string; email: string }] = [2111, { name: "Abdullah", email: "abdullah@gmail.com" }]

    const user: GenerecTuple<number, { name: string, email: string }> = [2111, { name: "Abdullah", email: "abdullah@gmail.com" }]

    


}