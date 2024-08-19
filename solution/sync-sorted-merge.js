"use strict";

const { addLog } = require('./utils');

module.exports = (logSources, printer) => {

    let logs = [];

    while (logSources.length > 0) {

        for (let sourceIndex = 0; sourceIndex < logSources.length; sourceIndex++) {

            const currentSource = logSources[sourceIndex];
            const sourceLog = currentSource.pop();

            if (logs.length === 0) {
                logs = [sourceLog];
                break;
            }

            if (sourceLog === false) { // No need to check anymore
                logSources.splice(sourceIndex, 1);
                break;
            }

            logs = addLog(logs, sourceLog, logs.length - 1);
        }
    }

    // The Printer can't be called on every iteration because logs can be resorted at any moment
    // Calling just to check the sorting
    for (let counter = 0; counter < logs.length; counter++) {
        printer.print(logs[counter]);
    }

    printer.done();

    return console.log("Sync sort complete.");
};
