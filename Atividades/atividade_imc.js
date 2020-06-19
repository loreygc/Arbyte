let rs = require('readline-sync')
let peso = rs.questionFloat("Digite seu peso.")
let altura = rs.questionFloat("Digite sua altura.")

let imc = peso / (altura  * altura)
console.log("seu imc é " + imc)

if (imc < 18.5)
    console.log("Você está abaixo do peso, consulte um nutricionista.");
else  if (imc > 18.5 && imc < 24.9)
    console.log("Voce está no peso certo para sua altura.");

else if (imc > 25 && imc < 29.9)
    console.log("Voce está ligeiramente acima do peso não se esqueça de praticar exercícios");

else if (imc > 30)
    console.log("Voce está acima do peso, procure um nutricionista e cuide da sua saude, mão se esqueça de praticar exercícios!");
