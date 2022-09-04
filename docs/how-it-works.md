# How does chim work?

Chim has 3 phases:

* Parse chim
* Fetch the archive/binary
* Execute the binary

## Parse chim

Under the hood when you execute a shebang file, it will call chim with the chim file as the first 
argument. For example, if we had a chim in `./bin/shellcheck` and executed it:

```toml title="bin/shellcheck"
#!/usr/bin/env chim
[linux-arm64]
url = 'https://github.com/koalaman/shellcheck/releases/download/v0.8.0/shellcheck-v0.8.0.linux.aarch64.tar.xz'
path = 'shellcheck-v0.8.0/shellcheck'
checksum = '9f47bbff5624babfa712eb9d64ece14c6c46327122d0c54983f627ae3a30a4ac'
```

```
./bin/shellcheck --version
```

Under the hood, your shell will call chim like this (in fact you can manually call it like this 
too):

```
chim ./bin/shellcheck --version
```

Next, chim parses the chim as TOML and figures out which fetcher it should use based on the 
protocol of the URL. If we used `https:` for example, we'd dispatch to the [http fetcher](/docs/fetchers/http).

We note that the url ends in `tar.xz` and set `archive_format` to `tar.xz`. chim will know to 
extract this archive and run the binary inside of it—as opposed to if we were fetching a binary 
directly.

## Fetch the archive/binary

Now that we know we're using http and have a URL, we check if we've already fetched the tarball 
archive. For that, we hash the URL and check if a directory exists in the cache directory with 
that name. For example, "https://github.com/koalaman/shellcheck/releases/download/v0.8.
0/shellcheck-v0.8.0.linux.aarch64.tar.xz" might hash to "08ee8fbc18ca03802cd" so we would use 
`~/.cache/chim/08ee8fbc18ca03802cd` as the base of the extracted tarball.

If it does not exist we do the following:

* Download tarball from github.com
* Verify checksum (if specified in chim)
* Extract to `~/.cache/chim/08ee8fbc18ca03802cd`


## Diagram

Here's a flow chart of a chim execution:

![](/img/chim-flowchart.png)
