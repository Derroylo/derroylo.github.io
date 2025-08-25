::: danger
This Documentation is currently being rewritten for WebDev, which is the successor of GPT (for which this docs have been written), as Gitpod Classic will be shutdown in the next few weeks.

The Release of WebDev is currently planned within the first two weeks of september.
:::

# xdebug.mode = profile

::: info
This will be extended soon with some examples on which tools to use to analyze the profiler output etc.
:::

Some frameworks like Symfony have a little Profiler already included that shows some basic informations on what functions have been called in which order, how long they took to execute and how high the memory consumption has been. Most of the times these infos are enough to find the bottleneck in the application but if we need more data to profile out application this setting is the best way todo it. It will collect all available data and write them into a file which then can be opened by external tools.

Enable this mode only if you want to collect these data as collecting and writing the data into the file can take a few minutes per page call.

The [official documentation](https://xdebug.org/docs/profiler) gives some more details about which additional settings can be set.