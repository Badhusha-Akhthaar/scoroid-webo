var myvar=sessionStorage.myvar;
var assmtEid=sessionStorage.editEid;
var username=sessionStorage.variable1;
var anyname=sessionStorage.anyname;
console.log(anyname);
var displayname;
var database = firebase.database();
var act;
var y=0;
var tosu=0;
var ref = database.ref(username+'/course/'+myvar+'/ExerciseTable/'+assmtEid+'/');
function setup()
{
    ref.on('value',function(data){gotdi(data,assmtEid)},errData);
}

function gotdi(you,re)
{
  document.getElementById("show").innerHTML=anyname;
  document.getElementById("cid").innerHTML=myvar;
  q=assmtEid;
  var fiv=document.createElement("div");
  fiv.setAttribute("id","fiv"+q+"");
    var ftable=document.createElement("table");
    var fthead=document.createElement("thead");
    var ftbody=document.createElement("tbody");
    var ftfoot=document.createElement("tfoot");
    ftable.setAttribute("class","table table-bordered");
    ftbody.setAttribute("id","bod"+q+"");
    ftbody.setAttribute("class","tbody");
    fthead.setAttribute("class","w3-teal");
    fthead.setAttribute("style","color: white");

    ftfoot.innerHTML="<tr><td colspan='5' class='w3-center'><span class='w3-button'><i class='material-icons' onclick='newrow();'>add</i></span></td></tr>"
    var hrow=document.createElement("tr");
    var hd2=document.createElement("td");
    hd2.innerHTML="Criteria Name";
    var hd3=document.createElement("td");
    hd3.innerHTML="Descriptive";
    var hd4=document.createElement("td");
    hd4.innerHTML="Max. Mark";
    var hd5=document.createElement("td");
    hd5.innerHTML="Mark obtain";

    hrow.appendChild(hd2);
    hrow.appendChild(hd3);
    hrow.appendChild(hd4);
    hrow.appendChild(hd5);

    fthead.appendChild(hrow);
    ftable.appendChild(fthead);
    ftable.appendChild(ftbody);
    ftable.appendChild(ftfoot);
    fiv.appendChild(ftable);
    var boxy=document.getElementById("boxy");
    boxy.appendChild(fiv);

    var ex3=you.val();
    var sa3=Object.keys(ex3);
    var s3=sa3.length;
    var displaymark=ex3.Etotal;
   displayname=ex3.Ename;
    var bod=document.getElementById("bod"+re+"");
    for(p=0;p<s3-3;p++)
    {
      var adb=p+1;
        var k=sa3[p];
         cid=ex3[k].cid;
        var cname=ex3[k].cname;
        var ctotal=ex3[k].ctotal;

        var nameit=document.getElementsByClassName("tbody")[0].rows.length;
        var brow=document.createElement("tr");
        var bd2=document.createElement("td");
        bd2.innerHTML="<input type='text' class='form-control' value='"+cname+"'>";
        var bd3=document.createElement("td");
        bd3.innerHTML="<table class='table table-bordered table-condensed'><thead><tr><td>"+"Description"+"</td><td>"+"Marks"+"</td></tr></thead><tbody class='tide subtable"+re+"' id='dtable"+nameit+"'></tbody><tfoot><tr><td colspan='5' class='w3-center'><span class='w3-button'><i onclick='newdes("+nameit+")' class='material-icons' id='desce"+nameit+"'>add</i></span></td></tr></tfoot></table>";
        id=0;
        var bd4=document.createElement("td");
        bd4.innerHTML="<input type='number' class='form-control' value='"+ctotal+"'>";
        bd5=document.createElement("td");
        bd5.setAttribute("ondblclick",'tdedit("'+cid+'")');

        bd5.setAttribute("id","tdedit"+cid+"");
        bd5.innerHTML="<a class='w3-button'><span><i class='material-icons' onclick='deldes(this)'>clear</i></span></a>";

        brow.appendChild(bd2);
        brow.appendChild(bd3);
        brow.appendChild(bd4);
        brow.appendChild(bd5);
        bod.appendChild(brow);
        var a=p+1;
        var ref8 = database.ref(username+'/course/'+myvar+'/ExerciseTable/'+re+'/'+cid+'/');
        ref8.on('value',function(tie){gotLow(tie,re,cid)},errData);
    }
    var addrow=document.createElement("tr");
    var adddata=document.createElement("td");
    var mmark=document.createElement("td");
    var obmark=document.createElement("td");
    var addmark=document.createElement("td");
    var addbtt=document.createElement("td");

    adddata.setAttribute("colspan","2");
    mmark.innerHTML="<input type='number' class='form-control' value='"+displaymark+"' onclick='check();' id='summ' disabled>";
    mmark.setAttribute("colspan","1");

    obtt=document.createElement("button");
    obtt.setAttribute("class","w3-btn");
    obtt.setAttribute("onclick","sumval();");
    obtt.setAttribute("style","color: red;");
    obtt.innerHTML="Sum";
    obmark.setAttribute("colspan","1");
    obmark.appendChild(obtt);


    addbtt.setAttribute("colspan","1");
    adddata.innerHTML="Total Mark:  ";




    btt=document.createElement("button");
    btt.setAttribute("id","btn_id"+cid+"");
    btt.setAttribute("class","w3-btn");
    btt.setAttribute("onclick","saveDB("+cid+");");
    btt.setAttribute("onmouseover","sumval()");
    btt.setAttribute("style","color: red;");
    btt.innerHTML="Update";
    addbtt.appendChild(btt);

    // addrow.appendChild(obmark);
    addrow.appendChild(adddata);
    addrow.appendChild(mmark);

    addrow.appendChild(addbtt);
    ftfoot.appendChild(addrow);
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
       var ref9 = database.ref(username+'/course/'+myvar+'/ExerciseTable/'+red+'/'+b+'/'+ty_id+'');
        ref9.on('value',function(bud){gotMuch(bud,red,b,s8,y)},errData);
    }
    y++;
}


function gotMuch(dude,guy,vol,s8,xx)
{
    var ex9=dude.val();
    var sa9=Object.keys(ex9);
    var s9=sa9.length;

    dmark=ex9.dmark;
    var dname=ex9.dname;

    var ithu="this";
    var ytabl=document.querySelectorAll(".tide");
    var nlen=ytabl[xx].rows.length;
    var row = ytabl[xx].insertRow();
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(1);
    var cell4 = row.insertCell(2);
    cell2.innerHTML="<input type='text' class='form-control' value='"+dname+"'>";
    cell2.setAttribute("style","font-weight: bold;");
    cell3.innerHTML="<input type='number' class='form-control' value='"+dmark+"'>";
    cell4.innerHTML="<a class='w3-button'><span><i class='material-icons' onclick='deldes(this)'>clear</i></span></a>";



  id++;

}
function errData(err)
{
    console.log("Error")
}


function saveDB(newid)
{
    try{
    var formax=check();
    var forinner=verify();
    var fornull=chnull();
    if(formax==false)
    {
        throw "Enter values less than Max";
    }
    if(forinner==false)
    {
        throw "Enter inputs in descending order";
    }
    if(fornull==false)
    {
    	throw "Textboxes should not be null or check the input types";
    }

    var some=assmtEid;
    var ref2 = database.ref(username+'/course/'+myvar+'/Edited/'+some+'/');
    var somemark=document.getElementById("summ").value;
    var refe = database.ref(username+'/course/'+myvar+'/Edited');
    refe.child(some).set({
    Exid: assmtEid,
    Ename: displayname,
    Etotal: somemark
    });
    var tb=document.getElementsByClassName("tbody")[0];
    var len=tb.rows.length;
    for(var l=0;l<len;l++)
    {
        var tno=l+1;
        var tnam=tb.rows[l].childNodes[0].childNodes[0].value;
        var tmark=tb.rows[l].childNodes[2].childNodes[0].value;

        ref2.child(tno).set({
        cid:tno,
        cname:tnam,
        ctotal:tmark
        });// criteria save
         var kn=document.getElementsByClassName("tide")[l].rows.length;

         for(var lent=0;lent<kn;lent++)
         {
             var mtd1=lent+1;
             var mtd2=document.getElementsByClassName("tide")[l].rows[lent].childNodes[0].childNodes[0].value;
             var mtd3=document.getElementsByClassName("tide")[l].rows[lent].childNodes[1].childNodes[0].value;

             ref2.child(tno+"/"+mtd1).set({
             did:mtd1,
             dname:mtd2,
             dmark:mtd3
             });// descriptive save

         }

    }
    var oldref = database.ref(username+'/course/'+myvar+'/Edited/'+some+'');
    var newref = database.ref(username+'/course/'+myvar+'/ExerciseTable/'+some+'/');
    var conf=confirm("Do you want to save this edit?");
    if(conf==true)
    {
       movefb(oldref,newref);
       location.reload();
    }

    }
    catch(error)
    {
       alert(error);
    }



}
function movefb(oldRef,newRef)
{
    oldRef.once('value', function(snap)  {
          newRef.set( snap.val(), function(error) {
               if( !error ) {  oldRef.remove(); }
               else if( typeof(console) !== 'undefined' && console.error ) {  console.error(error); }
          });
     });
}
function deldes(bn) {
  var row = bn.parentNode.parentNode.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


function newdes(yi)
{
    var adbld=document.getElementById("dtable"+yi+"");
    var pl=adbld.rows.length;
    var rw=adbld.insertRow();

    var cell2s = rw.insertCell(0);
    var cell3s = rw.insertCell(1);
    var cell4s = rw.insertCell(2);

    cell2s.innerHTML="<input type='text' class='form-control' value=''>";
    cell2s.setAttribute("style","font-weight: bold;");
    cell3s.innerHTML="<input type='number' class='form-control' value=''>";
    cell4s.innerHTML="<a class='w3-button'><span><i class='material-icons' onclick='deldes(this)'>clear</i></span></a>";
}
function chnull()
{
	var tbox=document.getElementsByTagName("input");
	for(x=0;x<tbox.length;x++)
	{
		var cj=tbox[x].value;
		if(cj=="")
		{
			return false;
		}

	}
}
function newrow()
{
        var bod2=document.getElementsByClassName("tbody")[0];
        var nameit=document.getElementsByClassName("tbody")[0].rows.length;
        var brow=document.createElement("tr");
        var bd2=document.createElement("td");
        bd2.innerHTML="<input type='text' class='form-control' >";
        var bd3=document.createElement("td");
        bd3.innerHTML="<table class='table table-bordered table-condensed'><thead><tr><td>"+"Description"+"</td><td>"+"Marks"+"</td></tr></thead><tbody class='tide subtable' id='dtable"+nameit+"'></tbody><tfoot><tr><td colspan='5' class='w3-center'><span class='w3-button'><i onclick='newdes("+nameit+")' class='material-icons' >add</i></span></td></tr></tfoot></table>";
        id=0;
        var bd4=document.createElement("td");
        bd4.innerHTML="<input type='number' class='form-control' >";
        bd5=document.createElement("td");


        bd5.innerHTML="<a class='w3-button'><span><i class='material-icons' onclick='deldes(this)'>clear</i></span></a>";

        brow.appendChild(bd2);
        brow.appendChild(bd3);
        brow.appendChild(bd4);
        brow.appendChild(bd5);
        bod2.appendChild(brow);
}


function check()
{
    var rowl=document.getElementsByClassName("tbody")[0].rows;
    for(var r=0;r<rowl.length;r++)
    {
        ch=document.getElementsByClassName("tbody")[0].rows[r].cells[2].childNodes[0].value;

        var tiderow=document.getElementsByClassName("tide")[r];
        for(var t=0;t<tiderow.rows.length;t++)
        {
            var noo=tiderow.rows[t].cells[1].childNodes[0].value;

            if(parseInt(noo)>parseInt(ch))
            {
                return false;
            }

        }

    }
}

function verify()
{
     var rowl=document.getElementsByClassName("tbody")[0].rows;
     var current;
     var previous;
     for(var r=0;r<rowl.length;r++)
     {
        var tidelen=document.getElementsByClassName("tide")[r].rows;
        for(var l=1;l<tidelen.length;l++)
        {
            var ly=l+1;
            var vertide=document.getElementsByClassName("tide")[r].rows[l].cells[1].childNodes[0];
            current=vertide.value;
            var verch=vertide.parentNode.parentNode.previousSibling.childNodes[1].childNodes[0];
            previous=verch.value;

            if(parseInt(current)>=parseInt(previous))
            {
                return false;
            }
        }


     }
}


function sumval()
{
    var rowl=document.getElementsByClassName("tbody")[0].rows;
    var summe=0;
    for(var r=0;r<rowl.length;r++)
    {
        var go=document.getElementsByClassName("tbody")[0].rows[r].cells[2].childNodes[0].value;
        summe=summe+parseInt(go);
    }
    document.getElementById("summ").value=summe;
}
