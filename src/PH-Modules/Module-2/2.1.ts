{
    // type assertion
    // example: 01
    const kgToGm = (value: string | number): string | number | unknown => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `${convertedValue} gm`;
        } else if (typeof value === "number") {
            return value * 1000;
        }
    }

    const result1 = kgToGm(1000) as number;
    console.log(result1);
    const result2 = kgToGm("1000") as string;
    console.log(result2);

    // example: 02
    type CustomErrorMessage = {
        message: string;
    }


    try {
        //
    } catch (error) {
        console.log((error as CustomErrorMessage).message)

    }

}