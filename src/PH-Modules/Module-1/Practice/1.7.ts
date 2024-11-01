{
    // spread, rest 

    // object spread
    const info: {
        id: number;
        name: string;
        age: number;
        address: {
            district: string;
            contact: {
                phone: string;
                email?: string;
            }
        }
    } = {
        id: 2111,
        name: "Moshfiqur Rahman",
        age: 24,
        address: {
            district: "Brahmanbaria",
            contact: {
                phone: "01915842073"
            }
        }
    }

    // updated info
    const updatedInfo = {
        ...info,
        name: "Emam Bokhari",
        address: {
            ...info.address,
            contact: {
                ...info.address.contact,
                email: "studentemam@gmail.com"
            }
        }
    }

    console.log(info,updatedInfo)

    // rest
    function subjectMarks(biology: number, physics: number, math: number, ...others: number[]) {
        console.log(biology, physics, math);
        others.forEach((item) => console.log(item))
    }
    subjectMarks(79, 88, 56, 71, 91, 33);


}