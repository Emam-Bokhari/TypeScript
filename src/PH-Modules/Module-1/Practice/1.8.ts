{
    // object, array destructure

    // object destructure
    const info: {
        id: number;
        name: string;
        address: {
            district: string;
            contact: {
                phone: string;
            }
        }
    } = {
        id: 2111,
        name: "Emam Bokhari",
        address: {
            district: "Brahmanbaria",
            contact: {
                phone: "01700000000",
            },
        },
    }

    const { address: { district: homeDistrict, contact: { phone } } } = info;
    console.log(phone, homeDistrict);

    // array destructure
    const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];

    const [, , , , five] = items;
    console.log(five)
}