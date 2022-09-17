// const { check } = require('prettier');

const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const messageField = document.querySelector('textarea');
const displayName = document.querySelector('.user-name');
const displayEmail = document.querySelector('.user-email');
const displayMessage = document.querySelector('.form-control__error_message');
const checkmark = document.querySelector('.checkmark');
const checkmarkEmail = document.querySelector('.checkmark_email');

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const messageFieldValue = messageField.value.trim();

  if (usernameValue === '') {
    displayName.innerText = 'Name is required';
  } else if (usernameValue.length > 0) {
    displayName.innerText = '';
    username.style.borderColor = 'green';
    checkmark.style.display = 'block';
  }
  if (emailValue === '') {
    displayEmail.innerText = 'Write your email';
  } else if (!isValidEmail(emailValue)) {
    displayEmail.innerText = 'Provide a valid email address';
  } else {
    email.style.borderColor = 'green';
    displayEmail.innerText = '';
    checkmarkEmail.style.display = 'block';
  }
  if (messageFieldValue === '') {
    displayMessage.innerText = 'Your message is important for us';
  } else if (messageFieldValue.length > 1) {
    messageField.style.borderColor = 'green';
    displayMessage.innerText = '';
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});
