


function calculaMediasGerais(n1,n2,n3,n4,quantia,v1,v2,v3,v4,array,x){
    if(x == 0 || x == "0"){
        localStorage.setItem("v1" , JSON.stringify(v1));
        localStorage.setItem("v2" , JSON.stringify(v2));
        localStorage.setItem("v3" , JSON.stringify(v3));
        localStorage.setItem("v4" , JSON.stringify(v4));
    }
    if(x >= 0 || x >= "0"){
        v1 = JSON.parse(localStorage.getItem("v1"));
        v2 = JSON.parse(localStorage.getItem("v2"));
        v3 = JSON.parse(localStorage.getItem("v3"));
        v4 = JSON.parse(localStorage.getItem("v4"));
    }
    
    if(quantia == 4 || quantia == "4"){
        calculamediaQuarto(n4,v4,array,x);
        calculamediaTerceiro(n3,v3,array,x);
        calculamediaSegundo(n2,v2,array,x);
        calculamediaPrimeiro(n1,v1,array,x);
        
        
    }
    if(quantia == 3 || quantia == "3"){
        calculamediaTerceiro(n3,v3,array,x)
        calculamediaSegundo(n2,v2,array,x)
        calculamediaPrimeiro(n1,v1,array,x)
        
    }
    if(quantia == 2 || quantia == "2"){
        calculamediaSegundo(n2,v2,array,x)
        calculamediaPrimeiro(n1,v1,array,x)        
       
    }
    if(quantia == 1 || quantia == "1"){
        calculamediaPrimeiro(n1,v1,array,x)
        
    }
    x++;

    

}

function calculamediaPrimeiro(n1,v1,materias,x){
        
        n1 = parseInt(n1);
        v1 = parseInt(JSON.parse(localStorage.getItem("v1")));
       
        v1 = v1 + n1;
        localStorage.setItem("v1" , JSON.stringify(v1))
        if((x + 1) == materias){
            console.log(`A media v1 foi de ${v1 / materias}`)
        }
        
        
  
}



function calculamediaSegundo(n2,v2,materias,x){
    
    n2 = parseInt(n2);
    v2 = parseInt(JSON.parse(localStorage.getItem("v2")));
    
    v2 = v2 + n2;
    localStorage.setItem("v2" , JSON.stringify(v2))
    if((x + 1) == materias){
        console.log(`A media v2 foi de ${v2 / materias}`)
    }
    
}

function calculamediaTerceiro(n3,v3,materias,x){
    
    n3 = parseInt(n3);
    v3 = parseInt(JSON.parse(localStorage.getItem("v3")));
    
    v3 = v3 + n3;
    localStorage.setItem("v3" , JSON.stringify(v3))
    if((x + 1) == materias){
        console.log(`A media v3 foi de ${v3 / materias}`)
    }
    
}




function calculamediaQuarto(n4,v4,materias,x){
   
    n4 = parseInt(n4);
    v4 = parseInt(JSON.parse(localStorage.getItem("v4")));
    
    v4 = v4 + n4;
    localStorage.setItem("v4" , JSON.stringify(v4))
    if((x + 1) == materias){
        console.log(`A media v4 foi de ${v4  / materias}`)
    }
    
}



