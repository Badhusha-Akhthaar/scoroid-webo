var user;
var score;
var Uname;
var Score;
var initialinput;

var ExNo;
var No;
var exno;
var chuser;

//var arr;

var database = firebase.database();
var ref = database.ref('ExTable');
ref.on('value',gotData,errData);
var arr;

function gotData(data)
{
var marks=data.val();
var keys = Object.keys(marks);
console.log(keys);
var html="<div class='form-group'>";
html+="<label for=sel1'>"+"Exercise Number"+"</label>";


html+="<select  class = 'form-control' id = 'sel1' onchange='choose();choose2();'>";
html+="<option class='disabled'>"+"---Select---"+"</option>";
for(var i=0; i<keys.length; i++)
{
    var k = keys[i];
    var Uname =marks[k].No;
    console.log(Uname);
    html+="<option>"+Uname+"</option>";
}
    html+="</select>";

document.getElementById("boxy").innerHTML = html;

}

function errData(err)
{
console.log('Error..!!!');
console.log(err);
}
function choose()
{
	var choice=document.getElementById("sel1").value;
    var ref = database.ref('ExTable/'+choice);
    ref.on('value',gotchoice,errData);

}

function choose2()
{
    var choice=document.getElementById("sel1").value;
    var choice2=document.getElementById("sel2").value;
    var ref2 = database.ref('ExTable/'+choice+'/');
    

    ref2.on('value',gotsome,errData);
        
}




function gotsome(dat)
{
    var some=dat.val();
    var hike=Object.keys(some);
    console.log(hike);
var ht2="<table class='table table-bordered table-condensed table-responsive '>";
ht2+="<thead>";
ht2+="<tr>";
ht2+="<td>"+"Number"+"</td>";
ht2+="<td>"+"Name"+"</td>";
ht2+="<td>"+"Mark"+"</td>";
ht2+="</tr>";
ht2+="</thead>";


ht2+="<tbody id='hlo2'>";
for(var i=0; i<hike.length-2; i++)
{
    var k = hike[i];
    var sc1 =some[k].cno;
    var sc2 =some[k].cname;
    var sc3 =some[k].cmark;
    ht2+="<tr>";
    ht2+="<td>"+sc1+"</td>";
    ht2+="<td>"+sc2+"</td>";
    ht2+="<td>"+sc3+"</td>";
    ht2+="</tr>";

}
    ht2+="</tbody>"; 
    ht2+="</table>";
document.getElementById("only").innerHTML = ht2;
//alert(sc3);
}


function gotchoice(data)
{
	var choices=data.val();
	var elems=Object.keys(choices);
	console.log(elems);
	var htm="<div class='form-group'>";
    htm+="<label for=sel1'>"+"Criteria Number"+"</label>";
    htm+="<select  class = 'form-control' id = 'sel2' onchange='hello();'>";
    htm+="<option>"+"---Select---"+"</option>";
    for(var i=0; i<elems.length-2; i++)
    {
    var k = elems[i];
    var sc =choices[k].cno;
    console.log(sc);
    htm+="<option>"+sc+"</option>";
    }
    htm+="</select>";
document.getElementById("choices").innerHTML = htm;
}

function hello()
{
    var c1=document.getElementById("sel1").value;
    var c2=document.getElementById("sel2").value;
    var rf = database.ref('ExTable/'+c1+'/'+c2+'/');
    rf.on('value',newfunc,errData);
    
    
}

function newfunc(datum)
{
    var fin=datum.val();
    var elf=Object.keys(fin);
    console.log(elf);
    var non=fin.cmark;
    var ht3="<table class='table table-bordered table-condensed table-responsive '>";
    ht3+="<thead>";
    ht3+="<tr>";
    ht3+="<td>"+"Descriptive No."+"</td>";
    ht3+="<td>"+"Desc. Name"+"</td>";
    ht3+="<td>"+"Desc. Mark"+"</td>";
    ht3+="</tr>";
    ht3+="</thead>"; 
    ht3+="<tbody id='hlo22'>";
    for(var j=0;j<elf.length-3;j++)
    {
       var n=elf[j];
       var m1=fin[n].DNo;
       var m2=fin[n].descriptive;
       var m3=fin[n].mark;
       ht3+="<tr>";
       ht3+="<td>"+m1+"</td>";
       ht3+="<td>"+m2+"</td>";
       ht3+="<td>"+m3+"</td>";
       ht3+="</tr>";
    }
    ht3+="<tr>";
    ht3+="<td  colspan='3' class='text-center'>"+"<kbd>"+"Maximum Mark Alloted="+non+"</kbd>"+"</td>";
    ht3+="</tr>";
    ht3+="</tbody>"; 
    ht3+="</table>";
document.getElementById("only").innerHTML = ht3;
}