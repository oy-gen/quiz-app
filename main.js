const cardAnswer = document.querySelector('[data-js="cardAnswer"]');
const buttonAnswer = document.querySelector('[data-js="buttonAnswer"]');

const bookmarkToggle = document.querySelector('[data-js="bookmarkToggle"]');

buttonAnswer.addEventListener('click', () => {
  cardAnswer.classList.toggle('card__answer--visible');
});

bookmarkToggle.addEventListener('click', () => {
  bookmarkToggle.classList.toggle('card__bookmark--set');
});
