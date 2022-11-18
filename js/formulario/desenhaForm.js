function criaCardsForms(materia,trimestres,formato,xformulario){
    
    let x = 1;
    const divpai = document.querySelector(".notas-form");
    const sectionp = document.createElement("div");
    sectionp.classList.add("form-notas-card"); 
    // sectionp.classList.add(`${materia}form`)
    if (xformulario == 0){

    divpai.innerHTML = "";
    }
    
    alteraTextos(materia , (trimestres) , formato);
    // console.log(JSON.parse(localStorage.getItem(`${materia}${formato}`)).primeiro);
    // console.log(JSON.parse(localStorage.getItem(`${materia}${formato}`)).segundo);
    // console.log(JSON.parse(localStorage.getItem(`${materia}${formato}`)).terceiro);
    // console.log(JSON.parse(localStorage.getItem(`${materia}${formato}`)) .quarto);
   
    if(materia == undefined || materia == "undefined"){

    }else{
        if(trimestres == "1" || trimestres == 1){
            sectionp.innerHTML = `
            <header>
                <h3>${materia}</h3>
            </header>
                <main class="conteudo-form">
                    <form action="" class="formulario-de-notas">
                         <p class="titulo-trimestre">${trimestres}° ${formato}</p>
                         <input type="tel" class="input-nota valor${formato}${trimestres}de${materia}"></form>
                 </main>
          
            
        `
    
        divpai.appendChild(sectionp);
    
    
    
        }
        if(trimestres == "2" || trimestres == 2){
            sectionp.innerHTML = `
            <header>
                <h3>${materia}</h3>
            </header>
                <main class="conteudo-form">
                    <form action="" class="formulario-de-notas">
                         
                         <p class="titulo-trimestre">${trimestres - 1}° ${formato}</p>
                         <input type="tel" class="input-nota valor${formato}${trimestres - 1}de${materia}">
                         <p class="titulo-trimestre">${trimestres}° ${formato}</p>
                         <input type="tel" class="input-nota valor${formato}${trimestres}de${materia}"></form>
                 </main>
          
            
        `
    
        divpai.appendChild(sectionp);
    
    
    
        }
        if(trimestres == "3" || trimestres == 3){
            sectionp.innerHTML = `
            <header>
                <h3>${materia}</h3>
            </header>
                <main class="conteudo-form">
                    <form action="" class="formulario-de-notas">
                         <p class="titulo-trimestre">${trimestres - 2}° ${formato}</p>
                         <input type="tel" class="input-nota valor${formato}${trimestres - 2}de${materia}">
                         <p class="titulo-trimestre">${trimestres - 1}° ${formato}</p>
                         <input type="tel" class="input-nota valor${formato}${trimestres - 1}de${materia}">
                         <p class="titulo-trimestre">${trimestres}° ${formato}</p>
                         <input type="tel" class="input-nota valor${formato}${trimestres}de${materia}"></form>
                 </main>
          
            
        `
    
        divpai.appendChild(sectionp);
    
    
    
        }
        if (trimestres == "4" || trimestres == 4 ) {
            sectionp.innerHTML = `
            <header>
                <h3>${materia}</h3>
            </header>
                <main class="conteudo-form">
                    <form action="" class="formulario-de-notas">
                         <p class="titulo-trimestre">${trimestres - 3}° ${formato}</p>
                         <input type="tel" class="input-nota valor${formato}${trimestres - 3}de${materia}">
                         <p class="titulo-trimestre">${trimestres - 2}° ${formato}</p>
                         <input type="tel" class="input-nota valor${formato}${trimestres - 2}de${materia}">
                         <p class="titulo-trimestre">${trimestres - 1}° ${formato}</p>
                         <input type="tel" class="input-nota valor${formato}${trimestres - 1}de${materia}">
                         <p class="titulo-trimestre">${trimestres}° ${formato}</p>
                         <input type="tel" class="input-nota valor${formato}${trimestres}de${materia}"></form>
                 </main>
          
            
        `
    
        divpai.appendChild(sectionp);
    
    
        }

    }

    

    










    // const cabeçalhoCard = document.createElement("header");
    // const titulomateria = document.createElement("h3");
    // const conteudop = document.createElement("main");
    // const formCard = document.createElement("form");
    // const tri1 = document.createElement("p");
    // const tri1Nota = document.createElement("input");
    // const tri2 = document.createElement("p");
    // const tri2Nota = document.createElement("input");
    // const tri3 = document.createElement("p");
    // const tri3Nota = document.createElement("input");

    // textoDoselementos(titulomateria,materia,x,tri1,tri2,tri3,trimestres)

    // formCard.appendChild(tri1);
    // formCard.appendChild(tri1Nota);
    // formCard.appendChild(tri2);
    // formCard.appendChild(tri2Nota);
    // formCard.appendChild(tri3);
    // formCard.appendChild(tri3Nota);



    
    // conteudop.appendChild(formCard);
    // cabeçalhoCard.appendChild(titulomateria);
    // sectionp.appendChild(cabeçalhoCard);
    // sectionp.appendChild(conteudop)
    // divpai.appendChild(sectionp);


     
    // titulomateria.classList.add("materia-titulo");
    // conteudop.classList.add("conteudo-form");
    // formCard.classList.add("formulario-de-notas");
    // tri1.classList.add("titulo-trimestre");
    // tri2.classList.add("titulo-trimestre");
    // tri3.classList.add("titulo-trimestre");
    // tri1Nota.classList.add("input-nota");
    // tri2Nota.classList.add("input-nota");
    // tri3Nota.classList.add("input-nota");

    // tri1Nota.type = "tel";
    // tri2Nota.type = "tel";
    // tri3Nota.type = "tel";

    // tri1Nota.value = 23

};








function textoDoselementos(titulomateria,materia,x,tri1,tri2,tri3,trimestres){

    titulomateria.textContent = materia;

    if (x <= trimestres) {
        tri1.textContent = `${x} ° Trimestre`;
        tri1.classList.add(`${materia}${x}`);
        x++;
        tri2.textContent = `${x}° Trimestre`;
        tri2.classList.add(`${materia}${x}`)
        x++;
        tri3.textContent = `${x}° Trimestre`;
        tri3.classList.add(`${materia}${x}`)
    }
}