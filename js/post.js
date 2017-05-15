function toggleOverlay() {
        $(".video_overlay").toggleClass("hidden");
        $(".post_video").toggleClass("hidden");
        $(".video_button").toggleClass("hidden");
}

function hideAndStop(){
    toggleOverlay();
    var video = $(".post_video").get(0);
    video.load();
}

$(document).ready(function(){

    $(".hero_button").on("click", function(){
        toggleOverlay();
    });
   
   $(".video_button").on("click", function(){
        hideAndStop();
   });
      $(".video_overlay").on("click", function(){
        hideAndStop();
   });

});