function calc()
{
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    
    var oper = document.getElementById('operators').value;
    
    if(oper === '+')
    {
        document.getElementById('result').value = n1+n2;
    }
    
    if(oper === '-')
    {
        document.getElementById('result').value = n1-n2;
    }
    
    if(oper === '/')
    {
        document.getElementById('result').value = n1/n2;
    }
    
    if(oper === '*')
    {
        document.getElementById('result').value = n1*n2;
    }
}
/*function incrementButton(){

var element = document.getElementById('n1');
var value = element.innerHTML;
value= value+1;*/

function incrementButton()
{
   
    var value = parseInt(document.getElementById('n1').value, 10);
    if (document.getElementById('n1').value < 10)

    {     value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('n1').value = value;
    }
    value = isNaN(value) ? 0 : value;
    
    document.getElementById('n1').value = value;


console.log(value)
document.getElementById('n1').innerHTML = value;
  

}
{
function incrementButton2()
{   
    var value = parseInt(document.getElementById('n2').value, 10);
    if (document.getElementById('n2').value < 10)
    
    {
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('n2').value = value;
    }
    value = isNaN(value) ? 0 : value;
    document.getElementById('n2').value = value;

console.log(value)
document.getElementById('n2').innerHTML = value;
  

}}
function reduceNumber(){
    var value = parseInt(document.getElementById('n1').value, 10);
    if( document.getElementById('n1').value >=1)
    {
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('n1').value = value;
}
value = isNaN(value) ? 0 : value;
document.getElementById('n1').value = value;


console.log(value)
document.getElementById('n1').innerHTML = value;
}
function reduceNumber2(){
    var value = parseInt(document.getElementById('n2').value, 10);
    if( document.getElementById('n2').value >=1)
    {
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('n2').value = value;
}
value = isNaN(value) ? 0 : value;
document.getElementById('n2').value = value;
console.log(value)
document.getElementById('n2').innerHTML = value;
}
function getRandom() {
    
    document.getElementsByClassName("number").innerHTML = Math.floor(Math.random() * 10) + 1;
    
   
     

}
{
     console.log(getRandomInt(1,10));
  }


