function myFunction() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    
   var x= parseInt(a);
  var y =parseInt(b);
    var add = x + y;
    var subt = x - y;
    var mult = x * y;
    var divd = x / y;
   
    document.getElementById("results").innerHTML =
        x + "+"  + y +  "="  + add + "<br>" +
        x + "-"  + y +  "="  + subt + "<br>" +
       x + "*" + y + "=" + mult + "<br>" +
      x + "/" + y + "=" + divd ;
  
}
