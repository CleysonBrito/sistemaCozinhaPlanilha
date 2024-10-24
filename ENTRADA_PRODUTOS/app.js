document.getElementById('dataForm').addEventListener('submit', (e) => {
    e.preventDefault();

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

    fetch("https://script.google.com/macros/s/AKfycbxM2WNFSr9VZyDibR8H4SQhApM-8t3tNFSdMP4zj_hIETjoegzudMHvVttrz8MTRS9gUA/exec", {
        method: "POST",
        mode: "cors",  // Garantir que a requisição seja feita com o modo CORS
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);
            document.getElementById('dataForm').reset();
        }
    })
    .catch(error => {
        console.error('Erro ao salvar produto: ', error);
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

