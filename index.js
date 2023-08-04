let successPage = document.querySelector('.successPage');
let mainDiv = document.getElementById('mainDiv');
let textWrongEmail = document.querySelector('.emailTitleCaution');
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
let inputEmail = document.querySelector(".emailInput");

let subscribeBtn = document.getElementById('subscribeBtn').addEventListener('click', () => {
  let inputValue = inputEmail.value;

  if (!emailRegex.test(inputValue)) {
    inputEmail.classList.add('Caution');
    textWrongEmail.classList.add('Active');
  } else {
    mainDiv.style.display = 'none';
    successPage.classList.remove('hidden');
  }

  let textEmail = document.querySelector('.textEmail');
  textEmail.innerHTML = inputValue;
});
