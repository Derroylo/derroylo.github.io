# NodeJS

Within this config sections you can define settings for NodeJS.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
nodejs:
  version: 20.0.0
```

## version
**Is required**: false

**Default value**: *If not defined, latest version of nodejs will be used*

### Description
With this setting the currently active NodeJS version can be defined. If you want to change the version during runtime you can use the `webdev nodejs version` command. It will also list all available version.

### Example
```yaml:line-numbers {1}
nodejs:
    version: 20.0.0
```
