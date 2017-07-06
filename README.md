# Webapp load error checker
This Node.js application checks whether a given HTML file has load errors.


## Usage
```
node ./load_errors <file> <timeout>
```

File is the location of the HTML file. Timeout is the number of ms that should be waited before closing (larger numbers for slower computers).

Returns _yes_, _no_ or _maybe_ (if it couldn't open the file).
