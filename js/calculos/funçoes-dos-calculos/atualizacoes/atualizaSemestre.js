
function  verificaSemestres(divisorcalculado,tabelaGeral,mediasgeraiselementopai){
    mediasgeraiselementopai.innerHTML = "";
    if(divisorcalculado == 2){
        tabelaGeral.innerHTML = ` 
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${divisorcalculado - 1}° Semestre</td>
            <td class="celulaMediasGerais media${divisorcalculado - 1 }" id="media${divisorcalculado - 1}"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${divisorcalculado}° Semestre</td>
            <td class="celulaMediasGerais media${divisorcalculado }" id="media${divisorcalculado}"></td>            
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média Geral</td>
            <td class="celulaMediasGerais mediageralBimestral"></td>   
        </tr>

    `
    
    mediasgeraiselementopai.appendChild(tabelaGeral);
    
    }
    if(divisorcalculado == 1){
        tabelaGeral.innerHTML = ` 
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${divisorcalculado}° Semestre</td>
            <td class="celulaMediasGerais media${divisorcalculado  } " id="media${divisorcalculado}"></td>            
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média Geral</td>
            <td class="celulaMediasGerais mediageralBimestral"></td>   
        </tr>
    `

    mediasgeraiselementopai.appendChild(tabelaGeral);
        

    }

}