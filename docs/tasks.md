# Tasks

## Short explaination

Tasks are essentially shell commands that should be executed during various phases of the startup process of your workspace.

## What are tasks and for what do you need them?

Just cloning the repository of your project and starting a few services, isn´t usually enough to get your application running. Some basic tasks would be install the composer/node packages, compile the theme or fill the database with example data. All of that is the purpose of tasks that will be run on various stages of the startup process.

## Example

Below is an example of the tasks we have defined in the `webdev.yml` of the project.

```yaml:line-numbers
tasks:
  services:
    name: Start the active services
    init:
    - webdev services start -d
  install:
    name: Run composer install and setup everything
    onlyMain: false
    create:
    - webdev project install
  info:
    name: Show information about the development environment
    start:
    - WEBDEV_DISABLE_HEADER=1 webdev project-start-summary
```

In this we define three tasks, `services`, `install` and `info`. Each of this tasks consists of a name and some other settings that are relevant to it.

### init

All shell commands that are defined here, will be run before anything else and are being executed on the host. In this example, we have the command `webdev services start -d` defined, which starts all active services from the `docker-compose.yml`. The parameter `-d` just says they will be started in detached mode, so that we don´t output the logs of the containers directly and would prevent our development environment to continue in the starting process.

### create

Similar to `init` we can add any command that should be executed in the `create` stage. This means it will be only executed once when you start a new development environment. So it is perfect for some setup procedurecs like installing composer/install packages or similar things. Once all these commands are executed, a lockfile will be created under `.devcontainer/.createDoneLock`, to prevent them from being executed again. 

### start

The commands under `start` will always be executed when your development environment is started, so in this example we are just showing some infos.

### onlyMain

::: info
This setting is only relevant when you are using multiple workspaces.
:::

When you are using multiple workspaces, we want to prevent that all tasks from all workspaces will be executed. That is where this setting come into play because some tasks should be executed. So when we set the value of this setting to `false` it will still be executed. Mostly you want to use this only for setting up the project like installing necessary packages etc.

To understand it better, here is an example of the tasks we have defined in our main project:

```yaml:line-numbers
tasks:
  services:
    name: Start the active services
    init:
    - webdev services start -d
    - echo "init main project"
  install:
    name: Run composer install and setup everything
    create:
    - webdev project install
    - echo "create main project"
  info:
    name: Show information about the development environment
    start:
    - echo "start main project"
    - WEBDEV_DISABLE_HEADER=1 webdev project-start-summary
  example:
    name: Another example task
    init:
    - echo "another init from main project"
    create:
    - echo "another create from main project"
    start:
    - echo "another init from main project"
```

and here from the second workspace we have added (for example `workspaces/sulu/.devcontainer/webdev.yml`):

```yaml:line-numbers
tasks:
  services:
    name: Start the active services
    init:
    - webdev services start -d
    - echo "init second project"
  install:
    name: Run composer install and setup everything
    onlyMain: false
    create:
    - webdev project install
    - echo "init second project"
  info:
    name: Show information about the development environment
    start:
    - echo "init second project"
    - WEBDEV_DISABLE_HEADER=1 webdev project-start-summary
  example:
    name: Another example task
    onlyMain: false
    start:
    - echo "init from second project"
```

And here is which task will be executed:

init:
- services (from the main project)
- example (from the main project)

create:
- install (from the main project)
- install (from the second project)

start:
- info (from the main project)
- example (from the main project)
- example (from the second project)