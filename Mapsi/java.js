function search(){
   
    var x = document.getElementById("address").value;
    var y = document.getElementById("city").value;
    var a = x+y;
    console.log(x.value);
    console.log(y.value);

    var mylink = `https://www.google.com/maps?q=${a}&output=embed`;

    document.getElementById("myFrame").scr =mylink;

}