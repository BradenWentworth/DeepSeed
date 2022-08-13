DeepSeed.RegisterRenderer(function(){
    
    console.log("DND RENDERER!!!");

    // find all templates
    $(".template").each(function(index, element){
        // check if its a "name" renderer
        var key = $(this).data("template-renderer");
        if (key == "name")
        {
            // get the value
            var _val = $(element).find(".value");
            $(_val).on("click", {msg: $(_val).html()}, function(e){
                // speak the generate name using your browsers TTS
                var _msg = new SpeechSynthesisUtterance(e.data.msg);
                window.speechSynthesis.speak(_msg);
            });
        }
    });

});