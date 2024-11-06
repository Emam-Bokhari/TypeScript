{
    const findLargestNumber = (numbers: number[]): number => {
        let largestNumber = numbers[0]
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > largestNumber) {
                largestNumber = numbers[i];
            }
        }
        return largestNumber;
    }

    const result = findLargestNumber([20, 3, 11, 180]);
    console.log(result);

}