// console.log(divisor,tribise,media,confirmaConfiguraoes);

confirmaConfiguraoes.addEventListener("click", ()=>{
    console.log(confirmaConfiguraoes,divisor.value,tribise.value,media.value)
    
});

divisor.addEventListener("click", ()=>{
   
   
     tabelaresultadostable.innerHTML = "";
        
    
    alteraTextoConfiguracao(divisor);
    
    if(xtabela >= materiasFixas.length){
        xtabela = 0;
    }
    if(xformulario >= materiasFixas.length){
        xformulario = 0;
    }

    
    
    materiasFixas.forEach(() => {
        criaTabela(materiasFixas[xtabela],tabelaresultadostable,tribise.value,divisor.value,xtabela);
    
    
        xtabela++;
        
    });   
    materiasFixas.forEach(() => {
        criaCardsForms(materiasFixas[xformulario],tribise.value,divisor.value)
    
    
        xformulario++;
        
    });
   
    
});









tribise.addEventListener("click",()=>{
    
    
    tabelaresultadostable.innerHTML = "";
       
    
    desenhaTabela(divisor.value,tribise.value,mediasgeraiselementopai);
   

            
    if(xtabela >= materiasFixas.length){
        xtabela = 0;
    }
    if(xformulario >= materiasFixas.length){
        xformulario = 0;
    }

    materiasFixas.forEach(() => {
      
            
    
        criaTabela(materiasFixas[xtabela],tabelaresultadostable,tribise.value,divisor.value,xtabela);
    
        xtabela++;
        
    });
    materiasFixas.forEach(() => {
        criaCardsForms(materiasFixas[xformulario],tribise.value,divisor.value)
    
    
        xformulario++;
        
    });





  
    
 
    
    
    
})

media.addEventListener("click", ()=>{


})




