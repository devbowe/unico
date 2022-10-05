window.onload = function() {

    $("#phone-cf87a820-bbd3-4d40-bcdc-1ed21db4ac9e").prop("type", "text");
    $("#hsForm_cf87a820-bbd3-4d40-bcdc-1ed21db4ac9e > div.hs_phone.hs-phone.hs-fieldtype-text.field.hs-form-field > div").html('<input id="phone-cf87a820-bbd3-4d40-bcdc-1ed21db4ac9e" class="hs-input" type="text" name="phone" required="" value="" placeholder="Telefone" autocomplete="tel" data-reactid=".hbspt-forms-0.1:$2.0">');

    $("#phone-cf87a820-bbd3-4d40-bcdc-1ed21db4ac9e")
        .mask("(99) 9999-9999?9")
        .focusout(function(event) {
            var target, phone, element;
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;
            phone = target.value.replace(/\D/g, '');
            element = $(target);
            element.unmask();
            if (phone.length > 10) {
                element.mask("(99) 99999-999?9");
            } else {
                element.mask("(99) 9999-9999?9");
            }
        });

    // Input apenas letras
    $("input[name=firstname]").keypress(function(e) {
        try {
            if (window.event) {
                var charCode = window.event.keyCode;
            } else if (e) {
                var charCode = e.which;
            } else {
                return true;
            }
            if (
                (charCode > 64 && charCode < 91) ||
                (charCode > 96 && charCode < 123) ||
                (charCode > 191 && charCode <= 255) || charCode === 32 // letras com acentos
            ) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            alert(err.Description);
        }
    });

}

$("#phone")
    .mask("(99) 9999-9999?9")
    .focusout(function(event) {
        var target, phone, element;
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;
        phone = target.value.replace(/\D/g, '');
        element = $(target);
        element.unmask();
        if (phone.length > 10) {
            element.mask("(99) 99999-999?9");
        } else {
            element.mask("(99) 9999-9999?9");
        }
    });
// $("#phone")[0].selectionStart;

$("#unico-people").click(function() {

    var nome = $('#firstname');
    var email = $('#email');
    var telefone = $('#phone');
    var company = $('#company');
    var cargo = $('#cargo');
    var colab = $('#colaboradores');
    var segmento = $('#segmento');

    if (!nome.val()) {
        Swal.fire({
            icon: 'warning',
            text: 'Informe seu nome',
            timer: 2000,
            onAfterClose: () => {
                nome.focus();
            }
        });
    } else if (!validacaoEmail(email.val())) {
        Swal.fire({
            icon: 'warning',
            text: 'Informe seu e-mail',
            timer: 2000,
            onAfterClose: () => {
                email.focus();
            }
        });
    } else if (emailCorporativo(email.val()) == false) {
        Swal.fire({
            icon: 'warning',
            text: 'Informe um e-mail corporativo',
            timer: 2000,
            onAfterClose: () => {
                email.focus();
            }
        });
    } else if (!telefone.val()) {
        Swal.fire({
            icon: 'warning',
            text: 'Informe seu telefone',
            timer: 2000,
            onAfterClose: () => {
                telefone.focus();
            }
        });
    } else if (!company.val()) {
        Swal.fire({
            icon: 'warning',
            text: 'Informe sua empresa',
            timer: 2000,
            onAfterClose: () => {
                company.focus();
            }
        });
    } else if (colab.val() == 'nulo') {
        Swal.fire({
            icon: 'warning',
            text: 'Informe o número de colaboradores',
            timer: 2000,
            onAfterClose: () => {
                colab.focus();
            }
        });
    } else if (cargo.val() == 'nulo') {
        Swal.fire({
            icon: 'warning',
            text: 'Informe seu cargo',
            timer: 2000,
            onAfterClose: () => {
                cargo.focus();
            }
        });
    } else if (segmento.val() == 'nulo') {
        Swal.fire({
            icon: 'warning',
            text: 'Informe seu segmento',
            timer: 2000,
            onAfterClose: () => {
                segmento.focus();
            }
        });
    } else if (colab.val() == 'nulo') {
        Swal.fire({
            icon: 'warning',
            text: 'Informe o número de docs transacionados',
            timer: 2000,
            onAfterClose: () => {
                colab.focus();
            }
        });
    } else {
        setTimeout(function() {
            window.location.href = "./obrigado.html";
        },500);

        return true;
    }
    return false;
});

//valida email
function validacaoEmail(email) {
    var verifica = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verifica.test(String(email).toLowerCase());
};

function validacaoNome(nome) {
    var verifica = /[a-z]+@[a-z]+\.[a-z]+/;
    return verifica.test(String(nome).toLowerCase());
};

var queryForm = function(settings) {
    var reset = settings && settings.reset ? settings.reset : false;
    var self = window.location.toString();
    var querystring = self.split("?");
    if (querystring.length > 1) {
        var pairs = querystring[1].split("&");
        for (i in pairs) {
            var keyval = pairs[i].split("=");
            if (reset || sessionStorage.getItem(keyval[0]) === null) {
                sessionStorage.setItem(keyval[0], decodeURIComponent(keyval[1]));
            }
        }
    }
    var hiddenFields = document.querySelectorAll("input[type=hidden], input[type=text]");
    for (var i = 0; i < hiddenFields.length; i++) {
        var param = sessionStorage.getItem(hiddenFields[i].name);
        if (param) document.getElementsByName(hiddenFields[i].name)[0].value = param;
    }
}

setTimeout(function() { queryForm(); }, 3000);

//valida email
function validacaoEmail(email) {
    var verifica = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verifica.test(String(email).toLowerCase());
};

var invalidDomains = ["@gmail.", "@yahoo.", "@hotmail.", "@live.", "@aol.", "@outlook.", "@terra.", "@bol.", "@uol."];

function emailCorporativo(email) {
    for (var i = 0; i < invalidDomains.length; i++) {
        var domain = invalidDomains[i];
        if (email.indexOf(domain) != -1) {
            return false;
        }
    }
    return true;
}

    !function(t,s,e){"use strict";var i=function(t,s){var i=this;this.el=t,this.options={},Object.keys(o).forEach(function(t){i.options[t]=o[t]}),Object.keys(s).forEach(function(t){i.options[t]=s[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,e&&this.options.stringsElement instanceof e?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};i.prototype={constructor:i,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;if(!0===this.showCursor&&(this.cursor=s.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";Array.prototype.slice.apply(this.stringsElement.children).forEach(function(s){t.strings.push(s.innerHTML)})}this.init()},typewrite:function(t,s){if(!0!==this.stop){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var e=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var e=0,o=t.substr(s);if("^"===o.charAt(0)){var r=1;/^\^\d+/.test(o)&&(o=/\d+/.exec(o)[0],r+=o.length,e=parseInt(o)),t=t.substring(0,s)+t.substring(s+r)}if("html"===i.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="";for(a="<"===n?">":";";t.substr(s+1).charAt(0)!==a&&(t.substr(s).charAt(0),!(++s+1>t.length)););s++,a}}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,!1===i.loop||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var e=t.substr(0,s+1);i.attr?i.el.setAttribute(i.attr,e):i.isInput?i.el.value=e:"html"===i.contentType?i.el.innerHTML=e:i.el.textContent=e,s++,i.typewrite(t,s)}},e)},e)}},backspace:function(t,s){var e=this;if(!0!==this.stop){if(this.fadeOut)return void this.initFadeOut();var i=Math.round(70*Math.random())+this.backSpeed;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(;"<"!==t.substr(s-1).charAt(0)&&(t.substr(s).charAt(0),!(--s<0)););s--,"<"}var i=t.substr(0,s);e.replaceText(i),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.init()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.typewrite(self.strings[self.sequence[self.arrayPos]],0)},self.fadeOutDelay)},replaceText:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){clearInterval(this.timeout),this.el.getAttribute("id"),this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},i.new=function(t,e){Array.prototype.slice.apply(s.querySelectorAll(t)).forEach(function(t){var s=t._typed,o="object"==typeof e&&e;s&&s.reset(),t._typed=s=new i(t,o),"string"==typeof e&&s[e]()})},e&&(e.fn.typed=function(t){return this.each(function(){var s=e(this),o=s.data("typed"),r="object"==typeof t&&t;o&&o.reset(),s.data("typed",o=new i(this,r)),"string"==typeof t&&o[t]()})}),t.Typed=i;var o={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery);

$(function() {
    console.log("funciona");
    $('#typed').typed({
        strings: ["a burocracia", "a papelada no RH", "o armazenamento físico de documentos", "a gestão manual das admissões", "a rotina operacional no RH"],
        typeSpeed: 30,
        loop: true,
        backSpeed: 20,
        backDelay: 500
    });
});



// $('body').mouseleave(function(){
//     $('.modal-score').show(); 
//     $('.modal-score').css('display','flex');
//     $('html').css('overflow','hidden');
// });

  $('.close-modal').on('click', function(){
    $('.modal-bf').hide();
    //$('video').trigger('pause'); 
    $('html').css('overflow','auto');
});