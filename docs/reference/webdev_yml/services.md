# Services

Within this config sections you can define settings for the services.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
services:
  active:
  - traefik
  - mysql
  - mailpit
```

## active

::: info
To be able to use the proxy, so your system is reachable via `shop.example.dev.localhost`, you need to have at least traefik active.
:::

**Is required**: false

**Default value**: *If not defined, no services will be started*

### Description
This section contains the active services that should be started. This setting is used by the `webdev services start` command to start the selected services.

### Example
```yaml:line-numbers {1}
services:
  active:
  - traefik
  - mysql
  - mailpit
```