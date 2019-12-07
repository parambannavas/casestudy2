  
function validateForm(){
   
    var email=document.getElementById("inputemail").value;
  
    var pass1=document.getElementById("inputpassword").value;
   
   
    var email_re=/\S+@\S+\.\S/;
    var result=false;
   
     if(email_re.test(email)==false){
    alert(" invalid email");
    return false;
    }
    else if(pass1==''){
        alert("Please enter password");
        return false;
    }
    return true;


}