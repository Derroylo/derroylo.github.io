# Tasks

In this section it will be explained on how to define various tasks

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
tasks:
  settings:
    name: Restore all settings for nodejs, php etc.
    create:
    - webdev restore all
    start:
    - webdev restore all
  install:
    name: Run composer install and setup everything
    onlyMain: false
    create:
    - webdev shopware setup
```

## name
**Is required**: false

### Description
Defines the name of the task, can be left empty.

## onlyMain
**Is required**: false

**Default value**: true

### Description
When set to `false`, this task will only be executed on the main workspace

## init
**Is required**: false

### Description
Define one or more commands that should be executed during the init process of the workspace.

## create
**Is required**: false

### Description
Define one or more commands that should be executed during the create process of the workspace.

## start
**Is required**: false

### Description
Define one or more commands that should be executed during the start process of the workspace.