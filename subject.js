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

var btn,code,cname,co;
var kk;
var username=sessionStorage.variable1;
var database = firebase.database();
var ref;
var selectedfile;
ref = database.ref(username);
 window.onload = function() {
     if(!window.location.hash) {
         window.location = window.location + '#loaded';
         window.location.reload();
     }
 }

ref1 = database.ref(username+'/course');
ref1.on('value',gotEv,errData);
function gotEv(data)
{
  card.innerHTML="";
  try{
  var marks=data.val();
  var ke = Object.keys(marks);
  for(kk=0; kk<ke.length; kk++)
  {
    var chotu=document.createElement("div");
    var bada=document.createElement("div");
    var h=document.createElement("header");
    h.setAttribute("class","w3-container");
    var f=document.createElement("footer");
    f.setAttribute("class","w3-container w3-padding-32");
    var adiv=document.createElement("div");
    adiv.setAttribute("class","w3-container");
    chotu.setAttribute("class","col-sm-4 text-center w3-padding-32");
    bada.setAttribute("class","w3-card-4 w3-padding");
    bada.setAttribute("class","bada");
    bada.style.background=color;
    var head=document.createElement("h6");
    head.setAttribute("id",kk);
    head.setAttribute("class","more");
    var para=document.createElement("h6");
    para.setAttribute("class","uvi");
    var cname=document.createElement("h6");
    cname.setAttribute("class","uvi");
    btn=document.createElement("button");
    btn.innerHTML="Explore";
    btn3=document.createElement("button");

    btn2=document.createElement("button");
    btn2.innerHTML="Delete Course";
      var k = ke[kk];
      co=marks[k].courseCode;
      var cn=marks[k].courseTitle;
      var br=marks[k].branch;
      var rand=marks[k].random;
      head.innerHTML=br;
      btn.setAttribute("onclick","pass(\""+co+"\",\""+cn+"\");");
      btn.setAttribute("class","w3-btn");
      btn2.setAttribute("onclick","delco(\""+co+"\");");
      btn2.setAttribute("class","w3-btn");
      btn3.setAttribute("class","w3-btn");
      btn3.innerHTML="Share :"+rand;
      para.innerHTML=co;
      cname.innerHTML=cn;
    h.appendChild(head);
    f.appendChild(btn);
    f.appendChild(btn3);
     f.appendChild(btn2);
    adiv.appendChild(para);
    adiv.appendChild(cname);

    bada.appendChild(h);
    bada.appendChild(adiv);
    bada.appendChild(f);
    chotu.appendChild(bada);
    card.appendChild(chotu);
}
}
catch(eror)
  {
    console.log("Someerror occured");
    var errdiv=document.createElement("div");
    errdiv.setAttribute("class","alert alert-warning alert-dismissable");
    var erra=document.createElement("a");
    erra.setAttribute("href","#");
    erra.setAttribute("class","close");
    erra.setAttribute("data-dismiss","alert");
    erra.setAttribute("aria-label","close");
    erra.innerHTML="&times;";
    errdiv.appendChild(erra);
    var errpara=document.createElement("p");
    errpara.innerHTML="<strong>Warning!</strong>       No Course to display. Please create one.";
    errdiv.appendChild(errpara);
    var app=document.getElementById("card");
    app.appendChild(errdiv);
  }
}// gotev
function errData(err){
console.log('Error..!!!');
}
function pass(no,myc)
{
      localStorage.setItem('objectToPass',no);
      var myUrl=encodeURIComponent("exercise.html");
      //location.href=encodeURI("exercise.html");
      console.log(myUrl);
      location.href=myUrl;
      sessionStorage.myvar=no;
      sessionStorage.mycourse=myc;
}
function delco(delcn)
{
  var dco=confirm("This course will be permanently deleted");
  if(dco==true)
  {
    var coref = database.ref(username+'/course/'+delcn+'');
    coref.remove();
    location.reload();
  }
}
// $("#file").on("change",function(event){
//     selectedfile=event

// });
// document.getElementById("file").onchange()=function()
// {
//   selectedfile=this.value;
// }
// function upload()
// {
//   selectedfile= document.getElementById("file");
//   var filename=selectedfile.files[0].name;
//   var storageRef=firebase.storage().ref('/Images/'+selectedfile);
//   var uploadTask=storageRef.put(filename);
//   uploadTask.on('state_changed',function(snapshot){},function(errors){},
//     function(){
//       var downloadUrl=uploadTask.snapshot.downloadUrl;
//       console.log(downloadUrl);
//     });
// }
