angular.module("listaTelefonica").factory("contatosAPI", function() {

  var objContatos = [
    {nome: "matheus de castro" , data: new Date(), telefone: "12 997056221"},
    {nome: "Pedro Quintães"   , data: new Date(), telefone: "16 997522311"},
    {nome: "adriana pozenato" , data: new Date(), telefone: "14 91298889" }
  ];

  var _getContatos = function(){
    return objContatos;
  };

  var _saveContato = function(contato){
    objContatos.push(contato);
  };

  return {
    getContatos: _getContatos,
    saveContato: _saveContato
  };

});
