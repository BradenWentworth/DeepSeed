with(DeepSeed){RegisterRenderer(function(){
    
    console.log("DEFAULT RENDERER!!!");

    
    //$(".template").each(function(){
    //    AddRerollButton.call(this); // refresh button on newly replaced template
    //});
    
    AddKeyAsClass();
    AddToggles();
    AddTemplateIDAsClass();

    /////////////////////////////////////////////////////////////////////////
    // Add property keys as class for styling
    /////////////////////////////////////////////////////////////////////////
    function AddKeyAsClass()
    {
        // apply property keys as classes for simple CSS styling
        $(".property").each(function(){
            var key = $(this).data("key");
            $(this).addClass(key);
        });
    }

    /////////////////////////////////////////////////////////////////////////
    // Add template-id as class for styling
    /////////////////////////////////////////////////////////////////////////
    function AddTemplateIDAsClass()
    {
        // apply property keys as classes for simple CSS styling
        $(".template").each(function(){
            var key = $(this).data("template-id");
            $(this).addClass(key);
        });
    }

    /////////////////////////////////////////////////////////////////////////
    // Reroll Template
    /////////////////////////////////////////////////////////////////////////
    function AddRerollButton()
    {
        var id = $(this).data("template-id");
        $(this).before(`<div class="reroll" data-template-id="${id}">reroll: '${id}'</div>`).on("click", function(e){
            //console.log(e.target);
            var id = $(e.target).data("template-id");
            var gen = DeepSeed.Generate(id, null, null);
            if (gen != null)
            {
                var p = $(e.target).next(".template");
                $(p).html(DeepSeed.Render(gen));
                //AddRerollButton.call(p);
            }
        });
    }

    /////////////////////////////////////////////////////////////////////////
    // Toggle Sections
    /////////////////////////////////////////////////////////////////////////
    function AddToggles()
    {
        // expandable sections button
        $(".property").each(function(){
            $(this).addClass("expanded");
            var key = $(this).data("key");
            $(this).before(`<div class="toggle open">${key}</div>`);
        });

        // expandable array items, incase they contain objects
        $(".arrayitem").each(function(){
            $(this).addClass("expanded");
            var index = $(this).data("index");
            $(this).before(`<div class="toggle open">${index}</div>`);
        });

        // expandable section button event
        $(".toggle").on("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            
            var element = $(e.target);
            var nextelement = $(element).next(".expanded, .collapsed");
        
            if ( element.hasClass("open") )
            {
            element.addClass("closed").removeClass("open");
            nextelement.addClass("collapsed").removeClass("expanded");
            }
            else
            {
            element.addClass("open").removeClass("closed");
            nextelement.addClass("expanded").removeClass("collapsed");
            }
        });
    }
})};
