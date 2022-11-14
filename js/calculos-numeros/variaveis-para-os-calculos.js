function criarmazenamento(materia , quantia , formato ){
    
   

    
    if (quantia == 1 || quantia =="1"){
        nota1 = document.querySelector(`.valor${formato}${quantia}de${materia}`).value;
        media = nota1;
        soma = nota1;
            }
    if (quantia == 2 || quantia =="2"){
        nota1 = document.querySelector(`.valor${formato}${quantia - 1}de${materia}`).value;
        nota2 = document.querySelector(`.valor${formato}${quantia}de${materia}`).value;
     
        //media = parseInt((nota1 + nota2)/quantia);
        //soma = parseInt(nota1 + nota2);
     }
     if (quantia == 3 || quantia =="3"){
        nota1 = document.querySelector(`.valor${formato}${quantia - 2}de${materia}`).value;
        nota2 = document.querySelector(`.valor${formato}${quantia - 1}de${materia}`).value;
        nota3 = document.querySelector(`.valor${formato}${quantia}de${materia}`).value;
       // media = parseInt((nota1 + nota2 + nota3)/quantia)
        //soma = parseInt(nota1 + nota2 + nota3)

     }
     if (quantia == 4 || quantia =="4"){
        nota1 = document.querySelector(`.valor${formato}${quantia - 3}de${materia}`).value;
        nota2 = document.querySelector(`.valor${formato}${quantia - 2}de${materia}`).value;
        nota3 = document.querySelector(`.valor${formato}${quantia - 1}de${materia}`).value;
        nota4 = document.querySelector(`.valor${formato}${quantia}de${materia}`).value;
       // media = parseInt((nota1 + nota2 + nota3 + nota4)/quantia)
        //soma = parseInt(nota1 + nota2 + nota3 + nota4)
       
     }
     



    let materiaNotas = {
        primeiro :"" ,
        segundo:"",
        terceiro:"",
        quarto:""
    }
    if(quantia == 4 || quantia =="4"){
        materiaNotas = {
            primeiro : nota1 ,
            segundo : nota2,
            terceiro : nota3,
            quarto : nota4
      //      pontosParaPassar:""
        }

    }
    if(quantia == 3 || quantia =="3"){
        materiaNotas = {
            primeiro : nota1 ,
            segundo : nota2,
            terceiro : nota3
            //pontosParaPassar:""
        }

    }
    if(quantia == 2 || quantia =="2"){
        materiaNotas = {
            primeiro : nota1,
            segundo : nota2
            //pontosParaPassar:""
        }

    }
    if(quantia == 1 || quantia =="1"){
        materiaNotas = {
            primeiro : nota1
            //pontosParaPassar:""
           
        }

    }


    localStorage.setItem(`${materia}${formato}`, JSON.stringify(materiaNotas));


    alteraTextosTabela(materia , quantia , formato ,
         JSON.parse(localStorage.getItem(`${materia}${formato}`)).primeiro,
         JSON.parse(localStorage.getItem(`${materia}${formato}`)).segundo,
         JSON.parse(localStorage.getItem(`${materia}${formato}`)).terceiro,
         JSON.parse(localStorage.getItem(`${materia}${formato}`)).quarto
         );
    alteramedia(materia , quantia , formato,  
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).primeiro,
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).segundo,
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).terceiro,
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).quarto);

    alteraSoma(materia , quantia , formato,  
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).primeiro,
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).segundo,
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).terceiro,
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).quarto);
    alteraPontosParaPassar(materia , quantia , formato,  
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).primeiro,
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).segundo,
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).terceiro,
        JSON.parse(localStorage.getItem(`${materia}${formato}`)).quarto,
        mediaminima.value);




    if(xizinho >= materiaASeremDesenhadas.length){
        xizinho = 0;
    }



    calculaMediasGerais(
    JSON.parse(localStorage.getItem(`${materia}${formato}`)).primeiro
    ,JSON.parse(localStorage.getItem(`${materia}${formato}`)).segundo
    , JSON.parse(localStorage.getItem(`${materia}${formato}`)).terceiro
    ,JSON.parse(localStorage.getItem(`${materia}${formato}`)).quarto
    ,quantia,v1,v2,v3,v4,materiaASeremDesenhadas.length,xizinho);
    xizinho++;

    



}




















    // materiaASeremDesenhadas.forEach(()=>{
    //     alteraTextos(index , tribise.value , divisor.value ,
    //         JSON.parse(localStorage.getItem(`${materia}${formato}`)).primeiro,
    //         JSON.parse(localStorage.getItem(`${materia}${formato}`)).segundo,
    //         JSON.parse(localStorage.getItem(`${materia}${formato}`)).terceiro,
    //         JSON.parse(localStorage.getItem(`${materia}${formato}`)).quarto)

    //     })


  



















































































































































































































// let NotasdeArtes = {
//     nota1 :0,
//     nota2 : 0,
//     nota3 : 0,
//     nota4 : 0
// }
// let NotasDeBiologia = {
//     nota1 :0,
//     nota2 : 0,
//     nota3 : 0,
//     nota4 : 0

// }
// function calculaMédiasMaterias(materia,quantiaDivisor,tipoDeDivisor,Notasmateria) {



//     console.log(tipoDeDivisor,materia)
//     if(quantiaDivisor == "4"){
//         Notasmateria.nota4 = document.querySelector(`.valor${tipoDeDivisor}4de${materia}`).value ;
//         Notasmateria.nota3 = document.querySelector(`.valor${tipoDeDivisor}3de${materia}`).value ;
//         Notasmateria.nota2 = document.querySelector(`.valor${tipoDeDivisor}2de${materia}`).value ;
//         Notasmateria.nota1 = document.querySelector(`.valor${tipoDeDivisor}1de${materia}`).value ;


//     }
//     if(quantiaDivisor == "3"){
//         Notasmateria.nota3 = document.querySelector(`.valor${tipoDeDivisor}3de${materia}`).value ;
//         Notasmateria.nota2 = document.querySelector(`.valor${tipoDeDivisor}2de${materia}`).value ;
//         Notasmateria.nota1 = document.querySelector(`.valor${tipoDeDivisor}1de${materia}`).value ;
        
//     }
//     if(quantiaDivisor == "2"){
//         console.log(`.valor${tipoDeDivisor}2de${materia}`)
//         Notasmateria.nota2 = document.querySelector(`.valor${tipoDeDivisor}2de${materia}`).value ;
//         Notasmateria.nota1 = document.querySelector(`.valor${tipoDeDivisor}1de${materia}`).value ;

        
//     }
//     if(quantiaDivisor == "1"){
//         Notasmateria.nota1 = document.querySelector(`.valor${tipoDeDivisor}1de${materia}`).value ;
        
//     }
    
//     console.log(document.querySelector(`.valor${tipoDeDivisor}1de${materia}`).value )

    

// }