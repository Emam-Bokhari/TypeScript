{
    // union, intersection types

    type UserInfo = {
        id: number;
        name: string;
        age: number;
    }

    type PersonInfo = {
        id: number;
        name: string;
        address: string;
        contactInfo: string;
    }

    type AdjustData = UserInfo & PersonInfo;

    type UserInfoOrPersonInfo = UserInfo | PersonInfo;

    const adjustData: AdjustData = {
        id: 1001,
        name: "Moshfiqur Rahman",
        age: 24,
        address: "Brahmanbaria",
        contactInfo: "01377777777"
    };

    const userInfoOrPersonInfo: UserInfoOrPersonInfo = {
        id: 1001,
        name: "Emam Bokhari",
        age: 24
    };

    type BloodGroup = "A+" | "A-" | "AB+" | "AB-" | "B+" | "O+" | "O-"

    const bloodGroup: BloodGroup = "O+";
}