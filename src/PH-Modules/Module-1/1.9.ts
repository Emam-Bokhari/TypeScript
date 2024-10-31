{
    // type alias

    type Student = {
        id: number | string;
        name: string;
        age?: number;
        university: string;
        phone?: string;
    }

    const student1: Student = {
        id: 1001,
        name: "Emam Bokhari",
        age: 24,
        university: "Presidency University",
    }
    const student2: Student = {
        id: 1002,
        name: "Bokhari",
        university: "Presidency University",
        phone: "01700000000"
    }
    const student3: Student = {
        id: 1003,
        name: "Abdullah",
        age: 27,
        university: "Prime University",
        phone: "01900000000"
    }

    type Users = string;
    type IsAdmin = boolean;
    type Fruit = string[];

    const studentName: Users = "Emam Bokhari";
    const isAdmin = true;

    const fruitsList: Fruit = ["Apple", "Banana", "Mango"]


}