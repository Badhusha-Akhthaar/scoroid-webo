//variables
var num=1;
var ids=1;var nid="stat";var frow=1;var hg=1;var hj=1;
var one="no";var two="name";var three="rate";var four="button";
var enum_text;var ename_text,maxpoint_text;
var row,table_len,htm,i;var critable;
var id,name,tot,tno,tnam,tmark,mtd1,mtd2,mtd3;
var q;var dd1;var cri_id=0,auto_des=1;
var myvar,maxy;var y=0;var rand;
var ref;var bool;var ref2;var ename;
var database = firebase.database();
var ref3;var username;var flag=0;
ref2 = database.ref(username+'/course/'+myvar+'/ExerciseTable');
var disp=sessionStorage.myvar;
myvar=sessionStorage.myvar;
mycourse=sessionStorage.mycourse;
username=sessionStorage.variable1;

if(disp === null || disp===undefined)
{
  alert("Please Select the Course again!");
  location.href=encodeURI("course.html");
}
 else {
localStorage.removeItem('objectToPass');
var database = firebase.database();
var refer = database.ref(username+'/course/'+disp+'/ExerciseTable/');
refer.on('value',gotEx,errData);
}

function gotEx(datu)
{
    document.getElementById("show").innerHTML=disp;
    document.getElementById("coursename").innerHTML=mycourse;
    try{
    var ex=datu.val();
    var sa=Object.keys(ex);
    var s=sa.length;
    var listx=document.getElementById("listx");
    for(j=0;j<s;j++)
    {
        var k=sa[j];
        ename=ex[k].Ename;
        q=ex[k].Exid;

        var divs=document.createElement("div");
        var para=document.createElement("p");
        var it=document.createElement("i");
        var mrk=document.createElement("i");
        var man=document.createElement("i");
        var del=document.createElement("i");

        var yt=document.createElement("div");
        var rt=document.createElement("div");
        rt.setAttribute("class","rows");
        yt.setAttribute("id","tid"+q+"");
        yt.setAttribute("class","col-sm-12");

        var fiv=document.createElement("div");
        fiv.setAttribute("id","fiv"+q+"");

        yt.appendChild(fiv);
        rt.appendChild(yt);

        it.setAttribute("class","material-icons w3-btn w3-ripple");

        it.setAttribute("onclick","drop("+q+");alter("+q+")");
        it.setAttribute("id","it"+q+"");
        it.setAttribute("title","View");
        it.innerHTML="expand_more";
        mrk.setAttribute("class","material-icons w3-btn w3-ripple");

      mrk.setAttribute("onclick","assmt("+q+");assname(\""+ename+"\")");
        mrk.setAttribute("id","mrk"+q+"");
        mrk.setAttribute("title","Assess Marks");
        mrk.innerHTML="assessment";

        man.setAttribute("class","material-icons w3-btn w3-ripple");
        man.setAttribute("onclick","editpage("+q+",\""+ename+"\")");
        man.setAttribute("id","manage"+q+"");
        man.setAttribute("title","Edit exercise");
        man.innerHTML="settings";

        del.setAttribute("class","material-icons w3-btn w3-ripple");
        del.setAttribute("onclick","delex("+q+")");
        del.setAttribute("id","delx"+q+"");
        del.setAttribute("title","Delete the exercise");
        del.innerHTML="delete";

        para.setAttribute("style","font-size: 20px;")
        para.innerHTML=ename;
        para.setAttribute("id","para");

        para.appendChild(it);
        para.appendChild(mrk);
        para.appendChild(man);
        para.appendChild(del);
        it.appendChild(rt);
        divs.appendChild(para);
        divs.appendChild(rt);
        listx.appendChild(divs);
    }

}
    catch(mistake)
    {
        console.log("Something happened");
        var errdiv=document.createElement("div");
    errdiv.setAttribute("class","alert alert-warning alert-dismissable");
    var erra=document.createElement("a");
    erra.setAttribute("href","#");
    erra.setAttribute("class","close");
    erra.setAttribute("data-dismiss","alert");
    erra.setAttribute("aria-label","close");
    erra.innerHT
    ML="&times;";
    errdiv.appendChild(erra);
    var errpara=document.createElement("p");
    errpara.innerHTML="<strong>Warning!</strong>       No Exercises to display. Please create one.";
    errdiv.appendChild(errpara);
    var app=document.getElementById("card");
    app.appendChild(errdiv);
    }

}
function errData(err){
console.log('Error..!!!');
console.log(err);
}
function delex(deln)
{
   var f=confirm("Do you want to permanently delete this Exercise");
   if(f==true)
   {
    var delref= database.ref(username+'/course/'+disp+'/ExerciseTable/'+deln+'');
    delref.remove();
    location.reload();
   }
}
function editpage(edid,any)
{
  console.log(any);
  location.href="manage.html";
  sessionStorage.editEid=edid;
  sessionStorage.anyname=any;
}

function alter(tin)
{
    var dif=document.getElementById("it"+tin+"");
    dif.setAttribute("class","material-icons w3-btn w3-ripple");
    dif.innerHTML="expand_less";
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
    hop.innerHTML="expand_more";
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
    var ftfoot=document.createElement("tfoot");
    ftfoot.setAttribute("id","foot"+hi+"");

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
    hd3.innerHTML="Descriptive";
    var hd4=document.createElement("td");
    hd4.innerHTML="Maximum Mark";

    hrow.appendChild(hd1);
    hrow.appendChild(hd2);
    hrow.appendChild(hd3);
    hrow.appendChild(hd4);

    fthead.appendChild(hrow);
    ftable.appendChild(fthead);
    ftable.appendChild(ftbody);
    ftable.appendChild(ftfoot);
    var io=document.getElementById("fiv"+hi+"");
    io.appendChild(ftable);
    bodycreate(hi);

}

function bodycreate(hell)
{

var refer = database.ref(username+'/course/'+disp+'/ExerciseTable/'+hell+'/');
refer.on('value',function(data){gotdi(data,hell)},errData);

var fotref= database.ref(username+'/course/'+disp+'/ExerciseTable/'+hell+'');
fotref.on('value',function(footd){gotfoot(footd,hell)},errfoot);
empty();
}
function errfoot(errr)
{
    console.log("Error");
}
function gotfoot(footd,d)
{
    var fex=footd.val();
    var f1=Object.keys(fex);
    var ft=f1.length;
    var Exermark=fex.Etotal;
    var apf=document.getElementById("foot"+d+"");
    var ftrw=document.createElement("tr");
    var fd1=document.createElement("td");
    fd1.setAttribute("colspan","2");
    fd1.innerHTML="Total Mark";
    var fd2=document.createElement("td");
    fd2.setAttribute("colspan","2");
    fd2.innerHTML=Exermark;
    ftrw.appendChild(fd1);
    ftrw.appendChild(fd2);
    apf.appendChild(ftrw);

}
function gotdi(you,re)
{

    var brow=document.createElement("tr");
    var bd1=document.createElement("td");
    var bd2=document.createElement("td");
    var bd3=document.createElement("td");
    var bd4=document.createElement("td");
    var ex3=you.val();
  var sa3=Object.keys(ex3);
  var s3=sa3.length;
    var bod=document.getElementById("bod"+re+"");
    for(p=0;p<s3-3;p++)
    {
    var k=sa3[p];
    var cid=ex3[k].cid;
    var cname=ex3[k].cname;
    var ctotal=ex3[k].ctotal;

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

        brow.appendChild(bd1);
        brow.appendChild(bd2);
        brow.appendChild(bd3);
        brow.appendChild(bd4);
        bod.appendChild(brow);
        var a=p+1;
        var ref8 = database.ref(username+'/course/'+disp+'/ExerciseTable/'+re+'/'+cid+'/');
        ref8.on('value',function(tie){gotLow(tie,re,cid)},errData);
    }
    y=0;
}

function gotLow(good,red,b)
{
    var ex8=good.val();
    var sa8=Object.keys(ex8);
    var s8=sa8.length;
    for(z=0;z<s8-3;z++)
    {
       var ty=sa8[z];
       var ty_id=ex8[ty].did;
       var ref9 = database.ref(username+'/course/'+disp+'/ExerciseTable/'+red+'/'+b+'/'+ty_id+'');
        ref9.on('value',function(bud){gotMuch(bud,red,b,s8,y)},errData);
    }
    y++;
}


function gotMuch(dude,guy,vol,s8,xx)
{
    var ex9=dude.val();
    var sa9=Object.keys(ex9);
    var s9=sa9.length;
    var did=ex9.did;
    var dmark=ex9.dmark;
    var dname=ex9.dname;

    var ytabl=document.querySelectorAll(".subtable"+guy+"");
    var row = ytabl[xx].insertRow();
    var cell1=row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML=did;
    cell2.innerHTML=dname;
    cell2.setAttribute("style","font-weight: bold;");
    cell3.innerHTML=dmark;
}
//rubric.js
function addex(){

 document.getElementById('sbtn').style.visibility='hidden';

    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var div4=document.createElement("div");

    maindiv1=document.getElementById("maindiv_1");
    maindiv2=document.getElementById("maindiv_2");
    maindiv3=document.getElementById("maindiv_3");
    maindiv4=document.getElementById("maindiv_4");
//Div1 creation
 col1=document.getElementById("col1");
 col2=document.getElementById("col2");
 col3=document.getElementById("col3");
 col4=document.getElementById("col4");
 errLabel=document.getElementById("errLabel");

    enum_text=document.createElement("input");
    enum_text.setAttribute("type","number");
    enum_text.setAttribute("id","enum");
    enum_text.setAttribute("class","effect-10");
    enum_text.setAttribute("placeholder","Exercise Number");
    ename_text=document.createElement("input");
    ename_text.setAttribute("type","text");
    ename_text.setAttribute("id","ename");
    ename_text.setAttribute("placeholder","Exercise Name");
    ename_text.setAttribute("class","effect-10");


    col1.appendChild(enum_text);
    col2.appendChild(ename_text);

//Div2 creation table
    var table=document.createElement("table");
    table.setAttribute("style","background-color: white;");
    table.setAttribute("class","table table-bordered table-striped w3-centered")
    var thead=document.createElement("thead");
    var tbody=document.createElement("tbody");
    tbody.setAttribute("id","data_table")
    var headrow=document.createElement("tr");

    var criname=document.createElement("td");
    criname.innerHTML="Criteria Name";
    var rating=document.createElement("td");
    rating.innerHTML="Rating";
    var points=document.createElement("td");
    points.innerHTML="Max. Marks";
    var editable=document.createElement("td");
    editable.innerHTML="Edit/Delete";
    headrow.setAttribute("class","w3-teal");

    headrow.appendChild(criname);
    headrow.appendChild(rating);
    headrow.appendChild(points);
    headrow.appendChild(editable);
    thead.appendChild(headrow);
    table.appendChild(thead);
    table.appendChild(tbody);
    div2.appendChild(table);
    maindiv2.appendChild(div2);

//Div3 creation

    col11=document.getElementById("col11");
 col22=document.getElementById("col22");
 col33=document.getElementById("col33");
 col44=document.getElementById("col44");


    var newname=document.createElement("input");
    newname.setAttribute("type","text");
    newname.setAttribute("id","new_name");
    newname.setAttribute("placeholder","Criteria Name");
    newname.setAttribute("class","effect-10");

    maxy=document.createElement("input");
   maxy.setAttribute("type","number");
   maxy.setAttribute("id","new_maxy");
   maxy.setAttribute("placeholder","Maximum Mark");
   maxy.setAttribute("class","effect-10");


    var newedit=document.createElement("button");
    newedit.setAttribute("class","w3-btn w3-orange w3-ripple");
    newedit.setAttribute("style","width: 200px;");
    newedit.setAttribute("id","new_button");
    newedit.setAttribute("onclick","add_row();sumall();");
    newedit.innerHTML="Add Criteria";

    col11.appendChild(newname);
    col22.appendChild(maxy);
    col44.appendChild(newedit);

//Div4 creation
    col7=document.getElementById("col7");
    col8=document.getElementById("col8");
    col9=document.getElementById("col9");

    var dbsave=document.createElement("button");
    dbsave.setAttribute("class","w3-btn w3-ripple");
    dbsave.setAttribute("style","width: 200px;");
    dbsave.setAttribute("id","dbsave");
    dbsave.setAttribute("onclick","save_db();");
    dbsave.innerHTML="Save to DB";

    var cancel_btn=document.createElement("button");
    cancel_btn.setAttribute("class","w3-btn w3-ripple");
    cancel_btn.setAttribute("style","width: 200px;");
    cancel_btn.setAttribute("id","cancel");
    cancel_btn.setAttribute("onclick","cancel_ex();");
    cancel_btn.innerHTML="Cancel";

    var maxpoint_label=document.createElement("label");
    maxpoint_label.innerHTML="Total Points    ";
    maxpoint_text=document.createElement("label");
    maxpoint_text.setAttribute("id","max");
    col7.appendChild(maxpoint_label);
    col8.appendChild(maxpoint_text);
    col9.appendChild(dbsave);
    col9.appendChild(cancel_btn);
}
function cancel_ex()
{
  location.reload();
}
function add_row(){
  var pattern = new RegExp(/^[0-9]+$/);
    if($("#new_name").val() == "" )
    {
      alert("Please fill Criteria Name !");
    }
    else if($("#new_maxy").val() == "" )
    {
      alert("Please fill Maximum Mark !");
    }
    else {
 var new_name=document.getElementById("new_name").value;
 var new_maxy2=document.getElementById("new_maxy").value;
cri_id++;
 table3=document.getElementById("data_table");
 table_len=(table3.rows.length);
  //Modal creation
 htm="<div class='modal fade' id='myModal"+table_len+"' role='dialog'>";
 htm+="<div class='modal-dialog'>";
 htm+="<div class='modal-content'>";
 htm+="<div class='modal-header'>";//header
 htm+="<button class='close' type='button' data-dismiss='modal' onclick='sumall_val("+table_len+")'>"+"&times;"+"</button>";
 htm+="<h4 class='modal-title'>"+"Create Rubric"+"</h4>";
 htm+="</div>";                 //header finish
 htm+="<div class='modal-body'>";//body start
 htm+="<p>"+"Descriptive"+"</p>";
 htm+="<button id='Button_"+table_len+"' onclick='ctab("+table_len+")' class='btn btn-success'>"+"<b>"+"+"+"</b>"+"</button>";
 htm+="<button id='Buttondel_"+table_len+"' onclick='ctabs("+table_len+")' class='btn btn-success'>"+"<b>"+"-"+"</b>"+"</button>";
 htm+="<div id='mt'>";//mt start
 htm+="<table class='table table-bordered form-inline table-striped table-condensed'>";
 htm+="<thead>";
 htm+="<tr>";

 htm+="<td>"+"Name"+"</td>";
 htm+="<td>"+"Marks"+"</td>";
 htm+="</tr>";
 htm+="</thead>";
 htm+="<tbody id='Table_"+table_len+"' class='hummer'>"+"</tbody>";
 // htm+="<td>full mark</td>";
 // htm+="<td>"+ new_maxy2 +"</td>";
 htm+="</table>";
 htm+="</div>";//mt finish
 htm+="</div>";//body finish
 htm+="<div class='modal-footer'>";//footer start
 htm+="<button type='button' class='btn btn-default' data-dismiss='modal' onclick='sumall_val("+table_len+")'>"+"Save"+"</button>";
 htm+="</div>"//footer finish
 htm+="</div>"
 htm+="</div>";
 //Modal creation end

 //criteria creation
 row = table3.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='rate_row"+table_len+"'><a><span id='g"+table_len+"' class='glyphicon glyphicon-plus-sign' data-toggle='modal' data-target='#myModal"+table_len+"'></span></a>"+htm+"</td><td class='bolt' id='point_row"+table_len+"'>"+new_maxy2+"</td><td><a id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+"); sumall();'><span class='glyphicon glyphicon-pencil'></span></a> <a id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+"); sumall();'><span class='glyphicon glyphicon-ok'></span> </a><a value='Delete' class='delete' onclick='delete_row("+table_len+"); sumall();'><span class='glyphicon glyphicon-trash'></span></a></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_maxy").value="";

}//else
}
function delete_row(no)
{
  cri_id--;
 document.getElementById("row"+no+"").outerHTML="";
}
function edit_row(no)
{
  document.getElementById("edit_button"+no).style.display="none";
  document.getElementById("save_button"+no).style.display="block";
  var name=document.getElementById("name_row"+no);
  var point=document.getElementById("point_row"+no);

  var name_data=name.innerHTML;
  var point_data=point.innerHTML;

  name.innerHTML="<input class='form-control' type='text' id='name_text"+no+"' value='"+name_data+"'>";
  point.innerHTML="<input class='form-control' type='text' id='maxy_text"+no+"' value='"+point_data+"'>";
}

function save_row(no)
{

  var name_val=document.getElementById("name_text"+no).value;
  var maxy_val=document.getElementById("maxy_text"+no).value;

  document.getElementById("name_row"+no).innerHTML=name_val;
  document.getElementById("point_row"+no).innerHTML=maxy_val;
  document.getElementById("edit_button"+no).style.display="block";
  document.getElementById("save_button"+no).style.display="none";
}
function sumall_val(no)
{
  var pattern = new RegExp(/^[0-9]+$/);
  var kn=document.getElementsByClassName("hummer")[no].rows.length;
  for(var len=0;len<kn;len++)
  {
      mtd1=document.getElementsByClassName("hummer")[no].rows[len].childNodes[0].childNodes[0].value;
      mtd2=document.getElementsByClassName("hummer")[no].rows[len].childNodes[1].childNodes[0].value;
      if(mtd1=="" || mtd2=="" )
      {
        var ret=confirm("Please fill all Rows");
        if(ret==true)
        {
          flag=1;
          var my_modal = $('#myModal'+no);
          $('#myModal'+no).modal({
            backdrop: 'static',
            keyboard: false
          });

        }
        else {
          flag=0;
          $('#myModal'+no).modal('hide');
        }

      }
      else {
      flag=0;
      }
  }
lastverify(no);
}
function lastverify(tabid)
{
    try
    {
        var tabs=document.getElementById("Table_"+tabid+"");//modal
        var maxtab=document.getElementById("point_row"+tabid+"").innerHTML;//outer table
        maxtab=parseInt(maxtab);
        console.log("Total cri value :"+maxtab);
        for(v=0;v<tabs.rows.length;v++)
        {
          var sval=tabs.rows[v].cells[1].childNodes[0].value;
          sval=parseInt(sval);
          console.log("modal value :"+sval);
          if(sval<maxtab || sval==maxtab)
          {
            
          }
          else 
          {
            throw "Ooooppssss!!"
          }
      }
    }
    catch(errs)
    {
        alert(errs);

    }

}
function sumall(){

var sum=0; var y;var total=0;
var z=document.getElementById("max");
var ry=document.getElementById("data_table").rows.length;
var hj=document.getElementsByClassName("hummer");
   for(o=0;o<ry;o++)
   {
     var you=document.getElementsByClassName("bolt")[o].innerHTML;
     total=total+parseInt(you);
     z.innerHTML=total;
   }

}

function addtext(){
    var h=document.getElementById("fort");
    var nan=document.createElement("input");
    nan.setAttribute("type","text");
    nan.setAttribute("id",hg);
    nan.setAttribute("class","form-control");
    nan.setAttribute("placeholder","Enter Mark");
    h.appendChild(nan);
    hg++;
}

function ctab(no){
  auto_des++;
 var val_des=document.getElementById("new_maxy").value;
 var gf=document.getElementById("Table_"+no);
 var crow=document.createElement("tr");
 var cd2=document.createElement("td");
 var cd3=document.createElement("td");

  var dd2=document.createElement("textarea");
 dd2.setAttribute("class","form-control");
 dd2.setAttribute("style","width: 250px; height: 60px;");
 dd2.setAttribute("type","text");

  var dd3=document.createElement("input");
 dd3.setAttribute("class","form-control");
 dd3.setAttribute("style","width: 100px; height: 60px;");
 dd3.setAttribute("type","number");

 cd2.appendChild(dd2);
 cd3.appendChild(dd3);
 crow.appendChild(cd2);
 crow.appendChild(cd3);
 gf.appendChild(crow);
}
function ctabs(no){
    var gf=document.getElementById("Table_"+no);
    gf.removeChild(gf.lastChild);
    auto_des--;
}

function save_db()
{
  var pattern = new RegExp(/^[0-9]+$/);
  if($("#enum").val()== "" || !pattern.test($("#enum").val()) )
  {
    alert("Please give Decimal(Integer) in Exercise Number !");
  }
  else if($("#ename").val() == "" )
  {
    alert("Please fill Exercise Name !");
  }
else if(flag===1)
{
  alert("Error in Modal.Check it!");
}
  else {
  ref2 = database.ref(username+'/course/'+myvar+'/ExerciseTable');
  id=document.getElementById("enum").value;
  name=document.getElementById("ename").value;
  tot=document.getElementById("max").innerHTML;

  ref2.child(id).set({
  Exid:id,
  Ename:name,
  Etotal:tot
});// ex save
var tb=table3.rows.length;
for (var z = 0; z < tb; z++)
{
    tno=z+1;
    tnam=table3.rows[z].childNodes[0].innerHTML;
    tmark=table3.rows[z].childNodes[2].innerHTML;
     ref2.child(id+"/"+tno).set({
     cid:tno,
     cname:tnam,
     ctotal:tmark
     });// criteria save

     var hj=document.getElementsByClassName("hummer");
         var kn=document.getElementsByClassName("hummer")[z].rows.length;
         for(var len=0;len<kn;len++)
         {
           var des_id=len+1;
             mtd1=des_id;
             mtd2=document.getElementsByClassName("hummer")[z].rows[len].childNodes[0].childNodes[0].value;
             mtd3=document.getElementsByClassName("hummer")[z].rows[len].childNodes[1].childNodes[0].value;
             ref2.child(id+"/"+tno+"/"+mtd1+"/").set({
             did:mtd1,
             dname:mtd2,
             dmark:mtd3
             });// descriptive save

         }

}// for z end

alert("Saved!!");
 document.getElementById('sbtn').style.visibility=true;
var aj=1;
if(aj==1)
{
  location.reload();
  aj++;
}
//clearpage();
}//else
}//save

// view
function view(obj)
{
  alert(obj);
  ref2.child(username+'/course/'+myvar+'/ExerciseTable/'+obj).once("value").then(function(questionSnapshot) {
    for (var key in questionSnapshot.val()) {
      for (var item of questionSnapshot.val()[key]['1']) {
          console.log(item.cid);
          console.log(item.did);
      }
  }
  });
}
function viewdata(data)
{
  var l=document.createElement("label");
  var marks=data.val();
  var keys = Object.keys(marks);
  for(var i=0; i<keys.length; i++)
  {
      var k = keys[i];
      var id =marks[k].Exid;
      var en=marks[k].Ename;
      var et=marks[k].Etotal;
  }


  maindiv4.appendChild(l);
}


function clearpage()
{
  var cn=document.getElementById("listx");
    while(cn.hasChildNodes())
    {
      cn.removeChild(cn.lastChild);
    }
var database = firebase.database();
var refsome = database.ref(username+'/course/'+disp+'/ExerciseTable/');
refsome.on('value',gotClear,errData);
}

function gotClear(datu)
{
    try{
        var ex=datu.val();
    var sa=Object.keys(ex);
    var s=sa.length;
    var listx=document.getElementById("listx");
    for(j=0;j<s;j++)
    {
        var k=sa[j];
        var ename=ex[k].Ename;
        var q=j+1;

        var divs=document.createElement("div");
        var para=document.createElement("p");
        var it=document.createElement("i");

        var yt=document.createElement("div");
        var rt=document.createElement("div");
        rt.setAttribute("class","rows");
        yt.setAttribute("id","tid"+q+"");
        yt.setAttribute("class","col-sm-12");

        var fiv=document.createElement("div");
        fiv.setAttribute("id","fiv"+q+"");

        yt.appendChild(fiv);
        rt.appendChild(yt);

        it.setAttribute("class","material-icons w3-btn w3-ripple");

        it.setAttribute("onclick","drop("+q+");alter("+q+")");
        it.setAttribute("id","it"+q+"");
        it.innerHTML="keyboard_arrow_down";
        para.setAttribute("style","font-size: 20px;")
        para.innerHTML=ename;
        para.setAttribute("id","para");
        para.appendChild(it);
        it.appendChild(rt);
        divs.appendChild(para);
        divs.appendChild(rt);
        listx.appendChild(divs);

    }
    }
    catch(mistake)
    {
        console.log("Something happened");
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
    errpara.innerHTML="<strong>Warning!</strong>       No Exercises to display. Please create one.";
    errdiv.appendChild(errpara);
    var app=document.getElementById("card");
    app.appendChild(errdiv);
    }

}
function assmt(assid)
{
  location.href="assmt.html";
  sessionStorage.assEid=assid;
}
function assname(en)
{
  sessionStorage.ename=en;
}
function empty()
{
    var etab=document.getElementsByTagName("tbody");
    for(eb=0;eb<etab.length;eb++)
    {
        var c_eb=etab[eb].rows.length;
        console.log(c_eb);
        if(c_eb==0)
        {
            etab[eb].parentNode.parentNode.innerHTML="Nan";
        }
    }
}
