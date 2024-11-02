{
    // mapped types, lookup type

    const arrayOfNumbers: number[] = [2, 4, 8];

    const arrayOfString: string[] = ["2", "4", "8"];

    const arrayOfStrings: string[] = arrayOfNumbers.map((number) => number.toString());

    type Area = {
        height: number;
        width: number;
    }
    // keyof daour mane hoche union types ar moto dibe jamon height| width
    type AreaConvertString = {
        [index in keyof Area]: string
    }

    // lookup type
    type Height = Area["height"]

    type AriaString<T> = {
        [index in keyof T]: T[index]
    }

    const Area1: AriaString<{ height: number; width: string }> = {
        height: 100,
        width: "300"
    }

}