
var btn,code,cname,co;
var kk;
var username=sessionStorage.variable1;
var database = firebase.database();
var ref;
ref = database.ref(username);
var alink;
ref1 = database.ref(username+'/course');
ref1.on('value',gotEv,errData);
function gotEv(data)
{
  var ap=document.getElementById("demoAcc");
  try{
  var marks=data.val();
  var ke = Object.keys(marks);
  for(kk=0; kk<ke.length; kk++)
  {
      var k = ke[kk];
      co=marks[k].courseCode;
      var cn=marks[k].courseTitle;
      var b=document.createElement("br");
        alink=document.createElement("a");
         var t = document.createTextNode(co);
         alink.setAttribute("onclick","pass(\""+co+"\")");
         alink.appendChild(t);
         ap.appendChild(alink);
         ap.appendChild(b);
    }
  }
catch(eror)
  {
    console.log("Someerror occured");
  }
}// gotev
function errData(err){
console.log('Error..!!!');
}
function pass(code)
{
    sessionStorage.myvar=code;
    alink.setAttribute("href","exercise.html");
    location.href="exercise.html";
}
