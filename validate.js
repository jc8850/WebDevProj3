/*******w***********

    Project 3
    Name: JC Naniong
    Date: 4/25/21
    Description:

*******************/

document.addEventListener("DOMContentLoaded", load);

function load(){
	document.getElementById("contactForm").addEventListener("submit", validate);
	document.getElementById("resetButton").addEventListener("click", resetForm);

}

function resetForm(e){
	
	if ( confirm('Reset?') ){
		
		hideErrors();
		
		return true;
	}

	
	e.preventDefault();
	
	return false;	
}

function validate(e){
	
	hideErrors();

	//	Determine if the form has errors
	if(formHasErrors()){
		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}

	return true;
}

/*	
	formHasErrors function
	returns a true if errors are discovered
	returns a false if there are no errors
*/
function formHasErrors(){

	let errorFlag = false;

	//check for blanks:
	let textFields = ["name", "email", "message"];

	//array of ints to use as booleans in order to tell which fields are empty for later checks
	let isBlank = [0, 0, 0];

	for(let i = 0; i < textFields.length; i++){
		let textInput = document.getElementById(textFields[i]).value;
		isBlank[i] = 0;

		if(textInput == null || textInput == ""){
			document.getElementById(textFields[i] + "_error").style.display = "block";
			isBlank[i] = 1;

			if(errorFlag == false){
				document.getElementById(textFields[i]).focus();
				document.getElementById(textFields[i]).select();
			}

			errorFlag = true;
		}
	}


	//regex check for email
	let regexEmail = new RegExp(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
	let emailInput = document.getElementById("email").value;

	if((regexEmail.test(emailInput) == false) && (isBlank[1] == 0)){
		document.getElementById("emailformat_error").style.display = "block";

		if(errorFlag == false){
				document.getElementById("email").focus();
				document.getElementById("email").select();
			}

		errorFlag = true;
	}

	return errorFlag;

}

function hideErrors()
{
	//	Get an array of the error fields
	var errorFields = document.getElementsByClassName("error");

	//	Loop through each error field
	for(var i = 0;i < errorFields.length; i++){
		//	Hide the error field
		errorFields[i].style.display = "none";
	}
}
