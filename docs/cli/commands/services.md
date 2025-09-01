::: warning
Only available in Local mode
:::

# Services Commands

With a docker-compose.yml file you can add services to your current workspace. Usually you would only add services that you currently need for your project. With this command we can add as many services as we want but only start the ones we need and save resources. Espescially if you have services like Elasticsearch that reserves alot of RAM. Also we have the ability to add services that would need the same Port, like MySQL or MariaDB. We can also add different tools for the same purpose like Mailhog, Mailcatcher or Mailpit. One user might prefer Mailhog, another one Mailcatcher. With this command we can add all of them and only start the one we need.

## List services
With the command `webdev services list` you can see all available services and their current status.

![WebDev Services List](./../../../assets/images/gpt_services_list.jpg)

## Select active services
With the command `webdev services select` you can select the services you want to start. The services will be saved in the `webdev.yml` file and will be used the next time you start the workspace.

![WebDev Services Select](./../../../assets/images/gpt_services_select.jpg)

***Note***: You may have noticed that the services are split into different categories, this done via a lable in the `docker-compose.yml` file. The label is called `com.webdev.category` and an example can be seen [here]()

You can select/deselect the services you want to set active with the spacebar. After you have selected the services you want to start, you can press enter to save the selection. The selected services will be saved in the `webdev.yml` file and will be used the next time you start the workspace.

## Start services
With the command `webdev services start` you can start the selected services. The services can be started in the foreground or in the background. If you want to start the services in the background you can use the option `--detached`. This means that you can close the terminal and the services will still be running. Otherwise the services will be started in the foreground and you can see the logs of the services.

## Stop services
With the command `webdev services stop` you can stop the selected services.