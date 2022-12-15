
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
	var fSubmit = document.getElementById("formS");

	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length < 3 || /^\s+$/.test(fName)){
		fName.classList.add("is-invalid");
		error++;
	}else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}

	if(fEmail.value == "" || fEmail.value.length < 3 || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/){
		fEmail.classList.add("is-invalid");
		error++;
	}else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	}
	
	if(fLastN.value == "" || fLastN.value.length < 3 || /^\s+$/.test(fLastN)){
		fLastN.classList.add("is-invalid");
		error++;
	}else {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	}
	
	if(fAddress.value == "" || fAddress.value.length < 3){
		fAddress.classList.add("is-invalid");
		error++;
	}else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	}
	
	if(fPassword.value == "" || fPassword.value.length < 3 || !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/)){
		fPassword.classList.add("is-invalid");
		error++;
	}else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	}
	
	if(fPhone.value == "" || fPhone.value.length != 9 || isNaN(fPhone.value)){
		fPhone.classList.add("is-invalid");
		error++;
	}else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	}
		
	 
	if(error>0){
		fSubmit.addEventListener("submit", event =>{
			event.preventDefault();
		}, true);
		alert("Error");
	}else{
		alert("OK");

	}

}
