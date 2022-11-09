let NotasdeArtes = {
    nota1 :0,
    nota2 : 0,
    nota3 : 0,
    nota4 : 0
}
let NotasDeBiologia = {
    nota1 :0,
    nota2 : 0,
    nota3 : 0,
    nota4 : 0

}
function calculaMédiasMaterias(materia,quantiaDivisor,tipoDeDivisor,Notasmateria) {



    console.log(tipoDeDivisor,materia)
    if(quantiaDivisor == "4"){
        Notasmateria.nota4 = document.querySelector(`.valor${tipoDeDivisor}4de${materia}`).value ;
        Notasmateria.nota3 = document.querySelector(`.valor${tipoDeDivisor}3de${materia}`).value ;
        Notasmateria.nota2 = document.querySelector(`.valor${tipoDeDivisor}2de${materia}`).value ;
        Notasmateria.nota1 = document.querySelector(`.valor${tipoDeDivisor}1de${materia}`).value ;


    }
    if(quantiaDivisor == "3"){
        Notasmateria.nota3 = document.querySelector(`.valor${tipoDeDivisor}3de${materia}`).value ;
        Notasmateria.nota2 = document.querySelector(`.valor${tipoDeDivisor}2de${materia}`).value ;
        Notasmateria.nota1 = document.querySelector(`.valor${tipoDeDivisor}1de${materia}`).value ;
        
    }
    if(quantiaDivisor == "2"){
        console.log(`.valor${tipoDeDivisor}2de${materia}`)
        Notasmateria.nota2 = document.querySelector(`.valor${tipoDeDivisor}2de${materia}`).value ;
        Notasmateria.nota1 = document.querySelector(`.valor${tipoDeDivisor}1de${materia}`).value ;

        
    }
    if(quantiaDivisor == "1"){
        Notasmateria.nota1 = document.querySelector(`.valor${tipoDeDivisor}1de${materia}`).value ;
        
    }
    
    console.log(document.querySelector(`.valor${tipoDeDivisor}1de${materia}`).value )

    

}