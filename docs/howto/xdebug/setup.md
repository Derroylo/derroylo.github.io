::: danger
This Documentation is currently being rewritten for WebDev, which is the successor of GPT (for which this docs have been written), as Gitpod Classic will be shutdown in the next few weeks.

The Release of WebDev is currently planned within the first two weeks of september.
:::

# Setup Xdebug

Before we can use Xdebug we need to set some config settings so it will work as expected. While we only explain some of the most important settings here, a full list of the different settings can be found [here](https://xdebug.org/docs/all_settings)

## Preperations

Firstly we need to create a file so we can check the Xdebug settings. Create a new file called `xdebug.php` in a folder that can be accessed via your browser and with the following content:
```php:line-numbers {1}
<?php

xdebug_info();
```

The output looks very similar to `phpinfo()` but just contains the specific infos for Xdebug

## xdebug.mode

This setting is the most important one as it enables different features or disables Xdebug completly. Check the menu on the left for an explanation for the different settings.

The easiest way to change this setting is via the command `gpt php xdebug` and then selecting the wished setting.