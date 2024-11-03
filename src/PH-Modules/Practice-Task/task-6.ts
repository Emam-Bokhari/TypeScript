{
    const multipleNumbers = (a: number, b: number, c: number, ...others: number[]) => {
        let totalSum = a + b + c;

        if (others.length > 0) {
            totalSum += others.reduce((prev, current) => prev + current, 0)
        }
        return totalSum;

    }
    const result = multipleNumbers(1, 2, 3);
    console.log(result);

}