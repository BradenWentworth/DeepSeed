with(DeepSeed){RegisterTemplate({
    ID :     "race",
    Tags :    ["race"],
    Renderer : "race",
    Data : function(params){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        var races = ["human", "orc", "halfling", "elf", "gnome", "dwarf", "tiefling", "dragonborn"]; 
        // "celestial", "demon", "potato", "slime"];
        return RandomArrayItem(races);
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
