function desenhaLista(materia,array){
    const itemdaLista = document.createElement("div");
   

    itemdaLista.innerHTML = `
        <h4 class="materiaDaListaTitulo listaDemateriasElemento${materia}">${materia}</h4>
        <input type="checkbox" id="checkboxDaMateriaDe${materia}" class="checkbox-materia" >
        
    `
    setTimeout(() => {
        if(array.includes(materia) == true){
            
            document.querySelector(`#checkboxDaMateriaDe${materia}`).checked = true;
        }else{
            if(array.includes(materia) == false || array.includes(materia) == null){
                
                document.querySelector(`#checkboxDaMateriaDe${materia}`).checked = false;
            }
           
        }
        
    }, 800);

    




    listaDeMaterias.appendChild(itemdaLista);
    itemdaLista.classList.add("materia-item");
    itemdaLista.classList.add(`ItemDaLista${materia}`);

}














//imagem da lixeira nas matérias
//<div class="div-apagar">
//<img src="./img/lixeira.png" alt="Botão De Apagar" class="imagem-apagar imagemApagarDaMateriaDe${materia}">
//</div>