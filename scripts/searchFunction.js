const searchCards = () => {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("card-container");
    cards = cardContainer.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-title");
        console.log(title);
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}