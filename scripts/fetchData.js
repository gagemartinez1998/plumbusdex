let cardContainer;
          var characters = [];

          const getAllData = async () => {
            let allData = [];
            await fetch("./../data/allChars.json")
              .then((res) => res.json())
              .then((data) => {
                allData = data;
              });

            return allData;
          };

          getAllData().then((data) => createCard(data));

          const createCard = (data) => {
            for (let i = 0; i < data.length; i++) {
              let card = document.createElement("div");
              card.className = "card shadow cursor-pointer";

              let cardBody = document.createElement("div");
              cardBody.className = "card-body";

              let name = document.createElement("h5");
              name.innerText = data[i].name;
              name.className = "card-title";

              let species = document.createElement("div");
              species.innerText = data[i].species;
              species.className = "card-text";

              let image = document.createElement("img");
              image.src = data[i].image;

              // NEVER FORGET
              // image.src =
              //   "https://rickandmortyapi.com/api/character/avatar/1.jpeg";

              cardBody.appendChild(name);
              cardBody.appendChild(image);
              cardBody.appendChild(species);
              card.appendChild(cardBody);
              cardContainer.appendChild(card);
            }
          };

          const initListOfCharacters = () => {
            if (cardContainer) {
              document
                .getElementById("card-container")
                .replaceWith(cardContainer);
              return;
            }

            cardContainer = document.getElementById("card-container");
            characters.forEach((data) => {
              createTaskCard(data);
            });
          };

          initListOfCharacters();