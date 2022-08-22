function myfun(){
    var email=document.forms["form"]["email"].value;
    var upswd=document.forms["form"]["upswd"].value;
    

    if(email==""){
        document.getElementById("errorbox").innerHTML ="**enter email";
        return false;
    }
    if(email.indexOf('@')<=0){
        document.getElementById("errorbox").innerHTML ="**invalid @ position";
        return false;
    }
    if(email.charAt(email.length-4)!='.' && email.charAt(email.length-3)!='.'){
        document.getElementById("errorbox").innerHTML ="**invalid . position";
        return false;
    }
    if(upswd=="")
    {
        document.getElementById("errorbox").innerHTML ="enter the password";
        return false;
    }
    if(upswd.length<8)
    {
        document.getElementById("errorbox").innerHTML ="password must be 8 characters";
        return false; 
    }
    if(email && upswd){
        document.getElementById("errorbox").innerHTML ="valid";
        document.location.href="staff dashboard.html";
        return false;
    }
}
