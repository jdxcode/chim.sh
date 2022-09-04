# Hooks

Hooks are a way to run custom logic at various points in the lifecycle of a chim. They can 
change the behavior of the chim in various ways.

They should use stderr for user-facing output—stdout is reserved for various reasons in each hook.

If any chim exits with non-zero code, the execution is stopped and that exit code is returned. 
Like the [file fetcher](/docs/fetchers/file), the paths are relative to the directory of the 
chim—not `$PWD`.

All shims are called with `$CHIM_ARGS` containing the arguments that will be passed to the 
platform binary.

For this article, assume a chim like the following:

```toml title="bin/mytool"
#!/usr/bin/env chim

pre_fetch = './.mytool-pre-fetch'
pre_extract = './.mytool-pre-extract'
pre_execute = './.mytool-pre-execute'
post_execute = './.mytool-post-execute'

[linux-x64]
url = 'https://mytool.com/mytool-v0.1.0-linux-x64.tar.xz'
path = 'bin/mytool'
[macos-arm64]
url = 'https://mytool.com/mytool-v0.1.0-macos-arm64.tar.xz'
path = 'bin/mytool'
```

### `pre_fetch: string`

Runs before the archive is fetched. Called with `$CHIM_URL` which is the URL to download from.

If the hook prints output to stdout, it's assumed to be a new, different URL that will be used 
instead.

### `pre_extract: string`

Runs before the archive is extracted. Called with `$CHIM_BIN_PATH` which is the full binary path
to be executed.

### `pre_execute: string`

Runs before a command is executed. Called with `$CHIM_BIN_PATH` which is the full binary path
to be executed.

### `post_execute: string`

This hook is called after the platform binary has been executed and returned.
