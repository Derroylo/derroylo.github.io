# Tests <Badge type="info" text="Since v0.3.2" />

In this section it will be explained on how to define tests.

The following example shows all settings that can be set and which will be explained on this page:

```yaml:line-numbers
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
  phpstan:
    name: Run phpstan
    commands:
    - php -d memory_limit=1G vendor/bin/phpstan analyze -c phpstan.dist.neon
```

## name <Badge type="info" text="Since v0.3.2" />

**Is required**: true

Defines the name of the Test.

## commands <Badge type="info" text="Since v0.3.2" />

**Is required**: false

Define the commands that should be executed for this test.

## tests <Badge type="info" text="Since v0.3.2" />

**Is required**: false

Contains a list of existing test entries that should be executed on after another.

## image <Badge type="info" text="Since v0.3.2" />

**Is required**: false

Defines the image that should used to run these commands. The default value is one of this images: [PHP-CLI-Alpine](https://github.com/Derroylo/docker-images/pkgs/container/docker-images%2Fphp-alpine). The selected PHP-Version is the currently set php-version in the webdev.yml.