 var cels = document.getElementById("cels");
 var fah = document.getElementById("fah");


 cels.addEventListener('input',function()
{
  let c= this.value;
  let f=(c*9/5)+32;
  if(!Number.isInteger(f)){
    f=f.toFixed(4);

  }
  fah.value=f;

}); 

fah.addEventListener('input',function()
{
  let f=this.value;
  let c= (f-32)*5/9;
  if(!Number.isInteger(c)){
    c=c.toFixed(4);
  }
  cels.value=c;
}); 