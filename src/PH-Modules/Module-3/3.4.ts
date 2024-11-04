{
    // type guard instanceof

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("I am making sound.")
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log("Dog is barking.");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMeaw() {
            console.log("Cat is meawing.")
        }

    }

    // smart way 
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }


    const dog = new Dog("Jarmani Shepard", "Dog")
    const cat = new Dog("Tomi", "Cat")

    const getAnimal = (animal: Animal): void => {
        if (isDog(animal)) {
            console.log(animal.makeBark())
        } else if (isCat(animal)) {
            console.log(animal.makeMeaw());
        } else {
            console.log(animal.name)
        }
    };


    getAnimal(cat)
}

