document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user'));

    if (!token || !userData) {
        alert('Usuário não autenticado. Faça login.');
        window.location.href = "login.html";
        return;
    }

    document.getElementById('welcome-message').innerText = `Seja Bem-vindo, ${userData.name}!`;
    document.getElementById('user-email').innerText = `Seu email é: ${userData.email}`;

    const animeCards = document.getElementById('anime-cards');
    animeCards.innerHTML = "";

    const favoriteAnimes = userData.animes;
    console.log('favoriteAnimes:', favoriteAnimes);
    if (Array.isArray(favoriteAnimes) && favoriteAnimes.length > 0) {
        favoriteAnimes.forEach(anime => {
            const card = document.createElement('div');
            card.classList.add('cards');

            const img = document.createElement('img');
            img.src = anime.cover || "https://via.placeholder.com/150";
            img.alt = anime.title;

            const span = document.createElement('span');
            span.innerText = anime.title;

            card.addEventListener('click', () => {
                alert(`Informações do anime: \nTítulo: ${anime.title}\nID: ${anime.id}`);
            });

            card.appendChild(img);
            card.appendChild(span);
            animeCards.appendChild(card);
        });
    } else {
        animeCards.innerHTML = "<p>Você ainda não tem animes favoritos.</p>";
    }
});

document.getElementById('sair').addEventListener('click', function () {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = "login.html";
});
