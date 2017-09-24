'use strict'
/*
 * Altera a imagem do icone conforme a movimentação
 * do mouse sobre o menu carregando a imagem correspondente
 */
function mudafoto() {
  var fotos = {
    'link_principal': '_imagens/home.png',
    'link_spec': '_imagens/especificacoes.png',
    'link_foto': '_imagens/fotos.png',
    'link_multimidia': '_imagens/multimidia.png',
    'link_fale_conosco': '_imagens/contato.png'
  }
  document.getElementById("icone").src = fotos[this.id];
}

/*
 * Atribui a imagem padrão para a página carregada
 * Através do movimento do mouse para fora do menu
 * carregara a imagem padrão correspondente a página
 * carregada
 */
function setDefault() {
  var defaults = {
    'lista_menus': '_imagens/glass-oculos-preto-peq.png',
    'lista_menus_spec':'_imagens/especificacoes.png',
    'lista_menus_foto':'_imagens/fotos.png',
    'lista_menus_multimidia':'_imagens/multimidia.png',
    'lista_menus_faleconosco':'_imagens/contato.png'
  }
  // Pega a ul parente da li para obter a id que
  // correspondente a página carregada
  var ul = this.parentNode;
  // Carrega a imagem padrão correspondente a página
  document.getElementById("icone").src = defaults[ul.id];
}

var liList = document.getElementsByTagName('li');

for(var x = 0; x < liList.length; x++) {

  // Evita conflito com outras lista ULs
  var parent = liList[x].parentNode;
  if(parent.className == "mainMenu"){
    // atribui eventos aos itens do menu corretos
    liList[x].addEventListener('mouseover', mudafoto);
    liList[x].addEventListener('mouseout', setDefault);
  }
}

// Calcula preço total
document.getElementById('fContato').addEventListener('input', function calc_total(){
  var qtd = parseInt(document.getElementById('cQtd').value);
  var tot = qtd * 1500;
  document.getElementById('cTot').value = tot;
});

// Envio do formulário
document.getElementById("bEnviar").addEventListener("click", function bSubmit(e){
  e.preventDefault();
  this.parentNode.submit();
})
