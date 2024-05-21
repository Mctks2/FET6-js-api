var consultaCEP = fetch ('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then(r => {
  if (r.erro) {
      throw Error('CEP não encontrado')
  } else
      console.log(r)
})
.catch(erro => console.log(erro))
.finally(() => console.log('Processamento concluído.'));

console.log(consultaCEP);