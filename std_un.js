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
var database = firebase.database();
var ref1,ref2,ud;
var admin=sessionStorage.flag;
var auth = firebase.auth();

function setup() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var email = user.email;
      ud=user.uid;
      var key=email.substring(0,email.indexOf('@'));

  }// if end
      user.getIdToken().then(function(accessToken) {
        var dis=document.getElementById('account-details');
        dis.innerHTML=key;
        sessionStorage.studmail=key;
        sessionStorage.userId=ud;
      });

  }, function(error) {
    console.log(error);
  });
};
