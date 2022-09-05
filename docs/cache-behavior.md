# Cache Behavior

## Cache Directory

The cache directory is where chim stores all the binaries it fetches. On Linux, it is by default
`$HOME/.cache/chim` on macOS it will be `$HOME/Library/Caches/chim`. It respects
[`$XDG_CACHE_HOME`](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html).

It can also be more directly configured by setting the `$CHIM_CACHE_DIR` environment variable.

See [how it works](/docs/how-it-works) for more on how this directory is populated.
