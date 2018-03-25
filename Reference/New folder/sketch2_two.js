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




function setup()
{
	var database = firebase.database();
	var choice=document.getElementById("sel1").value;
    var ref = database.ref('ExTable/'+choice);
    ref.on('value',gotData,errData);
}


function gotData(data)
{


}
function errData(err){
console.log('Error..!!!');
console.log(err);
}
