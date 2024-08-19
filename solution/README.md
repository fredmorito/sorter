## Notes

### What is done?
- Both sync and async flows covered.

### What is missing?
- Fix the printer implementation.
- Enhance the solution to support higher numbers of sources/logs.
- Modularize other parts of the solution to make the code more readable.

### Caveats
- The `printer` object serves only for validation purposes.
- The max amount of sources before throwin "maximun call stack trace exceeded" was 120. There are other techniques to avoid such errors, like processing batches before calling process.nextTick for example.
- Even though the implementation works well, I thought about other solutions that might add extra complexity to the algorithm, yet letting to reduce the memory consumption.