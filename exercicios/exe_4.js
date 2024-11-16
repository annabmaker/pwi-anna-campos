

function calcularReajuste(valor){
    const reajuste = valor * 0.05;
    const valorComReajuste = valor + reajuste;
    console.log (`O valor original era R$ ${valor.fixo(2)}`);
    console.log(`O valor com reajuste de 5% é: R$ ${valorComReajuste(2)}`);

}