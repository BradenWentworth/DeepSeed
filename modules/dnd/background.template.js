with(DeepSeed){RegisterTemplate({
    ID :       "background",
    Tags :    ["background"],
    Renderer : "background",
    Data : function(params){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        var background = [
            {
                name:"",
                personality_trait:"",
                ideal:"",
                bond:"",
                flaw:"",
                features:[],
                skill_proficiencies:[],
                tool_proficiencies:[],
                languages:[],
                equipment:[],
            }
        ];
        return RandomArrayItem(races);
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
