async function loadAnimes() {
    try {
        const response = await fetch('https://projetoweb-api.vercel.app/anime');
        if (response.ok) {
            const data = await response.json();
            const favoritesContainer = document.querySelector('.favorites');

            // Limpar a lista de favoritos antes de adicionar os animes
            favoritesContainer.innerHTML = '';

            data.animes.forEach(anime => {
                const label = document.createElement('label');
                label.classList.add('checkbox-label');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = anime.id;

                const span = document.createElement('span');
                span.innerText = anime.title;

                label.appendChild(checkbox);
                label.appendChild(span);
                favoritesContainer.appendChild(label);
            });
            
            limitAnimeSelection();
        } else {
            alert('Erro ao carregar a lista de animes.');
        }
    } catch (error) {
        console.error('Erro ao buscar animes:', error);
        alert('Não foi possível carregar a lista de animes. Tente novamente mais tarde.');
    }
}

// Limita a seleção de favoritos
function limitAnimeSelection() {
    const checkboxes = document.querySelectorAll('.favorites input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

            if (checkedCount > 5) {
                alert('Você não pode ter mais de 5 animes favoritos.');
                checkbox.checked = false;
            }
        });
    });
}

document.querySelector('.entry').addEventListener('submit', async function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const favoritos = [];

    // Coletar apenas os animes marcados
    document.querySelectorAll('.favorites input[type="checkbox"]').forEach((checkbox) => {
        if (checkbox.checked) {
            favoritos.push(checkbox.value);
        }
    });

    // Validações do formulário
    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    if (favoritos.length === 0) {
        alert('Selecione no mínimo 1 anime favorito.');
        return;
    }

    if (favoritos.length > 5) {
        alert('Você não pode ter mais de 5 animes favoritos.');
        return;
    }

    const userData = {
        name: nome,
        email: email,
        password: senha,
        anime_preference: favoritos, // Envia apenas os animes marcados
    };

    try {
        const response = await fetch('https://projetoweb-api.vercel.app/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message || 'Usuário registrado com sucesso!');
            window.location.href = "login.html";
        } else {
            const errorData = await response.json();
            alert(errorData.message || 'Erro ao registrar usuário.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro ao tentar registrar o usuário. Tente novamente mais tarde.');
    }
});

// Carregar a lista de animes ao carregar a página
document.addEventListener('DOMContentLoaded', loadAnimes);
