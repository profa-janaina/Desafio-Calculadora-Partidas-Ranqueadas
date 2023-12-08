let numeroVitorias = "";
let numeroDerrotas = "";
let nivelHeroi;
let mensagem;

function calcularRanque(){
    numeroVitorias = document.getElementById("numeroVitorias").value;
    numeroDerrotas = document.getElementById("numeroDerrotas").value;

    console.log(numeroVitorias.length);
    console.log(numeroDerrotas.length);
    
    if(numeroDerrotas.length > 0 && numeroVitorias.length > 0){                    
        classificar(numeroVitorias, numeroDerrotas);
    }else{
        mensagem = "Insira valores válidos";
        document.getElementById("resultadoClassificacao").innerText= mensagem; 
    }
}

function classificar(numeroVitorias, numeroDerrotas) {   
    let saldoVitorias;
    if(numeroVitorias <= 10){
        nivelHeroi = "Ferro"
    }            
    else if(numeroVitorias >= 11 && numeroVitorias <= 20){
        nivelHeroi = "Bronze"
    }            
    else if(numeroVitorias >= 21 && numeroVitorias <= 50){
        nivelHeroi = "Prata"
     }            
    else if(numeroVitorias >= 51 && numeroVitorias <= 80){
        nivelHeroi = "Ouro"
     }  
    else if(numeroVitorias >= 81 && numeroVitorias <= 90){
        nivelHeroi = "Diamante"
    }            
    else if(numeroVitorias >= 91 && numeroVitorias <= 100){
        nivelHeroi = "Lendário"
     }            
    else if(numeroVitorias >= 101){
        nivelHeroi = "Imortal"
    }

    saldoVitorias = numeroVitorias -numeroDerrotas
    mensagem = `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivelHeroi}`;
    document.getElementById("resultadoClassificacao").innerText= mensagem;   

    numeroVitorias = "";
    numeroVitorias = "";
    nivelHeroi="";
    mensagem = "";
    document.getElementById("numeroVitorias").value = "";
    document.getElementById("numeroDerrotas").value = "";
}
