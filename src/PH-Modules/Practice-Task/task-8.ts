{
    type User = {
        name: string;
        email: string;
    }

    type Admin = {
        adminLevel: number;
    }

    type AdminUser = User & Admin;

    const describeAdmin = (user: AdminUser): string => {
        return `Admin Name: ${user.name}, Email: ${user.email}, Level: ${user.adminLevel}`;
    }
    const result = describeAdmin({ name: "Emam Bokhari", email: "emam@gmail.com", adminLevel: 1 })

    console.log(result);
}