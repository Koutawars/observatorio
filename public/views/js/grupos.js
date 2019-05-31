$(document).ready(function(){
    $('tr').on('click', function(){
        window.location.href = window.location.href + "/" + this.getAttribute("name");
    });
});