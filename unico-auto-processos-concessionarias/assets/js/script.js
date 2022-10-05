$(document).ready(function() {

	//Valida primeiro step do form
	$('#go-to-step-02').click(function() {

		var nome = $('#form #nome');
		var email = $('#form #mail');
		var telefone = $('#form #tel');
		var cargo = $('#form #cargo');
		var empresa = $('#form #empresa');
		var departamento = $('#form #dept');
		var utm_source = $('#form #utm_source');
		var utm_campaign = $('#form #utm_campaign');
		var utm_medium = $('#form #utm_medium');
		var utm_content = $('#form #utm_content');
		var utm_term = $('#form #utm_term');

		if(!nome.val()){

			nome.focus();
			nome.parents('.input-field').addClass('error');
			nome.parent().find('.output').html('<strong>Informe seu nome.</strong>');

		} else if(telefone.val().length < 11) {

			telefone.focus();
			telefone.parents('.input-field').addClass('error');
			telefone.parent().find('.output').html('<strong>Informe um telefone válido.</strong>');

		 } else if(!emailCorporativo(email.val())){

			email.focus();
			email.parents('.input-field').addClass('error');
			email.parent().find('.output').html('<strong>Informe um e-mail comercial.</strong>');
	
		} else if(!validacaoEmail(email.val())){

			email.focus();
			email.parents('.input-field').addClass('error');
			email.parent().find('.output').html('<strong>Informe um e-mail válido.</strong>');

		} else if(!empresa.val()){

			empresa.focus();
			empresa.parents('.input-field').addClass('error');
			empresa.parent().find('.output').html('<strong>Informe o nome da sua empresa</strong>');

		 } else if(cargo.val() == 'nulo') {

			cargo.focus();
			cargo.parents('.input-field').addClass('error');
			cargo.parent().find('.output').html('<strong>Informe o seu cargo.</strong>');

		 } else if(!departamento.val()){

			departamento.focus();
			departamento.parents('.input-field').addClass('error');
			departamento.parent().find('.output').html('<strong>Informe o seu departamento.</strong>');

		 } else {

			$('.step-01').hide();
			$('.step-02').fadeIn(300);

		}

		return false;

	});

	$('#send-step-final').click(function() {

		//first step
		var nome = $('#form #nome');
		var email = $('#form #mail');
		var telefone = $('#form #tel');
		var cargo = $('#form #cargo');
		var empresa = $('#form #empresa');
		var departamento = $('#form #dept');
		var utm_source = $('#form #utm_source');
		var utm_campaign = $('#form #utm_campaign');
		var utm_medium = $('#form #utm_medium');
		var utm_content = $('#form #utm_content');
		var utm_term = $('#form #utm_term');

		//second step
		var concessionarias = $('#form #concessionarias');
		var receberConteudo = 'Não';
		var receberConteudoWhats = 'Não';

		if($('[name="aceito_receber_conteudos_exclusivos_da_unico_"]').is(':checked')) {
			receberConteudo = 'Sim';
		}

		if($('[name="aceito_receber_comunicados_por_whatsapp"]').is(':checked')) {
			receberConteudoWhats = 'Sim';
		}

		if(!concessionarias.val()){
			concessionarias.focus();
			concessionarias.parents('.input-field').addClass('error');
			concessionarias.parent().find('.output').html('<strong>Informe a quantidade de concessionarias que há no grupo em que você trabalha.</strong>');

		} else {

			$('.loader').fadeIn(200);
			$('body').css({"overflow":"hidden"});

			// setTimeout(function() {
			// 	window.location.href = "./obrigado.html";
			// },2000);

			return true;

		}

		return false;

	});

	$('#open-form-mobile').click(function() {

		$(this).hide();
		$('#section1 .formulario').show();

		$('html, body').animate({
			scrollTop: $('#section1').offset().top
		}, 700);

	});

	$('#close-form-mobile').click(function() {

		$('.formulario').hide();
		$('#open-form-mobile').show();

		return false;

	});

	$(".input-field input").focus(function(){
		$(this).parent().addClass("is-active is-completed");
	});

	$(".input-field input").focusout(function(){
	  if($(this).val() === "")
		$(this).parent().removeClass("is-completed");
	  $(this).parent().removeClass("is-active");
	});


	$("#form #tel")
	.mask("(99) 9999-9999?9")
	.focusout(function (event) {  
		var target, phone, element;  
		target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
		phone = target.value.replace(/\D/g, '');
		element = $(target);  
		element.unmask();  
		if(phone.length > 10) {  
			element.mask("(99) 99999-999?9");  
		} else {  
			element.mask("(99) 9999-9999?9");  
		}  
	});

	//function pra mascara
	var maskConditions = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },

    maskOptions = {
      onKeyPress: function(val, e, field, options) {
          field.mask(maskConditions.apply({}, arguments), options);
        }
    };

	function validacaoEmail(email) {
		var verifica = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return verifica.test(String(email).toLowerCase());
	}

	var invalidDomains = ["@gmail.","@yahoo.","@hotmail.","@live.","@aol.","@outlook.","@bol.", "@uol."];
    
	function emailCorporativo(email) {
		for(var i=0; i < invalidDomains.length; i++) {
		var domain = invalidDomains[i];
		if (email.indexOf(domain) != -1) {
			return false;
			}
		}
		return true;
	}

	//valida cnpj
	function validarCNPJ(cnpj) {
		cnpj = cnpj.replace(/[^\d]+/g, "");
	  
		if (cnpj == "") return true;
	  
		if (cnpj.length != 14) return false;
	  
		// Elimina CNPJs invalidos conhecidos
		if (
		  cnpj == "00000000000000" ||
		  cnpj == "11111111111111" ||
		  cnpj == "22222222222222" ||
		  cnpj == "33333333333333" ||
		  cnpj == "44444444444444" ||
		  cnpj == "55555555555555" ||
		  cnpj == "66666666666666" ||
		  cnpj == "77777777777777" ||
		  cnpj == "88888888888888" ||
		  cnpj == "99999999999999"
		)
		  return false;
	  
		// Valida DVs
		tamanho = cnpj.length - 2;
		numeros = cnpj.substring(0, tamanho);
		digitos = cnpj.substring(tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2) pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado != digitos.charAt(0)) return false;
	  
		tamanho = tamanho + 1;
		numeros = cnpj.substring(0, tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2) pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado != digitos.charAt(1)) return false;
	  
		return true;
	  }
	
    //mascaras
	$( "#cnpj" ).focus(function() {($('#cnpj').mask('99.999.999/9999-99'))});


});

//scroll
$('a.scroll').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });