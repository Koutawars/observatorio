$(document).ready(function(){
    $('.tabs').tabs();
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.datepicker').datepicker();
    $('#reporte').on('click', function(){
        $.ajax({
            method: "GET",
            url: window.location.pathname + "/sinReporte",
            success: function(data){
                data = JSON.parse(data);
                let text = "";
                data.forEach(e => {
                    text += `
                    <tr name="${e.idobservacion}">
                        <td>${e.fecha}</td>
                        <td>${e.descripcion}</td>
                        <td>${e.nombreObs}</td>
                    </tr>
                    `;
                });
                $('#reportes').html(text);
            },
            error: function(e){
                console.log(e);
            }
        });
    });
    $('#enviar').on('click', function(){
        let contenido = $('#observacion').val();
        let tipo = $('input:radio[name=tipo]:checked').val();
        let visiblidad = $('input:radio[name=visiblidad]:checked').val();
        let fecha = $('#fecha').val();
        
        $('#observacion').val("");
        let observacion = {contenido, tipo, visiblidad, fecha};
        let json = JSON.stringify(observacion);
        if(contenido && fecha){
            if(contenido != "" && fecha != ""){
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
            }
        }
    });
});