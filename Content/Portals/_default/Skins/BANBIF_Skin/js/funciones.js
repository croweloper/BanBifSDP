$(document).ready(function () {

    var window_heigt = $(window).height(),
        window_width = $(window).width();
    // console.log(window_heigt,window_width);

    $(".input-buscar, .input-buscar2").keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            window.location.href = "/Search-Results?Search=" + $(this).val();
        }
    });

    $(".btn-dsearch").click(function () {
        window.location.href = "/Search-Results?Search=" + $('.input-buscar').val();
    });

    $(".btn-search").click(function () {
        window.location.href = "/Search-Results?Search=" + $('.input-buscar2').val();
    });

    $('.formulario-x input[type="text"]').blur(function () {
        var vac = $(this).val();
        var vac2 = $(this).attr('rel');
        if (vac == "") {
            $(this).addClass('error');
            // $(this).attr('placeholder','Debes escribir '+vac2);
        } else {
            $(this).removeClass('error');
        }
    });

    /* shades */


    /* HEADER */
    $('.cleaner').click(function () {
        $(this).parent().children('input[type="text"]').attr('value', '');
        $('.cleaner').fadeOut();
    });
    $('.input-buscar').keypress(function (event) {
        $('.cleaner').fadeIn();
        /* Act on the event */
        // if ($(this).length>0){
        //   $('.cleaner').fadeIn();
        // }else{
        //   $('.cleaner').fadeOut();
        // }
    });




    $('.tipper').qtip({
        style: "qtip-dark",
        position: {
            my: 'bottom left',  // Position my top left...
            at: 'right top', // at the bottom right of...
            target: $('.tipper') // my target
        }
    });

    $('.open_cronos').click(function (event) {
        event.preventDefault();
        $('#mostrar_despues').removeClass('oculta');
    })

    $('.cerrar_cronos').click(function (event) {
        event.preventDefault();
        $('#mostrar_despues').addClass('oculta');
    })


    $('.aceptardatos').click(function () {
        var iteration;
        iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                $(this).children('span').addClass('fa-dot-circle-o');
                $(this).children('span').removeClass('fa-circle-o');
                break;
            case 2:
                $(this).children('span').removeClass('fa-dot-circle-o');
                $(this).children('span').addClass('fa-circle-o');
                break;
        }
        iteration++;
        if (iteration > 2) {
            iteration = 1;
        }
        return $(this).data('iteration', iteration);
    });

    /* shades */


    /* forms */

    $('.number').on('keydown', function (e) { -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) || /65|67|86|88/.test(e.keyCode) && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && 40 >= e.keyCode || (e.shiftKey || 48 > e.keyCode || 57 < e.keyCode) && (96 > e.keyCode || 105 < e.keyCode) && e.preventDefault() });

    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };


    //$('.formulario-x input[type="text"].mailo').blur(function(){
    //  var emailaddress = $(this).attr('value');
    //  if( !isValidEmailAddress( emailaddress ) ) { 
    //      $(this).addClass('error');
    //      $(this).attr('value','');
    //      // $(this).attr('placeholder','Poner E-mail válido');
    //   }
    //});

    $('.formulario-x input[type="text"].mailo').blur(function () {
        var emailaddress = $(this).val();
        if (!isValidEmailAddress(emailaddress)) {
            $(this).addClass('error');
        }
        else {
            $(this).removeClass('error');
        }
    });


    //$('.select-x li:first-child').click(function() {
    //     var iteration;
    //     iteration = $(this).data('iteration') || 1;
    //     switch (iteration) {
    //       case 1:
    //         $('.select-x').removeClass('inp');         
    //         $('.select-x').children('li:first-child').data('iteration', 1);
    //         $(this).parent().addClass('inp');
    //         break;
    //       case 2:
    //         $(this).parent().removeClass('inp');
    //         break;
    //     }
    //     iteration++;
    //     if (iteration > 2) {
    //       iteration = 1;
    //     }
    //     return $(this).data('iteration', iteration);
    //});

    //$('.select-x li.optioner').click(function() {
    //  var nuevocont;
    //  nuevocont = $(this).text();
    //  $(this).parent().children('li:first-child').data('iteration', 1);
    //  $(this).parent().removeClass('inp');
    //  $(this).parent().children('li:first-child').children('strong').addClass('usado');
    //  $(this).parent().children('li:first-child').children('strong').text(nuevocont);
    //});

    rang = [];

    $('#sender_').click(function (event) {
        event.preventDefault();
        rang = [];
        $('.formulario-x input[type="text"]').each(function () {
            var rick = $(this).attr('value');
            var rick1 = $(this).attr('rel');
            if (rick == "") {
                $(this).addClass('error');
                // $(this).attr('placeholder', 'Escribe '+ rick1);
                rang.push(rick1);
            }
        });

        var sizor = rang.length;

        if (sizor >= 1) {
        } else {
            $('#aform').submit();
        }

    });


    /* forms */




    $('#checin').click(function () {
        var iteration;
        iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                $('.elements').addClass('alc');
                break;
            case 2:
                $('.elements').removeClass('alc');
                break;
        }
        iteration++;
        if (iteration > 2) {
            iteration = 1;
        }
        return $(this).data('iteration', iteration);
    });


    // 
    // Dialogo Contactar Asesor INICIO
    //
    var wWidth = $(window).width(),
        wHeight = $(window).height(),
        dWidth = wWidth * 0.9;

    $('.contactAsesor').click(function (event) {
        event.preventDefault();
        $('#dialog-contactForm').dialog('open');
    });

    if (dWidth > 680) { dWidth = 680 }

    $('#dialog-contactForm').dialog({
        dialogClass: 'contactForm',
        draggable: false,
        autoOpen: false,
        height: 570,
        width: dWidth,
        modal: true,
        show: { effect: "fadeIn", duration: 800 },
        open: function () {
            $(this).find('.sectionForm').load('ajax/contacta-asesor.html', function () {
                // Script para animar los label en los input:text
                animaLabel();
            });
        },
        buttons: {
            'send': {
                'class': 'btnAzul',
                text: 'Enviar Consulta',
                click: function () {
                    function updateTips(t) {
                        var tips = $(".validateTips");
                        tips
                          .text(t)
                          .addClass("ui-state-highlight");
                        setTimeout(function () {
                            tips.removeClass("ui-state-highlight", 1500);
                        }, 500);
                    }
                    function checkLength(o, n, min, max) {
                        if (o.val().length > max || o.val().length < min) {
                            o.addClass('ui-state-error');
                            if (o === dni) {
                                updateTips('La cantidad de digitos del ' + n + ' debe ser ' + min + '.');
                            }
                            if (o === names) {
                                updateTips('El campo ' + n + ' no puede estar vacio.');
                            }
                            if (o === lastnames) {
                                updateTips('El campo ' + n + ' no puede estar vacio.');
                            }
                            if (o === consulta) {
                                updateTips('No olvide escribir su ' + n + '.');
                            }

                            return false;
                        } else {
                            return true;
                        }
                    }
                    function checkRegexp(o, regexp, n) {
                        if (!(regexp.test(o.val()))) {
                            o.addClass('ui-state-error');
                            updateTips(n);
                            return false;
                        } else {
                            return true;
                        }
                    }
                    var bValid = true,
                        dni = $('#input_dni'),
                        names = $('#input_names'),
                        lastnames = $('#input_lastnames'),
                        email = $('#input_email'),
                        consulta = $('#input_textConsulta'),
                        tips = $(".validateTips"),
                        allFields = $([]).add(dni).add(names).add(lastnames).add(email).add(consulta);
                    allFields.removeClass('ui-state-error');

                    bValid = bValid && checkLength(dni, 'DNI', 8, 8);
                    bValid = bValid && checkLength(names, 'Nombres', 1, 80);
                    bValid = bValid && checkLength(lastnames, 'Apellidos', 1, 80);
                    bValid = bValid && checkLength(consulta, 'consulta', 1, 1000);
                    // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
                    bValid = bValid && checkRegexp(email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "ej. micorreo@dominio.com");

                    if (bValid) {
                        // $( this ).dialog( "close" );
                        $('.contactForm').addClass('exitoContactaAsesor');
                        $('.ui-dialog-buttonpane .ui-dialog-buttonset').addClass('hidden');
                        $('.sectionForm').load('ajax/contacta-asesor-exito.html', function () {
                            $('.nuevaConsulta').click(function () {
                                $('.contactForm').removeClass('exitoContactaAsesor');
                                $('.ui-dialog-buttonpane .ui-dialog-buttonset').removeClass('hidden');
                                $('.sectionForm').load('ajax/contacta-asesor.html');
                            });
                        });
                    }
                }
            }
        },
        close: function () {
            var dni = $('#input_dni'),
                names = $('#input_names'),
                lastnames = $('#input_lastnames'),
                email = $('#input_email'),
                consulta = $('#input_textConsulta'),
                tips = $(".validateTips"),
                allFields = $([]).add(dni).add(names).add(lastnames).add(email).add(consulta);
            $('.sectionForm').empty();
            allFields.val("").removeClass("ui-state-error");
        }
    });

    /*
      Dialog Terminos
    */
    $('.btn-terminos').click(function (event) {
        event.preventDefault();
        $('#dialog-terminos').dialog('open');
    });

    $('#dialog-terminos').dialog({
        dialogClass: 'dialog-sec-terminos',
        draggable: false,
        autoOpen: false,
        height: 820,
        width: dWidth,
        modal: true,
        show: { effect: "fadeIn", duration: 800 },
        open: function () {
            $(this).find('.sec-terminos').load('Portals/_default/Skins/BANBIF_Skin/ajax/terminos-condiciones.html', function () {
            });
        }
    });

    $('#dialog-terminos').on('click', '.open_q', function () {
        if ($(this).hasClass('active')) {
            $('.sub-tema').removeClass('active');
            $('.fa-plus').removeClass('fa-minus');
            $('.sub-tema .open_a').stop(false).slideUp();
        } else {
            $('.sub-tema').removeClass('active');
            $('.fa-plus').removeClass('fa-minus');
            $('.sub-tema .open_a').stop(false).slideUp();
            $(this).addClass('active');
            $(this).find('.fa-plus').addClass('fa-minus');
            $(this).find('.open_a').stop(false).slideDown();

            // var vIndice = $(this).parent().index() + 1;
            // var vHeight = ($(this).height());
            // var vScroll = 600 + (vHeight*vIndice)
            // $('#dialog-terminos').animate({scrollTop: vScroll}, 1000);

        }
    });

    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    var is_iPhone = navigator.platform == "iPhone";
    var is_iPod = navigator.platform == "iPod";
    var is_iPad = navigator.platform == "iPad";

    if (isMac) {
        $('.btnAzul,.btnAzulOscuro,.btnBlanco,.btnBlanco2,.btnAzulOscuro.ex, .btnBlanco.spec, .btnAzul.ex, .etiqueta, .btnBlanco3').addClass('mac');
    } else if (is_iPhone) {
        $('.btnAzul,.btnAzulOscuro,.btnBlanco,.btnBlanco2,.btnAzulOscuro.ex, .btnBlanco.spec, .btnAzul.ex, .etiqueta, .btnBlanco3').addClass('macIos');
    } else if (is_iPod) {
        $('.btnAzul,.btnAzulOscuro,.btnBlanco,.btnBlanco2,.btnAzulOscuro.ex, .btnBlanco.spec, .btnAzul.ex, .etiqueta, .btnBlanco3').addClass('macIos');
    } else if (is_iPad) {
        $('.btnAzul,.btnAzulOscuro,.btnBlanco,.btnBlanco2,.btnAzulOscuro.ex, .btnBlanco.spec, .btnAzul.ex, .etiqueta, .btnBlanco3').addClass('mac');
    } else {

    }

    $('.mostrarindex').click(function (event) {
        event.preventDefault();
        //$('#fond-fijo').toggleClass('hidden');
        $('body').removeClass('active');
        $('body').addClass('deactive');
        //$('body').scrollTop(0);
    });

    $('.open-fond-fijo').click(function (event) {
        event.preventDefault();
        //$('#fond-fijo').toggleClass('hidden');
        $('body').removeClass('deactive');
        $('body').addClass('active');
    });

    if ($('#fond-fijo').css('top') == '0px' && ($("#totalPreHomeCount").val() * 1 >= $("#sessionPreHomeCount").val() * 1)) {
        $('body').addClass('active');
    }

    $('.radious p span.fa').on('click', function () {
        var relan = $(this).parent().attr('rel');
        $('#radiop').attr('value', relan);
        $('.radious p span.fa').removeClass('fa-dot-circle-o');
        $('.radious p span.fa').addClass('fa-circle-o');
        $(this).removeClass('fa-circle-o');
        $(this).addClass('fa-dot-circle-o');
    });


    /* counter */

    // $('.sec-descripcion p').succinct({
    //   size: 65
    // });


    $('#req_ a').click(function (event) {
        event.preventDefault();
        $('#req_ a').removeClass('active');
        var unidad = $(this).attr('rel');
        $(this).addClass('active');
        $('.clasifs').removeClass('bloq');
        $('#' + unidad + '').addClass('bloq')
    });

    /* counter */



    $('a.usable').on('click', function (event) {
        event.preventDefault();
        // $('#prin-nav').addClass('oscuro');
        // $('a.usable').removeClass('active');
        // $(this).addClass('active');
        // var elongate = $(this).attr('rel');
        // $('.escondida').removeClass('mostrar');
        // $('#'+elongate+'').addClass('mostrar');
        if ($(this).hasClass('active')) {
            $('#prin-nav').removeClass('oscuro');
            $('a.usable').removeClass('active');
            $('.escondida').removeClass('mostrar');
        } else {
            $('#prin-nav').addClass('oscuro');
            $('a.usable').removeClass('active');
            $(this).addClass('active');
            var elongate = $(this).attr('rel');
            $('.escondida').removeClass('mostrar');
            $('#' + elongate + '').addClass('mostrar');
        }
    });

    $('a.usable').on('mouseenter', function () {
        $('a.usable').removeClass('active');
        $('.escondida').removeClass('mostrar');
    });

    $('.escondida').mouseleave(function () {
        $('a.usable').removeClass('active');
        $('.escondida').removeClass('mostrar');
    });
    $('a.usable-p').on('mouseenter', function () {
        $('a.usable').removeClass('active');
        $('.escondida').removeClass('mostrar');
    });

    $('#open_').click(function () {
        $('.mn-smartphone').addClass('activo');
        $('body').removeClass('mn-deactive');
        $('body').addClass('mn-active');
    });

    $('#close_').click(function () {
        $('.mn-smartphone').removeClass('activo');
        $('body').removeClass('mn-active');
        $('body').addClass('mn-deactive');
    });

    $(".slider_dos").slider({
        range: "min",
        min: 1500,
        max: 60000,
        value: 29250,
        step: 50,
        slide: function (event, ui) {
            $("#amount").text("S/." + ui.value);
        }
    });




    //$( ".slider_uno" ).slider({
    //  range:'min',
    //  min: 1500,
    //  max: 60000,
    //  value: 29250,
    //  step: 50,
    //  slide: function( event, ui ) {
    //    $( "#amount" ).text( "S/." + ui.value );
    //    var width_slrg = $('div.ui-slider-range.ui-widget-header.ui-corner-all')[0].style.width,
    //        valueX;
    //    if (768 < wWidth) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 17;}
    //    if (660 < wWidth && wWidth < 769) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 25;}
    //    if (480 < wWidth && wWidth < 661) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) + 19;}
    //    if (414 < wWidth && wWidth < 481) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 1;}
    //    if (375 < wWidth && wWidth < 415) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 8;}
    //    if (320 < wWidth && wWidth < 376) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 12;}
    //    if (wWidth < 321) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 17;}
    //    $('#amount').css('left', valueX);
    //  }
    //});

    //if ( $('div.ui-slider-range.ui-widget-header.ui-corner-all').length ) {

    //  var width_slrg = $('div.ui-slider-range.ui-widget-header.ui-corner-all')[0].style.width, 
    //      valueX;
    //  if (768 < wWidth) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 17;}
    //  if (660 < wWidth && wWidth < 769) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 25;}
    //  if (480 < wWidth && wWidth < 661) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) + 19;}
    //  if (414 < wWidth && wWidth < 481) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 1;}
    //  if (375 < wWidth && wWidth < 415) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 8;}
    //  if (320 < wWidth && wWidth < 376) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 12;}
    //  if (wWidth < 321) {valueX = ($('.slider_uno').width() * (Number( width_slrg.substring(0, width_slrg.length-1) ) / 100)) - 17;}
    //  $('#amount').css('left', valueX);

    //}

    $('#triger1').click(function () {
        var iteration;
        iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                $(this).parent().parent().addClass('active');
                break;
            case 2:
                $(this).parent().parent().removeClass('active');
                break;
        }
        iteration++;
        if (iteration > 2) {
            iteration = 1;
        }
        return $(this).data('iteration', iteration);
    });


  //$('.swithcher').click(function() {
  //   var iteration;
  //   iteration = $(this).data('iteration') || 1;
  //   switch (iteration) {
  //     case 1:
  //       $(this).children('p').addClass('dolar');
  //       $('.swithcher').addClass('dolar');
  //       $(this).children('p').text('$.');
  //       $('.numerandoi').text('$.');
  //       break;
  //     case 2:
  //       $(this).children('p').removeClass('dolar');
  //       $('.swithcher').removeClass('dolar');
  //       $(this).children('p').text('S/.');
  //       $('.numerandoi').text('S/.');
  //       break;
  //   }
  //   iteration++;
  //   if (iteration > 2) {
  //     iteration = 1;
  //   }
  //   return $(this).data('iteration', iteration);
  // });

    //$('.chek').on('click', function () {
    //    $(this).children('.fa').toggleClass('fa-square fa-check');
    //});

    /* select 2 */

    $('#tigro').click(function () {
        var iteration;
        iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                $(this).parent().parent().addClass('activado');
                break;
            case 2:
                $(this).parent().parent().removeClass('activado');
                break;
        }
        iteration++;
        if (iteration > 2) {
            iteration = 1;
        }
        return $(this).data('iteration', iteration);
    });

    /* fin select 2 */

    /* scroll index */


    if ($("#registro").length) {



        $('#desliza').click(function () {
            var characar = $('#registro').offset().top - 107;
            $('html, body').stop().animate({
                scrollTop: characar
            }, 300, "linear");
        });
    }

    /* modals */

    $("#dialog_1").dialog({
        autoOpen: false,
        height: 550,
        width: 680,
        modal: true,
        open: function (event, ui) {
            //hide titlebar.
            $(this).parent().children('.ui-dialog-titlebar').hide();
        },
        show: {
            effect: "fadeIn",
            duration: 200
        },
        hide: {
            effect: "fadeOut",
            duration: 100
        }
    });

    $("#opener").click(function () {
        $("#dialog_1").dialog("open");
    });

    $('.closer').click(function () {
        $("#dialog_1").dialog("close");
    });


    $("#dialog_2").dialog({
        autoOpen: false,
        height: 280,
        width: 680,
        modal: true,
        open: function (event, ui) {
            //hide titlebar.
            $(this).parent().children('.ui-dialog-titlebar').hide();
        },
        show: {
            effect: "fadeIn",
            duration: 200
        },
        hide: {
            effect: "fadeOut",
            duration: 100
        }
    });

    //$("#opener2").click(function (event) {
    //    //EjecutarEnvio();  //adicionado Enviar correo
    //    event.preventDefault();
    //    $("#dialog_2").dialog("open");
    //});


    //function EjecutarEnvio() {

    //    $('#frmEnviarCorreo').attr("action", '/Resultado/EnviarCorreo')
    //                       .append($('<input type="hidden">').attr('name', 'data'))
    //                       .appendTo('body').submit().html('');
    //}



    //$('.closer2').click(function () {
    //    $("#dialog_2").dialog("close");
    //    $("#dialog_2 .formulario-xx").removeClass('hidden');
    //    $("#dialog_2 p").css('display', 'block');
    //    $("#dialog_2 .sendeded").removeClass('opened');
    //});


    $("#dialog_3").dialog({
        autoOpen: false,
        height: 400,
        width: 680,
        modal: true,
        open: function (event, ui) {
            //hide titlebar.
            $(this).parent().children('.ui-dialog-titlebar').hide();
        },
        show: {
            effect: "fadeIn",
            duration: 200
        },
        hide: {
            effect: "fadeOut",
            duration: 100
        }
    });

    $("#modulo-3").click(function () {
        $("#dialog_3").dialog("open");
    });

    $('.closer3').click(function () {
        $("#dialog_3").dialog("close");
    });


    $("#dialog_4").dialog({
        autoOpen: false,
        height: 320,
        width: 680,
        modal: true,
        open: function (event, ui) {
            //hide titlebar.
            $(this).parent().children('.ui-dialog-titlebar').hide();
        },
        show: {
            effect: "fadeIn",
            duration: 200
        },
        hide: {
            effect: "fadeOut",
            duration: 100
        }
    });

    //$("#modulo-4").click(function (e) {
    //    e.preventDefault();
    //    $("#dialog_4").dialog("open");
    //});

    $('.closer').click(function () {
        $("#dialog_4").dialog("close");
    });

    $("#dialog-tarifa-preferencial").dialog({
        autoOpen: false,
        height: 320,
        width: 680,
        modal: true,
        open: function (event, ui) {
            //hide titlebar.
            $(this).parent().children('.ui-dialog-titlebar').hide();
        },
        show: {
            effect: "fadeIn",
            duration: 200
        },
        hide: {
            effect: "fadeOut",
            duration: 100
        }
    });

    $("#btn-tarifa-preferencial").click(function () {
        $("#dialog-tarifa-preferencial").dialog("open");
    });
    $('.close-tarifa-preferencial').click(function () {
        $("#dialog-tarifa-preferencial").dialog("close");
    });



    /* modals */


    //$('#sendo_').click(function(event){
    //    event.preventDefault();
    //    $("#dialog_2 .formulario-xx").addClass('hidden');
    //    $("#dialog_2 p").css('display','none');
    //    $("#dialog_2 .sendeded").addClass('opened');
    //});


    /* scroll index */

    $('.sma-menu-final li a').click(function (event) {
        var ancho = $(window).width();
        if (ancho <= 660) {
            event.preventDefault();
            var nuevocont;
            nuevocont = $(this).text();
            $('#triger1').data('iteration', 1);
            $('.remp').text(nuevocont);
            $('.sma-menu-final').removeClass('active');
        } else {

        }
    });

    /* scroll spy */

    if ($(".index").length) {

        $(window).scroll(function () {
            // Get container scroll position
            var fromTop = $(this).scrollTop();
            var chara2 = 0;
            if ($('#caracteristicas').length) {
                chara2 = $('#caracteristicas').offset().top;
            }
            var charada = 0;
            var charado = 0;
            if ($('#registro').length) {
                charada = $('#registro').offset().top - 190;
                charado = $('#registro').offset().top - 400;
            }
            var chara = 0;
            if ($('#caracteristicas').length) {
                chara = $('#caracteristicas').offset().top - 117;
            }
            var ancho2 = $(window).width();
            if (ancho2 >= 660) {
                // console.log(fromTop);
                if (fromTop >= 10) {
                    $('.index').addClass('oscuro');
                    $('#header').addClass('osc');
                } else {
                    $('.index').removeClass('oscuro');
                    $('#header').removeClass('osc');
                }
                // if(fromTop >= chara){
                //        $('.index').addClass('oscuro');
                //        $('#header').addClass('osc');
                // }else{
                //     $('.index').removeClass('oscuro');
                //     $('#header').removeClass('osc');
                // }

                if (fromTop >= charada) {
                    $('#registro').addClass('avisar');
                }
                if (fromTop >= charado) {
                    $('.expose img').addClass('upa');
                }

                if (fromTop <= chara) {
                    $('#slider').css({ 'opacity': (1 - fromTop / chara) });
                }
            }
        });
    }

    $('.icoMinus').click(function () {
        $(this).toggleClass('open');
        $('.list-prom').toggleClass('open');
        $('.formPromociones').toggleClass('open');
    });


    // Agrupador
    var compara_count = 0,
        compara_countmax = 3,
        is_smartphone = 0;


    if (window_width < 671) {
        compara_countmax = 2;
        is_smartphone = 1;
    }

    $('.comparar_agrup a.option').click(function () {

        if (!compara_count) {
            $('.section_comparador').addClass('active')
        }

        var dat_comp1 = $(this).data('producto');

        if (!$(this).hasClass('active')) {
            //No está activo
            // console.log('Inactivo dat_comp1: ' + dat_comp1);

            compara_count++;
            // console.log('Inactivo compara_count: ' + compara_count);

            if (compara_count <= compara_countmax) {


                $(this).toggleClass('active');
                $('.section_comparador .comparador .elemento').each(function () {
                    var dat_comp2 = $(this).data('producto');
                    // console.log('Inactivo dat_comp2: ' + dat_comp2);

                    if (dat_comp2 === dat_comp1) {
                        $(this).addClass('active');
                        // console.log('--- fin inactivo ---');
                        return false;
                    }

                });

            }

        } else {
            // Está activo
            // console.log('Activo dat_comp1: ' + dat_comp1);

            if (compara_count > compara_countmax) { compara_count = compara_countmax; }
            compara_count--;

            if (compara_count == 0) { $('.section_comparador').removeClass('active'); }
            // console.log('Activo compara_count: ' + compara_count);

            $(this).toggleClass('active');
            $('.section_comparador .comparador .elemento').each(function () {
                var dat_comp2 = $(this).data('producto');
                // console.log('Activo dat_comp2: ' + dat_comp2);
                if (dat_comp2 === dat_comp1) {
                    $(this).removeClass('active');
                    // console.log('--- fin activo ---');
                    return false;
                }
            });
        }

    });

    $('.section_comparador .comparador .elemento .x').click(function () {
        var dat_comp1 = $(this).closest('.elemento').data('producto');
        // console.log('Activo dat_comp1: ' + dat_comp1);

        if (compara_count > compara_countmax) { compara_count = compara_countmax; }
        compara_count--;
        if (compara_count == 0) { $('.section_comparador').removeClass('active'); }
        // console.log('Activo compara_count: ' + compara_count);
        $(this).closest('.elemento').toggleClass('active');

        if (is_smartphone) {
            $('.agrupador-sma .comparar_agrup a.option').each(function () {
                var dat_comp2 = $(this).data('producto');
                if (dat_comp2 === dat_comp1) {
                    $(this).removeClass('active');
                    // console.log('--- fin activo ---');
                    return false;
                }
            })
        } else {
            $('.agrupador-des .comparar_agrup a.option').each(function () {
                var dat_comp2 = $(this).data('producto');
                if (dat_comp2 === dat_comp1) {
                    $(this).removeClass('active');
                    // console.log('--- fin activo ---');
                    return false;
                }
            })
        }


    });


    // Agrupador Producto
    resizeCompProducto();

    //FlexSlider

    $('.slider-princ').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        animationLoop: false,
    });


    if ($('.tag-txt').length) {
        $('.tag-txt').click(function () {
            if ($(this).hasClass('active'))
                $(this).removeClass('active');
            else
                $(this).addClass('active');
        });

        $(".tag-x").click(function () {
            if ($(this).parent().find('.tag-txt').hasClass('active'))
                $(this).parent().find('.tag-txt').trigger('click');
        });


    }

    /*############
    # Toggle FAQ #
    ############*/
    $('.open_q').click(function () {
        if ($(this).hasClass('active')) {
            $('.sub-tema').removeClass('active');
            $('.fa-plus').removeClass('fa-minus');
            $('.sub-tema .open_a').stop(false).slideUp();
        } else {
            $('.sub-tema').removeClass('active');
            $('.fa-plus').removeClass('fa-minus');
            $('.sub-tema .open_a').stop(false).slideUp();
            $(this).addClass('active');
            $(this).find('.fa-plus').addClass('fa-minus');
            $(this).find('.open_a').stop(false).slideDown();
        }
    });

    // Script para animar los label en los input:text
    animaLabel();

    /*##############
    # AgrPro
    ##############*/
    $('.table-dynamic .active-product').click(function (event) {
        /* Act on the event */
        $(this).closest('.table-dynamic').removeClass('op-1 op-2');
        var vOp = $(this).attr('data-op');
        $(this).closest('.table-dynamic').addClass(vOp);
        var $obj = $(this).find('.fa');
        if (!($obj.hasClass('.fa-dot-circle-o'))) {
            $('.table-dynamic .title-agrup .fa').removeClass('fa-dot-circle-o');
            $('.table-dynamic .title-agrup .fa').addClass('fa-circle-o');
            $obj.removeClass('fa-circle-o');
            $obj.addClass('fa-dot-circle-o');
        }
    });
    //TC CHANGE DUE TO SKIN//
    /*$.getJSON( "/Portals/_default/Skins/BANBIF_Skin/js/agrupador-producto.json", function( data ) {
      $( ".table-dynamic .section" ).each(function( index ) {
          if (index > 1 && index < 7){
            var vIndex = index-2;
            var vAhorroT = data['Beneficios'][vIndex].AhorroT;
            var vDepositoP = data['Beneficios'][vIndex].DepositoP;
            var vAhorroH = data['Beneficios'][vIndex].AhorroH;
            if (vAhorroT>0){
              $( this ).find('.col-2').append('<img src="img/visto-verde.png" class="center-xy">');
            }
            if (vDepositoP>0){
              $( this ).find('.col-3').append('<img src="img/visto-verde.png" class="center-xy">');
            }
            if (vAhorroH>0){
              $( this ).find('.col-4').append('<img src="img/visto-verde.png" class="center-xy">');
            }
          }
      });
    });
  */

    $('.page-solicita-producto .bnt-listo').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        window.location.href = 'resultado-caja.php';
    });
    /* Act on the event *//*
  $('.page-home .btn-listo').click(function(event) {    
    event.preventDefault();
    window.location.href = $("#surpriseBoxLink").val();
  });*/


    //$('.sh-btn-send').click(function(event) {
    //  /* Act on the event */
    //  event.preventDefault();
    //  window.location.href = 'credito-hipotecario1.php';
    //});

    $('#sender_0').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        window.location.href = 'credito-hipotecario1.php';
    });

    $('#sender_1').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        window.location.href = 'credito-hipotecario2.php';
    });

    $('#sender_2').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        window.location.href = 'credito-hipotecario3.php';
    });

    $('#sender_3').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        window.location.href = 'credito-hipotecario4.php';
    });

    $('#sender_v0').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        window.location.href = 'credito-vehicular1.php';
    });

    $('#sender_v1').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        window.location.href = 'credito-vehicular2.php';
    });

    $('#sender_v2').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        window.location.href = 'credito-vehicular3.php';
    });

    $('#sender_v3').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        window.location.href = 'credito-vehicular4.php';
    });

    $('.btn-comparar').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        window.location.href = 'agrupador-producto.php';
    });

    //$('#btn-download').click(function(event) {
    //  /* Act on the event */
    //  event.preventDefault();
    //  window.open('simulador-hipotecario-print.html', '_blank');
    //  return false;
    //  // window.location.href = 'simulador-hipotecario-print.html';
    //});

    //GTM BROH!

    //SimpleCheck (<input class="gtmDimension3" type="hidden" value="valor">)

    function checkGTMResultado(dni) {
        var dataLayer = dataLayer || [];
        prisma.client.activeCampaigns(dni, "BanBif", "GrupoBanBif",
          function (campaigns) {
              //Check if producto is in camapingns
              for (var i = 0 ; i < campaigns.length; i++) {
                  var producto = campaigns[i].offer.idProducto;
                  if (producto != undefined) {
                      dataLayer.push({
                          'event': 'virtualPage',
                          'pageUrl': '/caja-de-sorpresas/p2-éxito/',
                          'nameUrl': '/caja-de-sorpresas/' + producto.replace(/ /g, '-') + '/p2-exito/',
                          'metric3': '1'
                      });
                  }
              }
          }
        );
    }

    function checkGTMObject(evento, promoObj) {
        //var dataLayer = dataLayer || [];
        dataLayer.push({
            'event': evento,
            'ecommerce': { 'promoClick': { 'promotions': [{ 'id': promoObj.id, 'name': promoObj.name, 'creative': promoObj.creative, 'position': promoObj.position }] } }
        });
    }

    function checkGTMParameter(evento, id, name, creative, position) {
        //var dataLayer = dataLayer || [];
        dataLayer.push({
            'event': evento,
            'ecommerce': { 'promoClick': { 'promotions': [{ 'id': id, 'name': name, 'creative': creative, 'position': position }] } }
        });
    }

    function checkGTMDimension3() {
        if ($("body").find('.gtmDimension3')) {
            $(".gtmDimension3").each(function (index) {
                if (dataLayer !== undefined) {
                    var val = $(this).val().split("|");
                    if (val.length != 1)
                        dataLayer.push({ 'Product Category': val[0], 'dimension3': val[1] });
                    else
                        dataLayer.push({ 'Product Category': val[0], 'dimension3': val[0] });
                }                
            });
        }
    }


    function checkGTMDimension4() {
        if ($("body").find('.gtmDimension4')) {
            $(".gtmDimension4").each(function (index) {
                if (dataLayer !== undefined) {
                    var val = $(this).val().split("|");
                    if (val.length != 1)
                        dataLayer.push({ 'Product Category': val[0], 'dimension4': val[1] });
                    else
                        dataLayer.push({ 'Product Category': val[0], 'dimension4': val[0] });
                }
            });
        }
    }

    checkGTMDimension3();
    checkGTMDimension4();

    $("#dnn_Banner_Content_A1 a, #dnn_Banner_Content_A2 a").click(function () {
        var title_temp = $(this).parent().find('h3');
        //var dataLayer = dataLayer || [];
        dataLayer.push({ 'event': 'viewpost', 'postName': title_temp.text() });
    })

    $("#dnn_OutSideBottomHome a").click(function () {
        var content_temp = $(this);
        //var dataLayer = dataLayer || [];
        dataLayer.push({ 'event': 'viewhelp', 'helpName': content_temp.text() });
    });
    
});

$(window).resize(function () {

    /*#####################
    # Agrupador Producto
    #####################*/
    resizeCompProducto();
    var w_width = $(window).width();
    if (w_width >= 670) {
        $('.table-dynamic').removeClass('op-1 op-2');
        $('.table-dynamic .title-agrup .fa').removeClass('fa-dot-circle-o');
        $('.table-dynamic .active-product:first-child').find('.fa').addClass('fa-dot-circle-o');
        $('.table-dynamic .active-product:first-child + div').find('.fa').addClass('fa-circle-o');
    }

    // Script para igualar tamaños de secciones '.sec-descripcion'
    // resizeSecDescripcion();
    //resizeSecDescripcion($('.sec-descripcion'));
    //resizeSecDescripcion($('.res-sd .sec-descripcion'));


});

function resizeCompProducto() {
    if ($('.title-agrup2').length) {
        $('.title-agrup2').each(function () {
            var tempH = $(this).height();
            if (!$(this).hasClass('buttons')) {
                $(this).nextAll('.title-agrup').height(tempH);
            }
        });
    }
}

// function resizeSecDescripcion(){
//   if ( $('.sec-descripcion').length ) {
//     var tempH = 0;
//     $('.sec-descripcion').each(function(){
//       if ( tempH < $(this).height() ) {
//         tempH = $(this).height();
//       }
//     });
//     $('.sec-descripcion').each(function(){
//       $(this).height(tempH);
//     })
//   }
// }

function resizeSecDescripcion($obj) {
    if ($('.page-resultado-caja').length) { return false; }
    if ($('.page-adquirir-hogar').length) { return false; }
    if ($obj.length) {
        var tempH = 0;
        $obj.each(function () {
            $(this).height('auto');
        })
        $obj.each(function () {
            if (tempH < $(this).height()) {
                tempH = $(this).height();
            }
        });
        $obj.each(function () {
            $(this).height(tempH);
        })
    }
}

// Script para animar los label en los input:text
function animaLabel() {
    if ($('input:text').length || $('input:password').length || $('textarea').length) {

        $('input:text, input:password, textarea').click(function () {
            // console.log('Hay al menos un input de texto aquí');
            var tempLabel = $(this).next('label');
            if (!tempLabel.hasClass('active')) {
                tempLabel.toggleClass('active');
            }
        });
        $('input:text, input:password, textarea').focus(function () {
            $(this).click();
        });
        $('input:text, input:password, textarea').focusout(function () {
            // console.log('Este input ha perdido el foco');
            var tempLabel = $(this).next('label');
            if (!$(this).val()) {
                if (tempLabel.hasClass('active')) {
                    tempLabel.toggleClass('active');
                }
            }

        });
    }
}

// Numeric only control handler
jQuery.fn.ForceNumericOnly =
function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 ||
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};

jQuery('.onlyNumbers').keyup(function () {
    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    }
});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

if ($("#allow2Edit").val() == "true") {
    if ($("#ControlBar_EditPage").text().trim() != 'Edit This Page') dnnEditContent();
}

function dnnEditContent() {
    if ($("#dnn_Banner_Content_A1").length) {
        if ($("#dnn_Banner_Content_A1").hasClass('dnnModuleManager')) {
            $("#dnn_Banner_Content_A1 .DNNModuleContent").css('height', '500px');
            $("#dnn_Banner_Content_A2 .DNNModuleContent").css('height', '500px');
        } else {
            setTimeout(function () { dnnEditContent() }, 5000);
        }
    }
    if ($("#dnn_OutSideBottomHome").length) {
        if ($("#dnn_OutSideBottomHome").hasClass('dnnModuleManager')) {
            $("#dnn_OutSideBottomHome .DNNModuleContent").css('height', '500px');
        } else {
            setTimeout(function () { dnnEditContent() }, 5000);
        }
    }
    if ($("#dnn_Product_B1").length) {
        if ($("#dnn_Product_B1").hasClass('dnnModuleManager')) {
            $("#dnn_Product_B1 .DNNModuleContent").css('height', '500px');
            $("#dnn_Product_B2 .DNNModuleContent").css('height', '500px');
            $("#dnn_Product_B3 .DNNModuleContent").css('height', '500px');
            $("#dnn_Product_B4 .DNNModuleContent").css('height', '500px');
            $("#dnn_Product_B5 .DNNModuleContent").css('height', '500px');
            $("#dnn_Product_B6 .DNNModuleContent").css('height', '500px');
            $("#dnn_Product_B7 .DNNModuleContent").css('height', '500px');
            $("#dnn_Product_B8 .DNNModuleContent").css('height', '500px');
        } else {
            setTimeout(function () { dnnEditContent() }, 5000);
        }
    }
}

function callChat() {
    $("#mydnnLiveChatWidget").scope().livechat.WidgetMinimized = false;
    $("#Form").trigger("click");
};

function callChat(message) {
    $("#mydnnLiveChatWidget").scope().livechat.WidgetMinimized = false;
    $("#CustomChatMessage").append(message);
    $("#Form").trigger("click");
};