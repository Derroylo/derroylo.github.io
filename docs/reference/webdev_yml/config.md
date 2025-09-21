# Config

In this section general config settings will be explained.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
config:
  allowPreReleases: true
  workspaceFolder: workspaces
  proxy:
    domain: dev.localhost
    subDomain: example
```

## allowPreReleases

**Is required**: false

**Default value**: false

### Description
If you want to use releases that are not marked yet as stable, you can change this setting to `true` and if available, update to them via `webdev update`.

### Example
```yaml:line-numbers {1}
config:
  allowPreReleases: true
```

## workspaceFolder

**Is required**: false

**Default value**: workspaces

### Description
Our development environment can contain more then one workspace (or in other words, can contain more then one project), with this option you define in which folder the tool will look for additional workspaces

### Example
```yaml:line-numbers {1}
config:
  workspaceFolder: workspaces
```

## proxy.domain

**Is required**: false

**Default value**: dev.localhost

### Description
This is the default domain for our development environment that WebDev uses to create the domains for traefik. So for example we have service defined that has a subdomain set for `mailpit`, then this will result in `mailpit.dev.localhost`, or whatever value you have set the domain to.

### Example
```yaml:line-numbers {1}
config:
  proxy:
    domain: dev.localhost
```

## proxy.subdomain

**Is required**: false

**Default value**: devcontainer

### Description
This is the default subdomain for our workspace. So when you open your browser, you can reach the system via `shop.dev.localhost` or `www.shop.dev.localhost` (The www subdomain will always be created by the tool).

### Example
```yaml:line-numbers {1}
config:
  proxy:
    domain: shop
```