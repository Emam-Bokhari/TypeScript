{
    // utility, pick types

    type Person = {
        id: number;
        name: string;
        age: number;
        phone: number;
        email?: string;
    }

    // lookup types
    type Name = Person["name"]

    // pick types
    type NameOfPerson = Pick<Person, "name">

    type NameAndAge = Pick<Person, "name" | "age">

    // omit type , omit hoise pick ar thik ulta ta
    type ContactInfo = Omit<Person, "id" | "name" | "age">

    // pick
    type ContactsInfo = Pick<Person, "email" | "phone">

    // required , required hoise optional abong required sobgula k e required kore fele
    type PersonRequired = Required<Person>

    // partial, partial hoise sobgula k optional baniye fele
    type PersonPartial = Partial<Person>

    // readonly, readonly type use korle aita jai object a use hobe shai object ar kono data change kora jabe na
    type PersonReadonly = Readonly<Person>

    // record types
    type MyObject = Record<string, string>

    const myObject: MyObject = {
        brand: "Apple",
        weight: "1.300gm",
        color: "Silver",
    }

    // example: 02 record types
    type PersonRecord1 = {
        id: number;
        name: string;
        age: number;
    }

    const users1: PersonRecord1 = {
        id: 2111,
        name: "Emam Bokhari",
        age: 24
    }

    const PersonRecord2: Record<string, unknown> = {}

    const users2 = {
        id: 2111,
        name: "Emam Bokhari",
        isUser: true,
    }
}