// const { check } = require('prettier');
import isOpen from './modal.js';

const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const messageField = document.querySelector('textarea');
const displayNameError = document.querySelector('.user-name');
const displayEmailError = document.querySelector('.user-email');
const displayMessage = document.querySelector('.form-control__error_message');
const checkmark = document.querySelector('.checkmark');
const checkmarkEmail = document.querySelector('.checkmark_email');
const checkmarkMessage = document.querySelector('.checkmark_message');
const submitBtn = document.querySelector('.form__submit-btn');

submitBtn.disabled = true;

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
    username.style.borderColor = 'red';
    checkmark.style.display = 'none';
    displayNameError.innerText = 'Name is required';
  } else if (usernameValue.length > 0) {
    displayNameError.innerText = '';
    username.style.borderColor = 'green';
    checkmark.style.display = 'block';
  }
  if (emailValue === '') {
    email.style.borderColor = 'red';
    checkmarkEmail.style.display = 'none';
    displayEmailError.innerText = 'Write your email';
  } else if (!isValidEmail(emailValue)) {
    email.style.borderColor = 'red';
    checkmarkEmail.style.display = 'none';
    displayEmailError.innerText = 'Provide a valid email address';
  } else {
    email.style.borderColor = 'green';
    displayEmailError.innerText = '';
    checkmarkEmail.style.display = 'block';
  }
  if (messageFieldValue === '') {
    displayMessage.innerText = 'Your message is important for us';
    checkmarkMessage.style.display = 'none';
  } else if (messageFieldValue.length > 0) {
    displayMessage.innerText = '';
    checkmarkMessage.style.display = 'block';
  }
  if (
    usernameValue.length > 0 &&
    messageFieldValue.length > 0 &&
    displayEmailError.innerText === ''
  ) {
    submitBtn.disabled = false;
    submitBtn.classList.add('active');
  }
};

function submitData(e) {
  e.preventDefault();
  const data = new FormData(form);
  console.log(data);
  data.append('messageField', messageField.value);
  form.reset();

  username.style.borderColor = '#f0f0f0';
  email.style.borderColor = '#f0f0f0';
  messageField.style.borderColor = '#f0f0f0';
  checkmark.style.display = 'none';
  checkmarkEmail.style.display = 'none';
  checkmarkMessage.style.display = 'none';
  submitBtn.classList.remove('active');
}
form.addEventListener('input', (e) => {
  e.preventDefault();
  validateInputs();
});

form.addEventListener('submit', submitData);
form.addEventListener('submit', isOpen);
