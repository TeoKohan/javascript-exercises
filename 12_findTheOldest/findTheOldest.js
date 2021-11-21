const findTheOldest = function(A) {
    return A.reduce((oldest, item) => {
        if (getAge(item) > getAge(oldest))
            return item;
        return oldest;
    }, A[0])
};

const getAge = function(o) {
    return Math.abs((o.yearOfDeath ?? new Date().getFullYear()) - o.yearOfBirth);
};

// Do not edit below this line
module.exports = findTheOldest;
