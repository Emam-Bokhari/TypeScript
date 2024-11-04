{
    // get, and set

    class BankAccount {
        readonly id: number;
        name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(ammount: number) {
            this._balance = this._balance + ammount;
        }

        get balance() {
            return this._balance;
        }
    }

    const goribManusherAccount = new BankAccount(2111, "Emam Bokhari", 1500);


    goribManusherAccount.deposit = 100;

    const result = goribManusherAccount.balance;
    console.log(result)

}