# Configuration

## chim options

This is an exhaustive list of options available within chims.

### `[(OS)-(ARCH)]: platform`

Defines configuration for a specific platform (e.g.: `macos-arm64`). Note that `macos-x64` will
be used on M1 macs if no `macos-arm64` is specified.

:::tip
Most configuration options can be specified at the top-level to provide defaults across all
platforms.

For example if we had a tarball that contained binaries for both macOS and Linux we can share
the url:

```toml
#!/usr/bin/env chim
url = 'https://mytool.com/mytool-v0.1.0.tar.xz'
[linux-x64]
path = './linux-x64/mytool'
[macos-arm64]
path = './macos-arm64/mytool'
```

_Of course this isn't a great idea since it increases the download size significantly. We still support
it though since I'm sure someone will want it to work this way._
:::

### `url: string`

This is different based on fetcher, but for HTTP chims (for example) this would define the URL
of the tarball the binary is contained in.

### `path: string`

The path to the binary within an archive (may be slightly different based on fetcher used).

### `execvp: bool`

_default: true_

Set to `false` to disable `execvp()` when running the binary and run the platform binary in a subprocess to chim. (`execvp()` is not support on Windows and will never be used regardless of this setting.)

### `pre_fetch: string`

### `pre_extract: string`

### `pre_execute: string`

### `post_execute: string`

Described in [hooks](/docs/hooks).

## Environment variables

Here is an exhaustive list of the configuration options available via env vars.

### `$CHIM_DEBUG`

_default: 0_

Set to `1` to enable debug output about what chim is doing. (Shorthand for `$CHIM_LOG_LEVEL=debug`).

### `$CHIM_QUIET`

_default: 0_

(Very) occasionally chim will output messages on stderr (for instance, when pruning is done). Set
this to `1` disable this behavior. Error messages, however, will always be displayed regardless of this setting.
(Shorthand for `$CHIM_LOG_LEVEL=error`)

### `$CHIM_LOG_LEVEL`

_default: info_

See more or less log output about what chim is doing.

Levels:

- trace
- debug
- info
- warn
- error

### `$CHIM_CACHE_DIR`

Customize the chim [cache directory](/docs/cache-behavior).

### `$CHIM_EXECVP`

_default: 1_

Set to `0` to disable `execvp()` when running the binary and run the platform binary in a subprocess to chim. (`execvp()` is not support on Windows and will never be used regardless of this setting.)
