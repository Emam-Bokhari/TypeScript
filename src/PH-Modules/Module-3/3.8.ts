{
    // polymarphisom

    class Person {
        getSleep() {
            console.log("I am sleeping in 8 hours per day.")
        }
    }

    class Student {
        getSleep() {
            console.log("I am sleeping in 7 hours per day.")
        }
    }

    class Developer {
        getSleep() {
            console.log("I am sleeping in 6 hours per day.")
        }
    }

    const getSleepingHours=(param:Person)=>{
        param.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepingHours(person1)

  
}