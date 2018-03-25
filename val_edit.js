$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});
$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
       return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
       return false;
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
       return false;
      }

      if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
       return false;
      }      
});
$(function(){

  var q=sessionStorage.editEid;
    var table3=document.getElementsByClassName("tbody").rows.length;
  for(var roll=1;roll<=table_len;roll++)
  {
      c_val=document.getElementById("cm"+roll).value;
  }
  $('input[name^="text"]').change(function() {
      var $current = $(this);
     $('input[name^="text"]').each(function() {
       console.log("validating");
         if ($(this).val() == $current.val() && $(this).attr('id') != $current.attr('id'))
         {
             alert('duplicate found!');
         }
         else if($(this).val() > ctotal )
         {
             alert('too large');
         }
     });
   });
});
