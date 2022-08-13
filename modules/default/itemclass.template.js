with(DeepSeed){RegisterTemplate({ 
    ID :       "itemclass",
    Tags :    ["itemclass"],
    Renderer : "itemclass",
    Data : function(options){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        
        var itemclass = ["blade", "projectile", "magic", "gadget", "blunt", "pierce", "shield"];
        switch(RandomArrayItem(itemclass))
        {
            case "blade":
            {
                var blades = ["sword", "dagger", "axe", "scythe", "whip"];
                return RandomArrayItem(blades);
                
                // swords:
                //var african = ["flyssa", "kaskara", "khopesh", "mameluke", "nimcha", "takoba"];
                //var subafrican = ["billao", "ida", "shotel", "akrafena"];
                //var chinese = ["jian", "dao"];
                //// var dao = ["baguadao", "butterfly", etc..];
                //var japanese = ["nihonto", "dotanuki"];
                //var korea = ["hwandudaedo","saingeom","jedokgum","ssangeom"];
            }
            break;

            case "projectile":
            {
                var proj = ["thrown", "ballistic", "propelled"];
                switch(RandomArrayItem(proj))
                {
                    case "thrown":
                    {
                        var thrown = ["throwing knife", "throwing axe", "shuriken", "bolas"];
                        return RandomArrayItem(thrown);
                    }
                    break;
                    case "ballistic":
                    {
                        var ballistic = ["gun", "cannon", "sling", "bow", "crossbow"];
                        return RandomArrayItem(ballistic);
                    }
                    break;
                    case "propelled":
                    {
                        var propelled = ["rocket", "missile"];
                        return RandomArrayItem(propelled);
                    }
                    break;
                }
            }
            break;

            case "magic":
            {
                var magic = ["grimoire", "source", "potion", "instrument"];
                return RandomArrayItem(magic);
            }
            break;

            case "gadget":
            {
                var gadget = ["grenade", "tazer", "tripwire"];
                return RandomArrayItem(gadget);
            }
            break;

            case "blunt":
            {
                var blunt = ["club", "flail", "mace", "hammer", "quaterstaff"];
                return RandomArrayItem(blunt);
            }
            break;

            case "pierce":
            {
                var pierce = ["spear", "pike", "lance"];
                return RandomArrayItem(pierce);
            }
            break;

            case "shield":
            {
                var shield = ["buckler", "kite", "targe", "heater", "pavise", "rondache"];
                return RandomArrayItem(shield);
            }
            break;
        }

        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
