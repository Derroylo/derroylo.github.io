# Shell scripts

This tool can be extended via shell scripts, as described in the documentation. In this section these can be configured

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
shellScripts:
  additionalDirectories:
  - scripts
```

## additionalDirectories 

**Is required**: false

**Default value**:  *If not defined, only the directory .devcontainer/scripts will be scanned for shell scripts*

### Description
You can define one or multiple directories that gpt will search through for shell scripts 

### Example
```yaml:line-numbers {1}
shellScripts:
  additionalDirectories:
  - scripts2
```
