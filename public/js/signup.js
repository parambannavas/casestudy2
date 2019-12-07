function validateForm(){

    var firstName=document.getElementById("firstname").value;
    var lastName=document.getElementById("lastname").value;
    var email=document.getElementById("inputemail").value;
    var number=document.getElementById("phone").value;
    var check=document.getElementsByName("check[]");
    var pass1=document.getElementById("inputpassword").value;
    var pass2=document.getElementById("confirmpassword").value;
    var number_re=/(6|7|8|9)\d{9}$/;
    var email_re=/\S+@\S+\.\S/;
    var result=false;
    for(i in check)
    {

        if(check[i].checked)
        {

            result=true;
            break;
        }

    }
 if(firstName.length<5)
    {
    alert("Firstname required atleast 5 characters");
    return false;
    
    }
    else if(email_re.test(email)==false){
    alert(" invalid email");
    return false;
    }
    else if(pass1==''){
        alert("Please enter password");
        return false;
    }
    else if(pass2=='')
    {
        alert("Please enter confirm password");
        return false;
    }
    else if(pass1 != pass2)
    { alert("Passwords mismatching");
    return false;

    }
    else if(number_re.test(number)==false)
    {
    alert("invalid mobile number");
    return false;
    }
    else if(!result){

        alert("check atleast one");
    return false;

    }


}
