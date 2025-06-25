const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3004;

app.use(cors());
app.use(express.json());

let alunos = [
  { id: 1, nome: "João Silva", curso: "Engenharia de Software", ira: 8.5 },
  { id: 2, nome: "Maria Santos", curso: "Ciência da Computação", ira: 9.2 },
  { id: 3, nome: "Pedro Oliveira", curso: "Sistemas de Informação", ira: 7.8 },
];
let proximoId = 4;

// Servir o front-end na rota '/'
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend.html"));
});

// Listar alunos
app.get("/alunos", (req, res) => {
  res.json(alunos);
});

// Cadastrar aluno
app.post("/alunos", (req, res) => {
  const { nome, curso, ira } = req.body;
  if (!nome || !curso || ira === undefined) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }
  const novoAluno = { id: proximoId++, nome, curso, ira: Number(ira) };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

// Editar aluno
app.put("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);
  const { nome, curso, ira } = req.body;
  const aluno = alunos.find((a) => a.id === id);
  if (!aluno) {
    return res.status(404).json({ error: "Aluno não encontrado." });
  }
  if (!nome || !curso || ira === undefined) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }
  aluno.nome = nome;
  aluno.curso = curso;
  aluno.ira = Number(ira);
  res.json(aluno);
});

// Excluir aluno
app.delete("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = alunos.findIndex((a) => a.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Aluno não encontrado." });
  }
  const removido = alunos.splice(index, 1)[0];
  res.json(removido);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
