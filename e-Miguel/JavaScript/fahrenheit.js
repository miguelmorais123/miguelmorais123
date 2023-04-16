// recuperando os valores no html DOM

function recuperaValor (seletor){
    return parseFloat(document.querySelector(seletor).value || false);
}
//indo no html pegar o botão
const enviar = document.getElementById("executa");

//funcao recupera valores quando usuario for clicar no botao executa

enviar.onclick = function(){
    let fahrenheit = recuperaValor ("#fahrenheit");
    resposta = calcFahrenheit (fahrenheit);
    exibeMensagem(resposta, "#resultado");

}
//funcao que aplica a formula
function calcFahrenheit (fahrenheit){
    if(!(fahrenheit)){
        return "ERRO na entrada de dados. Digite novamente";
    }else{
        let celsius = (fahrenheit - 32) * 5/9;
        return celsius;
    }
} 

function exibeMensagem(msg, seletor){
    return document.querySelector(seletor).innerHTML = msg;
}