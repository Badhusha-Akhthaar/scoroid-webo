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
var ref1,ref2;
var admin=sessionStorage.flag;
function setup() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      var key=email.substring(0,email.indexOf('@'));

      ref2=database.ref(key);
      ref2.child(key).set({
      mailID:email
    });
  }// if end
      user.getIdToken().then(function(accessToken) {
        var dis=document.getElementById('account-details');
        dis.innerHTML=key;
        sessionStorage.variable1=key;
      });

  }, function(error) {
    console.log(error);
  });
};
