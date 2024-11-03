{
    const isString = (value: unknown): value is string => {
        return typeof value === "string";
    }

    const printUppercase = (value: unknown): void => {
        if (isString(value)) {
            console.log(value.toUpperCase());
        } else {
            console.log("Provided value is not a string.");
        }
    }

    printUppercase("Emam Bokhari")
}