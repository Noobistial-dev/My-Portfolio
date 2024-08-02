function validateform(){
  var uname=document.myform.uname.value;
  var password=document.myform.password.value;
  if (uname==null||uname==""){
  alert("fill username first");
  return false;
  }else if(password.length<6){
    alert("minimum 6 digit");
    return false;
  }else if(uname=="Rohit" && password=="1234567"){
   window.location.href = "page2.html";
      return false;}
}

