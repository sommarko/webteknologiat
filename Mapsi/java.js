function search(){
   
    var x = document.getElementById("address").value;
    var y = document.getElementById("city").value;
    var a = address+city;

    var mylink = `https://www.google.com/maps?q=${a}&output=embed"`
    document.getElementById("myFrame").scr =mylink;

}