{
    // constraints 

    type UsersData<T> = T;

    const users1: UsersData<string> = "Moshfiqur Rahma";

    type UsersData1<T extends { id: number, name: string }> = T;

    const usersData1: UsersData1<{ id: number; name: string; }> = {
        id: 211,
        name: "Moshfiqur Rahman"
    }

    const addStudentsData = <T extends { id: number; name: string }>(data: T) => {
        return data;
    }

    const result = addStudentsData<{ id: number, name: string }>({ id: 2111, name: "Moshfiqur Rahman" });


}    