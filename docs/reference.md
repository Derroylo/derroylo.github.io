# Reference

::: info
Currently no formatting will be kept while saving the configuration file. This will be fixed in the future.
:::

## PHP
This section contains the settings for php

### version
The version setting contains the currently selected php version. This setting is used by the `gpt php select` command to select a php version.

Example:
```yaml:line-numbers {1}
php:
    version: 7.4
```

### config
The config setting contains the php settings that should be applied. This setting is used by the `gpt php ini set` command to set a php setting.

Example:
```yaml:line-numbers {1}
php:
    config:
        memory_limit: 512M
        max_execution_time: 600
        max_input_vars: 10000
        post_max_size: 512M
```

## Services
This section contains the active services that should be started. This setting is used by the `gpt services start` command to start the selected services.

Example:
```yaml:line-numbers {1}
services:
    active:
        - mysql
        - mailhog
        - redis
        - elasticsearch
        - minio
```