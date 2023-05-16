'use strict'
setTimeout(function(){  
    const modalwin = document.getElementById('window');
    modalwin.style.display="block";  
    document.getElementById("submit").addEventListener("click", function(){
    modalwin.style.display="none";  
    
    });
    
  }, 15000);
 