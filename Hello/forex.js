var disp=sessionStorage.myvar;
alert(disp);

if(disp === null || disp===undefined)

{
  alert("Please Select the Course again!");
  location.href="course.html";
}
 else {
localStorage.removeItem('objectToPass');
var database = firebase.database();
var ref = database.ref('course/'+disp+'/ExerciseTable/');
ref.on('value',gotEx,errData);
}
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
		console.log(ename);
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
		// divs.appendChild(fiv);
		listx.appendChild(divs);



	}
}
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
     // ftbody.setAttribute("style","border-color: #292929;");
    // fthead.setAttribute("class","w3-teal");
    fthead.setAttribute("style","color: white");
    var hrow=document.createElement("tr");
    var hd1=document.createElement("td");
    hd1.innerHTML="Criteria No.";
    var hd2=document.createElement("td");
    hd2.innerHTML="Criteria Name";
    var hd3=document.createElement("td");
    hd3.innerHTML="Discriptive";
    var hd4=document.createElement("td");
    hd4.innerHTML="Total Mark";

    hrow.appendChild(hd1);
    hrow.appendChild(hd2);
    hrow.appendChild(hd3);
    hrow.appendChild(hd4);

    fthead.appendChild(hrow);
    ftable.appendChild(fthead);
    ftable.appendChild(ftbody);
    var io=document.getElementById("fiv"+hi+"");
    io.appendChild(ftable);
    bodycreate(hi);
}

function bodycreate(hell)
{

var ref = database.ref('course/'+disp+'/ExerciseTable/'+hell+'/');
ref.on('value',function(data){gotdi(data,hell)},errData);

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
        var bd4=document.createElement("td");
        bd4.innerHTML=ctotal;

        brow.appendChild(bd1);
        brow.appendChild(bd2);
        brow.appendChild(bd3);
        brow.appendChild(bd4);
        bod.appendChild(brow);
        var a=p+1;
        var ref8 = database.ref('course/'+disp+'/ExerciseTable/'+re+'/'+a+'/');
        ref8.on('value',function(tie){gotLow(tie,re,a)},errData);
    }
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
       var ref9 = database.ref('course/'+disp+'/ExerciseTable/'+red+'/'+b+'/'+t+'');
        ref9.on('value',function(bud){gotMuch(bud,red)},errData);
    }
}


function gotMuch(dude,guy)
{
    var ex9=dude.val();
    var sa9=Object.keys(ex9);
    var s9=sa9.length;
    console.log("Hello there"+s9+"");

    var did=ex9.did;
    var dmark=ex9.dmark;
    var dname=ex9.dname;

    console.log(did);
    console.log(dmark);
    console.log(dname);
    var y=document.querySelectorAll(".subtable"+guy+"").length;
    console.log("Class length is"+y+"");
    var ytabl=document.querySelectorAll(".subtable"+guy+"");
    var yd1=document.createElement("td");
    var yd2=document.createElement("td");
    var yd3=document.createElement("td");
    var space=document.createElement("br");

   
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
}

