const addLog = function (array, newLog, indexToCompareAgainst) {

    if (Boolean(array[indexToCompareAgainst]) === false) {
        array.unshift(newLog);

        return array;
    }

    if (newLog.date > array[indexToCompareAgainst].date) {
        array.splice((indexToCompareAgainst + 1), 0, newLog);

        return array;
    }

    return addLog(array, newLog, (indexToCompareAgainst - 1));
};

module.exports = {
    addLog,
};