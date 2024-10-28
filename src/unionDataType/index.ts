// aker odhik data type niye kaj korte chaile amra union use korte pari, amra function a o union use korte pari
// amra chaile union a parenthesis use korte pari abar chaile parenthesis chara o use korte pari

// const userId: (number | string) = 211;
// console.log(userId);

const activeStatus: string | boolean = true;
console.log(activeStatus)

function displayUserInfo(userId: number | string) {
    console.log(userId)
}

displayUserInfo(20)