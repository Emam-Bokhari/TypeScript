{
    const multiplevalueReturn = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            return `Length is:${value.length}`;
        } else if (typeof value === "number") {
            return value * 2
        }
    }
    const result1 = multiplevalueReturn(20) as number;
    console.log(result1);

    const result2 = multiplevalueReturn("20") as string;
    console.log(result2);
}