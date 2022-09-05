# Installing chim

In order to use chims, the system needs the `chim` binary to be installed. Use one of these methods to install it.

### chimstrap

The chimstrap is a bootstrapping shell script that will download chim if it does not already exist. It's like chim for chim itself.

```
$ curl -o ./bin/chim https://chim.sh/chimstrap
$ chmod +x ./bin/chim
$ ./bin/chim --version
chim 1.0.0
```

:::tip
The chimstrap is great for including in a project alongside the other binaries so nobody has to install chim manually. It's the recommended installation method.
:::

### Homebrew

For macOS and Linux:

```sh-session
brew install jdxcode/tap/chim
```

### apt

For Ubuntu and Debian:

```sh-session
wget -qO - https://chim.sh/gpg-key.pub | gpg --dearmor | sudo tee /usr/share/keyrings/chim-archive-keyring.gpg 1> /dev/null
echo "deb [signed-by=/usr/share/keyrings/chim-archive-keyring.gpg arch=amd64] https://chim.sh/deb stable main" | sudo tee /etc/apt/sources.list.d/chim.list
sudo apt update
sudo apt install -y chim
```

:::caution
If you're on arm64 you'll need to run the following:

```sh-session
echo "deb [signed-by=/usr/share/keyrings/chim-archive-keyring.gpg arch=arm64] https://chim.sh/deb stable main" | sudo tee /etc/apt/sources.list.d/chim.list
```

:::

### dnf

For Fedora, CentOS, Amazon Linux, or other dnf-based systems:

```sh-session
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://chim.sh/rpm/chim.repo
dnf install -y chim
```

### yum

```sh-session
yum install -y yum-utils
yum config-manager --add-repo https://chim.sh/rpm/chim.repo
yum install -y chim
```

### Alpine AUR

```sh-session
git clone https://aur.archlinux.org/chim.git
cd chim
makepkg -si
```

### Tarball

Manually extract a tarball. See tarballs on the [releases page](https://github.com/jdxcode/chim/releases).

```sh-session
curl https://chim.sh/releases/chim-latest-macos-arm64.tar.xz | tar -xJ
./chim/bin/chim --version
```

### Cargo

Compile chim from source with the Rust toolchain:

```sh-session
cargo install chim
```

## Verifying Installation

Make sure you did it right:

```sh-session
$ chim --version
chim 1.0.0
```
