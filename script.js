// QUESTION 
let company = ["Bloomberg", "Microshoft", "uber", "google", "IBM", "Netflix"];
company.shift();
console.log(company);
//to remove uber and add ola in its place 
company.splice(2, 1, "ola");
console.log(company);
company.push("Amazon");
console.log(company);
