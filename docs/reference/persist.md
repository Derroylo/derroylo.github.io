# Persist <Badge type="info" text="since v0.5.0" />

::: danger
This command will be available in v0.5.0-alpha.1 and is not yet ready for production.

The documentation is also WIP and not finished yet.
:::

Within this config sections you can define different persist configurations.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
persist:
  vars:
    hello: i am a great test content
  files:
    file:
      file: /home/gitpod/file.txt
      overwrite: false
      method: symlink
    test2:
      file: .persistTest/test.txt
      overwrite: True
      content: SGVsbG8gaSBhbSBhIGdyZWF0IHRlc3QgZm9yIHBlcnNpc3RpbmcgYSBmaWxl
      method: yaml
  folders:
    test:
      folder: /home/gitpod/test
      overwrite: false
      method: symlink
```

## vars <Badge type="info" text="since v0.5.0" />
Define environment variables and their content:

```yaml:line-numbers {1}
persist:
  vars:
    hello: i am a great test content
```

## files <Badge type="info" text="since v0.5.0" />
Define a file with it´s path, it´s content and save method.

```yaml:line-numbers {1}
persist:
    files:
        example:
            file: /home/gitpod/file.txt
            overwrite: false
            method: symlink
```

The name of the entry "example" can be anything and is only relevant for this config file, so you can choose it freely.


The key `file` defines the path to the file and is required.

```yaml:line-numbers {1}
file: /home/gitpod/file.txt
```

The key `overwrite` defines if the file should be overwritten if it already exists.

```yaml:line-numbers {1}
overwrite: True
```

The key `method` defines where the content should be saved.

```yaml:line-numbers {1}
method: symlink
```

The key `var` defines the gitpod environment variable where the content has been saved

```yaml:line-numbers {1}
var: GPT_TEST
```

The key `content` contains the content of the file as base64 encoded

```yaml:line-numbers {1}
content: SGVsbG8gaSBhbSBhIGdyZWF0IHRlc3QgZm9yIHBlcnNpc3RpbmcgYSBmaWxl
```

## folders <Badge type="info" text="since v0.5.0" />
They available settings are the same as for files, except that the key `file` has been replaced with `folder`.