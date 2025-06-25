// Simulando um banco de dados em memória
let alunos = [
  {
    id: 1,
    nome: 'João Silva',
    curso: 'Engenharia de Software',
    ira: 8.5
  },
  {
    id: 2,
    nome: 'Maria Santos',
    curso: 'Ciência da Computação',
    ira: 9.2
  },
  {
    id: 3,
    nome: 'Pedro Oliveira',
    curso: 'Sistemas de Informação',
    ira: 7.8
  }
];

let proximoId = 4;

// Listar todos os alunos
const listarAlunos = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: alunos,
      total: alunos.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao listar alunos'
    });
  }
};

// Buscar aluno por ID
const buscarAlunoPorId = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const aluno = alunos.find(a => a.id === id);
    
    if (!aluno) {
      return res.status(404).json({
        success: false,
        error: 'Aluno não encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      data: aluno
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao buscar aluno'
    });
  }
};

// Criar novo aluno
const criarAluno = (req, res) => {
  try {
    const { nome, curso, ira } = req.body;
    
    // Validação básica
    if (!nome || !curso || !ira) {
      return res.status(400).json({
        success: false,
        error: 'Todos os campos são obrigatórios'
      });
    }
    
    const novoAluno = {
      id: proximoId++,
      nome,
      curso,
      ira
    };
    
    alunos.push(novoAluno);
    
    res.status(201).json({
      success: true,
      message: 'Aluno criado com sucesso',
      data: novoAluno
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao criar aluno'
    });
  }
};

// Atualizar aluno
const atualizarAluno = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nome, curso, ira } = req.body;
    
    const alunoIndex = alunos.findIndex(a => a.id === id);
    
    if (alunoIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Aluno não encontrado'
      });
    }
    
    // Validação básica
    if (!nome || !curso || !ira) {
      return res.status(400).json({
        success: false,
        error: 'Todos os campos são obrigatórios'
      });
    }
    
    // Atualizar dados do aluno
    alunos[alunoIndex] = {
      ...alunos[alunoIndex],
      nome,
      curso,
      ira
    };
    
    res.status(200).json({
      success: true,
      message: 'Aluno atualizado com sucesso',
      data: alunos[alunoIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao atualizar aluno'
    });
  }
};

// Deletar aluno
const deletarAluno = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const alunoIndex = alunos.findIndex(a => a.id === id);
    
    if (alunoIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Aluno não encontrado'
      });
    }
    
    const alunoDeletado = alunos[alunoIndex];
    alunos.splice(alunoIndex, 1);
    
    res.status(200).json({
      success: true,
      message: 'Aluno deletado com sucesso',
      data: alunoDeletado
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao deletar aluno'
    });
  }
};

module.exports = {
  listarAlunos,
  buscarAlunoPorId,
  criarAluno,
  atualizarAluno,
  deletarAluno
}; 