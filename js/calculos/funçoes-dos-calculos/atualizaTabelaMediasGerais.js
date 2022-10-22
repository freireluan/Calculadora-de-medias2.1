function atualizaTabelamediasGerais(divisor){


    if(divisor.value == "Trimestre"){
       
    }
    if(divisor.value == "Bimestre"){
       
    }
    if(divisor.value == "Semestre"){
       
    }

}





function desenhaTabela(){
    const tabelaGeral = document.createElement("table");
    tabelaGeral.classList.add("tabelaMedias");
    tabelaGeral.innerHTML = `
    <tr class="linhaMediasGerais">
        <td class="celulaMediasGerais">Média 1° Trimestre</td>
        <td class="celulaMediasGerais"></td>
    </tr>
    <tr class="linhaMediasGerais">
        <td class="celulaMediasGerais">Média 2° Trimestre</td>
        <td class="celulaMediasGerais"></td>            
    </tr>
    <tr class="linhaMediasGerais">
        <td class="celulaMediasGerais">Média 3° Trimestre</td>
        <td class="celulaMediasGerais"></td>
    </tr>
    <tr class="linhaMediasGerais">
        <td class="celulaMediasGerais">Média Geral</td>
        <td class="celulaMediasGerais"></td>   
    </tr>
    `
    mediasgeraiselementopai.appendChild(tabelaGeral);




        
}

desenhaTabela();