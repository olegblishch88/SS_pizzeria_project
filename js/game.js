   
var hello=confirm("Гра полягає в тому щоб вгадати число яке я загадав, у тебе є три спроби, щоб виграти!")


var numberPr, tempOut;
numberPr=Math.floor((Math.random()*10)+1);
console.log(numberPr);

function f1(){
var myNumber, out;
myNumber=document.getElementById('myNumber').value;
out=document.getElementById('out');
if(myNumber==numberPr){
out.innerHTML="Ви вгадали!!!";
}else if(myNumber>numberPr){
out.innerHTML="Ви ввели число більше ніж потрібне";    
}else{
out.innerHTML="Ви ввели число менше ніж потрібне";
}
}