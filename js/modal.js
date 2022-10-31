const modal = document.querySelector('.thankful-page');
const backdrop = document.querySelector('.backdrop');

const closeBtn = document.querySelector('.thankful-page__close-btn');
const closeSign = document.createTextNode('\u00D7');
closeBtn.append(closeSign);

function isHidden() {
  backdrop.classList.remove('open');
  backdrop.classList.add('is-hidden');
  modal.classList.remove('is-open');
}

export default function isOpen() {
  backdrop.classList.add('open');
  modal.classList.add('is-open');
}

closeBtn.addEventListener('click', isHidden);
