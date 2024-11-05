{
    //  keyof

    type Vehicle = {
        name: string;
        brand: string;
        modelNumber: string;
        color: string;
        weight: string;
    };

    type CarDetails1 = keyof Vehicle // "name"|"brand"|"modelNumber"|"color"|"weight"

    type Vehicle1 = {
        car: string;
        motorcycle: string;
        train: string;
        ship: string;
    }

    type Owner = keyof Vehicle1 // "car" | "motorcycle" | "train" | "ship"

}