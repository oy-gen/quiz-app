const cardAnswer = document.querySelector ('[data-js="cardAnswer"]');
const buttonAnswer = document.querySelector ('[data-js="buttonAnswer"]');
const cardBookmark = document.querySelector ('[data-js="cardBookmark"]');
const bookmarkButton = document.querySelector ('[data-js="bookmarkButton"]');

buttonAnswer.addEventListener( "click", () => {
    cardAnswer.classList.toggle("visible")
})

bookmarkButton.addEventListener( "click", () => {
    cardBookmark.classList.toggle("card__bookmark--set");
})