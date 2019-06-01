$(document).ready(function(){
    $('tr.click').on('click', function(){
        window.location.href = window.location.href + "/" + this.getAttribute("name");
    });
});