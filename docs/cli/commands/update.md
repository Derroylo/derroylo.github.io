# Update Command

This command will check if there is a newer version available, and if yes, will update to the latest version. Before updating, make sure to check the release notes for any breaking changes.

When running the webdev command, it will also check for newer versions and show if there is a newer version available.

::: info
To prevent spamming the github api, the check for a newer version, will be cached for 4 hours. When executing this command, the cache will be ignored.
:::

## Pre-Release Versions
If you want to test versions that are not ready yet for productive usage, you can activate it with a settings in the `.webdev.yml` file. [See reference](/reference/webdev_yml/config)

## Troubleshooting
### WebDev says no update is available even though there is one
As mentioned above, the version cache will be valid for around 4 hours. So it can happen that there has just been a new version released but the tool is using it´s cache.

Simply remove the cache file and try again:

`rm $HOME/webdev/releases.json`

### Update didn´t work
If for some reasons the update didn´t work, you can still update it manually

#### Manually download the new version
- Find the version you want to use from the [Release](https://github.com/Derroylo/webdev-tool/releases) page. Click on the assets link and copy the link to the file "webdev-tool.zip"
- Open your terminal and execute the command `wget <file-link>` to download the release
- Extract the archive with `unzip gitpod-tool.zip -d ~/webdev/` and overwrite any existing file
- Verify that it worked with executing `webdev` in the terminal. It should show now the downloaded version.