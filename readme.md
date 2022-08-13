[Live Version](https://bradenwentworth.github.io/DeepSeed/)

# DeepSeed
A highly customisable and extendable generation tool.

Initially I created this tool around 2018 to help generate NPCs for Dungeons and Dragons, but there is no reason why it can't be used for far more than that.

# How does it work?
DeepSeed uses modules consisting of `*.template.js`, `*.renderer.js` and `*.renderer.css` files to generate your outputs and make it presentable.

When you execute a template it will run all the code in that template including generating any other referenced templates, then it runs the associated renderer to output something sensible to your screen.
This way you can have a custom renderer for seperate sections of generated content, for example you can generate some personality traits for a character and have them listed out, and then generate a stat block and render those in a grid.

This system works almost entierly in just html and javacript so it can easily be run as a standalone without any server requirements.
The only other part is the "online" version (index.php) which will automatically add any modules found in the modules folder, the standard "offline" version (index.html) will not do that.

If you want to add modules to the offline version you must edit the index.html file and add all of your files to the section of the code inbetween "Default Modules Begin" and "Default Modules End".
(So far it doesn't look like JS can take over the PHP code entierly due to most modern browsers having a security feature which is sandboxing any JS code and preventing them from accessing other files on your system even if you are running the JS locally)

# How do i use this thing?
Each template has a name, for example the default module has a template called `itemclass.template.js` inside you may notice the `ID` field, this is the ID used to call up this template by name.
So if you go to the template field in the live version and input `itemclass` and press run, it should run only the itemclass template and give you the results.

The `parameters` box is an advanced option where you can manually enter values and overrides that are used withthin various templates.
For example the npc template generates a race (halfling, human, elf, etc.) and if the template is setup correctly you can provide that value to the template via the parameters in the form of JSON.

For example if you use this as your parameters for the npc template, your npc will always generate an orc.

```
{"race":"orc"}
```

Internally this is how some templates can react to other previous generated outputs.
Again looking to the npc template as an example, the name field is generated based on the race.
So if you use the parameters from above to make your npc always generate an orc, it will always give you orc names.
