//indo recuperar o botao no html

const enviar = document.getElementById("executa");

function recuperaValores(seletor){
    return parseFloat(document.querySelector(seletor).value || false);
}
enviar.onclick = function (){
    let nota01 = recuperaValores("#nota1");
    let nota02 = recuperaValores("#nota2");
    let nota03 = recuperaValores("#nota3");

    let resposta = mediaFinal(nota01,nota02,nota03);
    
    exibeMensagem (resposta, "#resultado");
    
    function exibeMensagem (msg, seletor){
        document.querySelector(seletor).innerHTML = msg;
    }
}


function mediaFinal(nota1,nota2,nota3){
    if(!(nota1 && nota2 && nota3)){
        return "ERRO na entrada de dados. Tente novamente"
    }else{
        return (nota1 * nota1 + nota2 * nota2 + nota3 * nota3 / (nota1 + nota2 + nota3));
    }
}

