const searchCards = () => {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("card-container");
    cards = cardContainer.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-title");
        // console.log(title);
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

    // input.addEventListener("keyup", function(event) {
    //     if (event.key === "Enter") {
    //         event.preventDefault();
    //         document.getElementById("searchBtn").click();
    //     }
    // })
}

// const enterSubmit = () => {

//     var input = document.getElementById("myFilter")
    
//     input.addEventListener("keypress", function(event) {
//             if (event.key === "Enter") {
//                 event.preventDefault();
//                 document.getElementById("searchBtn").click();
//             }
//         })

//     // $("#myFilter").keyup(function(event) {
//     //     if (event.key === "Enter") {
//     //         event.preventDefault();
//     //         $("#searchBtn").click();
//     //             }
//     // });
//     }
    