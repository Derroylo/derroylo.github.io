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

## Examples
Checkout the [Example Repo](https://github.com/Derroylo/devcontainer-examples) to see different examples for Shopware, Oxid, Sulu, Symfony or a simple php project.

## Functions
Coming soon

## Planned functions for future releases
Coming soon

For more information visit [Github issues](https://github.com/Derroylo/webdev-tool/issues) to see what is planned for future versions, report a bug or a feature that you would like to see in a future release.
