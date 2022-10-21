$(document).ready(function(){
    var full_path = location.href.split("#")[0];
    $(".contenidoSeccion a").each(function(){
        var $this = $(this);
        if($this.prop("href").split("#")[0] == full_path) {
            $this.addClass("active");
            console.log($this.prop("href").split("#")[0]);
        }
    });
});