$(document).ready(function(){
	if(localStorage.getItem("token") != null) window.location.replace("/user");
	$("#login").on('click', function(e) {
		e.preventDefault();
		let correo = $("#correo").val();
		let password = $("#password").val();
		let json = JSON.stringify({correo, password});
		$.ajax({
			method: "POST",
			url: "/login",
			data: json,
			contentType: "application/json",
			datatype: "JSON",
			success: function(data, status, jqXHR){
				console.log(data);
				if(data){
					window.location.replace("/dashboard");
				}else{
					M.toast({html: 'No se encuentra el usuario con esa cuenta y contraseña.'});
				}
			},
			error: function(jqXHR , status, e){
				M.toast({html: 'Error al buscar status: '+jqXHR.status});
				console.log(jqXHR);
			}
		});
	});
	
});