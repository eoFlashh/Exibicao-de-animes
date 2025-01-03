**Grupo:** João Paulo, João Fideles, Caiqui Estrela

# Sistema de Cadastro e Login com Exibição de Animes Favoritos

Este é um projeto simples de um sistema de cadastro e login que permite aos usuários registrar suas informações, fazer login e visualizar uma página inicial personalizada com seus animes favoritos.

## Funcionalidades

1. **Cadastro de Usuários**:
   - O usuário pode se cadastrar informando:
     - Nome
     - Email
     - Senha
     - Animes favoritos
   - Os dados do usuário são salvos no `localStorage`.

2. **Login**:
   - O usuário pode fazer login utilizando o email e a senha cadastrados.
   - As credenciais são validadas com os dados armazenados no `localStorage`.

3. **Página Inicial Personalizada**:
   - Exibe uma mensagem de boas-vindas com o nome do usuário.
   - Mostra o email cadastrado.
   - Lista os animes favoritos com suas imagens e nomes.

4. **Logout**:
   - O usuário pode sair da conta, limpando os dados da sessão e sendo redirecionado para a página de login.

## Estrutura de Arquivos

```plaintext
projeto/
├── pages/
│   ├── register.html      # Página de cadastro
│   ├── login.html         # Página de login
│   ├── home-page.html     # Página inicial (após login)
├── styles/
│   ├── register.css       # Estilos da página de cadastro
│   ├── login.css          # Estilos da página de login
│   ├── home.css           # Estilos da página inicial
├── images/                # Imagens dos animes
│   ├── naruto.jpg
│   ├── dragonball.jpg
│   ├── onepiece.jpg
│   ├── hunterxhunter.jpg
│   ├── demonslayer.jpg
└── README.md              # Documentação do projeto
# Projeto_AV2_IDW
