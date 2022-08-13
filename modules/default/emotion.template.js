with(DeepSeed){RegisterTemplate({
    ID :       "emotion",
    Tags :    ["emotion"],
    Renderer : "emotion",
    Data : function(params){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        
        /*
        ### notes ###
        
        host:
            who is experiencing this emotion (typically the reader)
        target:
            is the subject that triggers the emotion in the host
            if the host and target are not the same person, it becomes a vicarious emotion
        polarity:
            neutral = apathy
            good = joy
            bad = anger
            mixed = confusion
        intensity:
            disapproval is weak
            wrath and rage are strong
        
        disposition:
            how the host feels about the target
                "i love her" = positive disposition
                "that guy is a douche" = negative disposition

        vicarious:
            what the host feels on behalf of the target (sympathy / empathy)
                "they lost their family to the fire, i feel sad" = vicarious sadness
                "that person got injured, i feel physically sick" = vicarious horror (cringe)
    
        mood
            most prominent emotive state prior to this emotion

        temperament
            natural disposition before effected by any significant emotions

        personality
            temperament + experience over a lifetime

        disposition
            current disposition
            Phlegmatic = calm
            sanguine = positive, optimistic
            melancholic = negative, sad
            choleric = bad tempered, irritable


        motivation
        */

        var polarity = ["positive", "negative", "unknown"]; 
        switch(RandomArrayItem(polarity))
        {
            case "positive":
            {
                var Awe = ["awe", "astonishment", "amazement"];
                var AestheticAppreciation = ["aesthetic_appreciation"]; // that is a nice boulder
                var Calmness = ["calmness", "serenity", "comfort", "security", "trust", "confidence", "contentment", "acceptance", "belonging", "optimism", "hope"]; /*future*/
                var Excitement = ["excitement", "surprise", "enthusiasm", "amazement", "distraction", "rage", "fury", "wrath", "aggression", "aggravation", "alarm", "fright", "exhilaration", "thrill"]; /*future*/
                var Joy = ["joy", "ecstasy", "satisfaction", "relief", "forgiveness", "cheerfulness", "amusement", "jubilation", "happiness", "delight", "elation", "bliss", "gaiety", "euphoria", "pleasure", "love"]; /*present*/
                var Nostalgia = ["nostalgia", "homesickness"]; /*past*/

                var Admiration = ["admiration", "gratitude", "respect"]; /*platonic formal*/
                var Adoration = ["adoration", "love", "pride", "affection"]; /*platonic casual*/
                var Romance = ["romance", "love", "fondness", "attraction", "adoration", "sentimentality", "caring"]; /*romantic non-physical*/
                var SexualDesire = ["sexual_desire", "lust", "arousal", "desire", "passion", "infatuation", "obsession"]; /*romantic physical*/

                return RandomArrayItem([
                    RandomArrayItem(Awe),
                    RandomArrayItem(AestheticAppreciation),
                    RandomArrayItem(Calmness),
                    RandomArrayItem(Excitement),
                    RandomArrayItem(Joy),
                    RandomArrayItem(Nostalgia),
                    RandomArrayItem(Admiration),
                    RandomArrayItem(Adoration),
                    RandomArrayItem(Romance),
                    RandomArrayItem(SexualDesire)
                ]);
            }
            break;

            case "negative":
            {
                var Horror = ["horror", "mortification", "shock", "terror", "disturbed", "torment", "embarrassment", "humiliation"]; /*present*/
                var Sadness = ["sadness", "depression", "grief", "regret", "compassion", "pity", "loneliness", "remorse", "suffering", "betrayal", "bitterness", "alienation", "pensiveness"]; /*past*/

                var Disgust = ["disgust", "contempt", "hate", "hatred", "hostility", "revulsion", "distrust", "shame", "anger", "indignation", "resentment", "loathing", "disapproval"];
                var Envy = ["envy", "jealousy"];
                var Anxiety = ["anxiety", "nervousness", "guilt", "frustration", "doubt", "insecurity", "suspicion", "apprehension", "tenseness", "unease", "worry", "distress", "shyness", "agitation", "grouchiness", "unrest"];
                var Fear = ["fear", "dread", "horror", "hysteria", "paranoia", "panic", "afraid", "despair"];        

                return RandomArrayItem([
                    RandomArrayItem(Horror),
                    RandomArrayItem(Sadness),
                    RandomArrayItem(Disgust),
                    RandomArrayItem(Envy),
                    RandomArrayItem(Anxiety),
                    RandomArrayItem(Fear)
                ]);
            }
            break;

            // unknown, neither, mix of both, confusion
            default:
            {
                var Entrancement = ["interest", "entrancement", "enthrallment"];
                var Boredom = ["boredom", "apathy", "melancholy", "dispassion"];
                var Confusion = ["confusion", "ambivalence", "awkwardness"];

                return RandomArrayItem([
                    RandomArrayItem(Entrancement),
                    RandomArrayItem(Boredom),
                    RandomArrayItem(Confusion)
                ]);
            }
            break;
        }

        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};

