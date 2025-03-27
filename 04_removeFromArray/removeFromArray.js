const removeFromArray = function(array, ...args) {
    for ( let i = 0 ; i < args.length; i++)
        {
            index = array.indexOf(args[i]);
            last = array.includes(args[i]);
            if (index !== -1)
            {
                while (last === true)
                {
                  array.splice(index, 1);
                  last = array.includes(args[i]); 
                }
            }
        }
        return array;
};

// Do not edit below this line
module.exports = removeFromArray;
