# PHP Command

The purpose of the php Command is to change the php version on the fly, change php settings and persist them so that they are available the next time you start the workspace.

## Show the current PHP Version
With the command `gpt php version` you can see the current PHP Version.

![GPT PHP Version](./../../../assets/images/gpt_php_version1.jpg)

## Selecting a PHP Version
::: danger
Since v0.4.0 the command `gpt php select` is no longer available
:::

With the same command as above, `gpt php version`, you can not only see the current active version but also you will get asked if you want to change it. Answer the question with `y` and the following list will be shown:

![GPT PHP Version](./../../../assets/images/gpt_php_version2.jpg)

Use the arrow keys to select the new version and press enter. GPT will now switch to the new version. Additionally it will be saved in the `.gpt.yml` file and will be used the next time you start the workspace.

## Changing a PHP Setting
With the command `gpt php ini set <setting> <value>` you can change a PHP Setting. The setting will be saved in the `.gpt.yml` file and directly applied.

![GPT PHP Version](./../../../assets/images/gpt_php_ini_set1.jpg)

## Restoring PHP Settings
::: info
With release v0.4.0 there is a new command that restores all settings
:::

With the command `gpt php restore` the selected PHP Version and Settings will be restored. This command should be executed within your `.gitpod.yml`. As example, you can see the following `.gitpod.yml` file:

```yaml:line-numbers {1}
tasks:
    - name: Docker Services and Shopware Install
      before: |
        gpt php restore
      init: |
        gpt services start --detached &&
        gp ports await 3306 &&
        gpt shopware install_demo
      command: |
        gp sync-done shopware-install &&
        gpt services start
```

As you can see in line 4, the command `gpt php restore` is executed before we start the services or executing the install script. So make sure to commit changes to `.gpt.yml` if you want to keep the changes persisted.