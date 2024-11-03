{
    // inheritence

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHours: number) {
            console.log(`${this.name} will sleep for ${numberOfHours}`)
        }
    }

    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        };
    }

    const student1 = new Student("Emam Bokhari", 24, "Dhaka");

    class Teacher extends Parent {

        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }

        takeClass(numberOfClass: number) {
            console.log(`${this.name} will take class ${numberOfClass}`)
        }
    }

    const teacher1 = new Teacher("Moshfiqur Rahman", 24, "Dhaka", "Developer");
   


}