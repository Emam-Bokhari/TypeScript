{

    // function, arrow function, map, method

    // normal function 
    function addition(x: number, y: number = 0): number {
        return x + y;
    };

    addition(2, 5);

    // arrow function
    const substraction = (x: number, y: number): number => {
        return x - y;
    };

    substraction(33, 21);

    // method
    const poorUser: {
        name: string,
        age: number,
        balance: number,
        addBalance: (newBalance: number) => number,
    } = {
        name: "Emam Bokhari",
        age: 24,
        balance: 0,
        addBalance(newBalance: number): number {
            return this.balance + newBalance;
        },
    };

    // map
    const itemsOfFlower: number[] = [2, 4, 9];

    const newItemsOfFlower: number[] = itemsOfFlower.map((item: number): number => item * 2);

    console.log(newItemsOfFlower)
}