{
    // type assertion, interface, generics (type alias, and interface)

    // type assertion
    const message: unknown = "This is Moshfiqur Rahman";
    const messageLength = (message as string).length;

    // interface
    interface IAnimal {
        id: number;
        name: string;
        weight: number;
        color: string;
    }

    const cat: IAnimal = {
        id: 911,
        name: "Cat",
        weight: 1.2,
        color: "white",
    }

    // generic

    type GenericGeneral<T> = Array<T>

    const stringArray: GenericGeneral<string> = ["Mango", "Apple", "Pinapple"];

    const numberArray: GenericGeneral<number> = [234, 123, 123];

    const booleanArray: GenericGeneral<boolean> = [true, false, true];

    // interface with generics

    interface IFruits<T, Q> {
        id: T,
        name: string;
        weight: Q;
        brand?: string;
        shopName: string;
    }

    const fruits: IFruits<number, number> = {
        id: 159,
        name: "Mango",
        weight: 2,
        shopName: "Dreams SuperShop"
    }

    const summerFruits: IFruits<string, string> = {
        id: "355",
        name: "Jackfruits",
        weight: "2 KG",
        shopName: "Dreams SuperShop"
    }

}
