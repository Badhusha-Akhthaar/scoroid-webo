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
var username;var myvar;var k,g,ref,html;
myvar=sessionStorage.myvar;
username=sessionStorage.variable1;
var database = firebase.database();
function setup()
{
ref= database.ref('Students/');
var ref2=database.ref(username+'/course/'+myvar+'/Students/');
ref2.on('value',gotSelect,errData);
}
function gotSelect(studs)
{
  console.log("aa");
	var pupils=studs.val();
	var ps=Object.keys(pupils);
	var psl=ps.length;
	for(j=0;j<psl;j++)
	{
		g=ps[j];
     calling(g);
	}
}
function calling(g)
{
  ref.on('value',function(st){gotPupil(st,g)},errData);
}
function gotPupil(dat,comp)
{
  var stud=dat.val();
  var sa=Object.keys(stud);
  var s=sa.length;
  for(i=0;i<s;i++)
  {
     k=sa[i];
    if(k==comp)
		{
			ref.on('value',function(tab){develop(tab,comp)},errs)
		}
		else
		{

		}
 }
}
function errData(err)
{
	console.log("Error occured");
}
function errs(ej)
{
	console.log("Error occured");
}
function errDta(ersf)
{
	console.log("Error occured");
}
function develop(datum,com)
{
	var jk=datum.val();
	var t=Object.keys(jk);
	var op=t.length;
	var ref3=database.ref('Students/'+com+'');
	for(r=0;r<op;r++)
	{
		var u=t[r];
		if(u==com)
		{
			ref3.on('value',gotS,errDta);
      //ref3.orderByChild('RegNo');
		}
	}
}
function gotS(pop)
{
	var pops=pop.val();
	var ops=Object.keys(pops);
	var pl=ops.length;
	var email=pops.Email;
	var name=pops.Name;
	var reg=pops.RegNo;
	var roll=pops.RollNo;
  console.log(reg);
  html="<div class='form-group'>";
 html+="<label for=sel2'>"+"Student RollNumber"+"</label>";
 html+="<select  class = 'form-control' id = 'sel2' onchange='studno(this);' >";
 html+="<option value='0'>"+"---Select---"+"</option>";
 html+="<option value=1>"+roll+"</option>";
    var bod=document.getElementById("roll");
    bod.appendChild(html);
}
