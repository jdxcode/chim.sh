# Windows Support

Chim works on Windows but has some caveats. First, Windows doesn't use shebangs so you'll
need to add a `.bat` shim in front of chim. For example, if you have a `bin/node` chim
then you'd need a corresponding `bin/node.bat` shim:

```batch
@echo off
chim "%~dp0\node" %* ; Runs `chim .\node`
EXIT /B %ERRORLEVEL% ; Return the errorlevel of the last command
```
