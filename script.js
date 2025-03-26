// este é o primeiro exercício
function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("Este numero é par");
    } else {
        console.log("Este numero é ímpar");
    }
}

verificarPar(0);
verificarPar(9);
verificarPar(0);

// este é o segundo exercício

function calcularNumero(numero1, numero2) {
    console.log(numero1 + numero2);
    console.log(numero1 - numero2);
    console.log(numero1 * numero2);
    console.log(numero2 !== 0 ? numero1 / numero2 : 'Não pode ser divisível por 0');
}

calcularNumero(10, 0)

//3º questão

for (let i = 10; i > 0; i--) {
    console.log(i)
}

//4º questão

let original = "JavaScript";
let invertido = original.split("").reverse().join("");
console.log(invertido);

//5º questão

function contaCaracter(palavra) {
    console.log(palavra.length);
}

contaCaracter("Professor");

//6º questão

let carro = {
    marca: "BMW",
modelo: "X1",
ano: 2010,
}
console.log(carro.modelo)