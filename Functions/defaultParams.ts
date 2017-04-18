function addit(
    num1: number,
    num2: number,
    num3: number = 0
)  : number{
    let total = num1 + num2 + num3;
    return total;
}

let defaultAnswer = addit(14, 23, 30);
console.log(`Adding three numbers ${defaultAnswer}`);

//Test default param by passing in only 2 numbers
defaultAnswer = addit(14, 23);
console.log(`Adding three numbers ${defaultAnswer}`);