
function cabecalhoTabela(divisor,cabecalhoTabelaconst,numneroASerCalculado,tabelaresultadostable,xtabela){

  
         cabecalhoTabelaconst.innerHTML = "";
    
    if(numneroASerCalculado == "4"){
        cabecalhoTabelaconst.innerHTML = `
            <th class="materia-item-resultado">Matéria</th>
            <th class="materia-item-resultado">${numneroASerCalculado - 3}° ${divisor}</th>
            <th class="materia-item-resultado">${numneroASerCalculado - 2}° ${divisor}</th>
            <th class="materia-item-resultado">${numneroASerCalculado - 1}° ${divisor}</th>
            <th class="materia-item-resultado">${numneroASerCalculado}° ${divisor}</th>
            <th class="materia-item-resultado">Média</th>
            <th class="materia-item-resultado">Soma</th>
            <th class="materia-item-resultado">Pontos Para Passar</th> 
            
        `
        tabelaresultadostable.appendChild(cabecalhoTabelaconst)
       
        

    }
    if(numneroASerCalculado == "3"){
        cabecalhoTabelaconst.innerHTML = `
            <th class="materia-item-resultado">Matéria</th>
            <th class="materia-item-resultado">${numneroASerCalculado - 2}° ${divisor}</th>
            <th class="materia-item-resultado">${numneroASerCalculado - 1}° ${divisor}</th>
            <th class="materia-item-resultado">${numneroASerCalculado}° ${divisor}</th>
            <th class="materia-item-resultado">Média</th>
            <th class="materia-item-resultado">Soma</th>
            <th class="materia-item-resultado">Pontos Para Passar</th> 
            
        `
        tabelaresultadostable.appendChild(cabecalhoTabelaconst)
       

    }
    if(numneroASerCalculado == "2"){
        cabecalhoTabelaconst.innerHTML = `
            <th class="materia-item-resultado">Matéria</th>
            <th class="materia-item-resultado">${numneroASerCalculado - 1}° ${divisor}</th>
            <th class="materia-item-resultado">${numneroASerCalculado}° ${divisor}</th>
            <th class="materia-item-resultado">Média</th>
            <th class="materia-item-resultado">Soma</th>
            <th class="materia-item-resultado">Pontos Para Passar</th> 
            
        `
        tabelaresultadostable.appendChild(cabecalhoTabelaconst)
       
        

    }
    if(numneroASerCalculado == "1"){
        cabecalhoTabelaconst.innerHTML = `
            <th class="materia-item-resultado">Matéria</th>
            <th class="materia-item-resultado">${numneroASerCalculado}° ${divisor}</th>
            <th class="materia-item-resultado">Média</th>
            <th class="materia-item-resultado">Soma</th>
            <th class="materia-item-resultado">Pontos Para Passar</th> 
            
        `

        tabelaresultadostable.appendChild(cabecalhoTabelaconst);
       
        

    }
    tabelaresultadostable.appendChild(cabecalhoTabelaconst)
    
    
    }
    
    
  
    
    






    

