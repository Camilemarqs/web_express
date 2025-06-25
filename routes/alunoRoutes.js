const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Apenas rota de listar alunos
router.get('/', alunoController.listarAlunos);

module.exports = router; 