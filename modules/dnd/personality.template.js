with(DeepSeed){RegisterTemplate({
    ID : "dnd_personality",
    Tags : ["dnd_personality", "personality"],
    Renderer : "dnd_personality",
    Data : function(options){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////

        // acolyte
        var r = [
            "I idolize a parlicular hero of my faith, and constantly refer to that person's deeds and example",
            "I can find common ground belween rhe fiercest enemies, empathizing wilh them and always working toward peace.",
            "I see omens in every event and aclion. the gods try to speak to us, we just need to listen.",
            "Nothing can shake my optimistic attitude.",
            "I quote (or misquote) sacred texts and proverbs in almost every situation.",
            "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
            "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
            "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
        ];

        return RandomArrayItem(r);

        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
