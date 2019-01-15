
document.addEventListener('DOMContentLoaded',function(){

   document.querySelector('#more1').onclick = show;
   document.querySelector('#close').onclick = hide;
   

   function show(){

          document.querySelector('.more').style.display = 'block';
          document.querySelector('#more1').style.color = 'lightgreen';
   }
 
   function hide(){
       
          document.querySelector('.more').style.display = 'none';
          document.querySelector('#more1').style.color = 'white';
}

 
});