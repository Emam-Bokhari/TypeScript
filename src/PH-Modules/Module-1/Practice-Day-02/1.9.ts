{
    // type alias

    type UserName = string;

    const userName: UserName = "Moshfiqur Rahman";

    type UserId = number;

    const userId: UserId = 2111;

    type IsAdmin = boolean;

    const isAdmin: IsAdmin = true;

    type UserInfo = {
        id: number;
        name: string;
        marks: number[];
        subjects: string[];
        age: number;
        isUser: boolean;
        addition: (x: number, y: number) => number;
    };

    const userInfo: UserInfo = {
        id: 10001,
        name: "Moshfiqur Rahman",
        marks: [22, 33, 44],
        subjects: ["Math", "Biology", "Information & Technology"],
        age: 24,
        isUser: true,
        addition(x, y) {
            return x + y;
        },
    }

    type FruitsList = string[];

    const fruitsList: FruitsList = ["Mango", "Banana", "Apple"];

    type Addition = (x: number, y: number) => number;

    const addition: Addition = (a, b) => {
        return a + b
    }

    const multiplication: Addition = (x, y) => {
        return x * y;
    }

    type TupleFruitsList = [string, string];

    const tupleFruitsList: TupleFruitsList = ["Mango", "Banana"]


}