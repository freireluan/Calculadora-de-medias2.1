function criaTabela(materia,tabela){
    let tr = document.createElement("tr");
    tr.innerHTML = 
    ` 
        <td class="materia-item-resultado titulo${materia}">${materia}</td>
        <td class="materia-item-resultado primeiroTrimestre${materia}"></td>
        <td class="materia-item-resultado segundoTrimestre${materia}"></td>
        <td class="materia-item-resultado terceiroTrimestre${materia}"></td>
        <td class="materia-item-resultado médiaDosTrimestresem${materia}"></td>
        <td class="materia-item-resultado soma${materia}"></td>
        <td class="materia-item-resultado pontosParaPassarem${materia}"></td>


    `

    tabela.appendChild(tr);
}
