//indo busca o botao no html DOM
var divisor;
const enviar = document.getElementById("executa");

//recupera valores 
function recuperaValor(seletor){
    return parseInt (document.querySelector(seletor).value || false);
}

//ao clicar no botao enviar (recolhe o valor inserido pelo usuario)

enviar.onclick = function(){
    const valor = recuperaValor("#num");

//chama a funcao compara primo e inseri o resultado na variavel resposta 
    const respostaPrimo = comparaPrimo (valor);

    //pedição para exibir a respota na web

exibeMensagem (respostaPrimo ,"#resultado");
}

//compara Primo
function comparaPrimo (numero){
   
        if(!(numero > 1 && numero )){
            return "Erro na entrada de dados. Tente novamente!";
        }
        
        for (var i = 2; i < numero; i++)
        if (numero % i === 0) {
            return `O numero ${numero} não é primo`;
        }
      return `O numero ${numero} é primo`;
    };
    


// funcao exibe resposta

function exibeMensagem (msg, seletor){
    document.querySelector(seletor).innerHTML = msg;
}
