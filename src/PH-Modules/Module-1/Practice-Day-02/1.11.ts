{
    // optional chaining, nullish coaceling operator, turnary operator
    const age = 19;
    if (age > 18) {
        console.log("Adult")
    } else {
        console.log("Not Allowed!")
    }

    console.log(age > 18 ? "Adult" : "Not Allowed");

    const usersInfo: {
        id: number;
        name: string;
        age: number;
        email?: string;
        address: {
            city: string;
            phone?: string;
        }
    } = {
        id: 2222,
        name: "Moshfiqur Rahman",
        age: 24,
        address: {
            city: "brahmanbaria"
        }
    }

    console.log(usersInfo?.address?.city)

    // nullish value hoche null abong undefined
    const isAuthenticate = null;

    const example1 = isAuthenticate ?? "Guest";

}