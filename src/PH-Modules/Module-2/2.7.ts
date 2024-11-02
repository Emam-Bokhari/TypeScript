{
    // constraint with keyof

    type Vehicle = {
        cycle: string;
        bike: string;
        car: string;
        airZ: string;
    }

    type Owner = "cycle" | "bike" | "car" | "airZ";

    type Owner2 = keyof Vehicle;

    
}