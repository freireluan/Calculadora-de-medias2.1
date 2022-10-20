botaoMenu.addEventListener("click",()=>{
    let status = botaoMenu.checked;
    if(status == true){
        listaDeMaterias.classList.remove("naoesxiste");
        adicionamateria.classList.remove("naoesxiste");
        configuracoes.classList.remove("naoesxiste");
        
    }else{
        if(status == false){
            listaDeMaterias.classList.add("naoesxiste");
            adicionamateria.classList.add("naoesxiste");
            configuracoes.classList.add("naoesxiste");
        }
    }

})







if(windowlargura > 800 ){
    menu.classList.add("naoesxiste");

    listaDeMaterias.classList.remove("naoesxiste");

}else{
    if(windowlargura < 800){
        listaDeMaterias.classList.add("naoesxiste");
        adicionamateria.classList.add("naoesxiste");
        configuracoes.classList.add("naoesxiste");

        menu.classList.remove("naoesxiste");
    }
    
}