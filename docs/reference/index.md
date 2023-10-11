# Reference

In this section you can find references to different parts of this tool.

## .gpt.yml

::: info
This file needs to be located in the root directory of your project
:::

With this file you can customize the workspace settings without the need to adjust the dockerfile for each project if they are using for example different php versions. Also most settings can be changed via a gpt command and directly applied to the running workspace. It also helps to persist changes to php.ini or the installed packages or selected php version as those are lost after a workspace restart.

The file could look like this for example:

```yaml:line-numbers {1}
config:
  allowPreReleases: true
php:
  version: 8.0
  config:
    memory_limit: 512M
    max_execution_time: 100
  configWeb:
    memory_limit: 1G
  configCLI:
    xdebug.mode: off
    max_execution_time: 0
    memory_limit: 0
  packages:
  - php8.0-curl
  - php8.0-zip
nodejs:
  version: 20.0.0
services:
  active:
  - redis
  - phpmyadmin
shellScripts:
  additionalDirectories:
  - .devEnv/gitpod/scripts2
```

For an explanation of all the different settings, please take a look at the different section in the left menu.

A full integration into a gitpod workspace can be found in my workspace examples: https://github.com/Derroylo/shopware-workspace-sample