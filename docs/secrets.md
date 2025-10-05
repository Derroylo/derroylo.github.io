# Secrets

## Short explaination

Secrets are mostly data to access something. A simple example could be the login data to a docker registry or tokens to download private composer packages. With this implementation it allows us to define secrets in a central location. So when you setup a project, you don´t need to copy your `auth.json` or docker login data into your project, `WebDev` will take care of it.

## Defining Secrets

Secrets are being defined in the `webdev.yaml` file of your project and might look like this

```yaml:line-numbers
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

In this we define two secrets named `ComposerSecret` and `GitlabDockerLoginSecret`. The first one defines a `auth.json` file that is used to access private compose packages. With the other one we define login data for the docker registry.

## Source

The source defines the `key` and the `group` of the secret we want to fetch. Depending from where the secrets are being fetched, these will have different meaning. So look at the SourceHandler Section to get more informations about it.

## Target

Once we fetched the secrets from the source, the target defines on how to handle that secrets.

### File

When we set the `file` property, then WebDev knows that we want to save it to a file. In this example we write the content of the secret to `auth.json`. The file name is relativ to the project root and can contain of course also folders. So the value `project/src/auth.json` is possible too.

### envVar

The set value is not relevant as the secret itself defines the name and value of the variable. So the secret should be formatted this way:

```
DOCKER_USER=user
DOCKER_PASSWORD=test234
```

So `WebDev` will read each line of the secret and check if it defines a environment variable. These can then be used for example within your tasks, so that he login to the docker registry, before trying to pull the service images.

## SourceHandler

Currently only one `SourceHandler` has been implemented but in the future more might be added.

### Filesystem SourceHandler

This handler loads all secrets from your local filesystem. While it requires that every developer sets their own secrets up for himself, it is the easiest to implement and doesn´t require any central service like a Vault server.

`WebDev` will check if the secret exists as file within the path `~/webdev/secrets`. The key is the name of the file without any extensions and the group defines the subfolder, if it defined. So in the first case `ComposerSecret` the file should be located under the path `~/webdev/secrets/composer/auth.json`. As said before, the file extension is not relevant, so the file could also be named `auth.txt`.