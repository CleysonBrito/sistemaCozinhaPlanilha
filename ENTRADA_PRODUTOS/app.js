// Configuração do Supabase
const supabaseUrl = 'https://uccoosxvsjbquqdbadbj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjY29vc3h2c2picXVxZGJhZGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NjYyNzMsImV4cCI6MjA0NTQ0MjI3M30.sKZsTu8EZ6XwY_9yLuNzgiuCwpWcsCWiV92CZyHVxVA';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Função para enviar dados
document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
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
        const { data, error } = await supabase
            .from('produtos')  // Nome da tabela no Supabase
            .insert([produto]);

        if (error) {
            console.error('Erro ao salvar produto:', error);
            alert('Erro ao salvar produto.');
        } else {
            alert('Produto salvo com sucesso!');
            document.getElementById('dataForm').reset();
        }
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
});

// Função para calcular o valor total
function calcularValorTotal() {
    const quantidade = parseFloat(document.getElementById('quantidade').value) || 0;
    const valor_unitario = parseFloat(document.getElementById('valor_unitario').value) || 0;
    const valor_total = quantidade * valor_unitario;
    document.getElementById('valor_total').value = valor_total.toFixed(2);
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('dataForm').reset();
}

// Função para ir para a home
function irParaHome() {
    window.location.href = "./home.html"; // Caminho para a página inicial
}
