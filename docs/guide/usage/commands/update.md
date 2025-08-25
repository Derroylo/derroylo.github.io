::: danger
This Documentation is currently being rewritten for WebDev, which is the successor of GPT (for which this docs have been written), as Gitpod Classic will be shutdown in the next few weeks.

The Release of WebDev is currently planned within the first two weeks of september.
:::

# Update Command

The purpose of the update command is to install the latest version of GPT if there is a newer version available. GPT itself will check every 4 hours if there is a new version available and inform you.

::: info
Versions prior 0.4.2 had an error in the update script which prevented that an update could be made to GPT. The program says the update has been successful even if it wasn´t. Follow the "Update didn´t work" instructions in the Troubleshooting section on this page.
:::

## Pre-Release Versions <Badge type="info" text="since v0.4.0" />
If you want to test versions that are not ready yet for productive usage, you can activate it with a settings in the `.gpt.yml` file. [See reference](/reference/config.html)

## Troubleshooting
### GPT says no update is available even though there is one
If the new version has just been released or you have switched to pre-releases, then it can be that GPT says that there are no updates available as he will only check every 4 hours if there is a new version available. Without this limit there could be too much requests against the github api and could result in a temporary access block to the api.

Simply remove the cache file with one of these commands and try again:

`rm /home/gitpod/.gpt/releases.json`

or

`rm /workspace/.gpt/releases.json`

### Update didn´t work
Some older versions of GPT had an error in the update script which caused that the update didn´t work even when he said it was successful.

#### Update the docker image (works only for stable releases)
The easiest way would be to update the docker image as described in the [Gitpod documentation](https://www.gitpod.io/docs/configure/workspaces/workspace-image#manually-rebuild-a-workspace-image).

#### Manually download the new version
- Find the version you want to use from the [Release](https://github.com/Derroylo/gitpod-tool/releases) page. Click on the assets link and copy the link to the file "gitpod-tool.zip"
- Open your workspace terminal and execute the command `wget <file-link>` to download the release
- Execute the command `mkdir -p /workspace/.gpt`
- Copy the downloaded release file to the newly created folder `cp gitpod-tool.zip /workspace/.gpt/`
- Extract the archive with `unzip /workspace/.gpt/gitpod-tool.zip -d /workspace/.gpt/` and overwrite any existing file
- Verify that it worked with executing `gpt` in the terminal. It should show now the downloaded version.

In case it doesn´t show the new version then you have an older version of gpt that is located in the folder `/home/gitpod/.gpt` and doesn´t allow other locations. This has the disadvantage that installing newer version will not be persisted and you have the old version again after workspace restart. You should then update dockerimage first, as described above.