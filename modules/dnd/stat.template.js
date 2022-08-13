with(DeepSeed){RegisterTemplate({
    ID :     "dnd_stat",
    Tags :    ["dnd_stat", "stat"],
    Renderer : "dnd_stat",
    Data : function(options){
        /////////////////////////////////////////////////////////////////////////
        // your stuff goes below here
        /////////////////////////////////////////////////////////////////////////
        function D(x)
        {
            return getRandomInt(1,x);
        }

        function GetHighest(aArray)
        {
            let x = Math.max(...aArray); // the triple dots is called a spread (...) 
            console.log("X: "+x);
            return x;
        }

        // remove all entries matching the lowest value
        function removeSmallest(arr) {
            var min = Math.min(...arr);
            return arr.filter((e) => {return e != min});
        }

        // remove the single lowest value
        function removeSingleSmallest(array)
        {
            var min = Math.min(...array);
            var killindex = -1;
            var removed = null;
            for(var i = 0; i < array.length; i++)
            {
                if (array[i] == min)
                {
                    killindex = i;
                    break;
                }
            }
            if (killindex >= 0)
            {
                //console.log(array);
                removed = array.splice(killindex,1);
                //console.log(array);
            }
            return removed;
        }
        
        var _rolls = [];
        _rolls.push(D(6)); // rolld some dice
        _rolls.push(D(6)); // rolld some dice
        _rolls.push(D(6)); // rolld some dice
        _rolls.push(D(6)); // rolld some dice

        var d = _rolls.slice(); // copy array
        var s = removeSingleSmallest(d); 
        var r = d.reduce((a, b) => a + b, 0); // tally remainder

        return r;

        /////////////////////////////////////////////////////////////////////////
        // your stuff goes above here
        /////////////////////////////////////////////////////////////////////////
    }
})};
