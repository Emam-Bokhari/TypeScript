{
    // generic with function

    function addition1(x: number, y: number): number {
        return x + y;
    };

    type Addition1 = (x: number, y: number) => number;

    const addition2: Addition1 = (a, b) => {
        return a + b;
    }

    type Addition2<T extends number> = (x: T, y: T) => T

    const addition3: Addition2<number> = (a, b) => {
        return a + b;
    }

    const returnFruitsArray = <T>(fruitsList: T[]): T[] => {
        return fruitsList;
    }

    const result = returnFruitsArray<string>(["Mango", "Banana", "Pinapple"])
    console.log(result);

    const result2 = returnFruitsArray<{ id: number, name: string }>([{ id: 1, name: "Emam Bokhari" }])

}