{
    // conditional types

    type A1 = string;
    type B1 = null;

    type X = A1 extends null ? number : string;

    type Y = A1 extends null ? string : B1 extends number ? null : undefined

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? string : null;

    type CheckVehicles<T> = T extends keyof Sheikh ? string : null;

    type HasVehicle = CheckVehicle<"car">

    type OwnVehicle = CheckVehicles<"ship">
}