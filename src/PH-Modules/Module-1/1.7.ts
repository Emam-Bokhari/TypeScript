{
    // spread, rest, destructure

    // spread
    const users: string[] = ["Abdullah", "Abdul Jobbar", "Abdus Sattar"];
    const users2: string[] = ["Abdur Rahman", "Rofiqul Islam", "Nazrul Islam"];

    users.push(...users2);
    console.log(users)

    const mentors1: {
        nextjs: string;
        prisma: string;
        cloud: string;
    } = {
        nextjs: "Tonmoy vai",
        prisma: "Nahid vai",
        cloud: "Mahmudl vai"
    };

    const mentors2: {
        redux: string;
        react: string;
        project: string;
    } = {
        redux: "Mir vai",
        react: "Sumit vai",
        project: "Tapos vai"
    };

    type Mentors = typeof mentors1 & typeof mentors2

    const mentorsList: Mentors = {
        ...mentors1,
        ...mentors2,
    };
    console.log(mentorsList);

    const allMentors: {
        nextjs: string;
        prisma: string;
        cloud: string;
        redux: string;
        react: string;
        project: string;
    } = {
        ...mentors1,
        ...mentors2,
    }
    console.log(allMentors);

    // rest operator
    


}