{
    // generic with interface and type alias

    type FrontendDeveloper = {
        id: number;
        name: string;
    }

    const frontendDeveloper: FrontendDeveloper = {
        id: 300,
        name: "Abdullah",
    }

    interface BackendDeveloper {
        id: number;
        name: string;
    }

    const backendDeveloper: BackendDeveloper = {
        id: 300,
        name: "Abul Kalam",
    };

    type MernStackDeveloper<T, Q> = {
        id: T;
        name: Q;
    }

    const mernStackDeveloper: MernStackDeveloper<number, string> = {
        id: 350,
        name: "Moshfiqur Rahman"
    }

    interface MeanStackDeveloper<T, Q> {
        id: T;
        name: Q;
    }

    const meanStackDeveloper: MeanStackDeveloper<number, string> = {
        id: 694,
        name: "Emam Bokari",
    };

    interface Fruits<T> {
        [index: number]: T;
    };

    const fruitsName: Fruits<string> = ["Mango", "Banana", "Pinapple"];

    const fruitsPrice: Fruits<number> = [230, 100, 300];

    type TupleFruitsList<T, Q> = [T, Q];

    const fruitsData: TupleFruitsList<number, { id: number; name: string }> = [2111, { id: 1, name: "Jackfruits" }]

    type FruitsList1<T, Q> = { id: T, name: Q; }[]

    interface FruitsList2<T, Q> {
        [index: number]: { id: T, name: Q }
    }

    const fruitsList2: FruitsList2<number, string> = [
        {
            id: 302,
            name: "Banana",
        },
        {
            id: 102,
            name: "Mango"
        },
    ]

    const fruitsList3: FruitsList2<number, boolean> = [
        {
            id: 302,
            name: true,
        },
        {
            id: 102,
            name: true,
        },
    ]

    type Students<T> = Array<T>

    const studentsData: Students<{
        id: number;
        name: string;
    }> = [
            {
                id: 121,
                name: "Abdul Latif"
            },
            {
                id: 311,
                name: "Abdul Matin"
            },
        ]

    interface Teacher<T> extends Array<T> { }

    const teachers: Teacher<{ id: number; name: string }> = [
        {
            id: 239,
            name: "Abdul Matin"
        }
    ]


}