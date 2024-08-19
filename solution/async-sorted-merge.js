"use strict";

const bluebird = require("bluebird");

const { addLog } = require('./utils');

const processPromises = function (sources, logs) {

    const promises = sources.map(function(eachSource) {
        return eachSource.popAsync();
    });
    
    return Promise.all(promises)
    .then(partialLogs => partialLogs.filter(eachLog => eachLog !== false))
    .then(results => ({ results, reducedSources: sources }))
    .then(({ results, reducedSources }) => {
        
        const newLogs = bluebird.reduce(results, (acc, curr) => {
            
            if (acc.length === 0) {
                acc.push(curr);
                return acc;
            }

            return addLog(acc, curr, acc.length - 1);
        }, logs);

        if (results.length > 0) {
            return processPromises(reducedSources, newLogs);
        }

        return newLogs;
    });
};

module.exports = (logSources, printer) => {
    
    return new Promise(async (resolve) => {
        
        processPromises(logSources, [])
        .then(logs => {
            // The Printer can't be called on every iteration because logs can be resorted at any moment
            // Calling just to check the sorting
            for (let counter = 0; counter < logs.length; counter++) {
                printer.print(logs[counter]);
            }
            
            printer.done();
            
            resolve(console.log("Async sort complete."));
        });
    });
};
