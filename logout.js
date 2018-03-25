
firebase.auth().onAuthStateChanged(function(user)
{
if(user)
{
  $("#sign-out").click(function()
{
  firebase.auth().signOut().then(function(){

  }).catch(function(error)
{
    console.log("error");
});
});
}else{
//  window.alert("Log out");
localStorage.clear();
sessionStorage.clear();
  window.location="index.html";
  window.onbeforeunload = function() { return "Your work will be lost."; };
}
});
