// Função para enviar dados
document.getElementById('dataForm').addEventListener('submit', (e) => {
    e.preventDefault();
<<<<<<< HEAD
    
    // Dados do formulário
    const produto = {
        sku: document.getElementById('sku').value,
        descricao: document.getElementById('descricao').value,
        tipo: document.getElementById('tipo').value,
        unidade: document.getElementById('unidade').value,
        grupo: document.getElementById('grupo').value,
        quantidade: document.getElementById('quantidade').value,
        valor_unitario: document.getElementById('valor_unitario').value,
        valor_total: document.getElementById('valor_total').value,
        fornecedor: document.getElementById('fornecedor').value,
        data_cadastro: document.getElementById('data_cadastro').value,
        data_vencimento: document.getElementById('data_vencimento').value
    };

    // URL do Web App do Google Apps Script
    const scriptURL = "https://script.google.com/macros/s/AKfycby9rhIyLNb-SW51JZ5Y2c7p6yTpxu28GWRg_ljrdrQasFPrYMCim92QE6oT2UwNbQsDOA/exec";

    // Envio de dados para o Google Sheets usando POST
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(produto),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Produto salvo com sucesso!');
            document.getElementById('dataForm').reset(); // Limpar formulário após envio
        } else {
            alert('Erro ao salvar produto.');
            console.error('Erro:', data.message);
        }
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao salvar produto.');
    });
=======
    const sku = document.getElementById('sku').value;
    const descricao = document.getElementById('descricao').value;
    const tipo = document.getElementById('tipo').value;
    const unidade = document.getElementById('unidade').value;
    const grupo = document.getElementById('grupo').value;
    const quantidade = document.getElementById('quantidade').value;
    const valor_unitario = document.getElementById('valor_unitario').value;
    const valor_total = document.getElementById('valor_total').value;
    const fornecedor = document.getElementById('fornecedor').value;
    const data_cadastro = document.getElementById('data_cadastro').value;
    const data_vencimento = document.getElementById('data_vencimento').value;

    // Referência ao banco de dados
    const db = firebase.database().ref('entradaprodutos');

    // Dados a serem enviados
    const produto = {
        sku,
        descricao,
        tipo,
        unidade,
        grupo,
        quantidade,
        valor_unitario,
        valor_total,
        fornecedor,
        data_cadastro,
        data_vencimento
    };

    // Enviar dados para o Firebase
    db.push(produto)
        .then(() => {
            alert('Produto salvo com sucesso!');
            document.getElementById('dataForm').reset();
        })
        .catch((error) => {
            console.error('Erro ao salvar produto: ', error);
        });
>>>>>>> 3f9884a3f9aff49ff7145e4584f87c2fb06e05cc
});

// Função para calcular o valor total
function calcularValorTotal() {
    const quantidade = document.getElementById('quantidade').value;
    const valor_unitario = document.getElementById('valor_unitario').value;
    const valor_total = quantidade * valor_unitario;
    document.getElementById('valor_total').value = valor_total.toFixed(2);
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('dataForm').reset();
}

// Função para ir para a home
function irParaHome() {
    window.location.href = "./home.html"; // Substitua pelo caminho correto para a página inicial
}
