function desenhaLista(materia){
    const itemdaLista = document.createElement("div");
   

    itemdaLista.innerHTML = `
        <h4 class="materiaDaListaTitulo listaDemateriasElemento${materia}">${materia}</h4>
        <input type="checkbox" id="checkbox-materia checkboxDaMateriaDe${materia}">
        <div class="div-apagar">
             <img src="./img/lixeira.png" alt="Botão De Apagar" class="imagem-apagar imagemApagarDaMateriaDe${materia}">
        </div>
    `
    listaDeMaterias.appendChild(itemdaLista);
    itemdaLista.classList.add("materia-item");
    itemdaLista.classList.add(`ItemDaLista${materia}`);

}