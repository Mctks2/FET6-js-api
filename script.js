const elementos = {
    mensagemErro: document.getElementById('erro'),
    cidade: document.getElementById('cidade'),
    logradouro: document.getElementById('endereco'),
    estado: document.getElementById('estado'),
    campoCep: document.getElementById('cep'),
    bairro: document.getElementById('bairro'),
    complemento: document.getElementById('complemento')
};

async function buscaEndereco(cep) {
    elementos.mensagemErro.innerHTML = "";

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dadosEndereco = await resposta.json();

        if (dadosEndereco.erro) {
            throw new Error('CEP não encontrado. Por favor, verifique o CEP digitado.');
        }

        exibirEndereco(dadosEndereco);
        return dadosEndereco;
    } catch (erro) {
        elementos.mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.error(erro);
    }
}

function exibirEndereco(endereco) {
    elementos.cidade.value = endereco.localidade;
    elementos.logradouro.value = endereco.logradouro;
    elementos.estado.value = endereco.uf;
    elementos.bairro.value = endereco.bairro;
    elementos.complemento.value = endereco.complemento;

    console.log(endereco);
}


elementos.campoCep.addEventListener("focusout", () => buscaEndereco(elementos.campoCep.value));
