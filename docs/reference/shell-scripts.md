# Shell scripts <Badge type="info" text="since v0.4.0" />

This tool can be extended via shell scripts, as described in the documentation. In this section these can be configured

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
shellScripts:
  additionalDirectories:
  - .devEnv/gitpod/scripts2
```

## additionalDirectories <Badge type="info" text="since v0.4.0" />
You can define one or multiple directories that gpt will search through for shell scripts 

```yaml:line-numbers {1}
shellScripts:
  additionalDirectories:
  - .devEnv/gitpod/scripts2
```
