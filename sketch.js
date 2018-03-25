var ref;
var no;var q,eno;
var mark_label,id=1;
var bd5,dmark,cid,did;
var store;
var username;var btt;var sno;
username=sessionStorage.variable1;
var database = firebase.database();
ref = database.ref(username+'/course');
ref.on('value',gotData,errData);

function gotData(data){
var marks=data.val();
var keys = Object.keys(marks);
console.log(keys);
var html="<div class='form-group'>";
html+="<label for=sel1'>"+"Course Code"+"</label>";
html+="<select  class = 'form-control' id = 'sel1' onchange='test(this);'>";
html+="<option>"+"---Select---"+"</option>";
for(var i=0; i<keys.length; i++)
{
    var k = keys[i];
    var Uname =marks[k].courseCode;
    console.log(Uname);
    html+="<option>"+Uname+"</option>";
}
    html+="</select>";
document.getElementById("boxy").innerHTML = html;
}
function errData(err){
console.log('Error..!!!');
console.log(err);
}
// fetch student rollnum
ref = database.ref('StudentDetails');
ref.on('value',gotstud,errData);

function gotstud(data){
var marks=data.val();
var keys = Object.keys(marks);
console.log(keys);
var html="<div class='form-group'>";
html+="<label for=sel2'>"+"Student RollNumber"+"</label>";
html+="<select  class = 'form-control' id = 'sel2' onchange='studno(this);' >";
html+="<option>"+"---Select---"+"</option>";
for(var i=0; i<keys.length; i++)
{
    var k = keys[i];
    var Uname =marks[k].roll;
    console.log(Uname);
    html+="<option>"+Uname+"</option>";
}
    html+="</select>";

document.getElementById("roll").innerHTML = html;
}
window.test=function(e)
{
    no=e.value;
  //  sessionStorage.myvar=no;
    username=sessionStorage.variable1;
//console.log(no);
var c1=document.getElementById("listx");
while(c1.hasChildNodes())
{
    c1.removeChild(c1.lastChild);
}
var database = firebase.database();
console.log("login id "+username);
console.log("code "+no);
var ref = database.ref(username+'/course/'+no+'/ExerciseTable');
ref.on('value',gotEx,errData);
//}
function gotEx(datu)
{
	var ex=datu.val();
	var sa=Object.keys(ex);
	var s=sa.length;
	console.log(s);
  var listx=document.getElementById("listx");
	for(j=0;j<s;j++)
	{
		var k=sa[j];
		var ename=ex[k].Ename;
    eno=ex[k].Exid;
		console.log(eno+ename);
		var q=ex[k].Exid;

		var divs=document.createElement("div");
		var para=document.createElement("p");
		var it=document.createElement("i");

		var yt=document.createElement("div");
		var rt=document.createElement("div");
		rt.setAttribute("class","rows"); //main div for table
		yt.setAttribute("id","tid"+q+"");//table
		yt.setAttribute("class","col-sm-12");
    var fiv=document.createElement("div");
    fiv.setAttribute("id","fiv"+q+"");

        yt.appendChild(fiv);

		rt.appendChild(yt);
		it.setAttribute("class","material-icons w3-btn w3-ripple");

        it.setAttribute("onclick","drop("+q+");alter("+q+")");
        it.setAttribute("id","it"+q+"");
		it.innerHTML="keyboard_arrow_down";
		para.setAttribute("style","font-size: 20px;");
		para.innerHTML="Exercise"+q+"";
        para.setAttribute("id","para");
        para.appendChild(it);
        it.appendChild(rt);
		divs.appendChild(para);
		divs.appendChild(rt);
		// divs.appendChild(fiv);
		listx.appendChild(divs);
 }
}
}//test fun close
function errData(err){
console.log('Error..!!!');
console.log(err);
}
function alter(tin)
{
    var dif=document.getElementById("it"+tin+"");
    dif.setAttribute("class","material-icons w3-btn w3-ripple");
    dif.innerHTML="keyboard_arrow_up";
    dif.setAttribute("onclick","collapse("+tin+")");

}

function collapse(kie)
{
    var lap=document.getElementById("fiv"+kie+"");
    while(lap.hasChildNodes())
    {
      lap.removeChild(lap.lastChild);
    }
    var hop=document.getElementById("it"+kie+"");
    hop.setAttribute("class","material-icons w3-btn w3-ripple");
    hop.innerHTML="keyboard_arrow_down";
    hop.setAttribute("onclick","drop("+kie+");alter("+kie+")");

}
function drop(hoi)
{
    createtab(hoi);
}

function createtab(hi)
{
	hub=hi;
	var ftable=document.createElement("table");
	var fthead=document.createElement("thead");
	var ftbody=document.createElement("tbody");
	ftable.setAttribute("class","table table-bordered");
    ftbody.setAttribute("id","bod"+hi+"");
    fthead.setAttribute("class","w3-teal");
    fthead.setAttribute("style","color: white");
    var hrow=document.createElement("tr");
    var hd1=document.createElement("td");
    hd1.innerHTML="Criteria No.";
    var hd2=document.createElement("td");
    hd2.innerHTML="Criteria Name";
    var hd3=document.createElement("td");
    hd3.innerHTML="Discriptive";
    var hd4=document.createElement("td");
    hd4.innerHTML="Max. Mark";
    var hd5=document.createElement("td");
    hd5.innerHTML="Mark obtain";


        btt=document.createElement("button");
        btt.setAttribute("id","btn_id"+hi+"");
        btt.setAttribute("onclick","saveDB("+hi+");");
        btt.innerHTML="Save to DB";
        console.log("dbid "+hi);

    hrow.appendChild(hd1);
    hrow.appendChild(hd2);
    hrow.appendChild(hd3);
    hrow.appendChild(hd4);
    hrow.appendChild(hd5);

    fthead.appendChild(hrow);
    ftable.appendChild(fthead);
    ftable.appendChild(ftbody);
    fthead.appendChild(btt);
    var io=document.getElementById("fiv"+hi+"");
    io.appendChild(ftable);
    bodycreate(hi);
}

function bodycreate(hell)
{

var ref = database.ref(username+'/course/'+no+'/ExerciseTable/'+hell+'/');
ref.on('value',function(data){gotdi(data,hell)},errData);

}

function gotdi(you,re)
{

    var ex3=you.val();
	var sa3=Object.keys(ex3);
	var s3=sa3.length;
    var bod=document.getElementById("bod"+re+"");
    for(p=0;p<s3-3;p++)
    {
    	var k=sa3[p];
		 cid=ex3[k].cid;
		var cname=ex3[k].cname;
		var ctotal=ex3[k].ctotal;
        console.log(cid);
		console.log(cname);
		console.log(ctotal);
        var brow=document.createElement("tr");
        var bd1=document.createElement("td");
        bd1.innerHTML=cid;
        var bd2=document.createElement("td");
        bd2.innerHTML=cname;
        var bd3=document.createElement("td");
        bd3.innerHTML="<table class='table table-bordered table-condensed'><thead><tr><td>"+"No."+"</td><td>"+"Description"+"</td><td>"+"Marks"+"</td></tr></thead><tbody class='tide subtable"+re+"'></tbody></table>";
        id=0;
        var bd4=document.createElement("td");
        bd4.innerHTML=ctotal;
        bd5=document.createElement("td");
        bd5.innerHTML="0";

        brow.appendChild(bd1);
        brow.appendChild(bd2);
        brow.appendChild(bd3);
        brow.appendChild(bd4);
        brow.appendChild(bd5);
        bod.appendChild(brow);
        var a=p+1;
        var ref8 = database.ref(username+'/course/'+no+'/ExerciseTable/'+re+'/'+a+'/');
        ref8.on('value',function(tie){gotLow(tie,re,a)},errData);
    }
    var addrow=document.createElement("tr");
    var adddata=document.createElement("td");
    var addmark=document.createElement("td");
    addmark.setAttribute("id","addmark"+re+"");
    adddata.setAttribute("colspan","3");
    addmark.setAttribute("colspan","2");
    adddata.innerHTML="Total Mark:  ";

    addmark.innerHTML="0";
    addrow.appendChild(adddata);
    addrow.appendChild(addmark);
    bod.appendChild(addrow);
}

function gotLow(good,red,b)
{
    var ex8=good.val();
    var sa8=Object.keys(ex8);
    var s8=sa8.length;
    console.log("Length is"+s8+"");
    for(z=0;z<s8-3;z++)
    {
       var t=z+1;
       var ref9 = database.ref(username+'/course/'+no+'/ExerciseTable/'+red+'/'+b+'/'+t+'');
        ref9.on('value',function(bud){gotMuch(bud,red,b)},errData);
    }
}


function gotMuch(dude,guy,vol)
{
  // id=0;
    var ex9=dude.val();
    var sa9=Object.keys(ex9);
    var s9=sa9.length;
    console.log("Hello there"+s9+"");

     did=ex9.did;
    dmark=ex9.dmark;
    var dname=ex9.dname;
    console.log("Guy value is"+guy+"");
    console.log(did);
    console.log(dmark);
    console.log(dname);
    var y=document.querySelectorAll(".subtable"+guy+"").length;
    console.log("Class length is"+y+"");
    var ytabl=document.querySelectorAll(".subtable"+guy+"");
    var yd1=document.createElement("td");
    var yd2=document.createElement("td");

    var yd3=document.createElement("td");

    for(var b=0;b<y;b++)
    {


    var row = ytabl[b].insertRow();

    }
    var cell1=row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML=did;
    cell2.innerHTML=dname;
    cell2.setAttribute("style","font-weight: bold;");
    cell3.innerHTML=dmark;
    cell3.setAttribute("onclick","pass("+vol+","+guy+","+dmark+");sumthem("+vol+","+guy+","+dmark+");");
  id++;

}
function pass(parent,sub,mark)
{


  var rio=parent-1;
  var ntab=document.getElementById("bod"+sub+"").rows[rio].childNodes[4].innerHTML=mark;

}

function sumthem(jil,jung,juk)
{
var gimp=document.getElementById("bod"+jung+"").rows.length;
var whi=gimp-1;
console.log("See there  "+whi+"");
var tot=0;
      for(t=0;t<whi;t++)
      {
        var ser=document.getElementById("bod"+jung+"").rows[t].childNodes[4].innerHTML;
        tot=tot+parseInt(ser);
      }
      document.getElementById("bod"+jung+"").rows[whi].childNodes[1].innerHTML=tot;
}
window.studno=function(e)
{
  sno=e.value;
  console.log(sno);
}

function saveDB(exn)
{
  var ftd,ltd,obtain;
  ref=database.ref('Marks/'+username+'/course/'+no+'/ExerciseTable/'+exn+'/'+sno);
  console.log(exn);
  var t=document.getElementById("addmark"+exn+"").innerHTML;
  console.log(t);
  var tabb=document.getElementById("bod"+exn+"");
  var tab_len=tabb.rows.length;
  console.log(tab_len);

for(var a=0;a<tab_len;a++)
{
   ftd=tabb.rows[a].cells[0].innerHTML;
  console.log(ftd);
  if(a==tab_len-1)
  {
   obtain=tabb.rows[a].cells[1].innerHTML;
  console.log(obtain);
    ref.child('obtain').set({
      totObtain:obtain
    });
  }
  else {
     ltd=tabb.rows[a].cells[4].innerHTML;
    console.log(ltd);

   ref.child(ftd).set({
     cri_id:ftd,
     cri_mark:ltd
   });
}
}

}// add to dB
