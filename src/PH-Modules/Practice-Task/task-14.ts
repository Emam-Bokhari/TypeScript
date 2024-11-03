{
    type UserData = {
        name: string;
        age: number;
    };

    const fetchUserData = async ():Promise<UserData> => {
        return new Promise<UserData>((resolve, reject) => {
            const userData:UserData = {
                name: "Emam Bokhari",
                age: 24,
            }
            if (userData) {
                setTimeout(() => {
                    resolve(userData)
                }, 2000)
            } else {
                reject("Failed to load data!")
            }
        })
    }

    fetchUserData()
    .then(data=>{
        console.log(data)
    })


}