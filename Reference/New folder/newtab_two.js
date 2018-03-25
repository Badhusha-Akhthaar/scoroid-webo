
	var aa=0;
	var z=1,anu=0;
	var numb=1;
	var id="ping";
	var x,ab,bc,cd,tr,ty,tg,we,er;
	var id1,id2,stat="mark",num="1";
	var mnc="avg";
	var mno="total";var abcd=1;
	var msg="status";
 var id=1;
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
	var sele =  document.getElementById("sel1");
	var cri =  document.getElementById("sel2");
	tr = table.getElementsByTagName('tr');
	var oi=tr.length;
	console.log(oi);
	for (i = 0; i < tr.length; i++)
	{
	  td = tr[i].getElementsByTagName('td');

	  var td1 = td[0].childNodes[0].value;
	  var td2 = td[1].childNodes[0].value;
		var td3 = td[2].childNodes[0].value;

	  var selec=sele.value;
	  var descript=cri.value;
	  database = firebase.database();
	  var ref = database.ref('ExTable');
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
        	x.setAttribute("style","height: 76px ; width:100px;");
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
        		x=document.createElement("input");
        	x.setAttribute("type","number");
        	x.setAttribute("class","form-control");
        	x.setAttribute("style","height: 75px");
        	document.getElementById(tg).appendChild(x);
            

        }

        }
}
abcd++;
aa++;
id++;
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
