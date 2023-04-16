// recupera valores 

function recuperaValor(seletor){
    return parseFloat(document.querySelector(seletor).value || false);
}

let botao = document.getElementById("executa");


botao.onclick = function(){
    let valor01 = recuperaValor("#valor1");
    let valor02 = recuperaValor("#valor2");

    const respota = calculaSoma(valor01,valor02);
    exibeMensagem(respota,"#resultado");
}

function calculaSoma (valor01, valor02){
    if(!(valor01 && valor02)){
        return "ERRO na entrada de dados! Tente novamente";
    }
    else{
        return valor01 + valor02;
    }   
}
console.log("visita");
function exibeMensagem(msg, seletor){
    document.querySelector(seletor).innerHTML = msg;
}