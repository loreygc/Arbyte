let rs= require ("readline-sync")
let verdade ="o céu é azul"
let mentira ="o sol não existe"

let respostaUsuario =rs.question ("Digite 1 para ler uma verdade e digite 2 para ler uma mentira")
// else if pode ser usado infinitamente, apenas com um comando
if (respostaUsuario == 1) {
    console.log(verdade)
} else if(respostaUsuario == 2) {
        console.log(mentira)
}else {
    console.log ("trolei")
}