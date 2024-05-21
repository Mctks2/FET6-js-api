async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await (consultaCEP).json()
        if (consultaCEPConvertida.erro){
            throw Error('CEP não existente')
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch(erro){
        console.log(erro)
    }
}
