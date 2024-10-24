// Função para calcular o valor total
function calcularValorTotal() {
    const quantidade = document.getElementById('quantidade').value;
    const valor_unitario = document.getElementById('valor_unitario').value;
    const valor_total = quantidade * valor_unitario;
    document.getElementById('valor_total').value = valor_total.toFixed(2);
}

// Função para enviar os dados ao Google Apps Script
document.getElementById('dataForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
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

    fetch('https://script.google.com/macros/s/AKfycbxM2WNFSr9VZyDibR8H4SQhApM-8t3tNFSdMP4zj_hIETjoegzudMHvVttrz8MTRS9gUA/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('Produto salvo com sucesso!');
        document.getElementById('dataForm').reset();
    })
    .catch(error => console.error('Erro ao salvar produto: ', error));
});
