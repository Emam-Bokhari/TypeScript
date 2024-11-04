{
    // spread, rest operator, destructure

    // rest operator
    const addition = (x: number, y: number, z: number, ...others: number[]): number => {
        let sum: number = x + y + z;
        if (others.length > 0) {
            const result: number = others.reduce((prev, current) => prev + current, 0)
            return result + sum
        }
        return sum
    }

    const result: number = addition(2, 5, 7, 1, 1, 10);
    console.log(result);

    // array destructure
    const subjects: string[] = ["Biology", "Ict", "Bangla", "English"]
    const [bio, bang] = subjects;
    console.log(bio, bang);

    // object destructure
    const usersInfo: {
        id: number;
        name: string;
        age: number;
        contactInfo: {
            city: string;
            contact: {
                phone: string;
            }
        }
    } = {
        id: 1001,
        name: "Moshfiqur Rahman",
        age: 24,
        contactInfo: {
            city: "Brahmanbaria",
            contact: {
                phone: "01315773424"
            }
        }
    }

    const { age, contactInfo: { contact: { phone: phoneNumber } } } = usersInfo;

    console.log(phoneNumber, age)

    // object spread
    const person: {
        id: number;
        name: string;
    } = {
        id: 2111,
        name: "Moshfiqur Rahman"
    }

    const changePerson: {
        name: string;
        email: string;
    } = {
        ...person,
        name: "Moshfiqur Rahman Emam Bokhari",
        email: "studentemam@gmail.com",
    }

    console.log(changePerson)

}