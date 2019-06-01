var selects = [];
$(document).ready(function(){
    $('.tabs').tabs();
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.datepicker').datepicker();

    $('#reportes').on('click', 'tr', function(){
        let id = this.getAttribute("name");
        if(selects[id]){
            selects[id] = false;
            this.setAttribute("class", "white");
        }else{
            selects[id] = true;
            this.setAttribute("class", "indigo lighten-4");
        }
    });

    $('#reporte').on('click', function(){
        $.ajax({
            method: "GET",
            url: window.location.pathname + "/sinReporte",
            success: function(data){
                data = JSON.parse(data);
                let text = "";
                data.forEach(e => {
                    selects[e.idobservacion] = false;
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

    $('#enviarReporte').on('click', function(){
        let observaciones = [];
        selects.forEach((e, index) => {
            if(e){
                observaciones.push(index);
            }
        });
        let tipoReporte = $('input:radio[name=tipoReporte]:checked').val();
        let json = JSON.stringify({observaciones, tipoReporte});
        if(selects.length > 0){
            console.log(json);
            $.ajax({
                method: "POST",
                url: window.location.pathname + "/addReporte",
                data: json,
                contentType: "application/json",
                datatype: "JSON",
                success: function(data){
                    data = JSON.parse(data);
                    let text = '';
                    console.log(data);
                    text += `
                    <tr name="${data.idreporte}">
                        <td>${data.fecha}</td>
                        <td>${data.nombreTipo}</td>
                    </tr>
                    `;
                    $('#report').append(text);  
                    M.toast({html: 'se agrego reporte con éxito'});
                },
                error: function(jqXHR , status, e){
                    M.toast({html: 'Error a Agregada observación status: '+jqXHR.status});
                    console.log(jqXHR);
                }
            });
        }

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