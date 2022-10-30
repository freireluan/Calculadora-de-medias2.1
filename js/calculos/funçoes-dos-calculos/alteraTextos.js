function alteraTextoConfiguracao(divisor){
    if(divisor.value == "Trimestres"){
        numneroASerCalculado[3].disabled = "disabled";
        numneroASerCalculado[2].removeAttribute("disabled");
        numneroASerCalculado[1].removeAttribute("disabled");
        numneroASerCalculado[0].removeAttribute("disabled");
        textoconfiguracoes.textContent = `Quantos ${divisor.value} serão calculados`;
    }
    if(divisor.value == "Semestres"){
        numneroASerCalculado[3].disabled = "disabled";
        numneroASerCalculado[2].disabled = "disabled";
        numneroASerCalculado[1].removeAttribute("disabled");
        numneroASerCalculado[0].removeAttribute("disabled");
        textoconfiguracoes.textContent = `Quantos ${divisor.value} serão calculados`;

    }
    if(divisor.value == "Bimestres"){
        numneroASerCalculado[3].removeAttribute("disabled");
        numneroASerCalculado[2].removeAttribute("disabled");
        numneroASerCalculado[1].removeAttribute("disabled");
        numneroASerCalculado[0].removeAttribute("disabled");
        textoconfiguracoes.textContent = `Quantos ${divisor.value} serão calculados`;

    }
}