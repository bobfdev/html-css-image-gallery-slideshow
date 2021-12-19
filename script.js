// mobile navbar menu

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// modal

const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

// click events

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
// clicking the close button to exit
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
// clicking outside the modal to exit
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form validation

const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

// Show error message

function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

// Show valid message

function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}


// Check required fields

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    })
}

// Check input length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showValid(input);
    }
}

// Check passwords match

function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Get Field name

function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// Event listeners

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([firstName, lastName, email, password, passwordConfirm]);
    checkLength(firstName, 2, 30);
    checkLength(lastName, 2, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
})