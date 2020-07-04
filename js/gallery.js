 function upDate(previewPic){
 
    /* changing the url for the background image of the div  
    to the source file of the preview image */
    document.getElementById('message').innerHTML = previewPic.alt;
    
    var a = previewPic.src;       

     document.getElementById('message').style.backgroundImage = `url(${a})`;
    //used for obtaining the url, no problem with quotes when we use this



  
  }

  function unDo(){
     
    /* updating the url for the background image of the div 
    back to the orginal-image. */
   var a = document.getElementById('message');
   a.innerHTML = "Hover over an image to display here.";
  
   var b = a.style.background;
   document.getElementById('message').style.background = b;
  }