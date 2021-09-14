let fname=document.getElementById("name");
let e1=document.getElementById("error1");


let age=document.getElementById("age");
let e2=document.getElementById("error2");

let email=document.getElementById("email");
let e4=document.getElementById("error4");


function firstname(){
    e1.innerHTML="";
    if(fname.value==""){
        e1.innerHTML="name should not be blank";
        e1.style='display: flex';
        return false;
        
    }
    else if(fname.value.length<=2){
        e1.innerHTML="name should be more then 2 char";
        e1.style='display: flex';
        return false;
    
    }
    else{
        
         e1.style="display: none";
        return true;

       
    }
}

function validAge(){
    e2.innerHTML="";
    if(age.value==""){
        e2.innerHTML="age should not be blank";
        e2.style='display: flex';
        return false;
    }
    else if(isNaN(age.value)){
        e2.innerHTML="age should be no.";
        e2.style='display: flex';
        return false;
    }
    else if(age.value<0){
        e2.innerHTML="enter valid age";
        e2.style='display: flex';
        return false;
    }
    else{
    
        e2.style="display: none";
        return true;
    }
}

function validEmail(){
    e4.innerHTML="";
    let ss=email.value.substring(email.value.indexOf('@')+1);
    if(email.value==""){
        e4.innerHTML="email should not be blank";
        e4.style='display: flex';
    
    }
    else if(!email.value.includes('@') || ss==""){
        e4.innerHTML="enter valid email";
        e4.style='display: flex';
    }
    
    else{
        
        e4.style="display: none"
        return true;
    }
}
