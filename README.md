# API de Alunos - Express

Esta é uma aplicação Express que implementa o serviço de listar alunos, conforme o enunciado da atividade.

## Funcionalidades

- ✅ **Listar alunos** (GET /alunos)
- ✅ **Entidade Aluno:**
  - nome
  - curso
  - ira
- ✅ **Pelo menos 3 alunos cadastrados**

## Estrutura do Projeto

```
atividade_express/
├── server.js              # Servidor principal
├── package.json           # Dependências do projeto
├── README.md             # Documentação
├── routes/
│   └── alunoRoutes.js    # Rotas da API
└── controllers/
    └── alunoController.js # Lógica de negócio
```

## Instalação

1. Navegue até a pasta do projeto:

```bash
cd atividade_express
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor:

```bash
node index.js
```

O servidor estará rodando em `http://localhost:3004`

## Endpoint da API

### Base URL: `http://localhost:3004/alunos`