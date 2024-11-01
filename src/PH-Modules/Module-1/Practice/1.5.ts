{
    // object, optional, readonly, literal types

    const info: {
        id: string | number;
        name: string;
        age: number;
        readonly companyName: "Dreams Software Company Ltd";
        address: {
            district: string;
            village: string;
            contact: {
                email?: string;
                phone: string;
            }
        }
        isAdmin: true;
    } = {
        id: 2111,
        name: "Emam Bokhari",
        age: 24,
        companyName: "Dreams Software Company Ltd",
        address: {
            district: "Brahmanbaria",
            village: "Mojlishpur",
            contact: {
                phone: "01900000000",
            },
        },
        isAdmin: true,
    }
}