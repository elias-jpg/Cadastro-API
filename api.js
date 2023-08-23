
function viaCep() {
     
     let valorCep = document.querySelector("#cep").value;
     
     fetch("https://brasilapi.com.br/api/cep/v1/"+ valorCep)
     .then(function (respostaAPI) {
     
          respostaAPI.json()
          .then(function (retornoEmJson){
               console.log('retorno em JSON' ,retornoEmJson)
     
               document.querySelector('#rua').value = retornoEmJson.street
               document.querySelector('#cidade').value = retornoEmJson.city
               document.querySelector('#cep').value = retornoEmJson.cep
               document.querySelector('#estado').value = retornoEmJson.state
               document.querySelector('#bairro').value = retornoEmJson.neighborhood
          })
     })
}
function Cadastrar(){
     let campos  = document.querySelectorAll('input');

     for (let i = 0; i <campos.length; i++){
          if(campos[i].value == ''){
               alert('Preencha o campo: '+ campos[i].id)
          return
          }
     }
     alert('Funcionario Cadastrado com Sucesso')
     document.querySelectorAll('input').value = '';
}