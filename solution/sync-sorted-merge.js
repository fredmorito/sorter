"use strict";

// Print all entries, across all of the sources, in chronological order.

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

    console.table(logs);

    return console.log("Sync sort complete.");
};
