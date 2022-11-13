
function desenhaTabela(divisor,divisorcalculado,mediasgeraiselementopai){
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
    atualizaTabela(divisor,divisorcalculado,tabelaGeral,mediasgeraiselementopai)




        
}



function atualizaTabela(divisor,divisorcalculado,tabelaGeral,mediasgeraiselementopai){
    mediasgeraiselementopai.innerHTML = "";
    
     if(divisor == "Trimestre"){
         verificaTrimestres(divisorcalculado,tabelaGeral,mediasgeraiselementopai);
     }
     if(divisor == "Bimestre"){
          verificaBimestres(divisorcalculado,tabelaGeral,mediasgeraiselementopai);
      }
     if(divisor == "Semestre"){
          verificaSemestres(divisorcalculado,tabelaGeral,mediasgeraiselementopai);
    }

    
}












