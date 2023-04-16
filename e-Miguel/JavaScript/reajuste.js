// indo no html pegar o botao DOM

const enviar = document.getElementById("executa");

function recuperaValor(seletor){
    return parseInt(document.querySelector(seletor).value || false) 
}

enviar.onclick = function(){
    
    let salario = recuperaValor("#salarioV");
    let percentual = recuperaValor("#percentual");

    let resposta = previdencia(salario, percentual);

    exibeMensagem(resposta, "#resultado");
}

function previdencia (salario, percentual){
   
     let reajuste = salario * ((percentual/100)); 
     return reajuste + salario;
}

function exibeMensagem (msg, seletor){
    document.querySelector(seletor).innerHTML = msg;
}

