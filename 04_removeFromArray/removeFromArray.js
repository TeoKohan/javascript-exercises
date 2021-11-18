const removeFromArray = function(A, es) {
    let res = [];
    for (let i = 0; i < A.length; ++i) {
        let j = 1;
        while (j < arguments.length && A[i] !== arguments[j])
            ++j;
        if (j == arguments.length)
            res.push(A[i]);
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
