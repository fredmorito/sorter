## Notes


### What is done?
- Both sync and async flows covered.

### Caveats
- The `printer` object serves only for validation purposes. I would have really liked to fix, but didn't want to do it to avoid taking 
- The max amount of sources before throwin "maximun call stack trace exceeded" was 120. There are other techniques to avoid such errors, like processing batches before calling process.nextTick for example.
- Even though the implementation works well, I thought about other solutions that might add extra complexity to the algorithm, yet letting to reduce the memory consumption.