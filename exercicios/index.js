function calculcarsomaverificacr(A,B,C){

    const soma = A+B;
}

console.log(`A soma entre A e B é: ${soma}`);

if(soma < C ){
    console.log('A soma é menor que C');
} else{
    console.log('A soma não é menor que C');
}

const A = parseFloat(prompt("Digite o valor de A:"));
const B = parseFloat(prompt("Digite o valor de B:"));
const C = parseFloat(prompt("Digite o valor de C:"));

calculcarsomaverificacr(A,B,C);