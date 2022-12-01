setTimeout(() => {
  desenhaTabela(divisor.value, tribise.value, mediasgeraiselementopai);
}, 80);

confirmaConfiguraoes.addEventListener("click", () => {
  tabelaresultadostable.innerHTML = "";

  desenhaTabela(divisor.value, tribise.value, mediasgeraiselementopai);

  if (xtabela >= materiaASeremDesenhadas.length) {
    xtabela = 0;
  }
  if (xformulario >= materiaASeremDesenhadas.length) {
    xformulario = 0;
  }

  //console.log(`quantia ${tribise.value}, materia${materiaASeremDesenhadas[xtabela]} , formato${divisor.value}`)
  //criarmazenamento(materia , quantia , formato )

  materiaASeremDesenhadas.forEach(() => {
    criaTabela(
      materiaASeremDesenhadas[xtabela],
      tabelaresultadostable,
      tribise.value,
      divisor.value,
      xtabela
    );

    xtabela++;
  });
  materiaASeremDesenhadas.forEach(() => {
    criaCardsForms(
      materiaASeremDesenhadas[xformulario],
      tribise.value,
      divisor.value,
      xformulario
    );

    xformulario++;
  });
});

divisor.addEventListener("click", () => {
  mantemdadosnaTabelaDeMedias();

  tabelaresultadostable.innerHTML = "";

  desenhaTabela(divisor.value, tribise.value, mediasgeraiselementopai);

  alteraTextoConfiguracao(divisor);

  if (xtabela >= materiaASeremDesenhadas.length) {
    xtabela = 0;
  }
  if (xformulario >= materiaASeremDesenhadas.length) {
    xformulario = 0;
  }

  materiaASeremDesenhadas.forEach(() => {
    criaTabela(
      materiaASeremDesenhadas[xtabela],
      tabelaresultadostable,
      tribise.value,
      divisor.value,
      xtabela
    );

    xtabela++;
  });
  materiaASeremDesenhadas.forEach(() => {
    criaCardsForms(
      materiaASeremDesenhadas[xformulario],
      tribise.value,
      divisor.value,
      xformulario
    );

    xformulario++;
  });
});

tribise.addEventListener("click", () => {
  tabelaresultadostable.innerHTML = "";

  desenhaTabela(divisor.value, tribise.value, mediasgeraiselementopai);

  if (xtabela >= materiaASeremDesenhadas.length) {
    xtabela = 0;
  }
  if (xformulario >= materiaASeremDesenhadas.length) {
    xformulario = 0;
  }

  materiaASeremDesenhadas.forEach(() => {
    criaTabela(
      materiaASeremDesenhadas[xtabela],
      tabelaresultadostable,
      tribise.value,
      divisor.value,
      xtabela
    );

    xtabela++;
  });
  materiaASeremDesenhadas.forEach(() => {
    criaCardsForms(
      materiaASeremDesenhadas[xformulario],
      tribise.value,
      divisor.value,
      xformulario
    );

    xformulario++;
  });
  mantemdadosnaTabelaDeMedias();
});

mediaminima.addEventListener("click", () => {});

botaocalcular.addEventListener("click", (xtabela) => {
  if (xtabela >= materiaASeremDesenhadas.length) {
    xtabela = 0;
  }
  materiaASeremDesenhadas.forEach((index) => {
    criarmazenamento(index, tribise.value, divisor.value);
    calculaMediaGerais(
      JSON.parse(localStorage.getItem("v1")),
      JSON.parse(localStorage.getItem("v2")),
      JSON.parse(localStorage.getItem("v3")),
      JSON.parse(localStorage.getItem("v4")),
      tribise.value,
      materiaASeremDesenhadas.length
    );

    xtabela++;
  });

  mantemdadosnaTabelaDeMedias();
});

function mantemdadosnaTabelaDeMedias() {
  setTimeout(() => {
    materiaASeremDesenhadas.forEach((element) => {
      alteraTextosTabela(
        element,
        tribise.value,
        divisor.value,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).primeiro,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).segundo,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).terceiro,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).quarto
      );
      alteramedia(
        element,
        tribise.value,
        divisor.value,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).primeiro,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).segundo,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).terceiro,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).quarto
      );

      alteraSoma(
        element,
        tribise.value,
        divisor.value,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).primeiro,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).segundo,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).terceiro,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).quarto
      );
      alteraPontosParaPassar(
        element,
        tribise.value,
        divisor.value,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).primeiro,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).segundo,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).terceiro,
        JSON.parse(localStorage.getItem(`${element}${divisor.value}`)).quarto,
        mediaminima.value
      );
    });
  }, 100);
}
