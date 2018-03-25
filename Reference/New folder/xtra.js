


function setup()
{
var user = firebase.auth().currentUser;
   
   if (user) 
   {
   	var id=user.email;
   	document.getElementById("eid").innerHTML=id;
   } 
   else 
   {
     window.location='index.html';
   }

}



