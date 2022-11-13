function alteramedia(materia , quantia , formato, n1 , n2 , n3 , n4){
    let nota1 = parseInt(n1);
    let nota2 = parseInt(n2);
    let nota3 = parseInt(n3);
    let nota4 = parseInt(n4)
    let media;

    if(quantia == 4 || quantia =="4"){
        media = ((nota1 + nota2 + nota3 + nota4)/quantia).toFixed(1)
    }
    if(quantia == 3 || quantia =="3"){
        media = ((nota1 + nota2 + nota3 )/quantia).toFixed(1)

    }
    if(quantia == 2 || quantia =="2"){
        media = ((nota1 + nota2 )/quantia).toFixed(1)
    }
    if(quantia == 1 || quantia =="1"){
        media = ((nota1)/quantia).toFixed(1)
    }
    document.querySelector(`.mediaDos${formato}em${materia}`).textContent = media;
 
}

function alteraSoma(materia , quantia , formato, n1 , n2 , n3 , n4){
    let nota1 = parseInt(n1);
    let nota2 = parseInt(n2);
    let nota3 = parseInt(n3);
    let nota4 = parseInt(n4)
    let soma;

    if(quantia == 4 || quantia =="4"){
        soma = (nota1 + nota2 + nota3 + nota4).toFixed(1)
    }
    if(quantia == 3 || quantia =="3"){
        soma = (nota1 + nota2 + nota3 ).toFixed(1)

    }
    if(quantia == 2 || quantia =="2"){
        soma = (nota1 + nota2 ).toFixed(1)
    }
    if(quantia == 1 || quantia =="1"){
        soma = (nota1).toFixed(1)
    }
    document.querySelector(`.soma${materia}`).textContent = soma;
 

}




function alteraPontosParaPassar(materia , quantia , formato, n1 , n2 , n3 , n4, media){
    let nota1 = parseInt(n1);
    let nota2 = parseInt(n2);
    let nota3 = parseInt(n3);
    let nota4 = parseInt(n4);
    let mediasomada = parseInt(media)
    let pontosFaltantes;
    let soma;
    let mensagem;
   

    






    if(quantia == 4 || quantia =="4"){

        soma = (nota1 + nota2 + nota3 + nota4);
        pontosFaltantes = (mediasomada - soma);
    }
    if(quantia == 3 || quantia =="3"){
        soma = (nota1 + nota2 + nota3 );
        pontosFaltantes = (mediasomada - soma);
        

    }
    if(quantia == 2 || quantia =="2"){
        soma = (nota1 + nota2  );
        pontosFaltantes = (mediasomada - soma);
        
        
    }
    if(quantia == 1 || quantia =="1"){
        soma = (nota1 );
        pontosFaltantes = (mediasomada - soma);
        
    }
    verificamodo(media,formato,soma,materia)

    
    




}






function verificamodo(media,formato,soma,materia){
    if(formato == "Bimestre"){
        mediasomada = (media * 4);
        
    }
    if(formato == "Trimestre"){
        mediasomada = (media * 3);
       
    }
    if(formato == "Semestre"){
        mediasomada = (media * 2);
       
    }
    escreveMensagem(mediasomada,soma,materia)
   
    
    
}


function   escreveMensagem(mediasomada,soma,materia){
    if(soma  <= mediasomada){
        mensagem = `Faltam ${mediasomada - soma} pontos`
    }
    if(soma == mediasomada){
        mensagem = `Na média,${soma} pontos`
    }
    if(soma > mediasomada){
        mensagem = `${soma - mediasomada} pontos a mais que a média`
    }

    alteraTextoPassouOuNao(materia,mensagem);

    
    
}



function alteraTextoPassouOuNao(materia,mensagem){
      document.querySelector(`.pontosParaPassarem${materia}`).textContent = mensagem;
      
    
    }