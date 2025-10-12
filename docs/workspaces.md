# Workspaces

## Short explaination

Most projects consist of one workspace, which we call `main`, and cosists of one repository. So our main workspace could be a shopware shop, a symfony app or a sulu cms. Sometimes we don´t have only one repository but our project relies on other projects that need to run in parallel. For example we are working on a VueJS Application that should display content we provide via a headless sulu system. Both projects would be stored in their own repositories. Now when we want to work on our VueJS App, then it is useless when it can´t show anything, so the headless sulu system needs to be running somewhere. WebDev supports that in easy way. Within the ´webdev.yml` config you can define the repo for the sulu system. So when you start your workspace, it will clone that directory, install/setup it and make it avalable under the defined subdomain.

## Main workspace

The workspace with the key `main` is a bit special, since it is the workspace you are mostly working it and in some cases you need to change some settings for it. Currently only two settings are available.

First is the document root for the webserver. This is the folder that contains the entrypoint for your application. In most modern applications that is the `public` folder, that is why it is the default value. But some application require another folder, so you can adjust it to your needs. After changing this value, you need to restart the devcontainer.

Some applications use subdomains to handle multi-tenant or multi-language systems. That is why you can add also more subdomains to your main workspace.

```yaml:line-numbers
workspace:
    main:
        docRoot: src/public
        subComains:
            - de.myproject.dev.localhost
            - en.myproject.dev.localhost
            - fr.myproject.dev.localhost
```

## Add more workspaces

To add another workspace to your development environment you need add a new entry under the `workspaces` key in your `webdev.yml`.

A basic version could look like this:

```yaml:line-numbers
workspace:
    sulu:
        name: Sulu workspace
        repository: https://github.com/Derroylo/sulu-project.git
        subDomains:
        - sulu
```

With these few lines we have defined that another workspace with the name "sulu" should be added. We have given it a name, told WebDev where he can find the repository for it and that it should be made available under the subdomain `sulu.myproject.dev.localhost`. 

When starting a development environment, then WebDev will clone the given Repo into the subfolder `workspaces/<key of the workspace>/`. In this case this would `workspaces/sulu/`. Afterwards it will check if the file `workspaces/sulu/.devcontainer/webdev.yml` exists. If it is the case, then it will execute the tasks within. Check the [tasks documentation](/tasks) to learn more about on how to define the tasks.

There are some more settings available. Checkout the [webdev.yml Reference](/reference/webdev_yml/workspaces) to see them all and what they do.