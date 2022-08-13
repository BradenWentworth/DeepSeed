with(DeepSeed){RegisterTemplate({ 
    ID :     "item",
    Tags :    ["item"],
    Renderer : "item",
    Data : function(params){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        var _name = Generate("name", null, params)._Result;
        var prefix_good = ["ultra","super","godly","extreme","fine","immense","powerful"];
        var suffix_good = ["of pain","of strength","of justice","with sprinkles on top","of wealth","of serenity","of power","or lords",]
        return _name + ", the " + RandomArrayItem(prefix_good) + " " + Generate("itemclass",null,params)._Result + " " + RandomArrayItem(suffix_good);
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
