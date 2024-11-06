{
    // type assertion, interface, 

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

}
