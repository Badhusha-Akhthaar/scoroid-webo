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
// file: script.js
$(document).ready(function(){
  //initialize the firebase app

$('#tr').on('click', function (e) {
  $("#username_error_message").hide();
  $("#userLastname_error_message").hide();
  $("#password_error_message").hide();
  $("#retype_password_error_message").hide();
  $("#email_error_message").hide();
  $("#clg_codeerror").hide();
});
$('#sr').on('click', function (e) {
  $("#username_error_message2").hide();
  $("#roll_error_message").hide();
  $("#reg_error_message").hide();
  $("#password_error_message2").hide();
  $("#retype_password_error_message2").hide();
  $("#email_error_message2").hide();
});

  //create firebase references
  var Auth = firebase.auth();
  var dbRef = firebase.database();
  //var contactsRef = dbRef.ref('contacts')
  var usersRef = dbRef.ref('users');
  var auth = null;
  var ref=dbRef.ref('Students');
  //Register
  $('#doRegister').on('click', function (e) {
    e.preventDefault();
    $('#registerModal').modal('hide');

    $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
    var code=$('#clg_code').val();
    //alert(code);
    if(code==="mca@18")
    {
      var emal=document.getElementById('registerEmail').value;
    $('#messageModal').modal('show');
    var data = {
      email: $('#registerEmail').val(), //get the email from Form
      isAdmin:true,

    };
    var passwords = {
      password : $('#registerPassword').val(), //get the pass from Form
      cPassword : $('#registerConfirmPassword').val(), //get the confirmPass from Form
    }
    if( data.email != '' && passwords.password != ''  && passwords.cPassword != '' ){
      if( passwords.password == passwords.cPassword ){
        //create the user
        firebase.auth()
          .createUserWithEmailAndPassword(data.email, passwords.password)
          .then(function(user){

            auth = user;
            usersRef
              .child(user.uid)
              .set(data)
              .then(function(){
              })
            $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))
            //hide the modal automatically
            setTimeout(function() {
              $('#messageModal').modal('hide');
              $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
              contactsRef.child(auth.uid)
                .on("child_added", function(snap) {

                  //$('#contacts').append(contactHtmlFromObject(snap.val()));
                });
            }, 500);
            $('#messageModalLabel').html(spanText('Successfully created user account!', ['success']))
            location.href=encodeURI("course.html");
          })
          .catch(function(error){
            $('#messageModalLabel').html(spanText('ERROR: '+error.code, ['danger']))
          teacher_clear();
          });
      } else {
        teacher_clear();
      }
    }
} // if clg_code

  });

  //Login
  $('#doLogin').on('click', function (e) {
    e.preventDefault();
    $('#loginModal').modal('hide');
    $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
    $('#messageModal').modal('show');
    if( $('#loginEmail').val() != '' && $('#loginPassword').val() != '' )
    {
      //login the user
      var data = {
        email: $('#loginEmail').val(),
        password: $('#loginPassword').val()
      };
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(function(authData) {

          auth = authData;
          $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))
         //time
          setTimeout(function () {
            $('#messageModal').modal('hide');
            $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
          })// time

          usersRef.on('value',Userget,Usererr);

        })
        .catch(function(error) {
          console.log("Login Failed!", error);
          $('#messageModalLabel').html(spanText('ERROR: '+error.code, ['danger']))
          login_clear();
          //  $('#loginModal').modal('show');
    });
  }
  });

  function Userget(userd)
  {
    var use=userd.val();
    var u=Object.keys(use);
    var s=u.length;
    var bool=false;
    for(var n=0;n<s;n++)
    {
       var k=u[n];
       if(k==auth.uid)
       {
        bool=true;
        break;
       }
       else
       {
        bool=false;
        continue;
       }

    }
    if(bool==true)
    {
      location.href=encodeURI("course.html");
    }
    else
    {
      location.href=encodeURI("stud.html");
    }
  }

  function Usererr(err)
  {
    console.log("Error occured");
  }

  // stud registered
  $('#doRegister2').on('click', function (e) {
    e.preventDefault();
    $('#registerModal2').modal('hide');
    $('#messageModalLabel2').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
      var emal=document.getElementById('registerEmail2').value;
    $('#messageModal').modal('show');
    var data = {
      email: $('#registerEmail2').val(), //get the email from Form
      //isAdmin:false,
    };
    var passwords = {
      password : $('#registerPassword2').val(), //get the pass from Form
      cPassword : $('#registerConfirmPassword2').val(), //get the confirmPass from Form
    }
    if( data.email != '' && passwords.password != ''  && passwords.cPassword != '' ){
      if( passwords.password == passwords.cPassword ){
        //create the user
        firebase.auth()
          .createUserWithEmailAndPassword(data.email, passwords.password)
          .then(function(user){

            ref.child(user.uid).set({
                Name:   $("#registerFirstName2").val().toUpperCase(),
                RollNo: $("#roll").val().toUpperCase(),
                RegNo:  $("#reg").val().toUpperCase(),
                Email:  $("#registerEmail2").val()

           });// save

            $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))
            //hide the modal automatically
            setTimeout(function() {
              $('#messageModal').modal('hide');
              $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
            }, 500);
            $('#messageModalLabel').html(spanText('Successfully created user account!', ['success']))
            location.href=encodeURI("stud.html");
          })
          .catch(function(error){
            console.log("Error creating user:", error);
            $('#messageModalLabel').html(spanText('ERROR: '+error.code, ['danger']))
            student_clear();
    //$('#registerModal2').modal('show');
          });
      } else {
        //password and confirm password didn't match
        $('#messageModalLabel').html(spanText("ERROR: Passwords didn't match", ['danger']))
        student_clear();
            //$('#registerModal2').modal('show');
      }
    }
  });

$('#t_close').on('click', function (e) {
    teacher_clear();
  });
$('#s_close').on('click', function (e) {
  student_clear();
});
$('#login_close').on('click', function (e) {
    login_clear();
});

}); //end main

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}

function sendPasswordReset() {
      var email = document.getElementById('loginEmail').value;
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert('Password Reset Email Sent!');
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert("no user in this name : "+errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }
function teacher_clear()
{
  $("#registerFirstName").val("");
  $("#registerLastName").val("");
  $("#registerEmail").val("");
    $("#registerPassword").val("");
      $("#registerConfirmPassword").val("");
        $("#clg_code").val("");
}
function student_clear()
{
  $("#registerFirstName2").val("");
  $("#registerEmail2").val("");
    $("#registerPassword2").val("");
      $("#registerConfirmPassword2").val("");
        $("#roll").val("");
        $("#reg").val("");
}
function login_clear()
{
  $("#loginEmail").val("");
  $("#loginPassword").val("");
}
