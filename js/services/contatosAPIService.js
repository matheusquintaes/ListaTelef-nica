angular.module("listaTelefonica").factory("contatosAPI", function() {

  var objContatos = [
    {nome: "Matheus" , data: new Date(), telefone: "12 997056221"},
    {nome: "Pedro"   , data: new Date(), telefone: "16 997522311"},
    {nome: "Adriana" , data: new Date(), telefone: "14 91298889" }
  ];

  var _getContatos = function(){
    return objContatos;
  }

  var _saveContato = function(contato){
    objContatos.push(contato);
  }

  return {
    getContatos: _getContatos,
    saveContato: _saveContato
  }

});
