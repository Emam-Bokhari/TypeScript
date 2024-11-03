{

    type Employee = {
        name: string;
        address: {
            city?: string;
            country: string;
        }
    }

    const getEmployeeCity = (employee: Employee): string | undefined => {
        return employee.address?.city;
    }

    const employee1 = {
        name: "Emam Bokhari",
        address: {
            country: "Bangladesh"
        },
    };

    getEmployeeCity(employee1)
}