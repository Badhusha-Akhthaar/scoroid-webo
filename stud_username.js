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
var auth = firebase.auth();
function setup() {
  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      ref = database.ref('Students/'+user.uid+'/');
      ref.on('value',gotData,errData);

      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      sessionStorage.userUid=uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      var key=email.substring(0,email.indexOf('@'));
  }// if end
      user.getIdToken().then(function(accessToken) {
        var dis=document.getElementById('account-details');
        dis.innerHTML=key;
        sessionStorage.studmail=key;
      });

  }, function(error) {
    console.log(error);
  });
};

function gotData(data){
  var stu=data.val();
  var keys = Object.keys(stu);
document.getElementById("name").innerHTML=stu.Name;
document.getElementById("rol").innerHTML=stu.RollNo;
document.getElementById("reg").innerHTML=stu.RegNo;
document.getElementById("email").innerHTML=stu.Email;
sessionStorage.rolnumber=document.getElementById("rol").innerHTML;
}
function errData(err){
console.log('Error..!!!');
console.log(err);
}
