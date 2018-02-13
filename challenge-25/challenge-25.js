(function (win, doc) {

  var $result = doc.querySelector('[data-js="span-result"]');
  var $state = doc.querySelectorAll('[data-js="radio-state"]');
  var $cityes = doc.querySelector('[data-js="cityes"]');
  var $name = doc.querySelector('[data-js="input-name"]');

  function on(element, event, callback){
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  on('[data-js="input-name"]', 'input', function(){
    $result.innerHTML = this.value;
  })

  on('[data-js="cityes"]', 'change', function() {
    console.log('estado escolhido', this.value);
  });

  $state.forEach(function(radio){
    radio.addEventListener('change', function(){
      console.log('radio clicado', this.value);
    });
  });

  on('[data-js="radio-state"]', 'change', function(){
    console.log('radio escolhido', this.value);
  });


  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */
})(window, document);
