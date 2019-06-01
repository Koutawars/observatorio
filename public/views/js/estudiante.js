$(document).ready(function(){
    $('.tabs').tabs();
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('#enviar').on('click', function(){
        let contenido = $('#observacion').val();
        let tipo = $('input:radio[name=tipo]:checked').val();
        let idEstudiante = window.location.pathname.split('/')[3];
        let visiblidad = $('input:radio[name=visiblidad]:checked').val();

        $('#observacion').val("");
        let observacion = {contenido, tipo, idEstudiante, visiblidad};
        let json = JSON.stringify(observacion);

        console.log(visiblidad);
        /*
        $.ajax({
            method: "POST",
            url: window.location.pathname + "/add",
            data: json,
            contentType: "application/json",
            datatype: "JSON",
            success: function(data){
                M.toast({html: 'Agregada observación con éxito'});
            },
            error: function(jqXHR , status, e){
                M.toast({html: 'Error a Agregada observación status: '+jqXHR.status});
                console.log(jqXHR);
            }
        });
        */
    });
});