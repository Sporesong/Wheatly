const inputField = document.querySelector(".h2_paragraph_section input[name='email']");
const subscribeButton = document.querySelector('.h2_paragraph_section button');
const modal = document.querySelector('.h2_paragraph_section_newsletter_modal');
const closeModal = document.querySelector('.closeModal');

function validateEmail(event) {
  console.log(modal);
  event.preventDefault();
  if (inputField.value.match(/^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    modal.classList.add('visible');
  } else {
    inputField.value = '';
    inputField.placeholder = 'Du har fyllt i en ogiltig emailadress';
    console.log(inputField.placeholder);
  }
}

subscribeButton.addEventListener('click', validateEmail);

function closeModalPressed() {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
}

closeModal.addEventListener('click', closeModalPressed);
