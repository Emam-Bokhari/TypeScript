{
    // type assestion

    const kgToGm = (x: string | number): string | number | undefined => {
        if (typeof x === "number") {
            return x / 1000;
        } else if (typeof x === "string") {
            return parseFloat(x) / 1000
        }
    }
    const result = kgToGm(1200) as number;
    console.log(result);
}