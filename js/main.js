import { elements } from './selectors.js';
import initializeNav from './navigation.js';

initializeNav();

// });

elements.cards.forEach(card => {
  const cardElements = {
    cardAnswer: card.querySelector('[data-js="cardAnswer"]'),
    buttonAnswer: card.querySelector('[data-js="buttonAnswer"]'),
    bookmarkToggle: card.querySelector('[data-js="bookmarkToggle"]'),
  };
  /*---------------------Show Answer--------------------------*/
  cardElements.buttonAnswer.addEventListener('click', () => {
    cardElements.cardAnswer.classList.toggle('card__answer--visible');
    const isVisible = cardElements.cardAnswer.classList.contains(
      'card__answer--visible'
    );
    if (isVisible) {
      cardElements.buttonAnswer.textContent = 'Hide answer';
    } else {
      cardElements.buttonAnswer.textContent = 'Show answer';
    }
    // cardElements.buttonAnswer.textContent = isVisible? 'Hide answer': 'Show answer';
  });
  /*---------------------Toggle Bookmark--------------------------*/
  cardElements.bookmarkToggle.addEventListener('click', () => {
    cardElements.bookmarkToggle.classList.toggle('card__bookmark--set');
  });
});
