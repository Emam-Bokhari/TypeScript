{
    const reverseArray = <T>(value: T[]): T[] => {
        return value.reverse()
    }

    const result = reverseArray<string>(["apple", "banana", "cherry"]);
    console.log(result)
}