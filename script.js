document.addEventListener("DOMContentLoaded", function() {
    const fetchAlbumsBtn = document.getElementById("fetchAlbumsBtn");
    const albumsNumberInput = document.getElementById("albumsNumber");
    const albumsContainer = document.getElementById("albumsContainer");

    fetchAlbumsBtn.addEventListener("click", function() {
        const albumsNumber = parseInt(albumsNumberInput.value);

        if (isNaN(albumsNumber) || albumsNumber <= 0) {
            alert("Please enter a valid number of albums.");
            return;
        }

        fetch(`https://jsonplaceholder.typicode.com/albums?_limit=${albumsNumber}`)
            .then(response => response.json())
            .then(albums => {
                albumsContainer.innerHTML = "";

                albums.forEach(album => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML = `
                        <h3>${album.title}</h3>
                        <p>User ID: ${album.userId}</p>
                        <p>Album ID: ${album.id}</p>
                    `;
                    albumsContainer.appendChild(card);
                });
            })
            .catch(error => {
                console.error("Error fetching albums:", error);
            });
    });
});
