# Secrets

In this section it will be explained on how to define secrets.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers {1}
secrets:
  ComposerSecret:
    source:
      key: auth
      group: composer
    target:
      file: auth.json
  GitlabDockerLoginSecret:
    source:
      key: gitlab_docker_login
      group: docker
    target:
      envVar: file
```

## source

The source part defines on where the secret can be obtained from

## source.key

**Is required**: true

### Description
The key defines from which file the secret will be loaded from. So if the key is `auth` then webdev will try to look for a file that starts with `auth`. So valid filenames would be `auth.json` etc. 

## source.group

**Is required**: false

### Description
The groupd defines the sub folder in which `webdev` will look for the file defined with `source.key`

## target

When `wedev` was able to find the secret, then we define in this part on how to handle this secret. Either `file` or `envVar` needs to be defined.

## source.file

**Is required**: false

### Description
This defines the file in which the secret should be put within your project.

## source.envVar

**Is required**: false

### Description
The value is not relevant, if this is present, then the secret file will be read and the env vars will be made vailable in the shell.