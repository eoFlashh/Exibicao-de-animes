document.querySelector('.entry').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Preencha corretamente todos os campos do login.');
        return;
    }

    const loginData = {
        email: email,
        password: password,
    };

    try {
        const response = await fetch('https://projetoweb-api.vercel.app/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        if (response.ok) {
            const data = await response.json();
            
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('user', JSON.stringify(data.user));

            window.location.href = "home-page.html";
        } else {
            const errorData = await response.json();
            alert(errorData.message || 'Login ou senha incorretos.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.');
    }
});
