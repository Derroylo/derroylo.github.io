# Services

Within this config sections you can define settings for the services.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
services:
    file: gitpod.docker-compose.yml
    active:
        - mysql
        - mailhog
        - redis
        - elasticsearch
        - minio
```

## file <Badge type="info" text="since v0.4.0" />
In some cases it can happen that you have already a docker-compose.yml in your project but need a separate file for your gitpod services. You can now tell gpt to use another filename instead of the default docker-compose.yml.

```yaml:line-numbers {1}
services:
    file: gitpod.docker-compose.yml
```

## active
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