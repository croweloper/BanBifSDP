function checkActivo() {
    var check = window.location.pathname.split('/')[1];

    if ($(".listTopLeftMenu").find(".is" + check).length) {
        $(".listTopLeftMenu").find(".is" + check).addClass('active');
        $("#default-option").text($(".listTopLeftMenu").find(".is" + check).text());
    } else {
        $(".listTopLeftMenu li a").first().addClass('active');
        $("#default-option").text($(".listTopLeftMenu li a").first().text());
    }

}

$('#select-header-x li:first-child').click(function () {
    var iteration;
    iteration = $(this).data('iteration') || 1;
    switch (iteration) {
        case 1:
            $('#select-header-x').removeClass('inp');
            $('#select-header-x').children('li:first-child').data('iteration', 1);
            $(this).parent().addClass('inp');
            break;
        case 2:
            $(this).parent().removeClass('inp');
            break;
    }
    iteration++;
    if (iteration > 2) {
        iteration = 1;
    }
    return $(this).data('iteration', iteration);
});

$('#select-header-x li.optioner').click(function () {
    var nuevocont;
    nuevocont = $(this).text();
    $(this).parent().children('li:first-child').data('iteration', 1);
    $(this).parent().removeClass('inp');
    $(this).parent().children('li:first-child').children('strong').addClass('usado');
    $(this).parent().children('li:first-child').children('strong').text(nuevocont);
});

inspectionTop1('TopLeftMenu');
inspectionTop2('TopRightMenu');
inspectionMenu('SubMenuA');
inspectionMenu('SubMenuB');
inspectionMenu2('SubItemsMenuB');

function inspectionTop1(okLetter) {
    var drb = $("#list" + okLetter).val();
    if (drb === undefined) {
        console.log(okLetter + " not found");
    } else {
        if (drb != null && drb !== "") {
            var hey = drb.split("}");
            for (var i = 0; i < hey.length - 1; i++) {
                var item = hey[i].split(";");
                if (item[1] == "1") {
                    $(".list" + okLetter).append("<li><a data-id='Solicitar-" + item[0].trim().replace(/ /g, '-') + "' href='" + item[2].trim() + "' class='is" + item[2].trim().replace(/ /g, '').replace('/', '') + "'>" + item[0].trim() + "</a></li>");
                    $("#select-header-x").append("<li class='optioner'><a href='" + item[2].trim() + "'>" + item[0].trim() + "</a></li>")
                } else {
                    $(".list" + okLetter).append("<li><a data-id='Solicitar-" + item[0].trim().replace(/ /g, '-') + "' href='" + item[2].trim() + "' class='preferente is" + item[2].trim().replace(/ /g, '').replace('/', '') + "'>" + item[0].trim() + "</li>");
                }
            }
            checkActivo();
        }
    }
    $("#list" + okLetter).remove();

}

function inspectionTop2(okLetter) {
    var drb = $("#list" + okLetter).val();
    if (drb === undefined) {
        console.log(okLetter + " not found");
    } else {
        if (drb != null && drb !== "") {
            var hey = drb.split("}");
            for (var i = 0; i < hey.length - 1; i++) {
                var item = hey[i].split(";");
                if (item[1] == "1") $(".list" + okLetter).append("<li><a data-id='Solicitar-" + item[0].trim().replace(/ /g, '-') + "' href='" + item[2].trim() + "'>" + item[0].trim() + "</a></li>");
                else $(".list" + okLetter).append("<li><a data-id='Solicitar-" + item[0].trim().replace(/ /g, '-') + "' href='#' class='open-fond-fijo'>" + item[0].trim() + "</li>");
            }
        }
    }
    $("#list" + okLetter).remove();
}

function inspectionMenu(okLetter) {
    var drb = $("#list" + okLetter).val();
    if (drb === undefined) {
        console.log("hidden " + okLetter + " not found");
    } else {
        if (drb != null && drb !== "") {
            var hey = drb.split("}");
            var total = hey.length - 1;
            for (var i = 0; i < total; i++) {
                var item = hey[i].split(";");
                if (i < 5) {
                    $(".list" + okLetter).append("<li class='veinte " + (i == 0 ? "no-pl" : i == 5 ? "no-pr" : "") + "'><a data-id='queNecesitas-" + item[0].trim().replace(/ /g, '-') + "' class='cont-centrado' href='" + item[2].trim() + "'><img class='img-center' src='" + item[1].trim() + "'><span class='titleMenu'>" + item[0].trim() + "</span></a></li>");
                } else {
                    $(".list" + okLetter + "X").append("<li class='veinte mt-2-5'><a data-id='queNecesitas-" + item[0].trim().replace(/ /g, '-') + "' class='cont-centrado' href='" + item[2].trim() + "'><img class='img-center' src='" + item[1].trim() + "'><span class='titleMenu'>" + item[0].trim() + "</span></a></li>");
                }
            }
        }
    }
    $("#list" + okLetter).remove();
}

function inspectionMenu2(okLetter) {
    var drb = $("#list" + okLetter).val();
    if (drb === undefined) {
        console.log("hidden " + okLetter + " not found");
    } else {
        if (drb != null && drb !== "") {
            var hey = drb.split("}");
            var total = hey.length - 1;
            for (var i = 0; i < total; i++) {
                var item = hey[i].split(";");
                $(".list" + okLetter + item[1].trim()).append("<a data-id='menuNuestroProductos-" + item[0].trim().replace(/ /g, '-') + "' href='" + item[2].trim() + "' class='lista_'><span class='fa fa-stop'></span>" + item[0].trim() + "</a>");
            }
        }
    }
    $("#list" + okLetter).remove();
}

/**/
var IframeNaranja = 0;
$(".div_iframe").hide();

if ($("#checkIsIframe").val() == "True") {
    $("#btnNaranja, #btnNaranja2").attr("href", "javascript:void(0)");
    $("#btnNaranja, #btnNaranja2").removeAttr('target');
    $("#btnNaranja, #btnNaranja2").click(function () {
        if (IframeNaranja == 0) {
            IframeNaranja = 1;
            $(".div_iframe").show();
        } else {
            IframeNaranja = 0;
            $(".div_iframe").hide();
        }
    });
}

/*Código BanBif*/
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
var urlUI = "https://bpiuat2.extranetbanbif.com.pe/BanBif.ICBanking.UI/";
var childUri = "https://bpiuat2.extranetbanbif.com.pe"
// Listen to message from child window
eventer(messageEvent, function (e) {
    console.log('origin: ', e.origin)
    // Check if origin is proper
    if (e.origin != childUri) {
        console.log('Wrong origin!: ', e.origin);
        return;
    }
    console.log('parent received message!: ', e.data);
    if (e.data.token == 'success') {
        //Esto lo abre en la misma ventana
        //window.top.location.href = urlUI + "#/myProducts";

        //Esto lo abre en una nueva pestaña. Atencion con el bloqueo de popups!
        window.open(urlUI+"#/myProducts");
        return;
    }
    if (e.data.token == 'successForceChangePassword') {
        //Esto lo abre en la misma ventana
        //window.top.location.href = urlUI + "#/login";

        //Esto lo abre en una nueva pestaña. Atencion con el bloqueo de popups!
        window.open(urlUI + "#/login");
        return;
    }
}, false);