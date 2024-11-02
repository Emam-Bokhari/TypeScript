{
    // type assestion

    const GmToKg = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) / 1000;
            return `${convertedValue}`;
        };
        if (typeof value === "number") {
            return value / 1000;
        };
    }
    const result1 = GmToKg(10000) as number;
    console.log(result1)
    const result2 = GmToKg("50001") as string;
    console.log(result2)

    type CustomErrorMessage = {
        message: string;
    };

    try {
        //
    } catch (error) {
        console.log((error as CustomErrorMessage).message);
    }
}