
// Exercise 7

function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length < 3 || /^\s+$/.test(fName)){
		fName.classList.add("is-invalid");
		error++;
	}

	if(fEmail.value == "" || fEmail.value.length < 3 || !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(fEmail))){
		fEmail.classList.add("is-invalid");
		error++;
	}
	
	if(fLastN.value == "" || fLastN.value.length < 3 || /^\s+$/.test(fLastN)){
		fLastN.classList.add("is-invalid");
		error++;
	}
	
	if(fAddress.value == "" || fAddress.value.length < 3){
		fAddress.classList.add("is-invalid");
		error++;
	}
	
	if(fPassword.value == "" || fPassword.value.length < 3 || !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/)){
		fPassword.classList.add("is-invalid");
		error++;
	}
	
	if(fPhone.value == "" || fPhone.value.length != 9 || isNaN(fPhone.value)){
		fPhone.classList.add("is-invalid");
		error++;
	}
		
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
