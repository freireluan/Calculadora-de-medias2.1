function alteraTextos(materia, quantia, formato) {
  quantia = parseInt(quantia);
  setTimeout(() => {
    nota1 = JSON.parse(localStorage.getItem(`${materia}${formato}`)).primeiro;
    nota2 = JSON.parse(localStorage.getItem(`${materia}${formato}`)).segundo;
    nota3 = JSON.parse(localStorage.getItem(`${materia}${formato}`)).terceiro;
    nota4 = JSON.parse(localStorage.getItem(`${materia}${formato}`)).quarto;
    if (quantia == 4 || quantia == "4") {
      document.querySelector(
        `.valor${formato}${quantia - 3}de${materia}`
      ).value = nota1;
      document.querySelector(
        `.valor${formato}${quantia - 2}de${materia}`
      ).value = nota2;
      document.querySelector(
        `.valor${formato}${quantia - 1}de${materia}`
      ).value = nota3;
      document.querySelector(`.valor${formato}${quantia}de${materia}`).value =
        nota4;

      if (true) {
        if (nota1 == undefined) {
          document.querySelector(
            `.valor${formato}${quantia - 3}de${materia}`
          ).value = "";
        }
        if (nota2 == undefined) {
          document.querySelector(
            `.valor${formato}${quantia - 2}de${materia}`
          ).value = "";
        }
        if (nota3 == undefined) {
          document.querySelector(
            `.valor${formato}${quantia - 1}de${materia}`
          ).value = "";
        }
        if (nota4 == undefined) {
          document.querySelector(
            `.valor${formato}${quantia}de${materia}`
          ).value = "";
        }
      }
    }
    if (quantia == 3 || quantia == "3") {
      document.querySelector(
        `.valor${formato}${quantia - 2}de${materia}`
      ).value = nota1;
      document.querySelector(
        `.valor${formato}${quantia - 1}de${materia}`
      ).value = nota2;
      document.querySelector(`.valor${formato}${quantia}de${materia}`).value =
        nota3;
      if (true) {
        if (nota1 == undefined) {
          document.querySelector(
            `.valor${formato}${quantia - 2}de${materia}`
          ).value = "";
        }
        if (nota2 == undefined) {
          document.querySelector(
            `.valor${formato}${quantia - 1}de${materia}`
          ).value = "";
        }
        if (nota3 == undefined) {
          document.querySelector(
            `.valor${formato}${quantia}de${materia}`
          ).value = "";
        }
      }
    }
    if (quantia == 2 || quantia == "2") {
      document.querySelector(
        `.valor${formato}${quantia - 1}de${materia}`
      ).value = nota1;
      document.querySelector(`.valor${formato}${quantia}de${materia}`).value =
        nota2;
      if (true) {
        if (nota1 == undefined) {
          document.querySelector(
            `.valor${formato}${quantia - 1}de${materia}`
          ).value = "";
        }
        if (nota2 == undefined) {
          document.querySelector(
            `.valor${formato}${quantia}de${materia}`
          ).value = "";
        }
      }
    }
    if (quantia == 1 || quantia == "1") {
      document.querySelector(`.valor${formato}${quantia}de${materia}`).value =
        nota1;
      if (true) {
        if (nota1 == undefined) {
          document.querySelector(
            `.valor${formato}${quantia}de${materia}`
          ).value = "";
        }
      }
    }
  }, 700);
}

function alteraTextosTabela(
  materia,
  quantia,
  formato,
  nota1,
  nota2,
  nota3,
  nota4
) {
  

  if (quantia == 4 || quantia == "4") {
    document.querySelector(`.primeiro${formato}${materia}`).textContent = nota1;
    document.querySelector(`.segundo${formato}${materia}`).textContent = nota2;
    document.querySelector(`.terceiro${formato}${materia}`).textContent = nota3;
    document.querySelector(`.quarto${formato}${materia}`).textContent = nota4;
  }
  if (quantia == 3 || quantia == "3") {
    document.querySelector(`.primeiro${formato}${materia}`).textContent = nota1;
    document.querySelector(`.segundo${formato}${materia}`).textContent = nota2;
    document.querySelector(`.terceiro${formato}${materia}`).textContent = nota3;
  }
  if (quantia == 2 || quantia == "2") {
    document.querySelector(`.primeiro${formato}${materia}`).textContent = nota1;
    document.querySelector(`.segundo${formato}${materia}`).textContent = nota2;
  }
  if (quantia == 1 || quantia == "1") {
    document.querySelector(`.primeiro${formato}${materia}`).textContent = nota1;
  }
}
