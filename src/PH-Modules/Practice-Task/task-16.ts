{
    const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
        return obj[key]
    }
    const user = {
        name: "Emam Bokhari",
        age: 24,
        email: "emam@example.com"
    }
    const result = getProperty(user, "name")
    console.log(result)
}