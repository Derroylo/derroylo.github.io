::: danger
This Documentation is currently being rewritten for WebDev, which is the successor of GPT (for which this docs have been written), as Gitpod Classic will be shutdown in the next few weeks.

The Release of WebDev is currently planned within the first two weeks of september.
:::

# Sync Commands <Badge type="info" text="since v0.5.0" />

::: danger
This command will be available in v0.5.0-alpha.1 and is not yet ready for production

The documentation is also WIP and not finished yet.
:::

This command allows you to connect your current machine (this could be a workspace or your local machine) to a workspace and synchronize a folder.

## Workspace

Execute the command `gpt sync workspace` to connect to a workspace. First it will check if you have `rclone` and `inotifywait` installed as both are required for this function. If you don´t have them installed, you can choose to install them now and `gpt` will do it for you. Afterwards you need to enter the connection data for the workspace you want to connect to. These can be found when you go to your workspace overview, click on the three dots on the right, select `Connect via SSH` and use the connection data from the tab "access token". 