function getRandom()
{
    return Math.random();
}

function getRandomFloat(min, max)
{
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// get a random item from an array
function RandomArrayItem(aArray)
{
    return aArray[Math.floor(Math.random()*aArray.length)];
}