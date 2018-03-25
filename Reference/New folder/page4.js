var user;
var score;
var Uname;
var Score;
var initialinput;
var database;
var ExNo;
var No;
var exno;
var chuser;
var cno;var cname;var cmark;

//var sele =  document.getElementById("sel1"); alert(sele);
//var selec=sele.value;

  database = firebase.database();
 var ref = database.ref('ExTable/1');
  ref.on('value',gotData,errData);

function gotData(data){
//console.log(data.val());
var marks=data.val();
var keys = Object.keys(marks);
console.log(keys);
var html = "<table  class = 'table table-striped table-bordered table-responsive'>";
html+="<tr><th>CNo</th>";
html+="<th>CName</th>";
html+="<th>CMark</th></tr>";
for(var i=0; i<keys.length - 3; i++)
{
    var k = keys[i];
    var Uname =marks[k].cno;
    var Score = marks[k].cname
    var No = marks[k].cmark;
//    console.log(Uname,Score);
    html+="<tr>";
    html+="<td>"+Uname+"</td>";
    html+="<td>"+Score+"</td>";
    html+="<td>"+No+"</td>";
    html+="</tr>";
}
    html+="</table>";

document.getElementById("boxyy").innerHTML = html;

}
function errData(err){
console.log('Error..!!!');
console.log(err);
}
