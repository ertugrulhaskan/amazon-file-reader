# amazon-file-reader

## Intended UI:

```
--------------------------------------------------
| file-1.txt |                                   |
| file-2.txt |                                   |
|            |                                   |
|            |                                   |
|            |           Choose a file           |
|            |                                   |
|            |                                   |
|            |                                   |
|            |                                   |
|            |                                   |
--------------------------------------------------
```

```
Files API available for use (you can assume these are available in the global namespace or by importing from a module when using a packaging mechanism)
```

### getFiles():

```
Returns a Promise that resolves to an array of
files:
  [
    "file-1.txt",
    "file-2.txt"
  ]
```

### getFileContents(filename):

```
returns a Promise that resolves  to the file contents.
```
