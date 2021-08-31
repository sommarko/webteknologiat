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
    if(options === '15')
    {
      document.getElementById('total').value = input*15;
      total.value = input.value*15;
    }
    
    if(options === '30')
    {
        document.getElementById('total').value = input*20;
        total.value = input.value*20;
    }
    
    if(options === '40')
    {
        document.getElementById('total').value = input*40;
        total.value = input.value*40;
    }
    
    if(options === '60')
    {
        document.getElementById('total').value = input*60;
        total.value = input.value*60;
    }
    
 
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
    var options = document.getElementById('option').value;
    if(options === '15')
    {
      document.getElementById('total').value = input*15;
      total.value = input.value*15;
    }
    
    if(options === '30')
    {
        document.getElementById('total').value = input*20;
        total.value = input.value*20;
    }
    
    if(options === '40')
    {
        document.getElementById('total').value = input*40;
        total.value = input.value*40;
    }
    
    if(options === '60')
    {
        document.getElementById('total').value = input*60;
        total.value = input.value*60;
    }
    
});
function showMore() {
    document.getElementById("info").innerHTML = "Lisätietoja pyörästä";
}


function refreshPage(){
    window.location.reload();
} 

 