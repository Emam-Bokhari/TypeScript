{
    // primitive and nonprimitive data types

    const userName: string = "Moshfiqur Rahman";

    const userId: number = 2111;

    const isLoggedinUser: boolean = true;

    const userAddress: undefined = undefined;

    const userData: null = null;

    // non primitive data type

    const userInfo: {
        id: number;
        userName: string;
        isLoggedinUser: boolean;
        userAddress: {
            city: string;
            village: string;
        },
    } = {
        id: 2111,
        userName: "Moshfiqur Rahman",
        isLoggedinUser: true,
        userAddress: {
            city: "Brahmanbaria",
            village: "Mojlishpur",
        },
    }

    const rollNumbers: number[] = [1, 2, 3, 4, 5, 6];

    const addition = (x: number, y: number): number => {
        return x + y;
    }

    function multiplication(x: number, y: number): number {
        return x * y;
    }
}