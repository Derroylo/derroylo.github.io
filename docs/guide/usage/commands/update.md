# Update Command

The purpose of the update command is to install the latest version of GPT if there is a newer version available. GPT itself will check every 4 hours if there is a new version available and inform you.

::: info
Versions prior 0.4.1 had an error in the update script which prevented that an update could be made to GPT. The program says the update has been successful even if it wasn´t. If you installed GPT within the workspace image, then it is the easiest way to rebuild the workspace image. This can be easy done by calling the url given in the [Gitpod documentation](https://www.gitpod.io/docs/configure/workspaces/workspace-image#manually-rebuild-a-workspace-image)
:::

## Pre-Release Versions <Badge type="info" text="since v0.4.0" />
If you want to test versions that are not ready yet for productive usage, you can activate it with a settings in the `.gpt.yml` file. [See reference](/reference/config.html)