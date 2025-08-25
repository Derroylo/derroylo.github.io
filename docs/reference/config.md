::: danger
This Documentation is currently being rewritten for WebDev, which is the successor of GPT (for which this docs have been written), as Gitpod Classic will be shutdown in the next few weeks.

The Release of WebDev is currently planned within the first two weeks of september.
:::

# Config <Badge type="info" text="since v0.4.0" />

In this section general config settings will be explained.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
config:
  allowPreReleases: true
```

## allowPreReleases <Badge type="info" text="since v0.4.0" />
If you want to use releases that are not marked yet as stable, you can change this setting to `true` and if available, update to them via `gpt update`.

```yaml:line-numbers {1}
config:
  allowPreReleases: true
```
