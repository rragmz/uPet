const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
const h1 = document.getElementById("h1");
const picture = document.getElementById("picture")

let isValid = false;
let passwordsMatch = false;

function validateForm() {
	
	isValid = form.checkValidity();
	// error

	if (!isValid) {
		message.textContent = "Llena todos los campos";
		messageContainer.style.backgroundColor = "#ffd4d4";
		message.style.color = "#ff8979";
		// para rellenar los campos
		return;
	}
	// verifica passwords si coinciden
	if (password1El.value === password2El.value) {
		passwordsMatch = true;
		password1El.style.borderColor = "#79ff8f";
		password2El.style.borderColor = "#79ff8f";
	} else {
		passwordsMatch = false;
		message.textContent = "Las contraseñas no coinciden";
		messageContainer.style.backgroundColor = "#ffd4d4";
		message.style.color = "#ff8979";
		password1El.style.borderColor = "#ff8979";
		password2El.style.borderColor = "#ff8979";
		// si la contras no coinciden return
		return;
	}
	//   Si coinciden las passwords
	if (isValid && passwordsMatch) {
		passwordsMatch = true;
		message.textContent = "Se registro correctamente";
		messageContainer.style.backgroundColor = "#deffe4";
		message.style.color = "#006b12";
		password1El.style.borderColor = "#79ff8f";
		password2El.style.borderColor = "#79ff8f";
		form.style.display = "none";
		picture.style.display = "none";
		h1.textContent = `Estas logueado`;

		
        
	}
}

function storeFormData() {
	const user = {
		username: form.username.value,
		surname: form.surname.value,
		phone: form.phone.value,
		email: form.email.value,
		password: form.password.value
	};
	// do something with user data?
	console.log(user);
}

function proccessFormData(e) {
	e.preventDefault();

	//   validate form
	validateForm();

	//   submit if valid
	if (isValid && passwordsMatch) {
		storeFormData();
	}
}

form.addEventListener("submit", proccessFormData);
