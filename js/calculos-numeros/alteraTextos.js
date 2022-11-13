function alteraTextos(materia , quantia , formato , nota1,nota2,nota3,nota4){
    if(quantia == 4 || quantia == "4"){
        document.querySelector(`.valor${formato}${quantia - 3}de${materia}`).value = nota1;
        document.querySelector(`.valor${formato}${quantia - 2}de${materia}`).value = nota2;
        document.querySelector(`.valor${formato}${quantia - 1}de${materia}`).value = nota3;
        document.querySelector(`.valor${formato}${quantia - 0}de${materia}`).value = nota4;

    }
    if(quantia == 3 || quantia == "3"){
        document.querySelector(`.valor${formato}${quantia - 2}de${materia}`).value = nota1;
        document.querySelector(`.valor${formato}${quantia - 1}de${materia}`).value = nota2;
        document.querySelector(`.valor${formato}${quantia - 0}de${materia}`).value = nota3;

    }
    if(quantia == 2 || quantia == "2"){
        document.querySelector(`.valor${formato}${quantia - 1}de${materia}`).value = nota1;
        document.querySelector(`.valor${formato}${quantia - 0}de${materia}`).value = nota2;

    }
    if(quantia == 1 || quantia == "1"){
        let x = document.querySelector(`.valor${formato}${quantia - 0}de${materia}`).value = nota1;
        

    }


}



function alteraTextosTabela(materia , quantia , formato , nota1,nota2,nota3,nota4){
    if(quantia == 4 || quantia == "4"){
        document.querySelector(`.primeiro${formato}${materia}`).textContent = nota1;
        document.querySelector(`.segundo${formato}${materia}`).textContent = nota2;
        document.querySelector(`.terceiro${formato}${materia}`).textContent = nota3;
        document.querySelector(`.quarto${formato}${materia}`).textContent = nota4;

    }
    if(quantia == 3 || quantia == "3"){
        document.querySelector(`.primeiro${formato}${materia}`).textContent = nota1;
        document.querySelector(`.segundo${formato}${materia}`).textContent = nota2;
        document.querySelector(`.terceiro${formato}${materia}`).textContent = nota3;

    }
    if(quantia == 2 || quantia == "2"){
        document.querySelector(`.primeiro${formato}${materia}`).textContent = nota1;
        document.querySelector(`.segundo${formato}${materia}`).textContent = nota2;

    }
    if(quantia == 1 || quantia == "1"){
        document.querySelector(`.primeiro${formato}${materia}`).textContent = nota1;
        

    }


}
