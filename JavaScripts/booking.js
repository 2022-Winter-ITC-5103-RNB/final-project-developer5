'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {

  const name = $('#name');
  const email = $('#email_address');
  const phone = $('#phone');
  const country = $('#country');
  
  let isValid = true;
  if (name.value == '') {
    name.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    name.nextElementSibling.textContent = '';
  }

  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    email.nextElementSibling.textContent = '';
  }

  if (phone.value == '') {
    phone.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    phone.nextElementSibling.textContent = '';
  }

  if (country.value == '') {
    country.nextElementSibling.textContent = 'Please select a country.';
    isValid = false;
  } else {
    $('#country').nextElementSibling.textContent = '';
  }

  
  if (isValid == true) {
    $('form').submit();
  }
}

const resetForm = () => {
  $('form').reset();
  $('#email_address').nextElementSibling.textContent = '*';
  $('#phone').nextElementSibling.textContent = '*';
  $('#country').nextElementSibling.textContent = '*';
  $('#name').focus();
};

document.addEventListener('DOMContentLoaded', () => {
  $('#register').addEventListener('click', processEntries);
  $('#reset_form').addEventListener('click', resetForm);
  $('#name').focus();
});