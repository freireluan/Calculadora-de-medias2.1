function verificaTrimestres(divisorcalculado,tabelaGeral,mediasgeraiselementopai){
    if(divisorcalculado == 3){
        tabelaGeral.innerHTML = `
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média 1° Trimestre</td>
            <td class="celulaMediasGerais media${divisorcalculado - 2 }"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais media${divisorcalculado - 1 }">Média 2° Trimestre</td>
            <td class="celulaMediasGerais"></td>            
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais media${divisorcalculado }">Média 3° Trimestre</td>
            <td class="celulaMediasGerais"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média Geral</td>
            <td class="celulaMediasGerais"></td>   
        </tr>
        `
    mediasgeraiselementopai.appendChild(tabelaGeral);
    }else{
        if(divisorcalculado == 2){
            tabelaGeral.innerHTML = `
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais media${divisorcalculado  }">Média 1° Trimestre</td>
            <td class="celulaMediasGerais"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais media${divisorcalculado - 1 }">Média 2° Trimestre</td>
            <td class="celulaMediasGerais"></td>            
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média Geral</td>
            <td class="celulaMediasGerais"></td>   
        </tr>
        `
        mediasgeraiselementopai.appendChild(tabelaGeral);

        }else{
            if(divisorcalculado == 1){
                tabelaGeral.innerHTML = `
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média 1° Trimestre</td>
            <td class="celulaMediasGerais media${divisorcalculado  }"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média Geral</td>
            <td class="celulaMediasGerais"></td>   
        </tr>
        `
        mediasgeraiselementopai.appendChild(tabelaGeral);


            }
        }
    }
}