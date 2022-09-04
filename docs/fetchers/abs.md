# Azure Blob Storage Fetcher

Download binaries with Azure Blob Storage. This depends on the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli).

## Example

```toml title=bin/node
#!/usr/bin/env chim

[darwin-aarch64]
url = 'abs://myaccount.blob.core.windows.net/mycontainer/node-v18.8.0-darwin-arm64.tar.xz'
path = 'node-v18.8.0-darwin-arm64/bin/node'
checksum = 'sha256:ea24b35067bd0dc40ea8fda1087acc87672cbcbba881f7477dbd432e3c03343d'

[linux-x64]
url = 'abs://myaccount.blob.core.windows.net/mycontainer/v18.8.0/node-v18.8.0-linux-x64.tar.gz'
path = 'node-v18.8.0-linux-x64/bin/node'
checksum = 'sha256:8bc6a1b9deaed2586d726fc62d4bee9c1bfc5a30b96c1c4cff7edd15225a11a2'
```
