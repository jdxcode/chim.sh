# File Fetcher

The file fetcher is the simplest one. It just runs platform-specific binaries at a given path.

:::note
Arguably this isn't really a "fetcher" since it doesn't download or even copy anything. It just 
runs the platform-specific binary at the given path.
:::

Example:

```toml title="bin/shellcheck"
#!/usr/bin/env chim
[linux-x64]
# note that "." is in reference to this chim's directory, not $PWD
path = './.shellcheck-v0.8.0.linux.x86_64/shellcheck'
```

This can be useful if you don't want to fetch binaries from a remote source—or that is done in a 
different step outside chim. Unlike other fetchers, this one does not use any cache, it simply
runs the platform-specific binary at the given path.

## Full path support

```toml
path = '/opt/shellcheck/shellcheck-v0.8.0.linux.x86_64/shellcheck'
```
