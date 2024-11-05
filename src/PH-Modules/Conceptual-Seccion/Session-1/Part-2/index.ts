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

    // spread operator
    type DataOfStudents = {
        id: number;
        name: string;
        age: number;
        email?: string;
    }
    const dataOfStudents: DataOfStudents = {
        id: 2050,
        name: "Moshfiqur Rahman",
        age: 24,
    };

    const dataOfFullDetails: DataOfStudents = {
        ...dataOfStudents,
        email: "studentemam@gmail.com",
    };

    console.log(dataOfFullDetails);

    const animalList: string[] = ["Cat", "Horse", "Cow"];

    const fullListOfAnimal: string[] = [...animalList, "Monkey"];








}