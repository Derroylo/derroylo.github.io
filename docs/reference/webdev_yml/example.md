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
tests:
  lint:
    name: Run php-cs-fixer and phpstan
    tests:
    - phpcsfixer
    - phpstan
  phpcsfixer:
    name: Run php-cs-fixer
    commands:
    - php vendor/bin/php-cs-fixer fix --config=.php-cs-fixer.dist.php -vvv --dry-run --diff --using-cache=no
  phpcsfixer-fix:
    name: Run php-cs-fixer fix
    commands:
    - php vendor/bin/php-cs-fixer fix --config=.php-cs-fixer.dist.php -vvv --diff --using-cache=no
  phpstan:
    name: Run phpstan
    commands:
    - php -d memory_limit=1G vendor/bin/phpstan analyze -c phpstan.dist.neon
  phpstan-baseline:
    name: Generate phpstan baseline
    commands:
    - php -d memory_limit=1G vendor/bin/phpstan analyze -c phpstan.dist.neon --generate-baseline
  phpunit:
    name: Run phpunit
    commands:
    - php vendor/bin/phpunit --testdox --colors
  coverage:
    name: Run phpunit with coverage
    commands:
    - XDEBUG_MODE=coverage php vendor/bin/phpunit --coverage-html coverage
workspaces:
  main:
    subDomains:
    - test1
    - test2
  cms:
    name: Test workspace
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