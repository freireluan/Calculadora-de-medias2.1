function atualizaTabelaMediasGerais(formato,quantia,tabelaGeral,mediasgeraiselementopai){
    mediasgeraiselementopai.innerHTML = "";

    if(quantia == 4 || quantia == "4"){
        tabelaGeral.innerHTML = `
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${quantia - 3}° ${formato}</td>
            <td class="celulaMediasGerais" id = "media${quantia - 3}"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${quantia - 2}° ${formato}</td>
            <td class="celulaMediasGerais" id = "media${quantia - 2}"></td>
        </tr> 
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${quantia - 1}° ${formato}</td>
            <td class="celulaMediasGerais" id = "media${quantia - 1}"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${quantia}°  ${formato}</td>
            <td class="celulaMediasGerais" id = "media${quantia}"></td>            
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média Geral</td>
            <td class="celulaMediasGerais" id="mediaGeral"></td>   
        </tr>

    `

    }
    if(quantia == 3 || quantia == "3"){
        tabelaGeral.innerHTML = `
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${quantia - 2}° ${formato}</td>
            <td class="celulaMediasGerais" id = "media${quantia - 2}"></td>
        </tr> 
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${quantia - 1}° ${formato}</td>
            <td class="celulaMediasGerais" id = "media${quantia - 1}"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${quantia}°  ${formato}</td>
            <td class="celulaMediasGerais" id = "media${quantia}"></td>            
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média Geral</td>
            <td class="celulaMediasGerais" id="mediaGeral"></td>   
        </tr>

    `

    }
    if(quantia == 2 || quantia == "2"){
        tabelaGeral.innerHTML = `
       
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${quantia - 1}° ${formato}</td>
            <td class="celulaMediasGerais" id = "media${quantia - 1}"></td>
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${quantia}°  ${formato}</td>
            <td class="celulaMediasGerais" id = "media${quantia}"></td>            
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média Geral</td>
            <td class="celulaMediasGerais" id="mediaGeral"></td>   
        </tr>

    `

    }
    if(quantia == 1 || quantia == "1"){
        tabelaGeral.innerHTML = `
        
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média ${quantia}°  ${formato}</td>
            <td class="celulaMediasGerais" id = "media${quantia}"></td>            
        </tr>
        <tr class="linhaMediasGerais">
            <td class="celulaMediasGerais">Média Geral</td>
            <td class="celulaMediasGerais" id="mediaGeral"></td>   
        </tr>

    `

    }
    
    mediasgeraiselementopai.appendChild(tabelaGeral);
    


}
