function verificaBimestres(divisorcalculado,tabelaGeral,mediasgeraiselementopai){
    mediasgeraiselementopai.innerHTML = "";
    if(divisorcalculado == 4){
        tabelaGeral.innerHTML = ` 
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média 1° Bimestre</td>
            <td class="celulaMediasGerais media${divisorcalculado - 3}"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média 2° Bimestre</td>
            <td class="celulaMediasGerais media${divisorcalculado - 2}"></td>            
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média 3° Bimestre</td>
            <td class="celulaMediasGerais media${divisorcalculado - 1}"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média 4° Bimestre</td>
            <td class="celulaMediasGerais media${divisorcalculado}"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média Geral</td>
            <td class="celulaMediasGerais mediageralBimestral"></td>   
        </tr>
    `
    
        

    }
        if(divisorcalculado == 3){
            tabelaGeral.innerHTML = ` 
            <tr class="linhaMediasGerais">
                <td class="celulaMediasGerais ">Média 1° Bimestre</td>
                <td class="celulaMediasGerais media${divisorcalculado - 2}"></td>
            </tr>
            <tr class="linhaMediasGerais">
                <td class="celulaMediasGerais">Média 2° Bimestre</td>
                <td class="celulaMediasGerais media${divisorcalculado - 1 }"></td>            
            </tr>
            <tr class="linhaMediasGerais">
                <td class="celulaMediasGerais">Média 3° Bimestre</td>
                <td class="celulaMediasGerais media${divisorcalculado}"></td>
            </tr>
            <tr class="linhaMediasGerais">
                <td class="celulaMediasGerais">Média Geral</td>
                <td class="celulaMediasGerais mediageralBimestral"></td>   
            </tr>
        `
       
            
    
        }
            if(divisorcalculado == 2){
                tabelaGeral.innerHTML = ` 
                <tr class="linhaMediasGerais">
                    <td class="celulaMediasGerais">Média 1° Bimestre</td>
                    <td class="celulaMediasGerais media${divisorcalculado - 1}"></td>
                </tr>
                <tr class="linhaMediasGerais">
                    <td class="celulaMediasGerais">Média 2° Bimestre</td>
                    <td class="celulaMediasGerais media${divisorcalculado }"></td>            
                </tr>
                <tr class="linhaMediasGerais">
                    <td class="celulaMediasGerais">Média Geral</td>
                    <td class="celulaMediasGerais mediageralBimestral"></td>   
                </tr>
            `
 
            }
                if(divisorcalculado == 1){
                    tabelaGeral.innerHTML = ` 
                    <tr class="linhaMediasGerais">
                        <td class="celulaMediasGerais">Média 1° Bimestre</td>
                        <td class="celulaMediasGerais media${divisorcalculado}"></td>
                    </tr>
                    <tr class="linhaMediasGerais">
                        <td class="celulaMediasGerais">Média Geral</td>
                        <td class="celulaMediasGerais mediageral"></td>   
                    </tr>
                `
               
            }
            console.log(divisorcalculado)
            mediasgeraiselementopai.appendChild(tabelaGeral);
 }