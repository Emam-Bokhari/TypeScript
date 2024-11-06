{
    // generics (function), constraints

    const showMessage = <T>(message: T): T => {
        return message;
    }

    console.log(showMessage<string>("This is Moshfiqr Rahman"))

    console.log(showMessage<number>(5432))

    console.log(showMessage<boolean>(true))

    const show = <T, Q>(x: T, y: Q): [T, Q] => {
        return [x, y];
    };

    console.log(show<number, number>(1, 3));
    console.log(show<string, string>("Hello", "World!"));

    // constraints
    function getLength<T extends { length: number }>(str: T) {
        return str.length;
    }

    const result: number = getLength<string>("Hellow World!");

    console.log(result)
}