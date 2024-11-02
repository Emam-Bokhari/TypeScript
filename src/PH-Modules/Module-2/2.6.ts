{
    // constraints , contstrainsts mane hoche ja extends a jai feild gula daoua hobe ta obsoee thkte hobe, baddhotamolok, noito error dibe

    const addStudentsData = <T extends { id: number; name: string; email: string }>(data: T) => {
        return {
            ...data,
        };
    };

    const data1 = addStudentsData<{ id: number; name: string; email: string; isLoggedIn: boolean }>({ id: 1, name: "Emam Bokhari", email: "e@gmaili.com", isLoggedIn: true });

    const data2 = addStudentsData<{ id: number; name: string, email: string }>({ id: 2, name: "Moshfiqur Rahman", email: "m@gmail.com" });

}