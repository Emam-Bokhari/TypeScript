// object and array destructure

// object desctructur
const userInfo: {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    address: {
        district: string;
        thana: string;
        village: string;
        houseNo: string;
        contact: {
            phone: string;
        }
    }
} = {
    id: 1001,
    name: {
        firstName: "Emam",
        lastName: "Bokhari",
    },
    address: {
        district: "Brahmanbaria",
        thana: "Qasba",
        village: "Mojlishpur",
        houseNo: "#492",
        contact: {
            phone: "01915842073",
        },
    },

}

const { id, name: { firstName }, address: { contact: { phone } } } = userInfo;
console.log(id, firstName, phone);