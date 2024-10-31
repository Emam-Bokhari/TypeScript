{
    // nulable, unkkown, never types

    // nulable
    const searchName = (value: string | null) => {
        if (value) {
            console.log("Search...")
        } else {
            console.log("Nothing!")
        }
    }
    searchName(null)

    // unknown
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(convertedSpeed);
        } else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000 / 3600)
            console.log(convertedSpeed);
        } else {
            console.log("Wrong value!")
        }
    }

    getSpeedInMeterPerSecond(`1000 kmh^-1`)

    // never types
    const throwError=(message:string):never=>{
        throw new Error(message);
    }

    throwError("Error Occured!");






}