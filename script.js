//ARRAYS IN JS 
let price = [250, 645, 300, 900, 50];
let finalprice = 0;
for (let i of price) {
    console.log(` Price befofe discount ${i}`)
 
}

for (let i of price) {
    finalprice = i - i * 0.1;
    console.log(`Price after discount ${finalprice}`);
}