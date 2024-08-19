"use strict";

// Print all entries, across all of the sources, in chronological order.

const sorter = function (a, b) {
    return a.date > b.date ? 1 : -1;
};

module.exports = (logSources, printer) => {

    const logs = [];

    while (logSources.length > 0) {

        for (let sourceIndex = 0; sourceIndex < logSources.length; sourceIndex++) {

            const currentSource = logSources[sourceIndex];
            const sourceLog = currentSource.pop();

            if (sourceLog === false) {
                logSources.splice(sourceIndex, 1);
                break;
            }

            logs.push(sourceLog);
        }
    }

    // Just make it work.
    logs.sort(sorter);

    console.table(logs);

    for (let counter = 0; counter < logs.length; counter++) {
        const element = logs[counter];
        printer.print(element);
    }

    printer.done();

    /*

    ***********************************
    Logs printed:		 23879
    Time taken (s):		 0.36
    Logs/s:			 66330.55555555556
    ***********************************

    */

    return console.log("Sync sort complete.");
};
