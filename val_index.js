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
$(function() {

document.getElementById("doRegister").disabled = true;
document.getElementById("doRegister2").disabled = true;
	// teacher
	$("#username_error_message").hide();
	$("#userLastname_error_message").hide();
	$("#password_error_message").hide();
	$("#retype_password_error_message").hide();
	$("#email_error_message").hide();
  $("#clg_codeerror").hide();
// student
$("#username_error_message2").hide();
$("#roll_error_message").hide();
$("#reg_error_message").hide();
$("#password_error_message2").hide();
$("#retype_password_error_message2").hide();
$("#email_error_message2").hide();

	var error_username = false;
	var error_username2 = false;
	var error_password = false;
	var error_retype_password = false;
	var error_email = false;
  var clg_code=false;
	//stud
	var serror_username = false;
	var sroll = false;
	var serror_password = false;
	var serror_retype_password = false;
	var serror_email = false;
	var sreg=false;

	$("#registerFirstName").focusout(function() {
		check_username();
	});
	$("#registerLastName").focusout(function() {
		check_username2();
	});
	$("#registerPassword").focusout(function() {
		check_password();
	});
	$("#registerConfirmPassword").focusout(function() {
		check_retype_password();
	});
	$("#registerEmail").focusout(function() {
		check_email();
	});
	$("#clg_code").focusout(function() {
		check_clgcode();
	});

	//student
	$("#registerFirstName2").focusout(function() {
	  check_usernamestud();
	});
	$("#registerPassword2").focusout(function() {
	  check_password2();
	});
	$("#registerConfirmPassword2").focusout(function() {
	  check_retype_password2();
	});
	$("#registerEmail2").focusout(function() {
	  check_email2();
	});
	$("#roll").focusout(function() {
		check_roll();
	});
	$("#reg").focusout(function() {
		check_reg();
	});

	function check_username() {
		var username_length = $("#registerFirstName").val().length;
		if(username_length < 3 || username_length > 20) {
			$("#username_error_message").html("Should be between 3-20 characters");
			$("#username_error_message").show();
			document.getElementById("doRegister").disabled = true;

			error_username = true;
		} else {
			$("#username_error_message").hide();
document.getElementById("doRegister").disabled = false;
		}

	}
	function check_username2() {

		var username_length = $("#registerLastName").val().length;

		if(username_length < 3 || username_length > 20) {
			$("#userLastname_error_message").html("Should be between 3-20 characters");
			$("#userLastname_error_message").show();
			error_username2 = true;
			document.getElementById("doRegister").disabled = true;
		} else {
			$("#userLastname_error_message").hide();
			document.getElementById("doRegister").disabled = false;

		}
	}
	function check_usernamestud() {
		var username_length = $("#registerFirstName2").val().length;

		if(username_length < 3 || username_length > 20 ) {
			$("#username_error_message2").html("Should be between 3-20 characters");
			$("#username_error_message2").show();
			serror_username = true;
			document.getElementById("doRegister2").disabled = true;
		} else {
			$("#username_error_message2").hide();
			document.getElementById("doRegister2").disabled = false;

		}
	}
	function check_password() {

		var password_length = $("#registerPassword").val().length;

		if(password_length < 8) {
			$("#password_error_message").html("At least 8 characters");
			$("#password_error_message").show();
			error_password = true;
			document.getElementById("doRegister").disabled = true;
		} else {
			$("#password_error_message").hide();
			document.getElementById("doRegister").disabled = false;
		}

	}
	function check_password2() {

		var password_length = $("#registerPassword2").val().length;

		if(password_length < 8) {
			$("#password_error_message2").html("At least 8 characters");
			$("#password_error_message2").show();
			serror_password = true;
			document.getElementById("doRegister2").disabled = true;
		} else {
			$("#password_error_message2").hide();
			document.getElementById("doRegister2").disabled = false;
		}
	}

	function check_retype_password() {

		var password = $("#registerPassword").val();
		var retype_password = $("#registerConfirmPassword").val();

		if(password !=  retype_password) {
			$("#retype_password_error_message").html("Password didn't match");
			$("#retype_password_error_message").show();
			error_retype_password = true;
			document.getElementById("doRegister").disabled = true;
		} else {
			$("#retype_password_error_message").hide();
			document.getElementById("doRegister").disabled = false;
		}

	}
	function check_retype_password2() {

		var password = $("#registerPassword2").val();
		var retype_password = $("#registerConfirmPassword2").val();

		if(password !=  retype_password) {
			$("#retype_password_error_message2").html("Password didn't match");
			$("#retype_password_error_message2").show();
			serror_retype_password = true;
			document.getElementById("doRegister2").disabled = true;
		} else {
			$("#retype_password_error_message2").hide();
			document.getElementById("doRegister2").disabled = false;
		}

	}

	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/i);

		if(pattern.test($("#registerEmail").val())) {
			$("#email_error_message").hide();
			document.getElementById("doRegister").disabled = false;
		} else {
			$("#email_error_message").html("Invalid email address(dot & special characters not allowed)");
			$("#email_error_message").show();
			error_email = true;
			document.getElementById("doRegister").disabled = true;
		}

	}
	function check_email2() {

		var pattern = new RegExp(/^[+a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/i);

		if(pattern.test($("#registerEmail2").val())) {
			$("#email_error_message2").hide();
			document.getElementById("doRegister2").disabled = false;
		} else {
			$("#email_error_message2").html("Invalid email address(dot & special characters not allowed)");
			$("#email_error_message2").show();
			serror_email = true;
			document.getElementById("doRegister2").disabled = true;
		}

	}
function check_clgcode() {
	var code = "mca@18";
  var clg = $("#clg_code").val();
	if(clg !=  code) {
		$("#clg_codeerror").html("college code didn't match");
		$("#clg_codeerror").show();
		error_retype_password = true;
		document.getElementById("doRegister").disabled = true;
	} else {
		$("#clg_codeerror").hide();
		document.getElementById("doRegister").disabled = false;
	}
}
function check_roll()
{
	var r = $("#roll").val();

	if(r=="") {
		$("#roll_error_message").html("please Fill ");
		$("#roll_error_message").show();
		sroll = true;
		document.getElementById("doRegister2").disabled = true;
	} else {
		$("#roll_error_message").hide();
		document.getElementById("doRegister2").disabled = false;
	}
}
function check_reg()
{
	var r = $("#reg").val();

	if(r=="") {
		$("#reg_error_message").html("please Fill ");
		$("#reg_error_message").show();
		sreg = true;
		document.getElementById("doRegister2").disabled = true;
	} else {
		$("#reg_error_message").hide();
		document.getElementById("doRegister2").disabled = false;
	}
}
	$("#doRegister").focusout(function() {
		error_username = false;
		error_username2 = false;
		error_password = false;
		error_retype_password = false;
		error_email = false;
		clg_code=false;


		check_username();
		check_username2();
		check_password();
		check_retype_password();
		check_email();
		check_clgcode();

		if(error_username2 == false && error_username == false && error_password == false && error_retype_password == false && error_email == false && clg_code==false) {

			return true;
		} else {
			return false;
		}

	});
	$("#doRegister2").focusout(function() {
		serror_username = false;
		sroll = false;
		serror_password = false;
		serror_retype_password = false;
		serror_email = false;
		sroll=false;
		check_usernamestud();
		check_roll();
		check_password2();
		check_retype_password2();
		check_email2();
		check_reg();

		if(serror_username == false && sroll == false && serror_password == false && serror_retype_password == false && serror_email == false && sreg==false) {
			return true;
		} else {
			return false;
		}

	 });
});
