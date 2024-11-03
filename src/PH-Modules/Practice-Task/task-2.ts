{
    const func = (name: string, age: number, role?: "admin" | "user" | "guest") => {
        console.log(name, age, role)
    }

    const func1 = (name: string, age: number, role: "admin" | "user" | "guest" = "guest") => {
        console.log(name, age, role)
    }

    func("Emam Bokhari", 24,);

    func1("Emam Bokhari", 24);

}