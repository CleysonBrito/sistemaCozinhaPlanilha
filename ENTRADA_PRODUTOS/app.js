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

    msalInstance.acquireTokenSilent(loginRequest).then((tokenResponse) => {
        const accessToken = tokenResponse.accessToken;
        
        const fileId = 'https://institutoreciclar-my.sharepoint.com/:x:/g/personal/admin_institutoreciclar_onmicrosoft_com/EeoXLN5P2P9LuOkVdT10Nk0BQ2fx53aLjfepQMkD270aCg?e=FgzDKS'; // Substitua por apenas o ID do arquivo no OneDrive
        const sheet = 'Sheet1'; // Nome da aba da planilha
        const apiUrl = `https://graph.microsoft.com/v1.0/me/drive/items/${fileId}/workbook/worksheets('${sheet}')/range(address='A1')`; // Modifique a célula conforme necessário

        fetch(apiUrl, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            mode: 'no-cors', // Adiciona o modo no-cors
            body: JSON.stringify({
                values: [[sku, descricao, tipo, unidade, grupo, quantidade, valor_unitario, valor_total, fornecedor, data_cadastro, data_vencimento]]
            })
        }).then(response => {
            console.log('Requisição enviada, porém resposta não pode ser processada devido ao no-cors.');
        }).catch(error => console.error('Erro ao salvar na planilha: ', error));
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
