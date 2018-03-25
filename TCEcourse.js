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
window.onload = function() {
     if(!window.location.hash) {
         window.location = window.location + '#loaded';
         window.location.reload();
     }
 }
var btn,code,cname,co;
var kk;
var database = firebase.database();
var ref;var view;var ran,mam;

ref = database.ref("TCE");
ref.on('value',gotEv,errData);
// function setup()
// {
  var useruuid=  sessionStorage.userId;
  console.log(useruuid);
  var database = firebase.database();
  var refreg=database.ref('Students/'+useruuid+"/Registered/");
  refreg.on('value',gotReg,errData);
// }

function gotReg(regs)
{
  var reg_per=regs.val();
  var re_key=Object.keys(reg_per);
  console.log(re_key.length);
  for(ln=0;ln<re_key.length;ln++)
  {
    var ch_cou=re_key[ln];
    checkit(ch_cou);
  }
}

function checkit(course_text)
{
  var reftce=database.ref('TCE/');
  reftce.on('value',function(snap){
    gotTce(snap,course_text);
  },errData);
}

function gotTce(snapshot,cu)
{
  var snap_per=snapshot.val();
  var snap_key=Object.keys(snap_per);
  for(snp=0;snp<snap_key.length;snp++)
  {
    var ch_tce=snap_key[snp];
    if(ch_tce==cu)
    {
      var refg=database.ref("TCE/"+ch_tce);
      refg.on('value',seedata,errData);
      console.log("Student registered to "+ch_tce+"");
    }
    else
    {
      console.log("Student not registered to "+ch_tce+"");
    }
  }
}

function seedata(data)
{
      var rowz;
      var d1,d2;
      var tabl;
      var marks=data.val();
      var codeu=marks.courseCode;
      var titleu=marks.courseTitle;
      var mamu=marks.MamMail;

      rowz=document.createElement("tr");
      d1=document.createElement("td");
      d1.innerHTML=codeu;
      d2=document.createElement("td");
      d2.innerHTML=titleu;
      d3=document.createElement("td");
      d3.innerHTML="<button class='w3-btn' onclick='viewEX(\""+codeu+"\",\""+mamu+"\");'>Go</button>";

      rowz.appendChild(d1);
      rowz.appendChild(d2);
      rowz.appendChild(d3);
      tabl=document.getElementById("regc");
      tabl.appendChild(rowz);
}
function viewEX(c,m)
{
  location.href=encodeURI("viewExercise.html");
  sessionStorage.viewCode=c;
  sessionStorage.viewMam=m;
}
function gotEv(data)
{
  var marks=data.val();
  var ke = Object.keys(marks);
  for(kk=0; kk<ke.length; kk++)
  {
      var k = ke[kk];
      co=marks[k].courseCode;
      var cn=marks[k].courseTitle;
      mam=marks[k].MamMail;
      ran=marks[k].random;
      console.log(ran);
      var tr=document.createElement('tr');
      var td1=document.createElement('td');
      td1.innerHTML=co;

      var td2=document.createElement('td');
      td2.innerHTML=cn;

      var td3=document.createElement('td');
      td3.innerHTML=mam;

      var td4=document.createElement("td");
      td4.innerHTML="<input type='text' id='rcode"+co+"' class='form-control' > ";


  var td5=document.createElement('td');
  td5.innerHTML="<button class='w3-btn' onclick='check_random(\""+co+"\",\""+ran+"\",\""+mam+"\");'>Go</button>";

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      document.getElementById("view").appendChild(tr);
  }
}// gotev
function errData(err){
console.log('Error..!!!');
}
function check_random(code,ra,madam)
{
  console.log("Code :"+code);
  console.log("Random :"+ra);
  console.log("Mam :"+madam);
  var random_text=document.getElementById("rcode"+code).value;
  console.log(random_text);
  if(ra==random_text)
  {
     var ud=sessionStorage.userId;
     var refer= database.ref(madam+'/course/'+code+'/Students');
     refer.child(ud).set({
       uid:ud
     });
     console.log(ud);
     var reference=database.ref('Students/'+ud+'/Registered');
     reference.child(code).set({
       CourseMam:madam
     });

     alert("registered Successfully!");
     location.href=encodeURI("viewExercise.html");
     sessionStorage.viewCode=code;
     sessionStorage.viewMam=madam;
  }
  else {
    alert("Wrong code!");
  }
}
