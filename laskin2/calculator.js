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
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('n1').value = value;


console.log(value)
document.getElementById('n1').innerHTML = value;
  

}
{
function incrementButton2()
{
    var value = parseInt(document.getElementById('n2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('n2').value = value;
    

console.log(value)
document.getElementById('n2').innerHTML = value;
  

}}
function reduceNumber(){
    var value = parseInt(document.getElementById('n1').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('n1').value = value;


console.log(value)
document.getElementById('n1').innerHTML = value;
}
function reduceNumber2(){
    var value = parseInt(document.getElementById('n2').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('n2').value = value;


console.log(value)
document.getElementById('n2').innerHTML = value;
}
function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return number = Math.floor(Math.random() * (max - min) + min);
     //Vaikeuksia tämän kanssa saada kentään.
   
     

}
{
     console.log(getRandomInt(1,10));
  }


