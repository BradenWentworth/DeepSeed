with(DeepSeed){RegisterTemplate({
    ID : "nickname",
    Tags : ["nickname"],
    Renderer : "name",
    Data : function(params){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        var out = "";

        var n1 = ["ace","admiral","aggy","angel","animal","answer","aqua","arrow","artsy","assassin",
        "babe","baby","bad boy","baldy","bambam","barber","bash","basher","beans","bear","beard",
        "beast","beau","beauty","belle","berry","big boy","big dog","bigby","biggie","bigshot",
        "bing","bingo","bird","birds","bitsy","black magic","black widow","blackjack","blade",
        "blessed","blondie","blossom","blue","blush","bo","bobo","bones","boogie","boomer","boots",
        "braveheart","brick","brow","buck","bucket","bud","buddy","bugs","bull","bulldog","bullet",
        "bullseye","bunny","buster","butch","butcher","butterfly","buzz",
        "camille","candy","cannonball","captain","chappie","charisma","cheery","chef","chief",
        "chip","chipper","chuck","cloud","cobra","comet","coocoo","cookie","coyote","crash","creed",
        "creep","crow","cryo","crystal","cuddles","curles","cutie","cyclone","cyclops",
        "daddy","dagger","dandy","dapper","daring","darlin","darling","dash","dawg","daydream",
        "dazzle","dealer","deedee","delight","demon","devil","diamond","dice","digger","dimple",
        "dino","dizzy","doc","dodo","dog","doggie","double","double trouble","dragon","dream",
        "ducky","duke","dumdum","dummy","dusty","dutch","dynamite","eagle","fancy","feathers","fire",
        "fish","flame","flash","flip","flutters","fortuna","fox","freak","frosty","fury","fuzz",
        "fuzzy","gator","gem","genie","genius","gentle","gibbs","gibby","gigi","gilly","ginger",
        "glide","gonzo","goose","grace","grim","groovy","grouch","growl","guns","gus","hammer","handsome",
        "happy","hawk","hawkeye","hog","honesty","honey","hooks","horse","hound","hurricane",
        "ice","icicle","indie","iron","izzy",
        "jackal","jacket","jackhammer","jade","jazzy","jelly","jewel","joker","jolly","jumbo","jumper",
        "kiki","killer","kindle","king","knight",
        "landslide","lightning","lion","lioness","little","lock","loco","lucky",
        "mac","machine","mad","mad dog","magic","magica","magician","major","mamba","mania","maniac",
        "marvel","mayor","mellow","memo","merry","micro","miracle","missile","mistletoe",
        "mitzi","monk","moose","mouse","mugs","mugsy","mule","mutt",
        "navigator","nimble",
        "old buck","oracle","ox",
        "peanut","penny","petit","pig","piggy","pipi","pitch","pogo","poncho","pops","porky",
        "pretzel","prince","princess","pug","pugs","punch","pyro",
        "queen bee","queenie",
        "rags","reaper","rebel","red","rip","ripper","robin","rock","rogue","rose","rouge","ruby","ruin","rusty",
        "sage","sailor","sandy","sassy","scoop","scruffy","serpent","shade","shadow","shark","sheep",
        "shorty","shrimp","shy","silence","silly","silver","sizzle","sketch","skin","skinny","skip",
        "skipper","skippy","slash","slayer","slick","slide","slim","small","smash","smasher","smiley",
        "smitty","smoothie","snake","snowflake","spark","sparkle","sparky","sparrow","special","speed",
        "spider","spike","spud","spuds","starfall","steel","sticks","stone","storm","stout","stretch",
        "stuffy","sugar",
        "t-bone","tank","terminator","thief","thunder","tiger","tigress","tiny","titch","toon",
        "torch","trey","tricky","trouble","tug","turk","twinkle","twinkle toes","twitch",
        "uncle","undertaker",
        "vanilla","viper","vulture",
        "wheels","whopper","wiggles","wild","wildy","wiz","wonder","worm",
        "yank",
        "zen","zero","ziggy"];
        
        out += RandomArrayItem(n1);
        
        return out;
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
