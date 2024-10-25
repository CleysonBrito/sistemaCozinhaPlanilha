// Função para enviar dados
document.getElementById('dataForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
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
