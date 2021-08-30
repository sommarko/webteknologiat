let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('input');
var total = document.getElementById('total');








btnAdd.addEventListener('click', () =>{
    if(input.value<10)
    {
    input.value = parseInt(input.value) +1;
    }
    else 
    {input.value = 10;}
    
    console.log(input.value);
    
    var options = document.getElementById('option').value;
    if(options === 'pikavuokraus 2h')
    {
      document.getElementById('total').value = input*15;
    }
    
    if(options === '3päivävuokra 18h')
    {
        document.getElementById('total').value = input*30;
    }
    
    if(options === 'vuorokausivuokra 19 h')
    {
        document.getElementById('total').value = input*40;
    }
    
    if(options === 'viikonloppuvuokra pe-su')
    {
        document.getElementById('total').value = input*60;
    }
    total.value = input.value*15;
 
 console.log(total.value);


    
});
btnSubtract.addEventListener('click', () =>{
    if(input.value>0)
    {
    input.value = parseInt(input.value) -1;
    }
    else input.value = 0;

    console.log(input.value);

    console.log(total.value);
    var options = document.getElementById('option').value;
    if(options === 'pikavuokraus 2h')
    {
      document.getElementById('total').value = input*15;
    }
    
    if(options === '3päivävuokra 18h')
    {
        document.getElementById('total').value = input*30;
    }
    
    if(options === 'vuorokausivuokra 19 h')
    {
        document.getElementById('total').value = input*40;
    }
    
    if(options === 'viikonloppuvuokra pe-su')
    {
        document.getElementById('total').value = input*60;
    }
    total.value = input.value*15;
});
function showMore() {
    document.getElementById("info").innerHTML = "Lisätietoja pyörästä";
}


function calc()
{
    var n1 = parseFloat(document.getElementById('input').value);
    var n2 = parseFloat(document.getElementById('option').value);    

    var options = document.getElementById('option').value;
    
    if(options === '15')
    {
        n2 = parseFloat(document.getElementById('option').value);
        document.getElementById('result').value = n1*n2;
    }
    
    if(options === '30')
    {   n2 = parseFloat(document.getElementById('option').value);
        document.getElementById('result').value = n1*n2;
    }
    
    if(options === '45')
    {   n2 = parseFloat(document.getElementById('option').value);
        document.getElementById('result').value = n1*n2;
    }
    
    if(options === '60')
    {   n2 = parseFloat(document.getElementById('option').value);
        document.getElementById('result').value = n1*n2;
    }
}

 