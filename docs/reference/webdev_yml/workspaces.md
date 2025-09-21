# Workspaces

In this section it will be explained on how to define workspaces.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
workspaces:
  main:
    subDomains:
    - test1
    - test2
  cms:
    name: Test worspace
    description: This is a test workspace for webdev
    repository: https://github.com/Derroylo/webdev-tool.git
    branch: main
    folder: cms
    docRoot: public
    mode: vhost
    subDomains:
      - cms
      - sulu
    disableWeb: false
```

## main

The workspace called `main` is your main project that you are working on. If you use that key, then only the `subDomains` and `docRoot` part will be used and all other settings will be ignored.

## name
**Is required**: false

### Description
Defines the name of the workspace, can be left empty.

## description
**Is required**: false

### Description
Describe the use of this workspace, can be left empty.

## repository
**Is required**: false

### Description
If this value has been set to a valid repository URL. then `wedev` will clone the repo into the defined workspace folder.

## folder
**Is required**: false

**Default value**: `key of this workspace`

### Description
Defines in which subfolder the repository will be cloned into.

## repository
**Is required**: false

**Default value**: public

### Description
Change this value to use a different docroot for your workspace application

## mode
**Is required**: false

**Default value**: vhost

### Description
This setting currently supports `vhost` as setting, this might change in future versions.

## mode
**Is required**: false

### Description
Define under which subdomains your applications should be reachable, when using traefik as proxy.

## disableWeb
**Is required**: false

### Description
With this setting you can disable that this workspace should be served via apache. This could be the case when serving your app via a node server.