

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
            
            document.querySelector(`#media${1}`).textContent = (v1 / materias).toFixed(1);
        }
        
        
  
}



function calculamediaSegundo(n2,v2,materias,x){
    
    n2 = parseInt(n2);
    v2 = parseInt(JSON.parse(localStorage.getItem("v2")));
    
    v2 = v2 + n2;
    localStorage.setItem("v2" , JSON.stringify(v2))
    if((x + 1) == materias){
        document.querySelector(`#media${2}`).textContent = (v2 / materias).toFixed(1);
    }
    
}

function calculamediaTerceiro(n3,v3,materias,x){
    
    n3 = parseInt(n3);
    v3 = parseInt(JSON.parse(localStorage.getItem("v3")));
    
    v3 = v3 + n3;
    localStorage.setItem("v3" , JSON.stringify(v3))
    if((x + 1) == materias){
        document.querySelector(`#media${3}`).textContent = (v3 / materias).toFixed(1);
    }
    
}




function calculamediaQuarto(n4,v4,materias,x){
   
    n4 = parseInt(n4);
    v4 = parseInt(JSON.parse(localStorage.getItem("v4")));
    
    v4 = v4 + n4;
    localStorage.setItem("v4" , JSON.stringify(v4))
    if((x + 1) == materias){
        document.querySelector(`#media${4}`).textContent = (v4 / materias).toFixed(1);
    }
    
}


function calculaMediaGerais(v1,v2,v3,v4,quantia,materias){
    quantia = parseInt(quantia);
    if(quantia == 4 || quantia=="4"){
        v4 = parseInt(v4);
        v3 = parseInt(v3);
        v2 = parseInt(v2);
        v1 = parseInt(v1);
        document.querySelector("#mediaGeral").textContent = (((v4 + v3 + v2 + v1) / materias)/quantia).toFixed(1);
    }
    if(quantia == 3 || quantia=="3"){
        
        v3 = parseInt(v3);
        v2 = parseInt(v2);
        v1 = parseInt(v1);
        document.querySelector("#mediaGeral").textContent = (( (v3 + v2 + v1) / materias)/quantia).toFixed(1);
    }
    if(quantia == 2 || quantia=="2"){
        
        v2 = parseInt(v2);
        v1 = parseInt(v1);
        document.querySelector("#mediaGeral").textContent = (( (v2 + v1) / materias)/quantia).toFixed(1);
    }
    if(quantia == 1 || quantia=="1"){
   
        v1 = parseInt(v1);
        document.querySelector("#mediaGeral").textContent = ((v1 / materias)/quantia).toFixed(1);
    }
    
}



