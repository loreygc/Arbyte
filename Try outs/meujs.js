<meta charset="UTF-8>
alert("Bem vindo! vamos calcular seu IMC!");
let altura=parseFloat(window.prompt("Qual sua altura?"));
let peso=parseInt(window.prompt("Qual seu peso?"))
let IMC = parseFloat(altura*altura)

if (IMC >10){
    alert("Uau! Seu IMC é" + IMC)
}
else {
            alert("Ei, cuidado, seu IMC é" + IMC)
}