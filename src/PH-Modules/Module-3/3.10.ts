{
    {
        // encapsulation, amra private abong protected properties use kore encapsulate orthat hide korte pari

        class BankAccount {
            readonly id: number;
            public name: string;
            private _balance: number;

            constructor(id: number, name: string, balance: number) {
                this.id = id;
                this.name = name;
                this._balance = balance;
            }

            getDeposit(ammount: number) {
                this._balance = this._balance + ammount;
            }

            getBalance() {
                return this._balance;
            }
        }

        const goribManusherAccount = new BankAccount(2111, "Emam Bokhari", 1500);


        goribManusherAccount.getBalance()

        const result = goribManusherAccount.getDeposit(100);
        console.log(result)

    }
}