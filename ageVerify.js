var message= prompt("Please Enter Your Age");
function yourAge(){
    
    if(message >= 18){
        alert("Welcome");
    }else if (message < 18){
        alert("Sorry! Leave this page");
        location.replace("404.html");
    }
    
}

yourAge();

