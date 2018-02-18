(function (win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  };

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some(this.some, arguments);
  };

  DOM.prototype.isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
  };

  DOM.prototype.isString = function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(obj) {
    return Object.prototype.toString.call(obj) === '[object Null]'
      || Object.prototype.toString.call(obj) === '[object Undefined]';
  };

  var $formCEP = new DOM('[data-js="form-cep"]');
  var $inputCEP = new DOM('[data-js="input-cep"]');
  var $status = new DOM('[data-js="status"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cep = new DOM('[data-js="cep"]');
  var ajax = new XMLHttpRequest();

  $formCEP.on('submit', handleSubmitCEP);

  function handleSubmitCEP(event) {
    event.preventDefault();
    var url = getUrl();
    ajax.open('GET', url);
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function getUrl() {
    return replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
  }

  function clearCEP() {
    return $inputCEP.get()[0].value.replace(/\D/g, '');
  }

  function handleReadyStateChange() {
    if (isRequestOk()) {
      getMessage('ok');
      fillCEPFields();
    }
  }

  function fillCEPFields() {
    var data = parseData();
    if (!data)
      getMessage('error');

    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }

  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    } catch (e) {
      consolle.log('caiu no catch');
      result = null;
    }
    return result;
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function getMessage(type) {

    var messages = {
      loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
      ok: replaceCEP('Endereço referente ao CEP: [CEP] '),
      error: replaceCEP('Não encontramos o endereço para o CEP [CEP]')
    };
    $status.get()[0].textContent = messages[type];
  }

  function replaceCEP(message) {
    return message.replace('[CEP]', clearCEP());
  }

})(window, document);
