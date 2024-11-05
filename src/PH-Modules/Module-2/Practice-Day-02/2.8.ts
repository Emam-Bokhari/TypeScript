{
    // promise

    type Data = {
        id: number;
        name: string;
    }

    const createPromise = (): Promise<Data[]> => {
        return new Promise((resolve, reject) => {
            const data: Data[] = [{ id: 101, name: "Moshfiqur Rahman" }, { id: 101, name: "Moshfiqur Rahman" }];
            if (data) {
                resolve(data)
            } else {
                reject("NOT Found.")
            }
        })
    };

    const showData = async (): Promise<void> => {
        const result: Data[] = await createPromise()
        console.log(result)
    }
    showData()

    interface TodoData {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getData = async (): Promise<{
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data: TodoData = await response.json();
        console.log(data)
        return data
    }
    getData()
}