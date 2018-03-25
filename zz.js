

const txtEmail =  document.getElementById("txtEmail");
const txtPassword =  document.getElementById("txtPassword");
const btnLogin =  document.getElementById("btnLogin");
const btnSignUp =  document.getElementById("btnSignUp");
//const btnLogout =  document.getElementById("btnLogout");
 
//login event
btnLogin.addEventListener('click', e=>{
  const email = txtEmail.value;
  const pass=txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e =>console.log(e.message));
  window.alert("logged in");
    window.location='course.html';


});

//sign up event

btnSignUp.addEventListener('click', e=>{
  const email = txtEmail.value;
  const pass=txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email,pass);
  promise
  .catch(e =>console.log(e.message));
  window.alert("registered successfully !!");
});


/*//logout
btnLogout.addEventListener('click',e=>{
  firebase.auth().signOut().then(function(){
    window.alert("Log out !!");
    window.location='index.html';
  });

    btnLogout.classList.add('hide');
});
*/
//add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser=>{
  if(firebaseUser)
  {
    window.location='second.html';
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  }else{
    console.log('Not logged In');
      btnLogout.classList.add('hide');
  }
});
