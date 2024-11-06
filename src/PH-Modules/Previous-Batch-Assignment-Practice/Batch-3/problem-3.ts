{
    const filterEvenNumbers = (value: number[]) => {
        let evenNumber = []
        for (let i = 0; i < value.length; i++) {
            if (value[i] % 2 === 1) {
                evenNumber.push(value[i]);
            }
        }
        return evenNumber
    }
    const result = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 9]);
    console.log(result);

}