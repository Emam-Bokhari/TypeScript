{
    // class
    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`This ${this.name} says ${this.sound}`)
        }
    }

    const cat = new Animal("Percian", "Cat", "Meaw meaw");
    const horse = new Animal("Sahi", "Doldol", "Neigh");
    console.log(cat.name)
    horse.makeSound()

    // parameter property , public keyword
    class Technology {

        constructor(public modelNumber: string, public brand: string, public color: string) { }

    }

    const laptop = new Technology("Dell Inspiron 155593", "Dell", "Silver");
    console.log(laptop)
    console.log(laptop.modelNumber)
}