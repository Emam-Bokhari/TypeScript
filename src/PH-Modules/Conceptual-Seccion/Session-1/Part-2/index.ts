{
    // spread, (object,array),rest operator, (array,object), ternary, optional chaning

    // rest operator
    const fruits: string[] = ["Mango", "Banana", "Apple", "Pinapple"];

    const [first, ...others] = fruits;

    const users: {
        id: number;
        name: string;
        age: number;
    } = {
        id: 2015,
        name: "Moshfiqur Rahman",
        age: 24,
    }

    const { id, ...othersData } = users;
    // console.log(id, othersData);

    



}