const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const carModel = document.getElementById('carModel');
const cell = document.getElementById('cell');
const patent = document.getElementById('patent');


let isValid = false;

form.addEventListener('submit', e => {
   
    validateInputs();
    e.preventDefault();
    

});







function validateNumber(e) {
    const pattern = /^[0-9]$/;

    return pattern.test(e.key )
}

const setError = (element, message) => {
    const inputBox= element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = message;
    inputBox.classList.add('error');
    inputBox.classList.remove('success')
}

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = '';
    inputBox.classList.add('success');
    inputBox.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const carModelValue = carModel.value.trim();
    const cellValue = cell.value.trim();
    const patentValue = patent.value.trim();

    if(usernameValue === '') {
        setError(username, 'Nombre requerido');
    } else {
        setSuccess(username);
    }


    if(surnameValue === '') {
        setError(surname, 'Apellido requerido');
    } else {
        setSuccess(surname);
    }


    if(cellValue === '') {
        setError(cell, 'Numero de telefono requerido');
    } else if (cellValue.length > 10 || cellValue < 10 || isNaN(cellValue)) {
        setError(cell, 'El numero debe tener 10 caracteres')
    }
    

    else {
        setSuccess(cell);
    }




    if(emailValue === '') {
        setError(email, 'Email requerido');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Proporciona una dirección de email valida');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'La contraseña es requerida');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'La contraseña debe tener al menos 8 caracteres')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Confirme su contraseña');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Las contraseñas no coinciden");
    } else {
        setSuccess(password2);
    }


    
    if(carModelValue === '') {
        setError(carModel, 'Modelo de auto requerido');
    } else {
        setSuccess(carModel);
    }


    if(patentValue === '') {
        setError(patent, 'Patente requerida');
    } else if (patentValue.length < 10 ) {
        setError(patent, 'Ingrese una patente valida')
    } else {
        setSuccess(patent);
    }
    
};


