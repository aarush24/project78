var images = 
"C:\Users\HP\Desktop\c78\XVCW4223.JPG"
""  
""
"C:\Users\HP\Desktop\c78\varun.png"
 ];
 
 var names = [
   "aarush goyal",
    "aarya goyal",
    "reema goyal",
    "varun goyal"
 ];
 
 var i = 0
 function nextslide(){
 document.getElementById("photos").src= images[i];
   document.getElementById("names").innerHTML = names [i];
   i++;
   
 }