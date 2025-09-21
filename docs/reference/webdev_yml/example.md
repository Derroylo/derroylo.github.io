# Full example for webdev.yml

This file contains the configuration for your workspace. For a more in detail description, check the menu on the left and select the section you want more informations about.


```yaml:line-numbers {1}
config:
  allowPreReleases: true
  workspaceFolder: workspaces
  proxy:
    domain: dev.localhost
    subDomain: example
php:
  version: 8.1
  config:
    opcache.enable: off
    xdebug.mode: off
    xdebug.start_with_request: yes
  configWeb:
    memory_limit: 512M
  configCLI:
    max_execution_time: 0
    memory_limit: -1
  packages:
  - php-soap
nodejs:
  version: 20.0.0
services:
  active:
  - traefik
  - mysql
  - mailpit
shellScripts:
  additionalDirectories:
  - scripts
tasks:
  services:
    name: Start the active services
    init:
    - webdev services start -d
  settings:
    name: Restore all settings for nodejs, php etc.
    create:
    - webdev restore all
    start:
    - webdev restore all
  install:
    name: Run composer install and setup everything
    onlyMain: false
    create:
    - webdev shopware setup
  apache:
    name: Start apache
    start:
    - apachectl start
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
workspaces:
  main:
    subDomains:
    - test1
    - test2
  cms:
    name: Test worspace
    description: This is a test workspace for webdev
    repository: https://github.com/Derroylo/webdev-tool.git
    branch: main
    folder: cms
    docRoot: public
    mode: vhost
    subDomains:
      - cms
      - sulu
    disableWeb: false
```