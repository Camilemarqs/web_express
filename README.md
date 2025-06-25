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
npm start
```

O servidor estará rodando em `http://localhost:3000`

## Endpoint da API

### Base URL: `http://localhost:3000/alunos`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/alunos` | Listar todos os alunos |

## Exemplo de Resposta

```json
{
  "success": true,
  "data": [
    { "id": 1, "nome": "João Silva", "curso": "Engenharia de Software", "ira": 8.5 },
    { "id": 2, "nome": "Maria Santos", "curso": "Ciência da Computação", "ira": 9.2 },
    { "id": 3, "nome": "Pedro Oliveira", "curso": "Sistemas de Informação", "ira": 7.8 }
  ],
  "total": 3
}
```

## Exemplo de Front-end (HTML + JS)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Lista de Alunos</title>
</head>
<body>
  <h1>Alunos</h1>
  <table border="1" id="tabela-alunos">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Curso</th>
        <th>IRA</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <p id="media-ira"></p>
  <script>
    fetch('http://localhost:3000/alunos')
      .then(res => res.json())
      .then(json => {
        const alunos = json.data;
        const tbody = document.querySelector('#tabela-alunos tbody');
        let somaIra = 0;
        alunos.forEach(aluno => {
          const tr = document.createElement('tr');
          tr.innerHTML = `<td>${aluno.nome}</td><td>${aluno.curso}</td><td>${aluno.ira}</td>`;
          tbody.appendChild(tr);
          somaIra += Number(aluno.ira);
        });
        const media = (somaIra / alunos.length).toFixed(2);
        document.getElementById('media-ira').textContent = 'Média dos IRAs: ' + media;
      })
      .catch(err => alert('Erro ao buscar alunos: ' + err));
  </script>
</body>
</html>
```

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **CORS**
- **Body Parser**

## Autor

Desenvolvido como atividade de Express com listagem de alunos. 