with(DeepSeed){RegisterTemplate({
    ID :     "name",
    Tags :    ["name"],
    Renderer : "name",
    Data : function(params){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        var out = "";

        //var genlength = getRandomInt(6, 10); // default generation length
        var genlengthOverride = GetParam(params, "lengthOverride", null);
        var race = GetParam(params, "race", "human");
        var gender = GetParam(params, "gender", "male");
        
        switch(race)
        {
            case "halfling":
            {
                var f1 = ["An","Ar","Bar","Bel","Con","Cor","Dan","Dav","El","Er","Fal","Fin","Flyn","Gar","Go","Hal","Hor","Ido","Ira","Jan","Jo","Kas","Kor","La","Lin","Mar","Mer","Ne","Nor","Ori","Os","Pan","Per","Pim","Quin","Quo","Ri","Ric","San","Shar","Tar","Te","Ul","Uri","Val","Vin","Wen","Wil","Xan","Xo","Yar","Yen","Zal","Zen"];
                var f2 = ["ace","amin","bin","bul","dak","dal","der","don","emin","eon","fer","fire","gin","hace","horn","kas","kin","lan","los","min","mo","nad","nan","ner","orin","os","pher","pos","ras","ret","ric","rich","rin","ry","ser","sire","ster","ton","tran","umo","ver","vias","von","wan","wrick","yas","yver","zin","zor","zu"];
                var m1 = ["An","Ari","Bel","Bre","Cal","Chen","Dar","Dia","Ei","Eo","Eli","Era","Fay","Fen","Fro","Gel","Gra","Ha","Hil","Ida","Isa","Jay","Jil","Kel","Kith","Le","Lid","Mae","Mal","Mar","Ne","Ned","Odi","Ora","Pae","Pru","Qi","Qu","Ri","Ros","Sa","Shae","Syl","Tham","Ther","Tryn","Una","Uvi","Va","Ver","Wel","Wi","Xan","Xi","Yes","Yo","Zef","Zen"];
                var m2 = ["alyn","ara","brix","byn","caryn","cey","da","dove","drey","elle","eni","fice","fira","grace","gwen","haly","jen","kath","kis","leigh","la","lie","lile","lienne","lyse","mia","mita","ne","na","ni","nys","ola","ora","phina","prys","rana","ree","ri","ris","sica","sira","sys","tina","trix","ula","vira","vyre","wyn","wyse","yola","yra","zana","zira"];
                if (gender == "female")
                {
                    out += RandomArrayItem(f1) + RandomArrayItem(f2);
                }
                else
                {
                    out += RandomArrayItem(m1) + RandomArrayItem(m2);
                }
            }
            break;

            case "elf":
            {
                var m1 = ["Ad","Ae","Bal","Bei","Car","Cra","Dae","Dor","El","Ela","Er","Far","Fen","Gen","Glyn","Hei","Her","Ian","Ili","Kea","Kel","Leo","Lu","Mira","Mor","Nae","Nor","Olo","Oma","Pa","Per","Pet","Qi","Qin","Ralo","Ro","Sar","Syl","The","Tra","Ume","Uri","Va","Vir","Waes","Wran","Yel","Yin","Zin","Zum"];
                var m2 = ["balar","beros","can","ceran","dan","dithas","faren","fir","geiros","golor","hice","horn","jeon","jor","kas","kian","lamin","lar","len","maer","maris","menor","myar","nan","neiros","nelis","norin","peiros","petor","qen","quinal","ran","ren","ric","ris","ro","salor","sandoral","toris","tumal","valur","ven","warin","wraek","xalim","xidor","yarus","ydark","zeiros","zumin"];
                var f1 = ["Ad","Ara","Bi","Bry","Cai","Chae","Da","Dae","Eil","En","Fa","Fae","Gil","Gre","Hele","Hola","Iar","Ina","Jo","Key","Kris","Lia","Lora","Mag","Mia","Neri","Ola","Ori","Phi","Pres","Qi","Qui","Rava","Rey","Sha","Syl","Tor","Tris","Ula","Uri","Val","Ven","Wyn","Wysa","Xil","Xyr","Yes","Ylla","Zin","Zyl"];
                var f2 = ["banise","bella","caryn","cyne","di","dove","fiel","fina","gella","gwyn","hana","harice","jyre","kalyn","krana","lana","lee","leth","lynn","moira","mys","na","nala","phine","phyra","qirelle","ra","ralei","rel","rie","rieth","rona","rora","roris","satra","stina","sys","thana","thyra","tris","varis","vyre","wenys","wynn","xina","xisys","ynore","yra","zana","zorwyn"];
                if (gender == "female")
                {
                    out += RandomArrayItem(f1) + RandomArrayItem(f2);
                }
                else
                {
                    out += RandomArrayItem(m1) + RandomArrayItem(m2);
                }
            }
            break;

            case "gnome":
            {
                var m1 = ["Al","Ari","Bil","Bri","Cal","Cor","Dav","Dor","Eni","Er","Far","Fel","Ga","Gra","His","Hor","Ian","Ipa","Je","Jor","Kas","Kel","Lan","Lo","Man","Mer","Nes","Ni","Or","Oru","Pana","Po","Qua","Quo","Ras","Ron","Sa","Sal","Sin","Tan","To","Tra","Um","Uri","Val","Vor","War","Wil","Wre","Xal","Xo","Ye","Yos","Zan","Zil"];
                var m2 = ["bar","ben","bis","corin","cryn","don","dri","fan","fiz","gim","grim","hik","him","ji","jin","kas","kur","len","lin","min","mop","morn","nan","ner","ni","pip","pos","rick","ros","rug","ryn","ser","ston","tix","tor","ver","vyn","win","wor","xif","xim","ybar","yur","ziver","zu"];
                var f1 = ["Alu","Ari","Ban","Bree","Car","Cel","Daphi","Do","Eili","El","Fae","Fen","Fol","Gal","Gren","Hel","Hes","Ina","Iso","Jel","Jo","Klo","Kri","Lil","Lori","Min","My","Ni","Ny","Oda","Or","Phi","Pri","Qi","Que","Re","Rosi","Sa","Sel","Spi","Ta","Tifa","Tri","Ufe","Uri","Ven","Vo","Wel","Wro","Xa","Xyro","Ylo","Yo","Zani","Zin"];
                var f2 = ["bi","bys","celi","ci","dira","dysa","fi","fyx","gani","gyra","hana","hani","kasys","kini","la","li","lin","lys","mila","miphi","myn","myra","na","niana","noa","nove","phina","pine","qaryn","qys","rhana","roe","sany","ssa","sys","tina","tra","wyn","wyse","xi","xis","yaris","yore","za","zyre"];
                if (gender == "female")
                {
                    out += RandomArrayItem(f1) + RandomArrayItem(f2);
                }
                else
                {
                    out += RandomArrayItem(m1) + RandomArrayItem(m2);
                }
            }
            break;

            case "dwarf":
            {
                var m1 = ["Ad","Am","Arm","Baer","Daer","Bal","Ban","Bar","Bel","Ben","Ber","Bhal","Bhar","Bhel","Bram","Bran","Brom","Brum","Bun","Dal","Dar","Dol","Dul","Eb","Em","Erm","Far","Gal","Gar","Ger","Gim","Gral","Gram","Gran","Grem","Gren","Gril","Gry","Gul","Har","Hjal","Hjol","Hjul","Hor","Hul","Hur","Kar","Khar","Kram","Krom","Krum","Mag","Mal","Mel","Mor","Muir","Mur","Rag","Ran","Reg","Rot","Thal","Thar","Thel","Ther","Tho","Thor","Thul","Thur","Thy","Tor","Ty","Um","Urm","Von"];
                var m2 = ["adin","bek","brek","dahr","dain","dal","dan","dar","dek","dir","dohr","dor","drak","dram","dren","drom","drum","drus","duhr","dur","dus","garn","gram","gran","grim","grom","gron","grum","grun","gurn","gus","iggs","kahm","kam","kohm","kom","kuhm","kum","kyl","man","mand","mar","mek","miir","min","mir","mond","mor","mun","mund","mur","mus","myl","myr","nam","nar","nik","nir","nom","num","nur","nus","nyl","rak","ram","ren","rig","rigg","rik","rim","rom","ron","rum","rus","ryl","tharm","tharn","thran","thrum","thrun"];
                var f1 = ["An","Ar","Baer","Bar","Bel","Belle","Bon","Bonn","Braen","Bral","Bralle","Bran","Bren","Bret","Bril","Brille","Brol","Bron","Brul","Bryl","Brylle","Bryn","Bryt","Byl","Bylle","Daer","Dear","Dim","Ed","Ein","El","Gem","Ger","Gwan","Gwen","Gwin","Gwyn","Gym","Ing","Jen","Jenn","Jin","Jyn","Kait","Kar","Kat","Kath","Ket","Las","Lass","Les","Less","Lyes","Lys","Lyss","Maer","Maev","Mar","Mis","Mist","Myr","Mys","Myst","Naer","Nal","Nas","Nass","Nes","Nis","Nys","Raen","Ran","Red","Reyn","Run","Ryn","Sar","Sol","Tas","Taz","Tis","Tish","Tiz","Tor","Tys","Tysh"];
                var f2 = ["belle","bera","delle","deth","dielle","dille","dish","dora","dryn","dyl","giel","glia","glian","gwyn","la","leen","leil","len","lin","linn","lyl","lyn","lynn","ma","mera","mora","mura","myl","myla","nan","nar","nas","nera","nia","nip","nis","niss","nora","nura","nyl","nys","nyss","ra","ras","res","ri","ria","rielle","rin","ris","ros","ryl","ryn","sael","selle","sora","syl","thel","thiel","tin","tyn","va","van","via","vian","waen","win","wyn","wynn"];
                if (gender == "female")
                {
                    out += RandomArrayItem(f1) + RandomArrayItem(f2);
                }
                else
                {
                    out += RandomArrayItem(m1) + RandomArrayItem(m2);
                }
            }
            break;

            case "tiefling":
            {
                //var random = ["Achievement","Adventure","Aid","Anguish","Art","Ashes","Atonement","Awe","Bliss","Bright","Carrion","Chant","Cheer","Cherish","Closed","Comfort","Compassion","Confidence","Content","Courage","Cunning","Darkness","Deceit","Delight","Desire","Despair","Devotion","Dexterity","Different","Dread","Ecstasy","End","Enduring","Essential","Esteem","Eternal","Euphoria","Exceptional","Exciting","Expert","Expertise","Expressive","Extreme","Faith","Fear","Flawed","Free","Freedom","Fresh","Gentle","Gladness","Glee","Gloom","Happiness","Happy","Harmony","Hatred","Hero","Hope","Hunt","Hymn","Ideal","Immortal","Innovation","Interesting","Journey","Joy","Laughter","Life","Light","Love","Loyal","Mantra","Master","Mastery","Misery","Music","Normal","Nowhere","Odd","Open","Optimal","Panic","Perfect","Piety","Pleasure","Poetry","Possession","Promise","Psalm","Pure","Quest","Random","Rare","Recovery","Redemption","Regular","Relentless","Respect","Reverence","Sadness","Sanctity","Silence","Skilled","Sly","Song","Sorrow","Suffering","Terror","Timeless","Torment","Trickery","Trouble","Trust","Truth","Uncommon","Unlocked","Void","Voyage","Weary","Winning","Woe"];
                var m1 = ["Aet","Ak","Am","Aran","And","Ar","Ark","Bar","Car","Cas","Dam","Dhar","Eb","Ek","Er","Gar","Gu","Gue","Hor","Ia","Ka","Kai","Kar","Kil","Kos","Ky","Loke","Mal","Male","Mav","Me","Mor","Neph","Oz","Ral","Re","Rol","Sal","Sha","Sir","Ska","The","Thy","Thyne","Ur","Uri","Val","Xar","Zar","Zer","Zher","Zor"];
                var m2 = ["adius","akas","akos","char","cis","cius","dos","emon","ichar","il","ilius","ira","lech","lius","lyre","marir","menos","meros","mir","mong","mos","mus","non","rai","rakas","rakir","reus","rias","ris","rius","ron","ros","rus","rut","shoon","thor","thos","thus","us","venom","vir","vius","xes","xik","xikas","xire","xius","xus","zer","zire"];
                var f1 = ["Af","Agne","Ani","Ara","Ari","Aria","Bel","Bri","Cre","Da","Di","Dim","Dor","Ea","Fri","Gri","His","In","Ini","Kal","Le","Lev","Lil","Ma","Mar","Mis","Mith","Na","Nat","Ne","Neth","Nith","Ori","Pes","Phe","Qu","Ri","Ro","Sa","Sar","Seiri","Sha","Val","Vel","Ya","Yora","Yu","Za","Zai","Ze"];
                var f2 = ["bis","borys","cria","cyra","dani","doris","faris","firith","goria","grea","hala","hiri","karia","ki","laia","lia","lies","lista","lith","loth","lypsis","lyvia","maia","meia","mine","narei","nirith","nise","phi","pione","punith","qine","rali","rissa","seis","solis","spira","tari","tish","uphis","vari","vine","wala","wure","xibis","xori","yis","yola","za","zes"];
                if (gender == "female")
                {
                    out += RandomArrayItem(f1) + RandomArrayItem(f2);
                }
                else
                {
                    out += RandomArrayItem(m1) + RandomArrayItem(m2);
                }
            }
            break;

            case "dragon": case "dragonborn": case "drake":
            case "wyrm": case "wyvern": case "wurm": case "worm":
            {
                var m1 = ["Ali","Ar","Ba","Bal","Bel","Bha","Bren","Caer","Calu","Dur","Do","Dra","Era","Faer","Fro","Gre","Ghe","Gora","He","Hi","Ior","Jin","Jar","Kil","Kriv","Lor","Lumi","Mar","Mor","Med","Nar","Nes","Na","Oti","Orla","Pri","Pa","Qel","Ravo","Ras","Rho","Sa","Sha","Sul","Taz","To","Trou","Udo","Uro","Vor","Vyu","Vrak","Wor","Wu","Wra","Wul","Xar","Yor","Zor","Zra"];
                var m2 = ["barum","bor","broth","ciar","crath","daar","dhall","dorim","farn","fras","gar","ghull","grax","hadur","hazar","jhan","jurn","kax","kris","kul","lasar","lin","mash","morn","naar","prax","qiroth","qrin","qull","rakas","rash","rinn","roth","sashi","seth","skan","trin","turim","varax","vroth","vull","warum","wunax","xan","xiros","yax","ythas","zavur","zire","ziros"];
                var f1 = ["Ari","A","Bi","Bel","Cris","Ca","Drys","Da","Erli","Esh","Fae","Fen","Gur","Gri","Hin","Ha","Irly","Irie","Jes","Jo","Ka","Kel","Ko","Lilo","Lora","Mal","Mi","Na","Nes","Nys","Ori","O","Ophi","Phi","Per","Qi","Quil","Rai","Rashi","So","Su","Tha","Ther","Uri","Ushi","Val","Vyra","Welsi","Wra","Xy","Xis","Ya","Yr","Zen","Zof"];
                var f2 = ["birith","bis","bith","coria","cys","dalynn","drish","drith","faeth","fyire","gil","gissa","gwen","hime","hymm","karyn","kira","larys","liann","lyassa","meila","myse","norae","nys","patys","pora","qorel","qwen","rann","riel","rina","rinn","rish","rith","saadi","shann","sira","thibra","thyra","vayla","vyre","vys","wophyl","wyn","xiris","xora","yassa","yries","zita","zys"];
                if (gender == "female")
                {
                    out += RandomArrayItem(f1) + RandomArrayItem(f2);
                }
                else
                {
                    out += RandomArrayItem(m1) + RandomArrayItem(m2);
                }

                //var draconic = ["sho","ga","ran","kul","te","rin","thu","nox","pal","foo","gip","nuz","jep","mid","let","hun","si","ma","an",];
                //
                //genlength = (genlengthOverride > 0 ? genlengthOverride : getRandomInt(3, 5));
                //for (var i = genlength; i > 0; i--)
                //{
                //    out += RandomArrayItem(draconic);
                //}
            }
            break;

            case "orc": case "ork":
            case "ogre": case "oger":
            case "goblin": case "gob": case "hobgoblin": case "moblin":
            {
                var ork = ["va", "gru", "gad", "ab", "bas", "pr", "ik", "da", "rok", "yeg", "ig", "goth", "zu", "gar", "od", "yam", "sar", "kug", "bul", "sho", "ob", "hag", "nurl", "nit", "bilge", "urg", "ig", "sla", "lug", "zob", "glum", "grog", "mar", "kar"];

                genlength = (genlengthOverride > 0 ? genlengthOverride : getRandomInt(2, 3));
                for (var i = genlength; i > 0; i--)
                {
                    out += RandomArrayItem(ork);
                }
            }
            break;

            // random
            default:
            {
                // http://www.auburn.edu/academic/education/reading_genie/spellings.html
                var phoneme = ["A","a","b","k","d","E","e","f","g","h","I","i","j","l","m","n","O","o","p","kw","r","s","t","U","u","v","w","ks","y","z","OO","oo","oi","ou","aw","ar","sh","hw","ch","th","ng","zh","er"];
                var phoneme_consonants = ["b", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z"];
                var phoneme_vowels = ["a", "ay", "e", "ey", "i", "iy", "o", "oa", "ou", "ew", "yu", "eu", "oi", "ow"];
                var phoneme_diagraphs = ["zh", "ch", "sh", "th", "ng"];

                //var phonemes = [];
                //phonemes.push(phoneme_consonants);
                //phonemes.push(phoneme_vowels);
                //phonemes.push(phoneme_diagraphs);

                // start with a consonant
                //out += RandomArrayItem(phoneme_consonants);
                //out += RandomArrayItem(phoneme_vowels);
                //out += RandomArrayItem(phoneme_diagraphs);
                
                genlength = (genlengthOverride > 0 ? genlengthOverride : getRandomInt(1, 3));
                for (var i = genlength; i > 0; i--)
                {
                    out += RandomArrayItem(phoneme_consonants);
                    out += RandomArrayItem(phoneme_vowels);
                    out += RandomArrayItem(phoneme_diagraphs);
                }
            }
            break;
        }

        return out;
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
