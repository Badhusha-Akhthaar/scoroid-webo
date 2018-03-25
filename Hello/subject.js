var btn,code,cname,co;
var kk;
//var tg=5;
var database = firebase.database();
var ref = database.ref('course');
ref.on('value',gotEv,errData);
//sessionStorage.myvar=tg;
function add_db()
{
  code=document.getElementById("courseNo").value;
  cname=document.getElementById("courseName").value;
  ref.child(code).set({
  courseTitle:cname,
  courseCode:code
});// course save
alert("Course Created !");
}
function gotEv(data)
{
  card.innerHTML="";
  var marks=data.val();
  var ke = Object.keys(marks);
  console.log(ke);

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
    
    var head=document.createElement("h6");
    head.setAttribute("id",kk);
    head.setAttribute("class","more");
    var para=document.createElement("h6");
    para.setAttribute("class","uvi");
    var spara=document.createElement("p");
    spara.innerHTML="Create Exercises with Rubric";
    btn=document.createElement("button");
    btn.innerHTML="Create Exercises";

      var k = ke[kk];
      console.log(k);
      co =marks[k].courseCode;
      var cn=marks[k].courseTitle;
      console.log(co+cn);
      head.innerHTML=co;
      btn.setAttribute("onclick","pass("+co+");");

      para.innerHTML=cn;


    h.appendChild(head);
    f.appendChild(btn);
    adiv.appendChild(para);
    adiv.appendChild(spara);

    bada.appendChild(h); 
    bada.appendChild(adiv);
    bada.appendChild(f);
    chotu.appendChild(bada);
    card.appendChild(chotu);  
}
}// gotev
function errData(err){
console.log('Error..!!!');
console.log(err);
}

function pass(no)
{
    localStorage.setItem('objectToPass',no);
      location.href="exercise.html";
      sessionStorage.myvar=no;
    console.log(no);
}
