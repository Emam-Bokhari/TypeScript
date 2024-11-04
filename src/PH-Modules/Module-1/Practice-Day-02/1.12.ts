{
    // nullable, unknown ang never types

    const search = (value: string | null) => {
        if (value) {
            console.log("Search")
        } else {
            console.log("Nothing...")
        }
    }

    search(null)

    const KgToGm = (value: unknown) => {
        if (typeof value === "number") {
            return value / 1000;
        } else if (typeof value === "string") {
            const parts = value.split(" ")
            const converted = parseFloat(parts[0]);
            return `${converted / 1000} KG`;
        }
    }
    const result = KgToGm("1200 Gm");
    console.log(result);

    const ErrorMessage = (message: string): never => {
        throw new Error(message)
    }

    ErrorMessage("Error Occured!")


}