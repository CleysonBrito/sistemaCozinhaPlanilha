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

    fetch("https://institutoreciclar-my.sharepoint.com/:x:/r/personal/admin_institutoreciclar_onmicrosoft_com/_layouts/15/Doc.aspx?sourcedoc=%7BDE2C17EA-D84F-4BFF-B8E9-15753D74364D%7D&file=Pasta.xlsx&action=editnew&mobileredirect=true&wdNewAndOpenCt=1729782763717&ct=1729782764785&wdOrigin=OFFICECOM-WEB.START.NEW&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=ddd753a8-14c1-4777-9f7b-ce5ef8537aea&cid=8ef89d60-b0f4-4eaf-a0b1-877b476ddb1a", {
        method: "POST",
        mode: "cors",
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
