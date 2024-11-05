{
    // lookup, pick, omit, required, partial, readonly, record

    type Person = {
        id: number;
        name: string;
        age: number;
        phone: string;
        email?: string;
    }

    // examples of lookup

    type Name = Person["name"]

    const userName: Name = "Moshfiqur Rahman";

    type AgeAndPhone = {
        age: Person["age"];
        phone: Person["phone"];
    }

    const ageAndPhone: AgeAndPhone = {
        age: 24,
        phone: "013"
    }

    // examples of pick

    type Phone = Pick<Person, "phone">;

    const phone: Phone = {
        phone: "013"
    }

    type PhoneAndAge = Pick<Person, "phone" | "age">;

    const phoneAndAge2: PhoneAndAge = {
        phone: "013",
        age: 24
    }

    // examples of omit

    type WithoutId = Omit<Person, "id">;

    const withOutId: WithoutId = {
        name: "Moshfiqur Rahman",
        age: 24,
        phone: "013"
    }

    type WithOutIdAndAge = Omit<Person, "id" | "age">;

    // examples of required

    type AllRequired = Required<Person>

    // examples of partial

    type AllOptional = Partial<Person>;

    // examples of readonly

    type AllDataReadonly = Readonly<Person>

    // examples of record

    type PersonData = Record<string, string> // akta hochee key=string, arekta hochche value=string

    const usersData: PersonData = {
        name: "Moshfiqur Rahman",
        fatherName: "Md.Mokhlesur Rahman",
        address: "Brahmanbaria",
        phone: "013157700000"
    }

    type MultipleData = Record<string, unknown>

    const fruitsList: MultipleData = {
        id: 1,
        name: "Jackfruit",
        brand: "Dreams Super Shop",
        phone: "01700000000"
    }

    const RecordData: Record<string, unknown> = {
        id: 21119,
        name: "Moshfiqur Rahman",
        address: {
            city: "Brahmanbaria",
            contact: {
                phone: "01300000000",
                email: "studentemam@gmail.com"
            }
        }
    }


}