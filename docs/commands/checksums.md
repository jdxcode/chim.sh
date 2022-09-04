# `chim checksums`

`chim checksums` - add/update the checksums in a given chim.

## Usage

```
chim checksums <CHIM_FILE>
```

## Description

This command will fetch the files in the URLs in the chim and update the checksums.
This is helpful for changing the version of a tool since it will fetch the files for
all the platforms—not just the currently running platform.

## Options

```
ARGS:
    <CHIM_FILE>    The path to the chim file to update
```

## Example

Given a chim file without checksums:

```toml title="bin/node"
#!/usr/bin/env chim
[macos-arm64]
url = 'https://nodejs.org/dist/v18.7.0/node-v18.7.0-darwin-arm64.tar.gz'
path = 'node-v18.7.0-darwin-arm64/bin/node'

[linux-x64]
url = 'https://nodejs.org/dist/v18.7.0/node-v18.7.0-linux-x64.tar.xz'
path = 'node-v18.7.0-linux-x64/bin/node'
  
[windows-x64]
url = 'https://nodejs.org/dist/v18.7.0/node-v18.7.0-win-x64.zip'
path = 'node-v18.7.0-win-x64\node.exe'
```

We run `chim checksums bin/node` and the file is updated to:

```toml title="bin/node"
#!/usr/bin/env chim
[macos-arm64]
url = 'https://nodejs.org/dist/v18.7.0/node-v18.7.0-darwin-arm64.tar.gz'
path = 'node-v18.7.0-darwin-arm64/bin/node'
checksum = 'sha256:ea24b35067bd0dc40ea8fda1087acc87672cbcbba881f7477dbd432e3c03343d'

[linux-x64]
url = 'https://nodejs.org/dist/v18.7.0/node-v18.7.0-linux-x64.tar.xz'
path = 'node-v18.7.0-linux-x64/bin/node'
checksum = 'sha256:8bc6a1b9deaed2586d726fc62d4bee9c1bfc5a30b96c1c4cff7edd15225a11a2'

[windows-x64]
url = 'https://nodejs.org/dist/v18.7.0/node-v18.7.0-win-x64.zip'
path = 'node-v18.7.0-win-x64\node.exe'
checksum = 'sha256:9c0abfe32291dd5bed717463cb3590004289f03ab66011e383daa0fcec674683'
```

If there were existing checksums they would have been overwritten.
