function desenhaLista(materia){
    const itemdaLista = document.createElement("div");
   

    itemdaLista.innerHTML = `
        <h4 class="materiaDaListaTitulo listaDemateriasElemento${materia}">${materia}</h4>
        <input type="checkbox" id=" checkboxDaMateriaDe${materia}" class="checkbox-materia" checked>
        
    `
    listaDeMaterias.appendChild(itemdaLista);
    itemdaLista.classList.add("materia-item");
    itemdaLista.classList.add(`ItemDaLista${materia}`);

}

function criarmazenamento(materia , quantia , formato ){

    
    if (quantia == 1 || quantia =="1"){
        nota1 = document.querySelector(`.valor${formato}${quantia}de${materia}`).value;
        console.log(nota1)
    }
    if (quantia == 2 || quantia =="2"){
        nota1 = document.querySelector(`.valor${formato}${quantia - 1}de${materia}`).value;
        nota2 = document.querySelector(`.valor${formato}${quantia}de${materia}`).value;
        console.log(nota1,nota2)
     }
     if (quantia == 3 || quantia =="3"){
        nota1 = document.querySelector(`.valor${formato}${quantia - 2}de${materia}`).value;
        nota2 = document.querySelector(`.valor${formato}${quantia - 1}de${materia}`).value;
        nota3 = document.querySelector(`.valor${formato}${quantia}de${materia}`).value;
        console.log(nota1,nota2,nota3)
     }
     if (quantia == 4 || quantia =="4"){
        nota1 = document.querySelector(`.valor${formato}${quantia - 3}de${materia}`).value;
        nota2 = document.querySelector(`.valor${formato}${quantia - 2}de${materia}`).value;
        nota3 = document.querySelector(`.valor${formato}${quantia - 1}de${materia}`).value;
        nota4 = document.querySelector(`.valor${formato}${quantia}de${materia}`).value;
        console.log(nota1,nota2,nota3,nota4)
     }
     



    let materiaNotas = {
        primeiro :"" ,
        segundo:"",
        terceiro:"",
        quarto:""
    }
    if(quantia == 4 || quantia =="4"){
        materiaNotas = {
            primeiro :nota1 ,
            segundo : nota2,
            terceiro: nota3,
            quarto: nota4
        }

    }
    if(quantia == 3 || quantia =="3"){
        materiaNotas = {
            primeiro :nota1 ,
            segundo:nota2,
            terceiro:nota3
        }

    }
    if(quantia == 2 || quantia =="2"){
        materiaNotas = {
            primeiro :nota1,
            segundo:nota2,
        }

    }
    if(quantia == 1 || quantia =="1"){
        materiaNotas = {
            primeiro :nota1 
           
        }

    }


    localStorage.setItem(`${materia}${formato}`, JSON.stringify(materiaNotas));
}








//imagem da lixeira nas matérias
//<div class="div-apagar">
//<img src="./img/lixeira.png" alt="Botão De Apagar" class="imagem-apagar imagemApagarDaMateriaDe${materia}">
//</div>