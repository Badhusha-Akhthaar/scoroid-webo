  var ref
	var aa=0;
	var z=1,anu=0;
	var numb=1;
	var id="ping";
	var x,ab,bc,cd,tr,ty,tg,we,er;
	var id1,id2,stat="mark",num="1";
	var mnc="avg";
	var mno="total";var abcd=1;
	var msg="status";
 var id=1;var sele,cri;
 var n;
 var c,loop;
// Firebase code
var database = firebase.database();
function add()
{

	var tblData = new Array();
	var td = new Array();
	var table = document.getElementById("frm");
	 sele =  document.getElementById("sel1");
	 cri =  document.getElementById("sel2");

	tr = table.getElementsByTagName('tr');

	database = firebase.database();
	ref = database.ref('ExTable');

	for (i = 0; i < tr.length; i++)
	{
	  td = tr[i].getElementsByTagName('td');

	  var td1 = td[0].childNodes[0].value;
	  var td2 = td[1].childNodes[0].value;
		var td3 = td[2].childNodes[0].value;
	  var selec=sele.value;
	  var descript=cri.value;
  console.log(td1);
	  ref.child(selec+"/"+descript+"/"+td1).set({
    DNo:td1,
	  descriptive: td2,
	  mark:td3
	  });
	}
}
function loader(){
	var i=aa;
	var zz=z+aa;

	for(i;i<zz;i++){
		var head=document.createElement("tr");
		ab="tear";
		bc=zz;
		cd=ab.concat(bc);
		head.setAttribute("id",cd);
        document.getElementById("frm").appendChild(head);
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
        	x=document.createElement("textarea");
        	x.setAttribute("type","text");
        	x.setAttribute("class","form-control");
        	x.setAttribute("style","height: 76px ; width:39px");
					x.value=id;
					x.disabled=true;
        	document.getElementById(tg).appendChild(x);
        }
        else if(p==1){
        	x=document.createElement("textarea");
        	x.setAttribute("type","text");
        	x.setAttribute("class","form-control");
        	x.setAttribute("style","height: 75px");
        	document.getElementById(tg).appendChild(x);

        }
        else if(p==2){
					database = firebase.database();
				var choice=document.getElementById("sel1").value;
			 ref = database.ref('ExTable/'+choice+'/');
			ref.on('value',gotData,errData);

   }// if
  }
}
abcd++;
aa++;
id++;
}

function gotData(data){

var marks=data.val();
var keys=Object.keys(marks);
console.log(keys);

if(anu==0)
{
for(var i=0; i<keys.length-2; i++)
{
    var k = keys[i];
    n = marks[k].cmark;
    //alert(n);
}
anu=anu+1;
}
opt(n);
}// gotdata


function opt(loop)
{
	var options = new Array();

	x = document.createElement('select');
	  x.setAttribute("id","drop");
		x.setAttribute("onchange","choo()");
		x.setAttribute("class","form-control");
	x.setAttribute("style","height: 75px");

for ( var i = 1; i <= loop; i++ ){

options.push(new Option("Mark " + i,  i, false, false));
}

options[0].selected = true;
for ( var option in options ){
x.appendChild(options[option]);
}
document.getElementById(tg).appendChild(x);
}//opt

function choo()
{
	c=document.getElementById("drop").value;
	console.log(c);
	//opt(n);
	if(n!=0)
	{
		n=n-c;
		console.log(n);
		if(n==0)
		{
			alert("No more splitting");
		}
	}

}

function errData(err){
console.log('Error..!!!');
console.log(err);
}

function reloader()
{
   var s = document.getElementById('frm');
   s.removeChild(s.lastChild);
	 id--;
}
