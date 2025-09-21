# Environment Variables

## Workspace folder

When insinde the devcontainer, the variable `WEBDEV_WORKSPACE_FOLDER` contains the current path to the htdocs root. It is used within the webdev tool to determine what the base folder is and is set via the `devcontainer.json`.

## DEVCONTAINER

This variable is also only set inside the devcontainer and tells the tool if it is running inside the container or outside of it. Depending on it, different commands are available. It is also defined via the `devcontainer.json`

## Disable Header

In some case, we don´t want to output the header of the tool, in that case the env variable `WEBDEV_DISABLE_HEADER` can be set and it will be shown when calling `webdev` in a console.