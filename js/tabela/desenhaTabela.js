function criaTabela(materia,tabela,divisorASeremCalculados,modo,xtabela){
    let tr = document.createElement("tr");
    console.log(divisorASeremCalculados);
  
    if(divisorASeremCalculados  == "4" || divisorASeremCalculados == 4){
        if(xtabela == 0){
            tabelaresultadostable.innerHTML = "";
            cabecalhoTabela(divisor.value,cabecalhoTabelaconst,tribise.value,tabelaresultadostable,xtabela); 
        }
        
        tr.innerHTML = 
    ` 
        <td class="materia-item-resultado titulo${materia}">${materia}</td>
        <td class="materia-item-resultado primeiro${modo}${materia}"></td>
        <td class="materia-item-resultado segundo${modo}${materia}"></td>
        <td class="materia-item-resultado terceiro${modo}${materia}"></td>
        <td class="materia-item-resultado quarto${modo}${materia}"></td>
        <td class="materia-item-resultado mediaDos${modo}em${materia}"></td>
        <td class="materia-item-resultado soma${materia}"></td>
        <td class="materia-item-resultado pontosParaPassarem${materia}"></td>
    `
    tabela.appendChild(tr);
    }
    if(divisorASeremCalculados  == "3" || divisorASeremCalculados == 3){
        if(xtabela == 0){
            tabelaresultadostable.innerHTML = "";
            cabecalhoTabela(divisor.value,cabecalhoTabelaconst,tribise.value,tabelaresultadostable,xtabela); 
        }
        tr.innerHTML = 
    ` 
        <td class="materia-item-resultado titulo${materia}">${materia}</td>
        <td class="materia-item-resultado primeiro${modo}${materia}"></td>
        <td class="materia-item-resultado segundo${modo}${materia}"></td>
        <td class="materia-item-resultado teceiro${modo}${materia}"></td>   
        <td class="materia-item-resultado mediaDos${modo}em${materia}"></td>
        <td class="materia-item-resultado soma${materia}"></td>
        <td class="materia-item-resultado pontosParaPassarem${materia}"></td>
    `
    tabela.appendChild(tr);
    }
    if(divisorASeremCalculados  == "2" || divisorASeremCalculados == 2){
        if(xtabela == 0){
            tabelaresultadostable.innerHTML = "";
            cabecalhoTabela(divisor.value,cabecalhoTabelaconst,tribise.value,tabelaresultadostable,xtabela); 
        }
        tr.innerHTML = 
    ` 
        <td class="materia-item-resultado titulo${materia}">${materia}</td>
        <td class="materia-item-resultado primeiro${modo}${materia}"></td>
        <td class="materia-item-resultado segundo${modo}${materia}"></td>   
        <td class="materia-item-resultado mediaDos${modo}em${materia}"></td>
        <td class="materia-item-resultado soma${materia}"></td>
        <td class="materia-item-resultado pontosParaPassarem${materia}"></td>
    `
    tabela.appendChild(tr);
    }
    if(divisorASeremCalculados  == "1" || divisorASeremCalculados == 1){
        if(xtabela == 0){
            tabelaresultadostable.innerHTML = "";
            cabecalhoTabela(divisor.value,cabecalhoTabelaconst,tribise.value,tabelaresultadostable,xtabela); 
        }
        tr.innerHTML = 
    ` 
        <td class="materia-item-resultado titulo${materia}">${materia}</td>
        <td class="materia-item-resultado primeiro${modo}${materia}"></td>
        <td class="materia-item-resultado mediaDos${modo}em${materia}"></td>
        <td class="materia-item-resultado soma${materia}"></td>
        <td class="materia-item-resultado pontosParaPassarem${materia}"></td>
        
    `
    
    tabela.appendChild(tr);

    }
 
}


