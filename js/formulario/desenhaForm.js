function criaCardsForms(materia,trimestres){
    let x = 1;
    const divpai = document.querySelector(".notas-form");
    const sectionp = document.createElement("div");
    sectionp.classList.add("form-notas-card"); 
    // sectionp.classList.add(`${materia}form`)

    sectionp.innerHTML = `

        
        <header>
            <h3>${materia}</h3>
        </header>
            <main class="conteudo-form">
                <form action="" class="formulario-de-notas">
                     <p class="titulo-trimestre">${trimestres - 2}° Trimestre</p>
                     <input type="tel" class="input-nota valortrimestre${trimestres - 2}de${materia}">
                     <p class="titulo-trimestre">${trimestres - 1}° Trimestre</p>
                     <input type="tel" class="input-nota valortrimestre${trimestres - 1}de${materia}">
                     <p class="titulo-trimestre">${trimestres}° Trimestre</p>
                     <input type="tel" class="input-nota valortrimestre${trimestres}de${materia}"></form>
             </main>
      
        
    `

    divpai.appendChild(sectionp);












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