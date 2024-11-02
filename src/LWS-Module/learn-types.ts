{
    const count: number = 30;

    const profileName: string = "Emam Bokhari";

    const personName: string = `${profileName} is a good boy.`;

    const isMuslim: boolean = true;

    const increment: any = 1;

    const multipleTypesEx1: string | number = "20";
    let multipleTypesEx2: string | number = "20";
    multipleTypesEx2 = 30;


    const str: string = "Emam Bokhari is my good name.";

    const index: number = (str as string).indexOf("B");

    const indexEx2: number = (<string>str).indexOf("E");

    console.log(index, indexEx2)


}