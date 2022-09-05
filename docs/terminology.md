# Terminology

### chims

A cross-platform binary configuration files. e.g.:

```toml title="bin/shellcheck"
#!/usr/bin/env chim
[macos-arm64]
url = 'https://nodejs.org/dist/v18.7.0/node-v18.7.0-darwin-arm64.tar.xz'
path = 'bin/node'

[linux-x64]
url = 'https://nodejs.org/dist/v18.7.0/node-v18.7.0-linux-x64.tar.xz'
path = 'bin/node'
```

### Fetcher

A customizable backend for downloading binaries (e.g.: http, s3, file).

### Platform

Generally refers to an os/arch pair. e.g.: macos-arm64, linux-x64, etc.

### Platform-binary

An executable binary that only runs on a particular os/arch pair. (e.g.: bin/node-macos-arm64,
bin/node-linux-x64, etc.)
