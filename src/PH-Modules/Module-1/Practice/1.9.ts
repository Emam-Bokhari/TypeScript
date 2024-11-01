{
    // type alias

    type General = {
        id: number;
        name: string;
        age: number;
        department: string;
        address: {
            district: string;
            village?: string;
            contacts: {
                phone: string;
                gmail?: string;
            }
        }
        status: string;
    }

    const studentInfo: General = {
        id: 2111,
        name: "Abdur Rahman",
        age: 24,
        department: "CSE",
        address: {
            district: "Brahmanbaria",
            village: "Mojlishpur",
            contacts: {
                phone: "01700000000",
                gmail: "studentemam@gmail.com",
            },
        },
        status: "Pending",
    }

    const teacherInfo: General = {
        id: 9111,
        name: "Abu Jafor",
        age: 47,
        department: "ECE",
        address: {
            district: "Dhaka",
            contacts: {
                phone: "01915842073",
            },
        },
        status: "Processing",
    }

    type User = string;
    type IsAdmin = boolean;

    const user: User = "Moshfiqur Rahman";

    const isAdmin: IsAdmin = true;
}