$(window).on("load", function(){
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
        $(".area-facebook").attr("href", "fb://profile/100001313416898");
    }
    $("a").attr("target", "_blank").on("click", function(evt){
        evt.stopPropagation();
    })
});