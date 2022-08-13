with(DeepSeed){RegisterTemplate({
    ID : "dnd_bond",
    Tags : ["dnd_bond", "bond"],
    Renderer : "dnd_bond",
    Data : function(options){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////

        // acolyte
        var r = [
            "I would die to recover an ancient relic of my faith that was lost long ago.",
            "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
            "I owe my life to the priest who took me in when my parents died.",
            "Everything I do is for the common people.",
            "I will do anything to protect the temple where I served.",
            "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
        ];

        return RandomArrayItem(r);

        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
