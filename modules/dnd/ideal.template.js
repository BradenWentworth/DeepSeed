with(DeepSeed){RegisterTemplate({
    ID : "dnd_ideal",
    Tags : ["dnd_ideal", "ideal"],
    Renderer : "dnd_ideal",
    Data : function(options){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////

        // acolyte
        var r = [
            "Tradilion. The anecient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
            "Charity. I always try to help those in need, no matter what the personal cost. (Good)",
            "Change. We must help bring about the changes the gods are constantly working in the world. (chaotic)",
            "Power. I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)",
            "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
            "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"
        ];

        return RandomArrayItem(r);

        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
