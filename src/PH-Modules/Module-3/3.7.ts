{
    // static

    class Counter {
        static count: number = 0;

        static increment() {
            return Counter.count = Counter.count + 1;
        }

        decrement() {
            return Counter.count = Counter.count - 1;
        }
    }

    // const instace1 = new Counter()
    console.log(Counter.increment())


    // const instace2 = new Counter()
    console.log(Counter.increment())

    // const instace3 = new Counter()
    console.log(Counter.increment())

}