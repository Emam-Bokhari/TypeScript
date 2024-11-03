{
    const processData = (data: unknown): string | number | undefined => {
        if (typeof data === "string") {
            return data.toUpperCase();
        } else if (typeof data === "number") {
            return data * 2;
        };
    }

    const result = processData(33) as number;
    const result1 = processData("Emam Bokhari") as string;
    console.log(result);
    console.log(result1);
}