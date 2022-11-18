const materiasFixas = ["Arte", "Biologia","Edcucação-Física", "Filosofia","Física","Geografia","História","Português", "Matemática" ,"Química","Sociologia","Edcucação-Financeira", "Ingles"];
// const materiasFixas = ["Artes","Biologia"];
let materiaRecaregaveis = [];
const materiaslista = document.querySelectorAll(".checkbox-materia");
const tabelaresultados = document.querySelector(".tabela-resultados");
const tabelaresultadostable = document.querySelector(".materia-tabela-resultado");
const cabecalhoTabelaconst = document.createElement("tr")
const listaDeMaterias = document.querySelector(".listaMaterias");
const configuracoes = document.querySelector(".configuracoes");
const adicionamateria = document.querySelector(".adicionar-materia");
const atualizacabecalho = document.querySelector("#cabecalho");
const tabela = document.querySelector("#tabelaresultadostribise");
const botaocalcular = document.querySelector(".botao-calcular");


//para os calculos 
const divisor = document.querySelector("#FormatoDeCalculo");
const tribise = document.querySelector("#TrimestresASeremCalculados");
const mediaminima = document.querySelector("#mediaminima");
const numneroASerCalculado = document.querySelectorAll(".quantos");

//animações das configurações
const textoconfiguracoes = document.querySelector("#texto-configuracoes-trimestres-a-ser-calculados");
const mediasgeraiselementopai = document.querySelector("#mediasGerais");

//botãozinho do menu 
const botaoMenu = document.querySelector("#checkbox-menu");
const menu = document.querySelector(".container");

//botao das configurações 
const confirmaConfiguraoes = document.querySelector("#configurar");




//Largura da tela para organizar o menu conforme a tela
let windowlargura = window.innerWidth;

//variaveis que são contadores que fazem o codigo funcionar
let xtabela = 0;
let xformulario = 0;
let xDaLista = 0;

//para as Divisões
let modulo = "";
let divisorQuantia = 0;
let mediaMinima = 0;


// materia Selecionadas
let materiaASeremDesenhadas = materiasFixas;



//notas
let nota1 = "";
let nota2 = "";
let nota3 = "";
let nota4 = "";
let media = "";
let soma = "";
let pontosParaPassar = "";
let v1 = 0;
let v2 = 0;
let v3 = 0;
let v4 = 0;











let xizinho = 0;



