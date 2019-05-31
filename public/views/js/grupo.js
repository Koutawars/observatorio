$(document).ready(function(){
    $('tr').on('click', function(){
        window.location.href = "../estudiante/" + this.getAttribute("name");
    });
});