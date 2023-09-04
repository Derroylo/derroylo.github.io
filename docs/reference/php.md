# PHP

Within this config section all settings related to be PHP can be defined.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
php:
  version: 8.2
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
```

### version
With this setting the currently active PHP version can be defined. If you want to change the version during runtime you can use the `gpt php version` command. It will also list all available version.

Example:
```yaml:line-numbers {1}
php:
    version: 8.2
```

### config
Under this config setting we can define the "global" settings for php, which means if they are not overwritten by `configWeb` or `configCLI`, these settings will be applied. Changing a setting and applying it to the current workspace can be done via the `gpt php ini set` command.

Example:
```yaml:line-numbers {1}
php:
    config:
        memory_limit: 512M
        max_execution_time: 600
        max_input_vars: 10000
        post_max_size: 512M
```

### configWeb <Badge type="info" text="since v0.4.0" />
If you want to change the settings specific for the webserver, then put these settings in this section.

Example:
```yaml:line-numbers {1}
php:
    configWeb:
        memory_limit: 1G
```

### configCLI <Badge type="info" text="since v0.4.0" />
If you want to change the settings specific for CLI, then put these settings in this section.

Example:
```yaml:line-numbers {1}
php:
    configCLI:
        xdebug.mode: off
        max_execution_time: 0
        memory_limit: 0
```

### packages <Badge type="info" text="since v0.4.0" />
If you want to install additional packages, you can add them here and they will be installed via the `gpt restore php` command.

Example:
```yaml:line-numbers {1}
php:
  packages:
  - php8.0-curl
  - php8.0-zip
```