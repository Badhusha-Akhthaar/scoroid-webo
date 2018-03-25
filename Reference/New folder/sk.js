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

//var arr;


  database = firebase.database();
 var ref = database.ref('ExTable');
  ref.on('value',gotData,errData);
  // ref.on('value',checkData,errData);
  var arr;



function gotData(data){
//console.log(data.val());
var marks=data.val();
var keys = Object.keys(marks);
console.log(keys);
var html = "<table  class = 'table table-bordered table-responsive'>";
html+="<tr><th>ExName</th>";
html+="<th>ExNo</th></tr>";
for(var i=0; i<keys.length; i++)
{
    var k = keys[i];
    var Uname =marks[k].Uname;
    var No = marks[k].No;
    console.log(Uname,Score);
    html+="<tr>";
    html+="<td>"+Uname+"</td>";
    html+="<td>"+No+"</td>";
    html+="</tr>";
}
    html+="</table>";

document.getElementById("boxy").innerHTML = html;

}
function errData(err){
console.log('Error..!!!');
console.log(err);
}
function add()
{
    user= document.getElementById('uname').value;
    chuser= document.getElementById('uname').value;
    exno= document.getElementById('ex').value;
    database = firebase.database();
    var ref = database.ref('ExTable');

     ref.child(exno).set({
       Uname: user,
       No: exno
     });
     alert("inserted!!");
     gotData();
     if(flag==0){
      document.getElementById("disp").innerHTML = "Hello";
     }
 }
