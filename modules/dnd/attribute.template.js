with(DeepSeed){RegisterTemplate({
    ID : "dnd_attribute",
    Tags : ["dnd_attribute", "attribute"],
    Renderer : "dnd_attribute",
    Data : function(options){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////

        // guess best attributes for class and stats
        // order them from best to worst

        /*
        CHA Deception
        CHA Intimidation
        CHA Persuasion
        DEX Acrobatics
        DEX Slight of Hand
        DEX Stealth
        INT Arcana
        INT History
        INT Investigation
        INT Nature
        INT Religion
        STR Athletics
        WIS Animal Handling
        WIS Insight
        WIS Medicine
        WIS Perception
        WIS Survival
        */

        var attribs = [
            {val:0, stat:"CHA", name:"Deception"},
            {val:0, stat:"CHA", name:"Intimidation"},
            {val:0, stat:"CHA", name:"Persuasion"},
            {val:0, stat:"DEX", name:"Acrobatics"},
            {val:0, stat:"DEX", name:"Slight of Hand"},
            {val:0, stat:"DEX", name:"Stealth"},
            {val:0, stat:"INT", name:"Arcana"},
            {val:0, stat:"INT", name:"History"},
            {val:0, stat:"INT", name:"Investigation"},
            {val:0, stat:"INT", name:"Nature"},
            {val:0, stat:"INT", name:"Religion"},
            {val:0, stat:"STR", name:"Athletics"},
            {val:0, stat:"WIS", name:"Animal Handling"},
            {val:0, stat:"WIS", name:"Insight"},
            {val:0, stat:"WIS", name:"Medicine"},
            {val:0, stat:"WIS", name:"Perception"},
            {val:0, stat:"WIS", name:"Survival"}
        ];

        return r;

        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
