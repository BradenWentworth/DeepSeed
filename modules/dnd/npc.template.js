with(DeepSeed){RegisterTemplate({
    /////////////////////////////////////////////////////////////////////////
    // Template properties
    /////////////////////////////////////////////////////////////////////////
    ID : "npc",
    Tags : ["npc"],
    Renderer : "npc",
    Data : function(params){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        var race = GetParam(params, "race", Generate("race", null, params));
        var genders = ["male","female"];
        //var gender = GetParam(params, "gender", RandomArrayItem(genders));
        var gender = GetParam(params, "gender", RandomArrayItem(["male","female"]));

        return {
            identity : {
                firstname : Generate("name", null, params),
                nickname : Generate("nickname", null, params),
                lastname : Generate("name", null, params),
                race : race,
                gender : gender,
                class : Generate("class", null, params),
            },
            stats : {
                str : Generate("dnd_stat", null, params),
                dex : Generate("dnd_stat", null, params),
                con : Generate("dnd_stat", null, params),
                int : Generate("dnd_stat", null, params),
                wis : Generate("dnd_stat", null, params),
                cha : Generate("dnd_stat", null, params),
            },
            characteristics : {
                background : RandomArrayItem(["Acolyte", "Chartlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Hermit", "Noble", "Outlander", "Sage", "Sailor", "Soldier", "Urchin"]),
                personality : Generate("dnd_personality", null, params),
                ideal : Generate("dnd_ideal", null, params),
                bond : Generate("dnd_bond", null, params),
                flaw : Generate("dnd_flaw", null, params)
            },
            appearance : {
                age : RandomArrayItem(["very young (<20)", "young (20-40)", "middle age (40-60)", "old (60-80)", "very old (>80)"]),
                height : RandomArrayItem(["short","average","tall"]),
                weight : RandomArrayItem(["decrepid", "light", "average", "heavy", "obese"]),
                eyes : RandomArrayItem(["black", "brown", "white", "red", "blue", "green", "yellow"]),
                skin : RandomArrayItem(["dark", "light", "smooth", "rough"]),
                hair : RandomArrayItem(["bald", "buzz", "neat", "messy", "shoulder length", "very long", "mohawke", "ponytail"]),
            },
            extra : {
                // background
                social_class : RandomArrayItem(["poor","average","rich"]),

                // - occupation, class kinda covers this already, but maybe they are also a cook or scribe in addition to fighter or mage
                // - relation ships, close friends / family
                // - education
                education : RandomArrayItem(["none","basic","studying","highly trained","expert"]),
                // - relationship with friends / family / race / community
                // - favorite past-time activity / hobby
                // - source of income
                income_source : RandomArrayItem(["none","beggar","contract","salary","inheritance"]),
                // appearance
                // - height, weight, race, hair and eye color, style of dress, and any tattoos, scars, or distinguishing marks
                // - features
                // behaviour / personality
                // - ticks
                hates : RandomArrayItem(["loud talkers","slow walkers","being patronized"]),
                // - greatest fear
                fear : RandomArrayItem(["heights","darkness","insects"]),
                // - optimism / pessimism
                outlook : RandomArrayItem(["pessimist","optimist","realist","nihilist"]),
                // - pacifist? // doesnt relly work for most PC
                pacifism : RandomArrayItem(["always","until sufficiently provoked","never"]),
                // - prejudice?
                prejudice : RandomArrayItem(["race","wealth","skill","height","literacy","job","background"]),
                // - vanity?
                vanity : RandomArrayItem(["carefree","average","obsessed"]),
                // - introvert/extrovert
                sociability : RandomArrayItem(["introvert","average","extrovert"]),
                // - organised/messy
                organisation : RandomArrayItem(["careless","utilitarian","preferred","obsessed"]),
                // core drive (similar to long term goal)
                core_drive : Generate("goal", null, params),
                // public primary long term goal
                description_primary_goal : Generate("goal", null, params),
                // secret primary goal
                description_secondary_goal : Generate("goal", null, params),
                // knowledge / skills that they are good at
                // ?
                // knowledge / skills that they are bad at
                // ?
                // favorite weapon type
                prefered_weapon : Generate("itemclass",null,params),
                // how would you describe this character in one word
                description_general_emotion : Generate("emotion", null, params),
                // how would other characters typically feel or react to this character
                description_evoked_emotion : Generate("emotion", null, params),
                // god to worship
                deity : Generate("deity", null, params),
                items : [
                    Generate("item", null, params), 
                    Generate("item", null, params), 
                    Generate("item", null, params),
                ],
            }
        };
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
