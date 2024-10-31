{
    // optional chaining, nullish coalescing operator, and ternary operator

    // if else condition
    const age: number = 24;
    if (age >= 18) {
        console.log("Adult")
    } else {
        console.log("Not Adult!")
    };

    // ternary operator
    const isAdult = age >= 18 ? "Adult" : "Not Adult!"
    console.log(isAdult);

    // nullish coalescing
    const isAuthenticate = null;
    const isAuthenticate1 = undefined;
    const user1 = isAuthenticate ?? "Guest";
    const user2 = isAuthenticate1 ?? "Guest";
    console.log(user1)
    console.log(user2)

    // optional chaining
    const usersInfo: {
        id: number | string;
        name: string;
        age: number;
        address?: string;
    } = {
        id: 1001,
        name: "Emam Bokhri",
        age: 24,
    }

    console.log(usersInfo?.address ?? "No Address!")



}