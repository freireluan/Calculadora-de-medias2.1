const checkListaDeMaterias = document.querySelectorAll(".checkbox-materia");
checkListaDeMaterias.forEach((index)=> {
    index.addEventListener("click",()=>{
        // console.log(index.checked,index.parentNode.querySelector("h4").textContent);
        if(index.checked == true){
            materiaASeremDesenhadas.push(index.parentNode.querySelector("h4").textContent)
        }
        if(index.checked == false){
            materiaASeremDesenhadas.splice(
                materiaASeremDesenhadas.indexOf(index.parentNode.querySelector("h4").textContent
                )
                ,
                1)
        }
        redesenhaTabelaEFormulario(materiaASeremDesenhadas, xtabela ,xformulario);


        
       
    })
    
    
});



function redesenhaTabelaEFormulario(materias, xtabela ,xformulario ){
    if(xtabela >= materias.length){
        xtabela = 0
    }
    if(xformulario >= materias.length){
        xformulario = 0
    }


    materias.forEach(() => {
      
            
    
        criaTabela(materias[xtabela],tabelaresultadostable,tribise.value,divisor.value,xtabela);
    
        xtabela++;
        
    });
    materias.forEach(() => {
      
            
    
        criaCardsForms(materias[xformulario],tribise.value,divisor.value,xformulario)
    
        xformulario++;
        
    });



}
