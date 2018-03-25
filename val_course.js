$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});
$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
       return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
       return false;
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
       return false;
      }

      if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
       return false;
      }      
});
var username=sessionStorage.variable1;
var ref = database.ref(username);
var ref1 = database.ref('TCE');

$(function() {
  $("#branchname_error_message").hide();
	$("#cno_error_message").hide();
	$("#cname_error_message").hide();
  var error_branchname ;
	var error_code ;
  var error_course;
  $("#branch").focusout(function() {
		check_branch();
	});
  $("#courseNo").focusout(function() {
		check_code();
	});
  $("#courseName").focusout(function() {
		check_course();
	});
function check_branch(){
  var letters = /^[A-Za-z]+$/;
  var bran = $("#branch").val();
     if(bran.match(letters))
     {
       $("#branchname_error_message").hide();
        error_branchname = false;
    }
    else {
      $("#branchname_error_message").html("Please give alphabet characters only ");
			$("#branchname_error_message").show();
			error_branchname = true;
    }
}
function check_code(){
  var co = $("#courseNo").val();
     if(co == "" )
     {
       $("#cno_error_message").html("CourseCode must be filled out ");
       $("#cno_error_message").show();
       error_code = true;
    }
    else {
       $("#cno_error_message").hide();
       error_code = false;
    }
}

function check_course(){
  var co = $("#courseName").val();
     if(co == "" )
     {
       $("#cname_error_message").html("CourseName must be filled out ");
       $("#cname_error_message").show();
       error_course = true;
    }
    else {
       $("#cname_error_message").hide();
       error_course = false;
    }
}

$("#create_course").focusout(function() {
  check_branch();
  check_code();
  check_course();

  if(error_branchname == false && error_code == false && error_course  == false) {

    add_db();

  } else {
     alert("Fill all !");

  }
  });
});//function
function add_db()
{
  code=document.getElementById("courseNo").value.toUpperCase();
  cname=document.getElementById("courseName").value.toUpperCase();
  branch=document.getElementById("branch").value.toUpperCase();
  rand= Math.random().toString(36).substring(7).toUpperCase();

ref1.child(code).set({
  courseTitle:cname,
  courseCode:code,
  MamMail:username,
  random:rand
});

  ref.child('course/'+code).set({
  courseTitle:cname,
  courseCode:code,
  branch:branch,
  random:rand
});// course save
createAlert('Tada..!','Nice Work!','You successfully created the course!!','success',true,true,'pageMessages');
}
function clear_all()
{
  $("#branch").val("");
  $("#courseNo").val("");
  $("#courseName").val("");
}
function createAlert(title, summary, details, severity, dismissible, autoDismiss, appendToId) 
{
  var iconMap = {
    info: "fa fa-info-circle",
    success: "fa fa-thumbs-up",
    warning: "fa fa-exclamation-triangle",
    danger: "fa ffa fa-exclamation-circle"
  };

  var iconAdded = false;

  var alertClasses = ["alert", "animated", "flipInX"];
  alertClasses.push("alert-" + severity.toLowerCase());

  if (dismissible) {
    alertClasses.push("alert-dismissible");
  }

  var msgIcon = $("<i />", {
    "class": iconMap[severity] // you need to quote "class" since it's a reserved keyword
  });

  var msg = $("<div />", {
    "class": alertClasses.join(" ") // you need to quote "class" since it's a reserved keyword
  });

  if (title) {
    var msgTitle = $("<h4 />", {
      html: title
    }).appendTo(msg);
    
    if(!iconAdded){
      msgTitle.prepend(msgIcon);
      iconAdded = true;
    }
  }

  if (summary) {
    var msgSummary = $("<strong />", {
      html: summary
    }).appendTo(msg);
    
    if(!iconAdded){
      msgSummary.prepend(msgIcon);
      iconAdded = true;
    }
  }

  if (details) {
    var msgDetails = $("<p />", {
      html: details
    }).appendTo(msg);
    
    if(!iconAdded){
      msgDetails.prepend(msgIcon);
      iconAdded = true;
    }
  }
  

  if (dismissible) {
    var msgClose = $("<span />", {
      "class": "close", // you need to quote "class" since it's a reserved keyword
      "data-dismiss": "alert",
      html: "<i class='fa fa-times-circle'></i>"
    }).appendTo(msg);
  }
  
  $('#' + appendToId).prepend(msg);
  
  if(autoDismiss){
    setTimeout(function(){
      msg.addClass("flipOutX");
      setTimeout(function(){
        msg.remove();
      },1000);
    }, 2000);
  }
}





