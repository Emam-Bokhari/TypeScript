{
    // union and intersection types

    type User = {
        id: string | number;
        name: string;
        age: number;
        isAdmin?: boolean;
    }

    const users: User = {
        id: "1001",
        name: "Emam Bokhari",
        age: 24,
        isAdmin: false,
    }

    type Student = {
        bloodGroup: "A+" | "A-" | "O+" | "O-" | "B+" | "AB+" | "AB-";
        email?: string;
    }

    type Students = Student & User

    const students: Students = {
        id: 1001,
        name: "Emam Bokhari",
        age: 24,
        bloodGroup: "O+",
    }

    type FrontendDeveloper = {
        skills: string[],
        designation1: "Frontend Developer",
    }

    type BackendDeveloper = {
        skills: string[],
        designation2: "Backend Developer",
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const developer: FullStackDeveloper = {
        skills: ["Html", "CSS", "JS", "Expresss"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    }
}