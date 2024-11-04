{
    // function, arrow function, map, method

    function addition(x: number, y: number): number {
        return x + y;
    }

    const multiplication = (x: number, y: number): number => {
        return x * y;
    }

    const bank: {
        id: number;
        name: string;
        accountNumber: number;
        balance: number;
        deposit: (balance: number) => void;
        getBalance: () => number;
    } = {
        id: 211,
        name: "Moshfiqur Rahman",
        accountNumber: 2990085,
        balance: 1001,
        deposit(balance: number): void {
            this.balance = this.balance + balance
        },
        getBalance() {
            return this.balance
        }
    }

    bank.deposit(100);
    console.log(bank.getBalance())

    const marks: number[] = [88, 33, 55];

    const singleMark = marks.map((mark) => mark + 1);
    console.log(singleMark)


}