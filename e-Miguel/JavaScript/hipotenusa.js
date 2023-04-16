
function recuperaValores(seletor){
    return parseInt(document.querySelector(seletor).value || false) 
}

// recuperando os valores no html DOM

const enviar = document.getElementById("executa");

//funcao recupera valores. quando o usuario for clicar no botao executa

enviar.onclick = function (){
    let catetoAd = recuperaValores ("#num1");
    
    let catetoOp = recuperaValores ("#num2");

    const resposta = calcHipotenusa (catetoAd,catetoOp);

    exibeMensagem(resposta,"#resultado");
}
//passando a respota para a funcao exibe mensagem



//funcao que aplica o teorema de pitágoras 
function calcHipotenusa (catetoAd, catetoOp){
    if(!(catetoAd && catetoOp )){
        return "ERRO na entrada dos dados. Tente novamente";
    } else{
        let raizQuadrada = (Math.pow(catetoAd,2) + Math.pow(catetoOp,2));
        return Math.sqrt(raizQuadrada);
    }
}

//funcao exibe mensagem

function exibeMensagem (msg, seletor){
    document.querySelector(seletor).innerHTML = msg
}