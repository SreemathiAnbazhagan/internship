function myfun(){
    var regno=document.forms["form"]["regno"].value;
    var upswd=document.forms["form"]["upswd"].value;

    if(regno==""){
        document.getElementById("errorbox").innerHTML ="enter the regno";
        return false;
    }
    if(isNaN(regno))
    {
        document.getElementById("errorbox").innerHTML ="enter only number";
        return false;
    }
    else if (regno.length<8) {
        document.getElementById("errorbox").innerHTML ="regno must be 8 digit";
        return false;
    }
    else if(regno.length>8){
        document.getElementById("errorbox").innerHTML ="regno must be 8 digit";
        return false;
    }
    if(upswd=="")
    {
        document.getElementById("errorbox").innerHTML ="enter the password";
        return false;
    }
    if(regno && upswd){
        document.getElementById("errorbox").innerHTML ="valid";
        document.location.href="student dashboard.html";
        return false;
    }
}