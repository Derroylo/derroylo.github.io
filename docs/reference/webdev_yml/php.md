# PHP

Within this config section all settings related to be PHP can be defined.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
php:
  version: 8.1
  config:
    opcache.enable: off
    xdebug.mode: off
    xdebug.start_with_request: yes
  configWeb:
    memory_limit: 512M
  configCLI:
    max_execution_time: 0
    memory_limit: -1
  packages:
  - php-soap
```

## version

**Is required**: false

**Default value**: *If not defined, it will always use the latest version installed in the container*

### Description
With this setting the currently active PHP version can be defined. If you want to change the version during runtime you can use the `webdev php version` command. It will also list all available versions.

### Example
```yaml:line-numbers {1}
php:
    version: 8.1
```

## config

**Is required**: false

**Default value**: *If not defined, it will use the default php settings*

### Description
Under this config setting we can define the "global" settings for php, which means if they are not overwritten by `configWeb` or `configCLI`, these settings will be applied. Changing a setting and applying it to the current workspace can be done via the `webdev php ini set` command.

### Example
```yaml:line-numbers {1}
php:
  config:
    opcache.enable: off
    xdebug.mode: off
    xdebug.start_with_request: yes
```

## configWeb
**Is required**: false

**Default value**: *If not defined, it will use the default php settings*

### Description
If you want to change the settings specific for the webserver, then put these settings in this section.

### Example
```yaml:line-numbers {1}
php:
  configWeb:
    memory_limit: 512M
```

## configCLI
**Is required**: false

**Default value**: *If not defined, it will use the default php settings*

### Description
If you want to change the settings specific for CLI, then put these settings in this section.

### Example
```yaml:line-numbers {1}
php:
  configCLI:
    max_execution_time: 0
    memory_limit: -1
```

## packages
**Is required**: false

**Default value**: *If not defined, no additional packages will be installed*

### Description
If you want to install additional packages, you can add them here and they will be installed via the `webdev restore php` command.

Example:
```yaml:line-numbers {1}
php:
  packages:
  - php-soap
```