{
    // access modifiers

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;
        protected accountNumber: number;

        constructor(id: number, accountNumber: number, name: string, balance: number) {
            this.id = id;
            this.accountNumber = accountNumber;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(ammount: number) {
            this._balance = this._balance + ammount
        }

        getBalance(): number {
            return this._balance
        }
    }
    // protected use korle child a access kora jabe, kinto ar bahire onno kothao access kora jabe na, r private use korle 
    // kothao e access kora jabe na kebol matro class ar vitore e access kora jabe 
    class StudentAccount extends BankAccount {
        test() {
            this.accountNumber
        }
    }

    const goribManusherAccount = new BankAccount(1, 2559550, "Emam Bokhari", 20);
    goribManusherAccount.addDeposit(700)
    const result1 = goribManusherAccount.getBalance()
    console.log(result1)
}