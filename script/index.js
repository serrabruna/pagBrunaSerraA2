function exibirIdade(formulario){
    idade = new Array(5)
    idade[0] = parseInt(formulario.idade1.value);
    idade[1] = parseInt(formulario.idade2.value);
    idade[2] = parseInt(formulario.idade3.value);
    idade[3] = parseInt(formulario.idade4.value);
    idade[4] = parseInt(formulario.idade5.value);
    let maior = Math.max.apply(null, idade);
    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;


    for(let i=0; i<=5; i++){
        if(idade[i]<=15){
            faixa1 = faixa1 + 1;
        }
        else if(idade[i]>15 && idade[i]<=40){
            faixa2 = faixa2 + 1;
        }
        else if(idade>40){
            faixa3 = faixa3 + 1;
        }
    }
    document.getElementById("resultado1").value = faixa1;
    document.getElementById("resultado2").value = faixa2;
    document.getElementById("resultado3").value = faixa3;
    document.getElementById("resultado4").value = maior;
}