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



function gotData(data){
var marks=data.val();
var keys = Object.keys(marks);
console.log(keys);
var html="<div class='form-group'>";
html+="<label for=sel1'>"+"Exercise Number"+"</label>";


html+="<select  class = 'form-control' id = 'sel1'>";
html+="<option>"+"---Select---"+"</option>";
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
function errData(err){
console.log('Error..!!!');
console.log(err);
}
