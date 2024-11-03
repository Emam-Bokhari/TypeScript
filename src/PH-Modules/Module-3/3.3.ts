{
    // typeof type guard and in guard 

    type AlphaNumeric = string | number

    const add = (x: AlphaNumeric, y: AlphaNumeric): AlphaNumeric => {
        if (typeof x === "number" && typeof y === "number") {
            return x + y;
        } else {
            return x.toString() + y.toString()
        }
    }
    const result: AlphaNumeric = add(3, 3);
    console.log(result)

    type NormalUser = {
        name: string;
    };

    type AdminUser = {
        name: string;
        role: "Admin";
    };
    // in guard , in guard sobsomai object ar khtre kaj kore
    const getUser = (user: NormalUser | AdminUser): void => {
        if ("role" in user) {
            console.log(`This is admin user${user.role}`)
        } else {
            console.log(`This is ${user.name} and normal user`)
        }
    }

    getUser({ name: "Emam Bokhari", role: "Admin" })

}