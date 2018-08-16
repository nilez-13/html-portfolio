function validateForm() {
	var fname = document.forms["messageForm"]["firstname"].value;
	var lname = document.forms["messageForm"]["lastname"].value;
	
	var message = document.forms["messageForm"]["message"].value;


	
	if ( message == ""){
		alert("Thank you for contacting us, "+fname+" "+lname+". We will send you a general questionare as you left the message field blank.");
	}
	else {
		alert("Thank you for contacting us, "+fname+" "+lname+ ". We will get back to you as soon as possible.");
	}
}
