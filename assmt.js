var ref;
var flag=0;
var no;var q,eno,s;
var mark_label,id=1;
var bd5,dmark,cid,did,com1;
var store;var bd4;var ctotal;var hd5;
var username,myvar;var btt;var sno,name,reg;
var q;var html;var reg,na,refer;var k,g;var reference,connect;
html="<div class='form-group'>";
html+="<label for=sel2'>"+"Student RollNumber"+"</label>";
html+="<select  class = 'form-control' id = 'sel2' onchange='studno(this);' >";
html+="<option value='0'>"+"---Select---"+"</option>";
var database = firebase.database();
myvar=sessionStorage.myvar;
username=sessionStorage.variable1;
var assmtEid=sessionStorage.assEid;
var ex_name=sessionStorage.ename;

if(myvar === null || myvar===undefined)
{
  alert("Please Select the Course again!");
  location.href=encodeURI("course.html");
}
 else
 {
var ref = database.ref(username+'/course/'+myvar+'/ExerciseTable/'+assmtEid+'/');
ref.on('value',function(data){gotdi(data,assmtEid)},errData);
}
function gotdi(you,re)
{
  document.getElementById("cid").innerHTML="Course: "+myvar+"";
  q=assmtEid;
  var fiv=document.createElement("div");
  fiv.setAttribute("id","fiv"+q+"");
  var ftable=document.createElement("table");
  var fthead=document.createElement("thead");
  var ftbody=document.createElement("tbody");
  ftable.setAttribute("class","table table-bordered");
    ftbody.setAttribute("id","bod"+q+"");
    ftbody.setAttribute("class","tbody");
    fthead.setAttribute("class","w3-teal");
    fthead.setAttribute("style","color: white");

    var ex_tr=document.createElement("tr");
    var ex_td=document.createElement("td");
    ex_td.innerHTML="ExNO :"+assmtEid;
    var en_td=document.createElement("td");
    en_td.innerHTML=ex_name;
    en_td.setAttribute("colspan","4");
    var hrow=document.createElement("tr");
    var hd1=document.createElement("td");
    hd1.innerHTML="Criteria No.";
    var hd2=document.createElement("td");
    hd2.innerHTML="Criteria Name";
    var hd3=document.createElement("td");
    hd3.innerHTML="Descriptive";
    var hd4=document.createElement("td");
    hd4.innerHTML="Max. Mark";
    hd5=document.createElement("td");
    hd5.innerHTML="Mark obtained";
    hd5.setAttribute("class","CellWithComment");
    ex_tr.appendChild(ex_td);
    ex_tr.appendChild(en_td);
    hrow.appendChild(hd1);
    hrow.appendChild(hd2);
    hrow.appendChild(hd3);
    hrow.appendChild(hd4);
    hrow.appendChild(hd5);


fthead.appendChild(ex_tr);
    fthead.appendChild(hrow);
    ftable.appendChild(fthead);
    ftable.appendChild(ftbody);
    fiv.appendChild(ftable);
    var boxy=document.getElementById("boxy");
    boxy.appendChild(fiv);

    var ex3=you.val();
    var sa3=Object.keys(ex3);
    var s3=sa3.length;
    var bod=document.getElementById("bod"+re+"");
    for(p=0;p<s3-3;p++)
    {
      var adb=p+1;
      var k=sa3[p];
     cid=ex3[k].cid;
    var cname=ex3[k].cname;
    ctotal=ex3[k].ctotal;

        var brow=document.createElement("tr");
        var bd1=document.createElement("td");
        bd1.innerHTML=cid;
        var bd2=document.createElement("td");
        bd2.innerHTML=cname;
        var bd3=document.createElement("td");
        bd3.innerHTML="<table class='table table-bordered table-condensed'><thead><tr><td>"+"No."+"</td><td>"+"Description"+"</td><td>"+"Marks"+"</td></tr></thead><tbody class='tide subtable"+re+"'></tbody></table>";
        id=0;
        bd4=document.createElement("td");
        bd4.innerHTML=ctotal;
        bd5=document.createElement("td");
        bd5.setAttribute("ondblclick",'tdedit("'+adb+'","'+ctotal+'")');
        bd5.setAttribute("id","tdedit"+adb+"");
        bd5.innerHTML="0";

        var sp=document.createElement("span");
        sp.setAttribute("class","CellComment1");
        sp.textContent="Double Click to EDIT & Enter to SAVE!";

        brow.appendChild(bd1);
        brow.appendChild(bd2);
        brow.appendChild(bd3);
        brow.appendChild(bd4);
        hd5.appendChild(sp);
        brow.appendChild(bd5);
        bod.appendChild(brow);
        var a=p+1;
        var ref8 = database.ref(username+'/course/'+myvar+'/ExerciseTable/'+re+'/'+a+'/');
        ref8.on('value',function(tie){gotLow(tie,re,a)},errData);
    }
    var addrow=document.createElement("tr");
    var adddata=document.createElement("td");
    var addmark=document.createElement("td");
    var addbtt=document.createElement("td");
    addmark.setAttribute("id","addmark"+re+"");
    adddata.setAttribute("colspan","2");
    addmark.setAttribute("colspan","2");
    addbtt.setAttribute("colspan","1");
    addmark.innerHTML="0";
    adddata.innerHTML="Total Mark:  ";
        btt=document.createElement("button");
        btt.setAttribute("id","btn_id"+q+"");
        btt.setAttribute("onclick","saveDB("+q+");");
        btt.innerHTML="Save";
        addbtt.appendChild(btt);

    addrow.appendChild(adddata);
    addrow.appendChild(addmark);
    addrow.appendChild(addbtt);
    bod.appendChild(addrow);
}
function tdedit(mmark,tot_mark)
{

  if(flag==0){
    var scr=document.getElementById("tdedit"+mmark+"");
    var scrda=scr.innerHTML;
      scr.innerHTML="<input class='form-control' type='text' id='scred"+mmark+"' value='"+scrda+"' onkeydown='tdsave(event,"+mmark+","+tot_mark+");ansum();'>";
}
flag=1;
}
function ansum()
{var merge=0;
  var ne=document.getElementById("bod"+q+"").rows.length;
  for(var tt=0;tt<ne-1;tt++)
  {
    var rd=document.getElementById("bod"+q+"").rows[tt].childNodes[4].innerHTML;
    merge=merge+parseInt(rd);
  }
  document.getElementById("addmark"+q+"").innerHTML=merge;
}
function tdsave(event,smark,t_mark)
{
  var ke=event.key;
  if(ke=="Enter")
  {
    var dmarkda=document.getElementById("scred"+smark+"").value;
    if(t_mark<dmarkda)
    {
      alert("Maximum Mark is : "+t_mark);

    }
    else {
    document.getElementById("tdedit"+smark+"").innerHTML=dmarkda;
  }
    flag=0;
  }

}
function gotLow(good,red,b)
{
    var ex8=good.val();
    var sa8=Object.keys(ex8);
    var s8=sa8.length;
    for(z=0;z<s8-3;z++)
    {
       var t=z+1;
       var ref9 = database.ref(username+'/course/'+myvar+'/ExerciseTable/'+red+'/'+b+'/'+t+'');
        ref9.on('value',function(bud){gotMuch(bud,red,b)},errData);
    }
}


function gotMuch(dude,guy,vol)
{
    var ex9=dude.val();
    var sa9=Object.keys(ex9);
    var s9=sa9.length;

    did=ex9.did;
    dmark=ex9.dmark;
    var dname=ex9.dname;
    var y=document.querySelectorAll(".subtable"+guy+"").length;
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
    cell3.setAttribute("class","CellWithComment");
    cell3.setAttribute("onclick","pass1("+vol+","+guy+","+dmark+");sumthem1("+vol+","+guy+","+dmark+");");
    var sp2=document.createElement("span");
    sp2.setAttribute("class","CellComment");
    sp2.textContent="Click to Assign this Mark";
    cell3.appendChild(sp2);
  id++;

}
function pass1(parent,sub,mark)
{
  var rio=parent-1;
  var ntab=document.getElementById("bod"+sub+"").rows[rio].childNodes[4].innerHTML=mark;
}

function sumthem1(jil,jung,juk)
{
var gimp=document.getElementById("bod"+jung+"").rows.length;
var whi=gimp-1;
var tot=0;
      for(t=0;t<whi;t++)
      {
        var ser=document.getElementById("bod"+jung+"").rows[t].childNodes[4].innerHTML;
        tot=tot+parseInt(ser);
      }
      document.getElementById("bod"+jung+"").rows[whi].childNodes[1].innerHTML=tot;
}

function saveDB(exn)
{
  var val_roll=document.getElementById("sel2");
  var rg=val_roll.options[val_roll.selectedIndex].text;
  console.log(rg);
  var strUser = val_roll.options[val_roll.selectedIndex].value;
  var tm=document.getElementById("addmark"+q+"").innerHTML;
  console.log(tm);
   if(strUser==0)
   {
         alert("Please select Student RollNumber");
   }

   else if(isNaN(tm))
   {
      alert("total is Null.please enter the mark.")
   }
  else {
  var ftd,ltd,obtain;
  ref=database.ref('Marks/'+username+'/course/'+myvar+'/ExerciseTable/'+exn+'/'+rg);
  var t=document.getElementById("addmark"+exn+"").innerHTML;
  var tabb=document.getElementById("bod"+exn+"");
  var tab_len=tabb.rows.length;

for(var a=0;a<tab_len;a++)
{
   ftd=tabb.rows[a].cells[0].innerHTML;
   console.log(ftd);
  if(a==tab_len-1)
  {
   obtain=tabb.rows[a].cells[1].innerHTML;
    ref.child('obtain').set({
      totObtain:obtain
    });
  }
  else {
    // no need to store Description mark bcz total only needed
    console.log(ftd+" "+ltd);
     ltd=tabb.rows[a].cells[4].innerHTML;
   ref.child(ftd).set({
     cri_id:ftd,
     cri_mark:ltd
   });
}
}
alert("saved!");
location.href="exercise.html";
  }//else
}// add to dB

// fetch student rollnum
refer = database.ref('Students/');
//ref.on('value',gotstud,errData);
var ref2 = database.ref(username+'/course/'+myvar+'/Students/');
ref2.on('value',gotSelect,errData);

var l_reg=document.createElement("label");
var l_name=document.createElement("label");

function gotSelect(studs)
{
 //console.log("aa");
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
  refer.on('value',function(st){gotPupil(st,g)},errData);
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
			refer.on('value',function(tab){develop(tab,comp)},errData)
		}
		else
		{

		}
 }
}
function develop(datum,com)
{
//  com1=com;
	var jk=datum.val();
	var t=Object.keys(jk);
	var op=t.length;
	reference=database.ref('Students/'+com+'');
	for(r=0;r<op;r++)
	{
		var u=t[r];
		if(u==com)
		{
			reference.on('value',gotS,errData);
      document.getElementById("roll").innerHTML = html;
		}
	}
}
function gotS(pop)
{
	var pops=pop.val();
	var ops=Object.keys(pops);
	name=pops.Name;
	reg=pops.RegNo;
	var roll=pops.RollNo;
  html+="<option value="+name+">"+roll+"</option>";
}

function studno(e)
{
  s=e.options[e.selectedIndex].innerHTML;
  var na=e.options[e.selectedIndex].value;
  document.getElementById("name").innerHTML=na;
}
function errData(err){
console.log('Error..!!!');
console.log(err);
}
