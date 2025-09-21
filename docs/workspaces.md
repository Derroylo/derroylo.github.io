# Workspaces

## Short explaination

Most projects consist of one workspace, which we call `main`, and cosists of one repository. So our main workspace could be a shopware shop, a symfony app or a sulu cms. Sometimes we don´t have only one repository but our project relies on other projects that need to run in parallel. For example we are working on a VueJS Application that should display content we provide via a headless sulu system. Both projects would be stored in their own repositories. Now when we want to work on our VueJS App, then it is useless when it can´t show anything, so the headless sulu system needs to be running somewhere. WebDev supports that in easy way. Within the ´webdev.yml` config you can define the repo for the sulu system. So when you start your workspace, it will clone that directory, install/setup it and make it avalable under the defined subdomain.

**More detailed explanation coming soon**