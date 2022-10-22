const materiasFixas = ["Arte", "Biologia","Edc.Física", "Filosofia","Física","Geografia","História","Português", "Matemática" ,"Química","Sociologia","Edc.Financeira", "Ingles"];
const tabelaresultados = document.querySelector(".tabela-resultados");
const tabelaresultadostable = document.querySelector(".materia-tabela-resultado");
const listaDeMaterias = document.querySelector(".listaMaterias");
const configuracoes = document.querySelector(".configuracoes");
const adicionamateria = document.querySelector(".adicionar-materia");


//para os calculos 
const divisor = document.querySelector("#FormatoDeCalculo");
const tribise = document.querySelector("#TrimestresASeremCalculados");
const media = document.querySelector("#mediaminima");
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