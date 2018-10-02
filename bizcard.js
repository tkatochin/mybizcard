$(window).on("load", function(){
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
        $(".area-facebook").attr("href", "fb://profile/100001313416898");
    }
    $("a").attr("target", "_blank")
    /*.on("click", function(evt){
        evt.stopPropagation();
    })
    */
    $(".flip-container").on("click", function(ev){
        if ($(ev.target).hasClass("front")
            || $(ev.target).hasClass("back")) {
            this.classList.toggle('toggle');
        }
    });
});