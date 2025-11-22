# Secrets

In this section it will be explained on how to define secrets.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers
secrets:
  ComposerSecret:
    missingMessage: Secrets.Missing.Composer
    source:
      key: auth
      group: composer
    target:
      file: auth.json
      expectedSecrets:
        - GitLab
        - Package Repository
  GitlabDockerLoginSecret:
    missingMessage: Secrets.Missing.DockerLogin.Gitlab
    source:
      key: gitlab_docker_login
      group: docker
    target:
      envVar: file
      expectedVars:
        - DOCKER_USERNAME
        - DOCKER_PASSWORD
```

## missingMessage <Badge type="info" text="Since v0.3.2" />

**Is required**: false

When the source file could not be found, an error message will be displayed. Insted of the default error message, which is for the most user not really helpful, you can define a more detailed message with instructions what todo when this secret is missing. More defailed explainations can be found under [secrets](/secrets).

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

## target.file

**Is required**: false

### Description
This defines the file in which the secret should be put within your project.

## target.envVar

**Is required**: false

### Description
The value is not relevant, if this is present, then the secret file will be read and the env vars will be made vailable in the shell.

## target.expectedSecrets <Badge type="info" text="Since v0.3.2" />

**Is required**: false

This only works together with the attribute `missingMessage` to further provide helpful informations for the user to add the secret. It defines a list of secrets that the file should contain, so that workspace can work correctly. More defailed explainations can be found under [secrets](/secrets).

## target.expectedVars <Badge type="info" text="Since v0.3.2" />

**Is required**: false

This only works together with the attribute `missingMessage` to further provide helpful informations for the user to add the secret. It defines a list of environment variables that the file should contain, so that workspace can work correctly. More defailed explainations can be found under [secrets](/secrets).