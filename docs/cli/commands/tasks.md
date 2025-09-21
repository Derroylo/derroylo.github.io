# Tasks Commands

With this command you can execute a single tasks or tasks for a specific step.

## Execute all tasks of a specific group

For example these are the tasks that are defined in our `webdev.yml`

```yaml:line-numbers {1}
tasks:
  example1:
    name: Example 1
    init:
    - echo "Example 1 Init"
    create:
    - echo "Example 1 create"
  example2:
    name: Example 2
    init:
    - echo "Example 2 Init"
    create:
    - echo "Example 2 create"
  example3:
    name: Example 3
    init:
    - echo "Example 3 Init"
    start:
    - echo "Example 3 start"
```

When you execute the command `webdev tasks start`, only the *example3* commands under *start* are executed and we would see as output "Example 3 start" in the console.

```json:line-numbers {1}
    "initializeCommand": "... && webdev tasks init --no-header",
	"postStartCommand": "... && webdev tasks start --no-header",
	"postCreateCommand": "... && webdev tasks create --no-header",
```

The groups `init`, `create` and `start` are usually called when the devcontainer is starting and so on. As we can see from the example above, which shows the commands from the `devcontainer.json`.

## Execute one tasks of a specific group

If we take the same example as above, then we can execute with `webdev task example3 --start` the commands defined under `example3 ` => `start` would be executed. If we want to execute the command `echo "Example 3 Init"` then we would need to change the command to `webdev task example3 --init`. The options are `--init`, `--start` and `--create`. All three options can also be used together.