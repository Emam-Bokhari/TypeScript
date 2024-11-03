{
    type Person = {
        Name: string;
        Address: {
            city: string;
            village: string;
            roadNo?: string;
            contactInfo: {
                phone: string;
                email?: string;
            }
        }
        HairColor: "Black" | "Brown" | "Blonde" | "Gray" | "Other";
        EyeColor: "Black" | "Brown" | "Blonde" | "Gray" | "Other";
        Income: number;
        Expenses: number;
        Hobbies: string[];
        FamilyMembers: number;
        Job: string;
        Skills: string[];
        MaritalStatus: "Married" | "UnMarried" | "Divorced" | "Widowed";
        Friends: string[];
    }
}