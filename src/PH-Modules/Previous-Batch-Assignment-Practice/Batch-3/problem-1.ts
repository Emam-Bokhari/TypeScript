{
    // example: 01
    const repeatString = (x: string, y: number): string => {
        return x.repeat(y)
    }

    const result = repeatString("Hello!", 3);
    console.log(result);

    // example: 02

    const repeatString2 = (x: string, y: number): string => {
        let result = "";
        for (let i = 0; i < y; i++) {
            x += result;
            console.log(y,x)
        }
        return x;
    }

    const result2: string = repeatString2("Hello!", 5)
    console.log(result2)
}