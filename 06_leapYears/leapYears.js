const leapYears = function(y) {
    if (typeof y != "number")
        return 'ERROR';
    return !!(!(y % 400) || (!(y % 4) && y % 100));
};

// Do not edit below this line
module.exports = leapYears;
