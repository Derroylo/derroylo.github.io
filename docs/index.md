# What is Webdev?
WebDev is a local web development environment tool that extends the abilities of DevContainer.

## What are DevContainer?
DevContainer is a specification to create container based development environments. Thank to many IDE integrations, we can also declare which extensions should be installed.

## What are the advantages of the DevContainer specifications?
The specifications is a simple json file that defines which container it should start, which commands should be executed on create, start etc. or which extensions should be installed in the IDE.

The specification can be found [here](https://containers.dev/implementors/spec/).

Another advantage is that many IDE´s support DevContainer out of the box, like VS Code, Cursor, Windsurf etc. So you just need to open your project within that IDE, you will get a notification that asks you if you want to open the project with DevContainer and that is all you need to do.

::: info
PhpStorm can also be used directly with DevContainer but it is recommended to start the DevContainer seperat and then just open the project folder. The IDE Installation within the docker container takes a bit of time, since it downloads and installs over one gigabyte.
:::

## Why do i need a separate tool?
You could use a devcontainer setup, or a simple docker-compose, without any external tools of course, but these tools make the development environment easier to use and more flexible. In fact most development environments include such a tool. For example dockware (which is a devEnv specific for shopware) has a makefile to change php versions or to install a specific shopware version. So, while a little makefile can be used for simpler tasks, a CLI Tool is "necessary" when you want to provide more functionality to the developer. Other, more flexible, developer environments bring their own CLI with them, for example DDEV or Lando.

That being said, the next section shows some examples on what WebDev adds as functionality to the DevContainer setup. Checkout the [CLI](./cli) page to see all available commands.

## Functions
- Changing the php/node version with a simple command
- Defining tasks that can be executed during setup of the devEnv, for example installing composer packages, compiling theme etc.
- Handling of secrets like auth.json for composer or login data for a container registry, can be easily integrated without the user needing to enter them manually all the time.
- No need to know all the different shell scripts by name and which arguments they have, they can all be made available via the cli with a description. So you only need to run webdev to see all available scripts and execute them.
- Using multiple repositories within one devEnv. Many modern application consists of different repositories that work together for one system, like a js application that shows data from multiple sources like a cms and a custom application.
- Defining additional services, like mailhog, pma or phpcacheadmin, that should be started. What services will be started can also depend on the current environment. For example in a production env you could need elasticsearch and redis, or in a test env you need a headless chrome running but they are not needed during development. So depending on the env, different services can be started.
- A configuration file to define all necessary versions of php/node, which extensions and settings should be applied to it without having to use different base images or having to manually install them.
- Enabling/Disabling Xdebug and selecting in which mode it should be started

## Examples
Checkout the [Example Repo](https://github.com/Derroylo/devcontainer-examples) to see different examples for Shopware, Oxid, Sulu, Symfony or a simple php project.

## Planned functions for future releases
Coming soon

For more information visit [Github issues](https://github.com/Derroylo/webdev-tool/issues) to see what is planned for future versions, report a bug or a feature that you would like to see in a future release.
