//regular expression
//=====================================
//let regex=/\d/g
let regEx=/[0-9]/g;
//=====================================
//que no se un digito arabico
// let regex=/\D/
//equal to regex =/[^0-9]/


let nameUser="joel123";

console.log(nameUser.replace(regEx,"6"));