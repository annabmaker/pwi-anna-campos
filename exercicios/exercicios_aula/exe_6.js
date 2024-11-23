 
   let altura = parseFloat(prompt('insira sua altura'));
    let peso = parseFloat(prompt('insira seu peso'));

    let imc = altura / (peso)^2

    console.log("Seu peso é " + imc)


    if (imc < 18.5 ) {
       console.log("Abaixo do peso")
       
    }
    else if (imc <18.6 && imc <24.9){
        console.log("Peso Ideal, Parabens")
    }
    else if (imc <25.0  && imc < 29.9 ){
        console.log("Levemente acima do peso")
    }
    else if( imc <30.0  && imc <34.9 ){
        console.log("Obesidade Grau 1")
    }
    else if( imc < 35.0 && imc< 39.9){
        console.log("Obesidade Grau 2")
    }
    else {
        console.log("JA ESTA MORTO")
    }

    