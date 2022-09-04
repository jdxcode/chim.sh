# HTTP Fetcher

Downloads tarballs/binaries over HTTP(S).

## Example

```toml title=bin/node
#!/usr/bin/env chim
[macos-arm64]
url = 'https://nodejs.org/dist/v18.7.0/node-v18.7.0-darwin-arm64.tar.gz'
path = 'node-v18.7.0-darwin-arm64/bin/node'
checksum = 'ea24b35067bd0dc40ea8fda1087acc87672cbcbba881f7477dbd432e3c03343d'

[linux-x64]
url = 'https://nodejs.org/dist/v18.7.0/node-v18.7.0-linux-x64.tar.xz'
path = 'node-v18.7.0-linux-x64/bin/node'
checksum = '8bc6a1b9deaed2586d726fc62d4bee9c1bfc5a30b96c1c4cff7edd15225a11a2'
```

## How it Works

chim will first check if it has already downloaded the archive by checking the cache directory. The URL is sha256 hashed and put into the cache directory (e.g.: `~/.cache/chim/xxx`)—this way binaries that share tarballs (like npm and node) will share cache.

If the cache does not exist, chim will download the tarball, verify the checksum (if provided), extract it into the cache directory, and execute the platform-specific binary specified in `path`.

## Configuration

These are configuration options available in a chim:

* **url** – http/https URL to download the archive/file from.
* **path** – the binary's path within the extracted archive.
* **checksum** – an optional checksum to verify the tarball is complete and not tampered with.
* **archive** – the archive type, autodetected from filename. Override options:
  * **`"tar.gz"/"tgz"`**
  * **`"tar.xz"/"txz"`**
  * **`"tar.bz2"/"tbz2"`**
  * **`"zip"`**
  * **`"gz"`**
  * **`"xz"`**
  * **`"bz2"`**
  * **`false`** – disables archive support and just downloads the binary directly.

### netrc

A [netrc](https://www.gnu.org/software/inetutils/manual/html_node/The-_002enetrc-file.html) file may be used for authentication, e.g.:

```netrc
machine example.com login daniel password qwerty
```
