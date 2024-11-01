{
    // primitive , non primitive data types

    // primitive data types

    const userName: string = "This is Moshfiqur Rahman";

    const idNumber: number = 2111;

    const isAdmin: boolean = true;

    const profileStatus: null = null;

    const a: undefined = undefined;

    // nonprimitive data types

    // object
    const userInfo: {
        id: number | string;
        name: string;
        age: number;
        address: {
            district: string;
            villageName: string;
            roadNumber?: string | number;
            houseNumber?: string | number;
            contact: string;
        }
        isAdmin: boolean;
    } = {
        id: 2111,
        name: "Emam Bokhari",
        age: 24,
        address: {
            district: "Brahmanbaria",
            villageName: "Mojlishpur",
            houseNumber: "#492",
            contact: "01900000000",
        },
        isAdmin: true,
    }

    // array
    const marks: number[] = [73, 79, 33, 17];

    const subject: string[] = ["Bangla", "Biology", "Math", "Ict"];

    // tuple
    const marksAndSubjects: [string, number] = ["Biology", 79];

    const info: [string, number, number] = ["Emam Bokhari", 24, 75];
}