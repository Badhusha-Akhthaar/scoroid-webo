
	var aa=0;
	var z=1;
	var numb=1;
	var id="ping";
	var x,ab,bc,cd,tr,ty,tg,we,er;
	var id1,id2,stat="mark",num="1";
	var mnc="avg";
	var mno="total";var abcd=1;
	var msg="status";

// Firebase code
var database = firebase.database();
function setup()
{var database = firebase.database();
    var ref = database.ref('ExTable');
    ref.on('value',gotEv,errData);

}
function gotEv(data)
{
var eve=data.val();
var ke = Object.keys(eve);
console.log(ke);  
var ht="<table class='table table-bordered table-condensed table-responsive '>";
ht+="<thead>";
ht+="<tr>";
ht+="<td>"+"Number"+"</td>";
ht+="<td>"+"Name"+"</td>";
ht+="</tr>";
ht+="</thead>";


ht+="<tbody id='hlo'>";
for(var i=0; i<ke.length; i++)
{
    var k = ke[i];
    var ch1 =eve[k].No;
    var ch2 =eve[k].Uname;
    console.log(ch1);

    ht+="<tr>";
    ht+="<td>"+ch1+"</td>";
    ht+="<td>"+ch2+"</td>";
    ht+="</tr>";
}
    ht+="</tbody>"; 
    ht+="</table>";

document.getElementById("accept").innerHTML = ht;
}

function add()
{

var tblData = new Array();
var td = new Array();
var table = document.getElementById("frm2");
var sele =  document.getElementById("sel1");
tr = table.getElementsByTagName('tr');
for (i = 0; i < tr.length; i++) 
{
    td = tr[i].getElementsByTagName('td');
    var td1 = td[0].childNodes[0].value;
    var td2 = td[1].childNodes[0].value;
    var td3 = td[2].childNodes[0].value;
    var selec=sele.value;
    database = firebase.database();
    var ref = database.ref('ExTable');

    ref.child(selec+"/"+td1).set({

    cno: td1,
    cname:td2,
    cmark:td3

    });
  }// for end
}









// $("#addbtn").click(function(e)
function loader(){
	var i=aa;
	var zz=z+aa;

	for(i;i<zz;i++){
		var head=document.createElement("tr");
		ab="tear";
		bc=zz;
		cd=ab.concat(bc);
		head.setAttribute("id",cd);
        document.getElementById("frm2").appendChild(head);
        

        for(var p=0;p<3;p++){
        if(p<3){
        	var lab=document.createElement("td");
        	tr="tead";
        	ty=p;
        	we=zz;
        	er=tr.concat(ty);
        	tg=er.concat(we);
        	lab.setAttribute("id",tg);
        	document.getElementById(cd).appendChild(lab);

        }
        if(p==0){
        	x=document.createElement("input");
        	x.setAttribute("type","text");
        	x.setAttribute("class","form-control");
        	x.setAttribute("style","height: 75px");
        	document.getElementById(tg).appendChild(x);

        }
        else if(p==1){
            x=document.createElement("textarea");
        	// x.setAttribute("type","text");
        	x.setAttribute("class","form-control");
        	x.setAttribute("style","height: 75px");
        	id1=stat.concat(num);
        	num++;
        	x.setAttribute("id",id1);
        	document.getElementById(tg).appendChild(x);

        }
        else if(p==2){
            x=document.createElement("input");
        	x.setAttribute("type","text");
        	x.setAttribute("class","form-control");
        	x.setAttribute("style","height: 75px");
        	id1=stat.concat(num);
        	num++;
        	x.setAttribute("id",id1);
        	document.getElementById(tg).appendChild(x);

        }
        
        }
}
abcd++;
aa++;
}
function reloader()
{
   var s = document.getElementById('frm2');
   s.removeChild(s.lastChild);
     id--;
}
