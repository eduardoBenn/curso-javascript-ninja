(function (dom) {
  'use strict';

  var $urlImagem = new dom('[data-js="url-image"]');
  var $marcaModelo = new dom('[data-js="input-marca-modelo"]');
  var $ano = new dom('[data-js="input-ano"]');
  var $placa = new dom('[data-js="input-placa"]');
  var $cor = new dom('[data-js="input-cor"]');
  var $btCadastrar = new dom('[data-js="bt-cadastrar"]');
  var $tableCars = new dom('[data-js="table-cars"]');

  function initial(){
    initialEvents();
  }

  function initialEvents(){
    $btCadastrar.get()[0].addEventListener('click', register ,false);
  }

  function register(event) {
    event.preventDefault();
    console.log('registrou com sucesso!');
  }

  function addCarIntoTable() {
    // pegar os valores dos campos
    // criar o elemento tr
    // crirar o elemento td
    // adicionar o valor do input no td
    // adicionar o td no tr
    // adicionar o tr na table
  }

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
  initial();
})(window.dom);
