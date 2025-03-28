console.log("ola mundo");
//Funcao sem usar o return
let somar =  function(valor1, valor2){
    let resultado = valor1 + valor2;
   console.log(resultado);
}
//Execucao da funcao 3 chamadas
somar(18,25);
somar(72,37);
somar(99,1);

let subtrair = function(valor1,valor2){
    return valor1-valor2;
}
let resultado = subtrair(28,12);
console.log(resultado);