# What is chim?

Chim helps you make little shims to run platform-dependent binaries that can optionally be fetched from a remote
location.

## Use-case: shellcheck

Let's use an example: imagine you've got a project and you want to add
[shellcheck](https://github.com/koalaman/shellcheck) to lint some bash scripts. Maybe it's being called in a
git pre-commit hook, perhaps it's called from a `make lint` task, or maybe it's in a package.json script. In any 
case, the other people on your team now need to install yet another tool. How best could they get it?

### Possible Solutions
One solution would be to add shellcheck install instructions to the README. However now contributors have an extra 
step when they test their code locally. This also won't do anything to keep the version of shellcheck consistent
across everyone's machine.

You could have a Docker image that all development is done in that automatically installs shellcheck, but this is 
restrictive. Some devs may not want to work inside a container—I know I don't.

You could commit the shellcheck binary to the repo and have people execute it directly—potentially via [git-
lfs](https://git-lfs.github.com/) to keep the repo size under control. The trouble is shellcheck binaries are platform-dependent and won't work on 
different architectures.

You could add shellcheck binaries for all the possible platforms and write some bash script that figures out which 
os/architecture it's on and executes the binary—*this is essentially what chim does*.

### Example of using chim

Assuming chim is [installed](/docs/installing), simply create a chim:

```toml title="bin/shellcheck"
#!/usr/bin/env chim
[macos-arm64]
url = 'https://github.com/koalaman/shellcheck/releases/download/v0.8.0/shellcheck-v0.8.0.darwin.x86_64.tar.xz'
path = 'shellcheck-v0.8.0/shellcheck'
checksum = 'e065d4afb2620cc8c1d420a9b3e6243c84ff1a693c1ff0e38f279c8f31e86634'

[linux-x64]
url = 'https://github.com/koalaman/shellcheck/releases/download/v0.8.0/shellcheck-v0.8.0.linux.x86_64.tar.xz'
path = 'shellcheck-v0.8.0/shellcheck'
checksum = 'ab6ee1b178f014d1b86d1e24da20d1139656c8b0ed34d2867fbb834dad02bf0a'

[windows-x64]
url = 'https://github.com/koalaman/shellcheck/releases/download/v0.8.0/shellcheck-v0.8.0.zip'
path = 'shellcheck-v0.8.0/shellcheck.exe'
checksum = '2a616cbb5b15aec8238f22c0d62dede1b6d155798adc45ff4d0206395a8a5833'
```

Then execute it:

```shell-session
$ chmod +x bin/shellcheck
$ ./bin/shellcheck --version
ShellCheck - shell script analysis tool
version: 0.8.0
license: GNU General Public License, version 3
website: https://www.shellcheck.net
```

Now you can commit this tiny file to your project and whether people are on macOS or Linux they'll be able to use 
shellcheck! It will automatically fetch the tarball into a cache directory if it doesn't already have it.

:::tip
https://direnv.net/ is a great way to add `./bin` to `$PATH` automatically
:::

## Why is this helpful?

Chims don't require consumers to run a separate installation step to install the tools or update 
them they're upgraded. The files are tiny and can work on all platforms.

If your team has many projects, as long as the fetchers are defined in the same way, it will 
reuse cache across projects. For example, if chim is used to fetch node-v18.1.2 in many projects 
it will only fetch it once and store it in system-level cache.

As a more advanced use-case, if you run a platform where many apps have different dependencies, 
chim is helpful since it will only fetch each dependency when it is called and cache it for 
later calls even if they come from a different application on the same machine. For 
container-based platforms, all you need to do is provide a volume to the container to store the 
cache in—otherwise the cache would die inside the container. It simplifies setup (no install 
step) while also being efficient (only fetch what we need, when we need it, and share it via cache).
