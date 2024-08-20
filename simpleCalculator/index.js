var inputDisplay = document.getElementById("answer").value;
function Displaydata( a){
inputDisplay+=a;
document.getElementById("answer").style.color="black";
document.getElementById("answer").value= inputDisplay;

}

function myfunction(){
   try{ var  result= eval(inputDisplay);
   document.getElementById("answer").value= result;
   inputDisplay= "";}
   catch(error){
    document.getElementById("answer").value= "invalid expression";
    document.getElementById("answer").style.color="red";
   inputDisplay= ""; 
   
   }
 
 
}

function clearData() {
    document.getElementById("answer").value="";
    inputDisplay= "";
 }
   

