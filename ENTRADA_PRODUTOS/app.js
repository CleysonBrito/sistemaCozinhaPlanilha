import { createClient } from '@supabase/supabase-js';

// Inicializando o cliente Supabase
const supabaseUrl = 'https://uccoosxvsjbquqdbadbj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjY29vc3h2c2picXVxZGJhZGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NjYyNzMsImV4cCI6MjA0NTQ0MjI3M30.sKZsTu8EZ6XwY_9yLuNzgiuCwpWcsCWiV92CZyHVxVA';
const supabase = createClient(supabaseUrl, supabaseKey);

// Função para enviar dados
document.getElementById('dataForm').addEventListener('submit', async (e) => {
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

    try {
        // Enviar dados para Supabase
        const { data, error } = await supabase
            .from('produtos') // Substitua 'produtos' pelo nome da sua tabela
            .insert([produto]);

        if (error) throw error; // Se houver erro, lance uma exceção

        alert('Produto salvo com sucesso!');
        document.getElementById('dataForm').reset();
    } catch (error) {
        console.error('Erro ao enviar dados: ', error);
        alert('Erro ao salvar produto.');
    }
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
