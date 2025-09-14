'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const logInTrigger = document.getElementById('logIn1');
  const dialog = document.getElementById('user');
  const logInBtn = document.getElementById('logIn');
  const cancelBtn = document.getElementById('cancel');
  const logInDropdown = document.getElementById('logInDropdown');

  if (logInTrigger && dialog) {
    logInTrigger.addEventListener('click', () => dialog.showModal());
  }

  if (logInDropdown && dialog) {
    logInDropdown.addEventListener('click', function (e) {
      e.preventDefault();
      dialog.showModal();
    });
  }

  if (logInBtn) {
    logInBtn.addEventListener('click', () => {
      if (dialog.open) dialog.close();
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      if (dialog.open) dialog.close();
    });
  }

  const formInputs = document.querySelectorAll('#user .form');
  formInputs.forEach(input => {
    input.addEventListener('blur', function () {
      const errorSpace = input.nextElementSibling;
      if (!input.checkValidity()) {
        errorSpace.textContent = input.title;
        errorSpace.className = 'input-error-space input-error';
      } else {
        errorSpace.textContent = '';
        errorSpace.className = 'input-error-space';
      }
    });
  });

  const dropdownButton = document.querySelector('.dropdown-button');
  const dropdown = document.querySelector('.dropdown');

  if (dropdown && dropdownButton) {
    dropdownButton.addEventListener('click', () => {
      dropdown.classList.toggle('open');
    });
  }

  document.addEventListener('click', function (event) {
    const isClickInside = dropdown.contains(event.target) || dropdownButton.contains(event.target);
    if (!isClickInside) {
      dropdown.classList.remove('open');
    }
  });
});
