const materiasFixas = ["Arte", "Biologia","Edc.Física", "Filosofia","Física","Geografia","História","Português", "Matemática" ,"Química","Sociologia","Edc.Financeira", "Ingles"];
const tabelaresultados = document.querySelector(".tabela-resultados");
const tabelaresultadostable = document.querySelector(".materia-tabela-resultado");
const listaDeMaterias = document.querySelector(".listaMaterias");
const configuracoes = document.querySelector(".configuracoes");
const adicionamateria = document.querySelector(".adicionar-materia");
const menu = document.querySelector(".container");
const divisor = document.querySelector(".modulosCalculados").querySelector("select");
const tribise = document.querySelector(".modulodeDivisoes");
const media = document.querySelector(".media");
const botaoMenu = document.querySelector("#checkbox-menu");





let windowlargura = window.innerWidth;
let xtabela = 0;
let xformulario = 0;
let xDaLista = 0;