const sumAll = function(a, b) {
    if (typeof a != "number" || typeof b != "number" || a < 0 || b < 0)
        return 'ERROR';
    if (a > b)
        [a, b] = [b, a];
    return (b*(b+1))/2 - ((a-1)*(a))/2;
};

// Do not edit below this line
module.exports = sumAll;
