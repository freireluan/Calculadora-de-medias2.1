// console.log(divisor,tribise,media,confirmaConfiguraoes);

confirmaConfiguraoes.addEventListener("click", ()=>{
    console.log(confirmaConfiguraoes,divisor.value,tribise.value,media.value)
    
});

divisor.addEventListener("click", ()=>{
   
   
     tabelaresultadostable.innerHTML = "";
        
    
    alteraTextoConfiguracao(divisor);
    
    if(xtabela >= materiaASeremDesenhadas.length){
        xtabela = 0;
    }
    if(xformulario >= materiaASeremDesenhadas.length){
        xformulario = 0;
    }

   console.log(materiaASeremDesenhadas)

    
    
    materiaASeremDesenhadas.forEach(() => {
        criaTabela(materiaASeremDesenhadas[xtabela],tabelaresultadostable,tribise.value,divisor.value,xtabela);
    
    
        xtabela++;
        
    });   
    materiaASeremDesenhadas.forEach(() => {
        criaCardsForms(materiaASeremDesenhadas[xformulario],tribise.value,divisor.value,xformulario)
    
    
        xformulario++;
        
    });
   
    
});









tribise.addEventListener("click",()=>{
    
    
    tabelaresultadostable.innerHTML = "";
       
    
    desenhaTabela(divisor.value,tribise.value,mediasgeraiselementopai);
   

            
    if(xtabela >= materiaASeremDesenhadas.length){
        xtabela = 0;
    }
    if(xformulario >= materiaASeremDesenhadas.length){
        xformulario = 0;
    }
    

    materiaASeremDesenhadas.forEach(() => {
       
        
      
            
    
        criaTabela(materiaASeremDesenhadas[xtabela],tabelaresultadostable,tribise.value,divisor.value,xtabela);
    
        xtabela++;
        
    });
    materiaASeremDesenhadas.forEach(() => {
        criaCardsForms(materiaASeremDesenhadas[xformulario],tribise.value,divisor.value,xformulario)
    
    
        xformulario++;
        
    });





  
    
 
    
    
    
})

media.addEventListener("click", ()=>{


})




