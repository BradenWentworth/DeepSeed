with(DeepSeed){RegisterTemplate({
    ID : "deity",
    Tags : ["deity,god,creator,godess"],
    Renderer :"deity",
    Data : function(params){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        var pantheon = ["forgotten","celtic","greek","egyptian","norse"];

        var forgotten = [
            {name:"Auril",description:"goddess of winter", alignment:"NE", domain:"Nature, Tempest", symbol:"Six-pointed snowflake"},
            {name:"Azuth",description:"god of wizards", alignment:"LN", domain:"Knowledge", symbol:"Left hand pointing upward, outlined in fire"},
            {name:"Bane",description:"god of tyranny", alignment:"LE", domain:"War", symbol:"Upright black right hand, thumb and fingers together"},
            {name:"Beshaba",description:"goddess of misfortune", alignment:"CE", domain:"Trickery", symbol:"Black antlers"},
            {name:"Bhaal",description:"god of murder", alignment:"NE", domain:"Death", symbol:"Skull surrounded by a ring of blood droplets"},
            {name:"Chauntea",description:"goddess of agriculture", alignment:"NG", domain:"Life", symbol:"Sheaf of grain or a blooming rose over grain"},
            {name:"Cyric",description:"god of lies", alignment:"CE", domain:"Trickery", symbol:"White jawless skull on black or purple sunburst"},
            {name:"Deneir",description:"god of writing", alignment:"NG", domain:"Knowledge", symbol:"Lit candle above an open eye"},
            {name:"Eldath",description:"goddess of peace", alignment:"NG", domain:"Life, Nature", symbol:"Waterfall plunging into still pool"},
            {name:"Gond",description:"god of craft", alignment:"N", domain:"Knowledge", symbol:"Toothed cog with four spokes"},
            {name:"Helm",description:"god of protection", alignment:"LN", domain:"Life, Light", symbol:"Staring eye on upright left gauntlet"},
            {name:"Ilmater",description:"god of endurance", alignment:"LG", domain:"Life", symbol:"Hands bound at the wrist with red cord"},
            {name:"Kelemvor",description:"god of the dead", alignment:"LN", domain:"Death", symbol:"Upright skeletal arm holding balanced scales"},
            {name:"Lathander",description:"god of birth and renewal", alignment:"NG", domain:"Life, Light", symbol:"Road traveling into a sunrise"},
            {name:"Leira",description:"goddess of illusion", alignment:"CN", domain:"Trickery", symbol:"Point-down triangle containing a swirl of mist"},
            {name:"Lliira",description:"goddess of joy", alignment:"CG", domain:"Life", symbol:"Triangle of three six-pointed stars"},
            {name:"Loviatar",description:"goddess of pain", alignment:"LE", domain:"Death", symbol:"Nine-tailed barbed scourge"},
            {name:"Malar",description:"god of the hunt", alignment:"CE", domain:"Nature", symbol:"Clawed paw"},
            {name:"Mask",description:"god of thieves", alignment:"CN", domain:"Trickery", symbol:"Black mask"},
            {name:"Mielikki",description:"goddess of forests", alignment:"NG", domain:"Nature", symbol:"Unicorn’s head"},
            {name:"Milil",description:"god of poetry and song", alignment:"NG", domain:"Light", symbol:"Five-stringed harp made of leaves"},
            {name:"Myrkul",description:"god of death", alignment:"NE", domain:"Death", symbol:"White human skull"},
            {name:"Mystra",description:"goddess of magic", alignment:"NG", domain:"Knowledge", symbol:"Circle of seven stars, or nine stars encircling a flowing red mist, or a single star"},
            {name:"Oghma",description:"god of knowledge", alignment:"N", domain:"Knowledge", symbol:"Blank scroll"},
            {name:"Savras",description:"god of divination and fate", alignment:"LN", domain:"Knowledge", symbol:"Crystal ball containing many kinds of eyes"},
            {name:"Selûne",description:"goddess of the moon", alignment:"CG", domain:"Knowledge, Life", symbol:"Pair of eyes surrounded by seven stars"},
            {name:"Shar",description:"goddess of darkness and loss", alignment:"NE", domain:"Death, Trickery", symbol:"Black disk encircled with a border"},
            {name:"Silvanus",description:"god of wild nature", alignment:"N", domain:"Nature", symbol:"Oak leaf"},
            {name:"Sune",description:"goddess of love and beauty", alignment:"CG", domain:"Life, Light", symbol:"Face of a beautiful red-haired woman"},
            {name:"Talona",description:"goddess of disease and poison", alignment:"CE", domain:"Death", symbol:"Three teardrops on a triangle"},
            {name:"Talos",description:"god of storms", alignment:"CE", domain:"Tempest", symbol:"Three lightning bolts radiating from a central point"},
            {name:"Tempus",description:"god of war", alignment:"N", domain:"War", symbol:"Upright flaming sword"},
            {name:"Torm",description:"god of courage and self-sacrifice", alignment:"LG", domain:"War", symbol:"White right gauntlet"},
            {name:"Tymora",description:"goddess of good fortune", alignment:"CG", domain:"Trickery", symbol:"Face-up coin"},
            {name:"Tyr",description:"god of justice", alignment:"LG", domain:"War", symbol:"Balanced scales resting on a warhammer"},
            {name:"Umberlee",description:"goddess of the sea", alignment:"CE", domain:"Tempest", symbol:"Wave curling left and right"},
            {name:"Waukeen",description:"goddess of trade", alignment:"N", domain:"Knowledge, Trickery", symbol:"Upright coin with Waukeen’s profile facing left"},
        ];
        
        var celtic = [
            {name:"The Daghdha",description:"god of weather and crops", alignment:"CG", domain:"Nature, Trickery", symbol:"Bubbling cauldron or shield"},
            {name:"Arawn",description:"god of life and death", alignment:"NE", domain:"Life, Death", symbol:"Black star on gray background"},
            {name:"Belenus",description:"god of sun, light, and warmth", alignment:"NG", domain:"Light", symbol:"Solar disk and standing stones"},
            {name:"Brigantia",description:"goddess of rivers and livestock", alignment:"NG", domain:"Life", symbol:"Footbridge"},
            {name:"Diancecht",description:"god of medicine and healing", alignment:"LG", domain:"Life", symbol:"Crossed oak and mistletoe branches"},
            {name:"Dunatis",description:"god of mountains and peaks", alignment:"N", domain:"Nature", symbol:"Red sun-capped mountain peak"},
            {name:"Goibhniu",description:"god of smiths and healing", alignment:"NG", domain:"Knowledge, Life", symbol:"Giant mallet over sword"},
            {name:"Lugh",description:"god of arts, travel, and commerce", alignment:"CN", domain:"Knowledge, Life", symbol:"Pair of long hands"},
            {name:"Manannan Mac Lir", description:"god of oceans and sea creatures", alignment:"LN", domain:"Nature, Tempest", symbol:"Wave of white water on green"},
            {name:"Math Mathonwy", description:"god of magic", alignment:"NE", domain:"Knowledge", symbol:"Staff"},
            {name:"Morrigan",description:"goddess of battle", alignment:"CE", domain:"War", symbol:"Two crossed spears"},
            {name:"Nuada",description:"god of war and warriors", alignment:"N", domain:"War", symbol:"Silver hand on black background"},
            {name:"Oghma",description:"god of speech and writing", alignment:"NG", domain:"Knowledge", symbol:"Unfurled scroll"},
            {name:"Silvanus",description:"god of nature and forests", alignment:"N", domain:"Nature", symbol:"Summer oak tree"}
        ];

        var greek = [
            {name:"Zeus", description:"god of the sky, ruler of the gods", alignment:"N", domain:"Tempest", symbol:"Fist full of lightning bolts"},
            {name:"Aphrodite", description:"goddess of love and beauty", alignment:"CG", domain:"Light", symbol:"Sea shell"},
            {name:"Apollo", description:"god of light, music, and healing", alignment:"CG", domain:"Knowledge, Life, Light", symbol:"Lyre"},
            {name:"Ares", description:"god of war and strife", alignment:"CE", domain:"War", symbol:"Spear"},
            {name:"Artemis", description:"goddess of hunting and childbirth", alignment:"NG", domain:"Life, Nature", symbol:"Bow and arrow on lunar disk"},
            {name:"Athena", description:"goddess of wisdom and civilization", alignment:"LG", domain:"Knowledge, War", symbol:"Owl"},
            {name:"Demeter", description:"goddess of agriculture", alignment:"NG", domain:"Life", symbol:"Mare’s head"},
            {name:"Dionysus", description:"god of mirth and wine", alignment:"CN", domain:"Life", symbol:"Thyrsus (staff tipped with pine cone)"},
            {name:"Hades", description:"god of the underworld", alignment:"LE", domain:"Death", symbol:"Black ram"},
            {name:"Hecate", description:"goddess of magic and the moon", alignment:"CE", domain:"Knowledge, Trickery", symbol:"Setting moon"},
            {name:"Hephaestus", description:"god of smithing and craft", alignment:"NG", domain:"Knowledge", symbol:"Hammer and anvil"},
            {name:"Hera", description:"goddess of marriage and intrigue", alignment:"CN", domain:"Trickery", symbol:"Fan of peacock feathers"},
            {name:"Hercules", description:"god of strength and adventure", alignment:"CG", domain:"Tempest, War", symbol:"Lion’s head"},
            {name:"Hermes", description:"god of travel and commerce", alignment:"CG", domain:"Trickery", symbol:"Caduceus (winged staff and serpents)"},
            {name:"Hestia", description:"goddess of home and family", alignment:"NG", domain:"Life", symbol:"Hearth"},
            {name:"Nike", description:"goddess of victory", alignment:"LN", domain:"War", symbol:"Winged woman"},
            {name:"Pan", description:"god of nature", alignment:"CN", domain:"Nature", symbol:"Syrinx (pan pipes)"},
            {name:"Poseidon", description:"god of the sea and earthquakes", alignment:"CN", domain:"Tempest", symbol:"Trident"},
            {name:"Tyche", description:"goddess of good fortune", alignment:"N", domain:"Trickery", symbol:"Red pentagram"},
        ];
        
        var egyptian = [
            {name:"Re-Horakhty",description:"god of the sun, ruler of the gods",alignment:"LG",domain:"Life,Light",symbol:"Solar disk encircled by serpent"},
            {name:"Anubis",description:"god of judgment and death",alignment:"LN",domain:"Death",symbol:"Black jackal"},
            {name:"Apep",description:"god of evil, fire, and serpents",alignment:"NE",domain:"Trickery",symbol:"Flaming snake"},
            {name:"Bast",description:"goddess of cats and vengeance",alignment:"CG",domain:"War",symbol:"Cat"},
            {name:"Bes",description:"god of luck and music",alignment:"CN",domain:"Trickery",symbol:"Image of the misshapen deity"},
            {name:"Hathor",description:"goddess of love, music, and motherhood",alignment:"NG",domain:"Life, Light",symbol:"Horned cow’s head with lunar disk"},
            {name:"Imhotep",description:"god of crafts and medicine",alignment:"NG",domain:"Knowledge",symbol:"Step pyramid"},
            {name:"Isis",description:"goddess of fertility and magic",alignment:"NG",domain:"Knowledge, Life",symbol:"Ankh and star"},
            {name:"Nephthys",description:"goddess of death and grief",alignment:"CG",domain:"Death",symbol:"Horns around a lunar disk"},
            {name:"Osiris",description:"god of nature and the underworld",alignment:"LG",domain:"Life, Nature",symbol:"Crook and flail"},
            {name:"Ptah",description:"god of crafts, knowledge, and secrets",alignment:"LN",domain:"Knowledge",symbol:"Bull"},
            {name:"Set",description:"god of darkness and desert storms",alignment:"CE",domain:"Death, Tempest, Trickery",symbol:"Coiled cobra"},
            {name:"Sobek",description:"god of water and crocodiles",alignment:"LE",domain:"Nature, Tempest",symbol:"Crocodile head with horns and plumes"},
            {name:"Thoth",description:"god of knowledge and wisdom",alignment:"N",domain:"Knowledge",symbol:"Ibis"},
        ];

        var norse = [
            {name:"Odin", description:"god of knowledge and war", alignment:"NG", domain:"Knowledge, War", symbol:"Watching blue eye"},
            {name:"Aegir", description:"god of the sea and storms", alignment:"NE", domain:"Tempest", symbol:"Rough ocean waves"},
            {name:"Balder", description:"god of beauty and poetry", alignment:"NG", domain:"Life, Light", symbol:"Gem-encrusted silver chalice"},
            {name:"Forseti", description:"god of justice and law", alignment:"N", domain:"Light", symbol:"Head of a bearded man"},
            {name:"Frey", description:"god of fertility and the sun", alignment:"NG", domain:"Life, Light", symbol:"Ice-blue greatsword"},
            {name:"Freya", description:"goddess of fertility and love", alignment:"NG", domain:"Life", symbol:"Falcon"},
            {name:"Frigga", description:"goddess of birth and fertility", alignment:"N", domain:"Life, Light", symbol:"Cat"},
            {name:"Heimdall", description:"god of watchfulness and loyalty", alignment:"LG", domain:"Light, War", symbol:"Curling musical horn"},
            {name:"Hel", description:"goddess of the underworld", alignment:"NE", domain:"Death", symbol:"Woman’s face, rotting on one side"},
            {name:"Hermod", description:"god of luck", alignment:"CN", domain:"Trickery", symbol:"Winged scroll"},
            {name:"Loki", description:"god of thieves and trickery", alignment:"CE", domain:"Trickery", symbol:"Flame"},
            {name:"Njord", description:"god of sea and wind", alignment:"NG", domain:"Nature, Tempest", symbol:"Gold coin"},
            {name:"Odur", description:"god of light and the sun", alignment:"CG", domain:"Light", symbol:"Solar disk"},
            {name:"Sif", description:"goddess of war", alignment:"CG", domain:"War", symbol:"Upraised sword"},
            {name:"Skadi", description:"god of earth and mountains", alignment:"N", domain:"Nature", symbol:"Mountain peak"},
            {name:"Surtur", description:"god of fire giants and war", alignment:"LE", domain:"War", symbol:"Flaming sword"},
            {name:"Thor", description:"god of storms and thunder", alignment:"CG", domain:"Tempest, War", symbol:"Hammer"},
            {name:"Thrym", description:"god of frost giants and cold", alignment:"CE", domain:"War", symbol:"White double-bladed axe"},
            {name:"Tyr", description:"god of courage and strategy", alignment:"LN", domain:"Knowledge, War", symbol:"Sword"},
            {name:"Uller", description:"god of hunting and winter", alignment:"CN", domain:"Nature", symbol:"Longbow"},
        ];

        var _pantheon = GetParam(params,"pantheon", RandomArrayItem(pantheon));
        var _deity ="";

        switch(_pantheon)
        {
            case"forgotten":
            {
                _deity = RandomArrayItem(forgotten);
            }
            break;

            case"celtic":
            {
                _deity = RandomArrayItem(celtic);
            }
            break;

            case"greek":
            {
                _deity = RandomArrayItem(greek);
            }
            break;

            case"egyptian":
            {
                _deity = RandomArrayItem(egyptian);
            }
            break;

            case"norse":
            {
                _deity = RandomArrayItem(norse);
            }
            break;

            default:
            {
                _deity = {name:"Bob", description:"god of office supplies", alignment:"N", domain:"Tedium", symbol:"Stapler"};
            }
            break;
        }

        return _deity;
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
