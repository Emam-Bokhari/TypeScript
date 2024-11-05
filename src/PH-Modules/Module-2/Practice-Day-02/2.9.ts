{
    // conditional types

    type A1 = string;
    type B1 = null;

    type X = A1 extends string ? null : number;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

}