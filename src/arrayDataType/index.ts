const userNames: string[] = ["Ashikur Rahman", "Emam Bokhari", "Imtiaz Hossain Akib", "Adnan"];
console.log(userNames)

const userIds: number[] = [0, 1, 2, 3];
console.log(userIds);

const userActiveStatus: boolean[] = [true, false, true, true];
console.log(userActiveStatus);

//  2nd way
const fruitNames: Array<string> = ["Mango", "Banana", "Jackfruit"];
console.log(fruitNames);

const fruitPrices: Array<number> = [580, 200, 150];
console.log(fruitPrices)

const fruitStatus: Array<boolean> = [true, false, true];
console.log(fruitStatus)

// array ar maje o union use korte pari amra
const flowersData: string[] | number[] = [20, 30, 33, 101];
console.log(flowersData)

const flowersPrice: Array<string> | Array<number> = [504, 100, 493, 4100];
console.log(flowersPrice);

//  union ta amra chaile onno vabe o use korte pari
const fishPrices: (string | number)[] = [220, 200, 150];
console.log(fishPrices);