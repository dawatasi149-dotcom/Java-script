// let count = 0;
// function countVowl(str) {
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     return count;
// }
// countVowl("dawa");
// console.log(count);
// let count = 0;
// const countVowl = (str) => {
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     return count;
// }
// countVowl("luffy");
// console.log(count);
// let citys = ["kathmandu", "pokhara", "hatauda", "charikot"];
// citys.forEach(  val => {
//     console.log(val.toUpperCase());
// })
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(val => {
//     console.log("squire =", val * val);
// })
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let newArray = arr.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(newArray)
// let arr = [30, 40, 100, 90, 93, 62];
// let newArr = arr.filter((val) => {
//     return val >= 90;
// })
// console.log(newArr);
 
let n = prompt("Enter a number ");
let arr = [];
for (let i = 1; i <= n; i++){
    arr[i - 1] = i;

}
console.log(arr);
let newArr = arr.reduce((val,idx) => {
    return val + idx;
    
    
})
console.log(newArr);
let factorial = arr.reduce((val, idx) => {
    return val * idx;
})
console.log(factorial);