with(DeepSeed){RegisterTemplate({ 
    /////////////////////////////////////////////////////////////////////////
    // Template properties
    /////////////////////////////////////////////////////////////////////////
    ID :     "party",     // this is used to directly call this template, its also what gets used in the _RootPath string
    Tags :    ["party", "pty", "group", "team", "adventure"],
    Renderer : "party",
    Data : function(params){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        var result = {};
        var _members = [];
        var member_count = 0;
        
        // safe way to get a param
        if (params != null && "count" in params) 
        {
            member_count = params.count;
            //console.log(member_count);
            for(var i = 0; i < params.count; i++)
            {
                _members.push(Generate("npc", null, params));
            }
        }

        result.leader = Generate("npc", null, params);
        if (member_count > 0)
        {
            result.members = _members;
        }

        return result;
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
