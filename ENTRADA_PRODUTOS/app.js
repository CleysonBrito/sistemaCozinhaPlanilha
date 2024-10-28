document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = 'https://script.google.com/macros/s/AKfycbz4QUW5MW7r2yDfzhO_YYXkwfc56aLr3ArpDxff8OzEFbdhUcdUBweyJEKWeRlCciOSsQ/exec';

    const produto = {
        sku: document.getElementById('sku').value,
        descricao: document.getElementById('descricao').value,
        tipo: document.getElementById('tipo').value,
        unidade: document.getElementById('unidade').value,
        grupo: document.getElementById('grupo').value,
        quantidade: parseFloat(document.getElementById('quantidade').value),
        valor_unitario: parseFloat(document.getElementById('valor_unitario').value),
        valor_total: parseFloat(document.getElementById('valor_total').value),
        fornecedor: document.getElementById('fornecedor').value,
        data_cadastro: document.getElementById('data_cadastro').value,
        data_vencimento: document.getElementById('data_vencimento').value
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        });

        if (!response.ok) {
            throw new Error('Erro na resposta do servidor: ' + response.statusText);
        }

        const result = await response.json();
        alert(result.message);
        document.getElementById('dataForm').reset();
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao salvar produto: ' + error.message);
    }
});

function calcularValorTotal() {
    const quantidade = parseFloat(document.getElementById('quantidade').value) || 0;
    const valor_unitario = parseFloat(document.getElementById('valor_unitario').value) || 0;
    document.getElementById('valor_total').value = (quantidade * valor_unitario).toFixed(2);
}

function limparFormulario() {
    document.getElementById('dataForm').reset();
}

function irParaHome() {
    window.location.href = "./home.html";
}
