angular.module("listaTelefonica").service("operadorasAPI", function() {

  var objOperadoras = [
    {nome: "Oi",        codigo: 14, categoria: "celular", preco: 2},
    {nome: "Vivo",      codigo: 15, categoria: "celular", preco: 4},
    {nome: "Tim",       codigo: 41, categoria: "celular", preco: 3},
    {nome: "Gtv",       codigo: 25, categoria: "Fixo"   , preco: 2} ,
    {nome: "Embratel",  codigo: 21, categoria: "Fixo"   , preco: 2},
  ];

  this.getOperadoras = function (){
    return objOperadoras;
  }

});
