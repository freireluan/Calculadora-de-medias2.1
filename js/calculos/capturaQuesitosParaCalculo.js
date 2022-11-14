desenhaTabela(divisor.value,tribise.value,mediasgeraiselementopai);
confirmaConfiguraoes.addEventListener("click", ()=>{
    
    tabelaresultadostable.innerHTML = "";
    
       
    
    desenhaTabela(divisor.value,tribise.value,mediasgeraiselementopai);
   

            
    if(xtabela >= materiaASeremDesenhadas.length){
        xtabela = 0;
    }
    if(xformulario >= materiaASeremDesenhadas.length){
        xformulario = 0;
    }


    //console.log(`quantia ${tribise.value}, materia${materiaASeremDesenhadas[xtabela]} , formato${divisor.value}`)
    //criarmazenamento(materia , quantia , formato )

    materiaASeremDesenhadas.forEach(() => {
       
        
      
            
    
        criaTabela(materiaASeremDesenhadas[xtabela],tabelaresultadostable,tribise.value,divisor.value,xtabela);
    
        xtabela++;
        
    });
    materiaASeremDesenhadas.forEach(() => {
        criaCardsForms(materiaASeremDesenhadas[xformulario],tribise.value,divisor.value,xformulario)
    
    
        xformulario++;
        
    });





  
    
 
    
    
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

mediaminima.addEventListener("click", ()=>{


})

botaocalcular.addEventListener("click",(xtabela)=>{
    if(xtabela >= materiaASeremDesenhadas.length ){
        xtabela = 0;
    }
    materiaASeremDesenhadas.forEach((index)=>{
        criarmazenamento(index , tribise.value , divisor.value )
        xtabela++;

    })
    
})




