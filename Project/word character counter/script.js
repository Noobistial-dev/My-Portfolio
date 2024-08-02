let textbox = document.getElementById("textbox");
textbox.addEventListener('input',function(){
var text=this.value;
char=text.length;
document.getElementById("char").innerHTML=char;

text=text.trim();
let words = text.split(" ");
let cleanlist=words.filter(function(elm){
return elm != "";

});


 
document.getElementById("word").innerHTML = cleanlist.length;
});