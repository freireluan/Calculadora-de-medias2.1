let formato;
let quantia;
let mediaMinimaporfase;




confirmaConfiguraoes.addEventListener("click", ()=>{
    salvaDadosConfiguracoes(divisor.value,tribise.value,mediaminima.value);
    salvaMaterias();
})
buscaDados();

function salvaDadosConfiguracoes(formato,quantia,media){
    localStorage.setItem("formato",JSON.stringify(formato));
    localStorage.setItem("quantia",JSON.stringify(quantia));
    localStorage.setItem("media",JSON.stringify(media));
}




function buscaDados(){
    formato = JSON.parse(localStorage.getItem("formato"));
    quantia = JSON.parse(localStorage.getItem("quantia"));
    mediaMinimaporfase = JSON.parse(localStorage.getItem("media"));

}
function aplicaDados(){
    divisor.value = formato;
    tribise.value = quantia;
    mediaminima.value = mediaMinimaporfase;

}

function salvaMaterias(){
    localStorage.removeItem("materiasASeremDesenhadas")
    localStorage.setItem("materiasASeremDesenhadas",JSON.stringify(materiaASeremDesenhadas)); 
}




function buscaMaterias(){
   materiaASeremDesenhadas =  JSON.parse(localStorage.getItem("materiasASeremDesenhadas"));


}


window.onload = buscaMaterias();
window.onload = aplicaDados();

window.onload = ()=>{
    materiaASeremDesenhadas.forEach(() => {

        criaTabela(materiaASeremDesenhadas[xtabela],tabelaresultadostable,tribise.value,divisor.value,xtabela);
    
        xtabela++;
        
    });
    materiaASeremDesenhadas.forEach(() => {
        criaCardsForms(materiaASeremDesenhadas[xformulario],tribise.value,divisor.value,xformulario)
    
    
        xformulario++;
        
    });
    mantemdadosnaTabelaDeMedias();
    // materiaASeremDesenhadas.forEach(() => {
    //     if(xformulario >= materiaASeremDesenhadas.length){
    //         xformulario = 0;
    //     }
    //     alteraTextos(materiaASeremDesenhadas[xformulario] , tribise.value , divisor.value , 100,50,98,87);
    
    
    //     xformulario++;
        
    // });
    // desenhaTabela(divisor.value,tribise.value,mediasgeraiselementopai);

    

}


materiasFixas.forEach(() => {
    desenhaLista(materiasFixas[xDaLista],materiaASeremDesenhadas);
    xDaLista++;
})



botaoImportar.addEventListener("click", ()=>{
    localStorage.setItem("materiasASeremDesenhadas",[]);
    localStorage.setItem("materiasASeremDesenhadas",JSON.stringify(materiasFixas) )
    console.log(localStorage.getItem("materiasASeremDesenhadas"));
});










