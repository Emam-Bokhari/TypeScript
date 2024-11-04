{
    // interface, alias, inteonrsection

    // type alias
    type User1 = {
        name: string;
        age: number;
    }

    // intersection with type alias
    type UserWithRoll2 = User1 & { roll: number }

    const user1: UserWithRoll2 = {
        name: "Emam",
        age: 24,
        roll: 2333,
    };
    // interface
    interface User2 {
        name: string;
        age: number;
    }
    // intersection with interface
    interface UserWithRoll1 extends User2 {
        roll: number;
    }

    const user2: UserWithRoll1 = {
        name: "Bokhari",
        age: 24,
        roll: 2111
    }

    type Mark = number;

    /*aikhne amra type alias diye primitive data ty pe o types define korte pari
    kinto jahatu interface soro e hoi {} diye tai amra primitive data types define korte pari na interface diye, kinto type
    alias diye amra primitve abong non primitive data 2 ta e define korte pari
    */

    // example : array , type alias and interface

    // type alias
    type Roll1 = number[];

    const studentRool1: Roll1 = [1, 2, 3, 4, 5];

    // interface 
    interface Roll2 {
        [index: number]: number;
    };

    const studentRool2: Roll2 = [2, 3, 4, 5, 6, 6]

    interface Fruits {
        [index: number]: string;
    };

    const fruitsList: Fruits = ["Apple", "Mango", "Banana"];

    // example: functiona , type alias and interface

    type Add1 = (x: number, y: number) => number;

    const add: Add1 = (x, y) => {
        return x + y;
    };

    interface Add2 {
        (x: number, y: number): number
    };

    const add2: Add2 = (x, y) => x + y;

}