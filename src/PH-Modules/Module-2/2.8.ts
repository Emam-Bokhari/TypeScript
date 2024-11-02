{
    // promise

    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "Something..."
            if (data) {
                resolve(data);
            } else {
                reject("Failed to load data!")
            };
        });
    };

    const showData = async (): Promise<string> => {
        const data: string = await createPromise()
        return data;
    }
    showData()

    type TodoData = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }
    // aikhne Promise diye arpor type ta boshaite hobe
    const getTodoData = async (): Promise<TodoData> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data:TodoData = await response.json();
        return data;
    }
    getTodoData()
}