var user;
var score;
var Uname;
var Score;
var initialinput;

var ExNo;
var No;
var exno;
var chuser;

var database = firebase.database();
 var ref = database.ref('StudentDetails');
  ref.on('value',gotData,errData);
  var arr;

function gotData(data){
var marks=data.val();
var keys = Object.keys(marks);
console.log(keys);
var html="<div class='form-group'>";
//html+="<label for=sel1'>"+"Exercise Number"+"</label>";

for(var i=0; i<keys.length; i++)
{
  html+="<label for=sel1' id = 'l"+i+"'>";

    var k = keys[i];
    var roll =marks[k].roll;
    var reg =marks[k].reg;

    console.log(roll);
    html+=roll+"\t"+reg+"</label></br>";
   
}
    //html+="</select>";

document.getElementById("box").innerHTML = html;

}
function errData(err){
console.log('Error..!!!');
console.log(err);
}