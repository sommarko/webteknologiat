function search(){

    var  x = document.getElementById("town").value;
    var y=document.getElementById("street").value;
    var  a=y+x;
  
    var mylink = `https://www.google.com/maps?q=${a}&output=embed`;
      document.getElementById("myFrame").src=mylink;
  }