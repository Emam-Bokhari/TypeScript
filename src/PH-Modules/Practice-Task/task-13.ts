{
    const removedDuplicateValues = <T>(value: T[]): T[] => {
        return value.filter((value, index, self) => self.indexOf(value) === index);
    }
    const numberArray = [1, 2, 3, 4, 5, 6, 5, 6];
    const uniqueNumbers = removedDuplicateValues(numberArray);

    const stringArray = ["A", "B", "B", "C", "A"];
    const uniqueStrings = removedDuplicateValues(stringArray);
    console.log(uniqueNumbers);
    console.log(uniqueStrings);
}