# NodeJS <Badge type="info" text="since v0.4.0" />

Within this config sections you can define settings for NodeJS.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
nodejs:
  version: 20.0.0
```

## version <Badge type="info" text="since v0.4.0" />
With this setting the currently active NodeJS version can be defined. If you want to change the version during runtime you can use the `gpt nodejs version` command. It will also list all available version.

```yaml:line-numbers {1}
nodejs:
    version: 20.0.0
```
