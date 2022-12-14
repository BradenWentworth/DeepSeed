with (DeepSeed) {
    RegisterTemplate({
        ID: "dnd_flaw",
        Tags: ["dnd_flaw", "flaw"],
        Renderer: "dnd_flaw",
        Data: function (options) {
            /////////////////////////////////////////////////////////////////////////
            // your stuff goes below here
            /////////////////////////////////////////////////////////////////////////

            // acolyte
            var r = [
                "Absent-minded: Preoccupied to the extent of being unaware of one`s immediate surroundings. Daydreaming, inattentive, oblivious, forgetful.",
                "Abusive: Characterised by the improper infliction of physical or psychological maltreatment towards another.",
                "Addicted: One who is addicted to a compulsive activity. Examples: gambling, drugs, sex.",
                "Aimless: Devoid of direction or purpose.",
                "Alcoholic: A person who drinks alcohol habitually and to excess.",
                "Anxious: Full of mental distress or uneasiness, because of fear of danger or misfortune; greatly worried; solicitous.",
                "Arrogant: Having or displaying a sense of overbearing self-worth or self-importance. Inclined to social exclusiveness, rebuffs the advances of people considered inferior.Snobbish.",
                "Audacious: Recklessly bold in defiance of convention, propriety, law, or the like; insolent; brazen, disobedient.",
                "Bad Habit: This is usually a repulsive personal habit. Examples: picks nose, spits tobacco, drools, bad body odour.",
                "Bigmouth: A loud-mouthed or gossipy person.",
                "Bigot: One who is strongly partial to one`s own group, religion, race, or politics and is intolerant of those who differ.",
                "Blunt: Characterised by directness in manner or speech; without subtlety or evasion. Frank, callous, insensitive, brusque.",
                "Bold: In a bad sense, too forward; taking undue liberties; over assuming or confident; lacking proper modesty or restraint; rude; impudent. Abrupt, brazen, cheeky, brassy, audacious.",
                "Callous: Hardened to emotions, rarely showing any form of it in expression. Unfeeling. Cold.",
                "Childish: Marked by or indicating a lack of maturity; puerile.",
                "Complex: An exaggerated or obsessive concern or fear.",
                "Cruel: Mean to anyone or anything, without care or regard to and feelings.",
                "Cursed: A person who has befallen a prayer for evil or misfortune, placed under a spell, or borne into an evil circumstance, and suffers for it. Damned.",
                "Dependent: Unable to exist, sustain oneself, or act appropriately or normally without the assistance or direction of another.",
                "Deranged: Mentally decayed. Insane. Crazy. Mad. Psychotic.",
                "Dishonest: Given to, or using, fraud, cheating; deceitful, deceptive, crooked, underhanded.",
                "Disloyal: Lacking loyalty. Unfaithful, perfidious, traitorous, treasonable.",
                "Disorder: An ailment that affects the function of mind or body.",
                "Disturbed: Showing signs or symptoms of mental or emotional illness. Confused, disordered, neurotic, troubled.",
                "Dubious: Fraught with uncertainty or doubt. Undecided, doubtful, unsure.",
                "Dyslexic: Affected by dyslexia, a learning disorder marked by impairment of the ability to recognise and comprehend written words.",
                "Egotistical: Characteristic of those having an inflated idea of their own importance. Boastful, pompous.",
                "Envious: Showing extreme cupidity; painfully desirous of another`s advantages; covetous, jealous.",
                "Erratic: Deviating from the customary course in conduct or opinion; eccentric: erratic behaviour. Eccentric, bizarre, outlandish, strange.",
                "Fanatical: Outlook or behaviour especially as exhibited by excessive enthusiasm, unreasoning zeal, or wild and extravagant notions on some subject.",
                "Fickle: Erratic, changeable, unstable: especially with regard to affections or attachments; capricious.",
                "Fierce: Marked by extreme intensity of emotions or convictions; inclined to react violently; fervid.",
                "Finicky: Excessively particular or fastidious; difficult to please; fussy. Too concerned with detail. Meticulous, fastidious, choosy, critical, picky, prissy, pernickety.",
                "Fixated: In psychoanalytic theory, a strong attachment to a person or thing, especially such an attachment formed in childhood or infancy and manifested in immature or neurotic behaviour that persists throughout life. Fetish, quirk, obsession, infatuation.",
                "Flirty: To make playfully romantic or sexual overtures; behaviour intended to arouse sexual interest. Minx. Tease.",
                "Gluttonous: Given to excess in consumption. Voracious, ravenous, wolfish, piggish, insatiable.",
                "Gruff: Brusque or stern in manner or appearance. Crusty, rough, surly.",
                "Gullible: Will believe any information given, regardless of how valid or truthful it is, easily deceived or duped.",
                "Hard: A person who is difficult to deal with, manage, control, overcome, or understand. Hard emotions, hard-hearted.",
                "Hedonistic: Pursuit of, or devotion to, pleasure, especially to the pleasures of the senses.",
                "Hoity-toity: Given to flights of fancy; capricious; frivolous. Prone to giddy behaviour, flighty.",
                "Humourless: The inability to find humour in things, and most certainly in themselves.",
                "Hypocritical: One who is always contradicting their own beliefs, actions or sayings. A person who professes beliefs and opinions for others that he does not hold.",
                "Idealist: One whose conduct is influenced by ideals that often conflict with practical considerations. One who is unrealistic and impractical, guided more by ideals than by practical considerations.",
                "Idiotic: Marked by a lack of intelligence or care; foolish or careless.",
                "Ignorant: Lacking knowledge or information as to a particular subject or fact. Showing or arising from a lack of education or knowledge.",
                "Illiterate: Unable to read and write.",
                "Immature: Emotionally undeveloped; juvenile; childish.",
                "Impatient: Unable to wait patiently or tolerate delay; restless. Unable to endure irritation or opposition; intolerant.",
                "Impious: Lacking piety and reverence for a god / gods and their followers.",
                "Impish: Naughtily or annoyingly playful.",
                "Incompetent: Unable to execute tasks, no matter the size or difficulty.",
                "Indecisive: Characterised by lack of decision and firmness, especially under pressure.",
                "Indifferent: Lacking enthusiasm for, or interest in, things generally, remaining calm and seeming not to care; a casual lack of concern. Having or showing little or no interest in anything; languid; spiritless.",
                "Infamy: Having an extremely bad reputation, public reproach, or strong condemnation as the result of a shameful, criminal, or outrageous act that affects how others view them.",
                "Intolerant: Unwilling to tolerate difference of opinion and narrow-minded about cherished opinions.",
                "Judgemental: Inclined to make and form judgements, especially moral or personal ones, based on one`s own opinions or impressions towards others / practices / groups / religions based on appearance, reputation, occupation, etc.",
                "Klutz: Clumsy. Blunderer.",
                "Lazy: Resistant to work or exertion; disposed to idleness.",
                "Lewd: Inclined to, characterised by, or inciting to lust or lechery; lascivious. Obscene or indecent, as language or songs; salacious.",
                "Liar: Compulsively and purposefully tells false truths more often than not. A person who has lied or who lies repeatedly.",
                "Lustful: Driven by lust; preoccupied with or exhibiting lustful desires.",
                "Masochist: The deriving of sexual gratification, or the tendency to derive sexual gratification, from being physically or emotionally abused. A willingness or tendency to subject oneself to unpleasant or trying experiences.",
                "Meddlesome: Intrusive in a meddling or offensive manner, given to meddling; interfering.",
                "Meek: Evidencing little spirit or courage; overly submissive or compliant; humble in spirit or manner; suggesting retiring mildness or even cowed submissiveness.",
                "Megalomaniac: A psycho-pathological condition characterised by delusional fantasies of wealth, power, or omnipotence.",
                "Naive: Lacking worldly experience and understanding, simple and guileless; showing or characterised by a lack of sophistication and critical judgement.",
                "Nervous: Easily agitated or distressed; high-strung or jumpy.",
                "Non-violent: Abstaining from the use of violence.",
                "Nosey: Given to prying into the affairs of others; snoopy. Offensively curious or inquisitive.",
                "Obsessive: An unhealthy and compulsive preoccupation with something or someone.",
                "Oppressor: A person of authority who subjects others to undue pressures, to keep down by severe and unjust use of force or authority.",
                "Overambitious: Having a strong excessive desire for success or achievement.",
                "Overconfident: Excessively confident; presumptuous.",
                "Overemotional: Excessively or abnormally emotional. Sensitive about themselves and others, more so than the average person.",
                "Overprotective: To protect too much; coddle.",
                "Overzealous: Marked by excessive enthusiasm for and intense devotion to a cause or idea.",
                "Pacifist: Opposition to war or violence as a means of resolving disputes. (Can double as a merit in certain cases)",
                "Paranoid: Exhibiting or characterised by extreme and irrational fear or distrust of others.",
                "Peevish: Expressing fretfulness and discontent, or unjustifiable dissatisfaction. Cantankerous, cross, ill-tempered, testy, captious, discontented, crotchety, cranky, ornery.",
                "Perfectionist: A propensity for being displeased with anything that is not perfect or does not meet extremely high standards.",
                "Pessimist: A tendency to stress the negative or unfavourable or to take the gloomiest possible view.",
                "Pest: One that pesters or annoys, with or without realising it. Nuisance. Annoying. Nag.",
                "Phobic: They have a severe form of fear when it comes to this one thing. Examples: Dark, Spiders, Cats.",
                "Practical: Level-headed, efficient, and unspeculative. No-nonsense.",
                "Predictable: Easily seen through and assessed, where almost anyone can predict reactions and actions of said person by having met or known them even for a short time.",
                "Pride: Filled with or showing excessive self-esteem and will often shirk help from others for the sake of pride.",
                "Rebellious: Defying or resisting some established authority, government, or tradition; insubordinate; inclined to rebel.",
                "Reckless: Heedless. Headstrong. Foolhardy. Unthinking boldness, wild carelessness and disregard for consequences.",
                "Remorseless: Without remorse; merciless; pitiless; relentless.",
                "Rigorous: Rigidly accurate; allowing no deviation from a standard; demanding strict attention to rules and procedures.",
                "Sadist: The deriving of sexual gratification or the tendency to derive sexual gratification from inflicting pain or emotional abuse on others. Deriving of pleasure, or the tendency to derive pleasure, from cruelty.",
                "Sadomasochist: Both sadist and masochist combined.",
                "Sarcastic: A subtle form of mockery in which an intended meaning is conveyed obliquely.",
                "Sceptic: One who instinctively or habitually doubts, questions, or disagrees with assertions or generally accepted conclusions.",
                "Seducer: Lead others astray, as from duty, rectitude, or the like; corrupt. To attempt to lead or draw someone away, as from principles, faith, or allegiance.",
                "Selfish: Concerned chiefly or only with oneself.",
                "Self-Martyr: One who purposely makes a great show of suffering in order to arouse sympathy from others, as a form of manipulation, and always for a selfish cause or reason.",
                "Self-righteous: Piously sure of one`s own righteousness; moralistic. Exhibiting pious self-assurance. Holier-than-thou, sanctimonious.",
                "Senile: Showing a decline or deterioration of physical strength or mental functioning, especially short-term memory and alertness, as a result of old age or disease.",
                "Shallow: Lacking depth of intellect or knowledge; concerned only with what is obvious.",
                "Smart Ass: Think they know it all, and in some ways they may, but they can be greatly annoying and difficult to deal with at times, especially in arguments.",
                "Soft-hearted: Having softness or tenderness of heart can lead them into trouble; susceptible to pity or other kindly affection. They cannot resist helping someone they see in trouble, suffering, or in need, and often don`t think of the repercussions or situation before doing so.",
                "Solemn: Deeply earnest, serious, and sober.",
                "Spineless: Lacking courage. Cowardly, wimp, lily-livered, gutless.",
                "Spiteful: Showing malicious ill will and a desire to hurt; motivated by spite; vindictive person who will look for occasions for resentment. Vengeful.",
                "Spoiled: Treated with excessive indulgence and pampering from earliest childhood, and has no notion of hard work, self-care or money management; coddled, pampered. Having the character or disposition harmed by pampering or over-solicitous attention.",
                "Squeamish: Excessively fastidious and easily disgusted.",
                "Stubborn: Unreasonably, often perversely unyielding; bull-headed. Firmly resolved or determined; resolute.",
                "Superstitious: An irrational belief arising from ignorance or fear from an irrational belief that an object, action, or circumstance not logically related to a course of events influences its outcome.",
                "Tactless: Lacking or showing a lack of what is fitting and considerate in dealing with others.",
                "Temperamental: Moody, irritable, or sensitive. Excitable, volatile, emotional.",
                "Theatrical: Having a flair for over dramatising situations, doing things in a `big way` and loving to be `centre stage`.",
                "Timid: Tends to be shy and/ or quiet, shrinking away from offering opinions or from strangers and newcomers, fearing confrontations and violence.",
                "Tongue-tied: Speechless or confused in expression, as from shyness, embarrassment, or astonishment.",
                "Troublemaker: Someone who deliberately stirs up trouble, intentionally or unintentionally.",
                "Unlucky: Marked by or causing misfortune; ill-fated. Destined for misfortune; doomed.",
                "Unpredictable: Difficult to foretell or foresee, their actions are so chaotic it`s impossible to know what they are going to do next.",
                "Untrustworthy: Not worthy of trust or belief. Backstabber.",
                "Vain: Holding, or characterised by, an unduly high opinion of their physical appearance. Lovers of themselves. Conceited, egotistic, narcissistic.",
                "Weak-willed: Lacking willpower, strength of will to carry out one`s decisions, wishes, or plans. Easily swayed.",
                "Withdrawn: Not friendly or Sociable. Aloof.",
                "Zealous: A fanatic.",
                "Jealous: feeling or showing an envious resentment of someone or their achievements, possessions, or perceived advantages.",
                "Manipulative: exercising unscrupulous control or influence over a person or situation.",
                "Greedy: Having or showing an intense and selfish desire for wealth or power, or having an excessive desire or appetite for food.",
                "Bad-tempered: Easily annoyed or made angry.",
                "Violent: Using or involving physical force intended to hurt, damage, or kill someone or something.",
                "Prejudiced: Preconceived opinion that is not based on reason or actual experience. Dislike, hostility, or unjust behaviour deriving from preconceived and unfounded opinions.",
            ];

            return RandomArrayItem(r);

            /////////////////////////////////////////////////////////////////////////
            // your stuff goes above here
            /////////////////////////////////////////////////////////////////////////
        }
    })
};
